import { createHash } from 'node:crypto';
import { cwd } from 'node:process';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { parse } from '@babel/parser';
import { importSpecifier, identifier } from '@babel/types';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import { build } from 'esbuild';

function rollupPluginEsmer(opts = {}) {
  const { enabled, root, cachePath, targetPath, filesPattern, localImportPattern, excludeAssetPattern } = {
    enabled: true,
    root: join(cwd(), 'src'),
    cachePath: join(cwd(), 'node_modules', '.esmer', 'cache'),
    targetPath: join(cwd(), 'dist', 'assets'),
    filesPattern: /.*(?<!\.test|\.spec)\.(js|ts|jsx|tsx|mjs|mts|cjs|cts)$/,
    localImportPattern: /^(\.|\/|~)/,
    excludeAssetPattern: /.*(css|scss|svg|json|ttf|woff|woff2|eot)$/,
    ...opts,
  };
  const imports = {};
  let hash;

  if (!enabled) {
    return {
      name: 'esmer',
    };
  }

  return {
    name: 'esmer',
    async options(options) {
      processFilesRecursively(root, filesPattern, (entryPath, code) => {
        if (!excludeAssetPattern.test(entryPath)) {
          const ast = parse(code, {
            sourceType: 'module',
            plugins: ['jsx', 'typescript'],
          });

          traverse.default(ast, {
            ImportDeclaration(path) {
              // We don't care about type imports since they are removed in JS
              if (path.node.importKind !== 'type') {
                const importPath = path.node.source.value;
                const importSpecifiers = path.node.specifiers.map(specifier => ({
                  specifier: specifier.type === 'ImportDefaultSpecifier' ? specifier.local.name : specifier.imported.name,
                  isDefaultSpecifier: specifier.type === 'ImportDefaultSpecifier',
                }));

                if (importPath && !localImportPattern.test(importPath) && !excludeAssetPattern.test(importPath)) {
                  if (!imports[importPath]) {
                    imports[importPath] = [];
                  }

                  for (const spec of importSpecifiers) {
                    if (!imports[importPath].find(s => s.specifier === spec.specifier && s.isDefaultSpecifier === spec.isDefaultSpecifier)) {
                      imports[importPath].push({
                        ...spec,
                        alias: keyToAlias(spec.specifier, importPath),
                      });
                    }
                  }
                }
              }
            },
          });
        }
      });

      // The jsx-runtime is a special beast, needs explicit handling, if the project has React
      if (Object.keys(imports).includes('react')) {
        imports['react/jsx-runtime'] = [
          { specifier: 'Fragment', isDefaultSpecifier: false, alias: keyToAlias('Fragment', 'react/jsx-runtime') },
          { specifier: 'jsx', isDefaultSpecifier: false, alias: keyToAlias('jsx', 'react/jsx-runtime') },
          { specifier: 'jsxs', isDefaultSpecifier: false, alias: keyToAlias('jsxs', 'react/jsx-runtime') },
        ];
      }

      // Keep potential existing exports, and add our own
      options.external = [
        ...(options.external || []),
        ...Array.from(Object.keys(imports)),
      ];

      // The minifyInternalExports parameter HAS TO BE FALSE so that external lib tokens are not minified
      options.output = {
        ...options.output,
        minifyInternalExports: false,
      };

      hash = hashText(JSON.stringify(imports, null, 4));

      return options;
    },
    async generateBundle(options, bundle) {
      // We are only modifying the generated bundle code, because we only want to modify output code, not the intermediate
      // transform steps.
      const cachedFile = join(cachePath, vendorFileName(hash));
      const targetFile = join(targetPath, vendorFileName(hash));
      await generateVendor(imports, hash, cachedFile, targetFile);

      // Go through every chuck in our bundle
      for (const id in bundle) {
        // Skip files which do not need processing
        if (!filesPattern.test(id)) {
          continue;
        }

        const chunkData = bundle[id];

        const ast = parse(chunkData.code, {
          sourceType: 'module',
          plugins: ['jsx', 'typescript'],
        });

        // Remove all import declarations which do not have any specifiers in them (to prevent bare import generation)
        const astImportsToRemove = ast.program.body.filter(n => n.type === 'ImportDeclaration' && Array.isArray(n.specifiers) && n.specifiers.length === 0);

        for (const imp of astImportsToRemove) {
          const idx = ast.program.body.findIndex(n => n === imp);
          if (idx > -1) {
            ast.program.body.splice(idx, 1);
          }
        }

        const paths = Object.keys(imports);

        // Overwrite import declarations in our chunk:
        // - use our specifier names
        // - source value should always be the relative path of the hashed vendor file
        traverse.default(ast, {
          ImportDeclaration(path) {
            const sourceValue = path.node.source.value;
            if (paths.includes(sourceValue)) {
              const specs = imports[sourceValue];
              const specsLength = path.node.specifiers.length;
              for (let specIdx = 0; specIdx < specsLength; specIdx++) {
                const specifier = path.node.specifiers[specIdx];
                if (specifier.type === 'ImportDefaultSpecifier') {
                    const ourSpec = specs.find(s => s.isDefaultSpecifier);
                    if (ourSpec) {
                      path.node.specifiers[specIdx] = importSpecifier(identifier(specifier.local.name), identifier(ourSpec.alias));
                      path.node.source.value = `./vendor-${hash}.js`;
                    }
                } else {
                  const ourSpec = specs.find(s => s.specifier === specifier.imported.name);
                  if (ourSpec) {
                    specifier.imported.name = ourSpec.alias;
                    path.node.source.value = `./vendor-${hash}.js`;
                  }
                }
              }
            }
          },
        });

        // Generate transformed code
        const transformed = generate.default(ast, {
          ast: true,
          code: false,
          configFile: false,
        });

        // Replace the bundle code with the transformed one
        chunkData.code = transformed.code;

        if (chunkData.map) {
          chunkData.map = transformed.map;
        }
      }
    },
  };
}

