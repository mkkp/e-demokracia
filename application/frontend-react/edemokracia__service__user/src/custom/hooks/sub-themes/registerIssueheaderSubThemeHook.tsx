import { type Theme, alpha } from '@mui/material';
import type { BundleContext } from '@pandino/pandino-api';
import metaPng from '~/custom/assets/images/meta.png';
import { SUB_THEME_HOOK_INTERFACE_KEY, type SubThemeHook } from '~/theme/SubThemeWrapper';

/**
 * Sub Theme Name: issueheader
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerIssueheaderSubThemeHook(context: BundleContext) {
  context.registerService<SubThemeHook>(SUB_THEME_HOOK_INTERFACE_KEY, issueheaderSubTheme, {
    name: 'issueHeader',
  });
}

const issueheaderSubTheme = (parentTheme: Theme, data?: any) => {
  // You can calculate styling variables here, or use other hooks as well.

  return {
    components: {
      // Define component styling for components here, e.g.:
      MuiCard: {
        styleOverrides: {
          root: {
            //background: alpha(parentTheme.palette.info.light, 0.04),
            //            color: parentTheme.palette.common.white,
            //            backgroundImage: `url(${metaPng})`,
            background: `linear-gradient(180deg, transparent 0%,${parentTheme.palette.warning.light} 1300%)`,
          },
        },
      },
    },
  };
};
