import '@mdxeditor/editor/style.css';
import { MDXEditor, headingsPlugin } from '@mdxeditor/editor';
import { BundleContext } from '@pandino/pandino-api';
import { ServiceIssueIssue_View_EditActionDefinitions } from '~/containers/Service/Issue/Issue_View_Edit/types';
import { AttributeBasedProxyProps, GenericProxyProps } from '~/custom/interfaces';
import { ServiceIssueStored } from '~/services/data-api/model/ServiceIssue';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '../custom-element-types';

// export class DefaultApplicationCustomizer implements ApplicationCustomizer {
//   async customize(context: BundleContext): Promise<void> {
//     context.registerService(CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, FancyText, {
//       componentImplementation: 'FancyText',
//     });
//   }
// }

// export function registerServiceConCon_View_EditConsComponentCardsContainerConfig(context: BundleContext) {
//   context.registerService<ServiceConCon_View_EditConsComponentCardsContainerConfigHook>(
//     CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY,
//     serviceConCon_View_EditConsComponentCardsContainerConfig,
//   );
// }

export function registerServiceIssueIssueRichTextEditorConfig(context: BundleContext) {
  context.registerService(CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, IssueRichText, {
    componentImplementation: 'RichText',
  });
}

const IssueRichText = ({
  data,
  storeDiff,
  annotations,
  boundAttributeName,
}: GenericProxyProps<ServiceIssueStored, ServiceIssueIssue_View_EditActionDefinitions> &
  AttributeBasedProxyProps<ServiceIssueStored>) => {
  return (
    <>
      <p>
        {boundAttributeName} :: {JSON.stringify(annotations)}
      </p>
      <textarea
        style={{ width: '100%', color: 'pink' }}
        rows={4}
        name={'ohSoFancy'}
        value={data[boundAttributeName] as string}
        onChange={(evt) => storeDiff(boundAttributeName, evt.target.value)}
      />
    </>
  );
};

interface IssueRichTextEdotorProps {
  issue: ServiceIssueStored;
}

function App() {
  return <MDXEditor markdown={'# Hello World'} plugins={[headingsPlugin()]} />;
}