function vendorFileName(hash) {
  return `vendor-${hash}.js`;
}

function writeCode(targetFile, code) {
  const targetPath = dirname(targetFile);
  if (!existsSync(targetPath)) {
    mkdirSync(targetPath, { recursive: true });
  }
  writeFileSync(targetFile, code, { encoding: 'utf-8' });
}

async function generateVendor(imports, hash, cachedFile, targetFile) {
  if (existsSync(cachedFile)) {
    const code = readFileSync(cachedFile).toString('utf-8');
    writeCode(targetFile, code);
    return;
  }

  const code = await buildThirdParties(imports, hash);

  writeCode(targetFile, code);
  writeCode(cachedFile, code);
}

function processFilesRecursively(folderPath, regexPattern, callback) {
  try {
    const entries = readdirSync(folderPath);

    for (const entry of entries) {
      const entryPath = join(folderPath, entry);
      const stat = statSync(entryPath);

      if (stat.isDirectory()) {
        processFilesRecursively(entryPath, regexPattern, callback);
      } else if (stat.isFile() && regexPattern.test(entry)) {
        const fileContent = readFileSync(entryPath, 'utf-8');
        callback(entryPath, fileContent);
      }
    }
  } catch (error) {
    console.error('Error occurred while processing files:', error);
  }
}

async function buildThirdParties(imports, hash) {
  let code = '';
  for (const key in imports) {
    const contents = imports[key];
    const defaultExport = contents.find(c => c.isDefaultSpecifier);
    const exportsList = contents.filter(c => !c.isDefaultSpecifier) || [];
    code += `import ${defaultExport ? `${keyToAlias(defaultExport.specifier, key)} ` : ''}${defaultExport && exportsList.length ? ', ' : ''}${exportsList.length ? '{' : ''} ${exportsList.map(e => `${e.specifier} as ${keyToAlias(e.specifier, key)}`).join(', ')}${exportsList.length ? ' }' : ''} from '${key}';`;
  }
  code += 'export {';
  for (const key in imports) {
    const contents = imports[key];
    const defaultExport = contents.find(c => c.isDefaultSpecifier);
    const exportsList = contents.filter(c => !c.isDefaultSpecifier) || [];
    code += `${defaultExport ? `${keyToAlias(defaultExport.specifier, key)} ` : ''}${defaultExport && exportsList.length ? ', ' : ''}${exportsList.map(e => keyToAlias(e.specifier, key)).join(', ')},`;
  }
  code += '};';
  return buildBundle(code, hash);
}

function keyToAlias(key, path) {
  return path.replaceAll(/[@\/-]/g, '__') + '__' + key;
}

async function buildBundle(code, hash) {
  const result = await build({
    format: 'esm',
    bundle: true,
    write: false,
    platform: 'browser',
    minify: true,
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    stdin: {
      contents: code,
      resolveDir: cwd(),
      sourcefile: 'virtual-vendors.js', // Only in-memory file, not persisted
    },
  });

  return result.outputFiles[0].text;
}

function hashText(content, algo = 'md5') {
  const hashFunc = createHash(algo);
  hashFunc.update(content);
  return hashFunc.digest('hex');
}

export default rollupPluginEsmer;
