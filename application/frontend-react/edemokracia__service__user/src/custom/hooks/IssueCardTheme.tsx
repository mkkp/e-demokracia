import { type Theme, alpha } from '@mui/material';
import type { BundleContext } from '@pandino/pandino-api';
import { SUB_THEME_HOOK_INTERFACE_KEY, type SubThemeHook } from '~/theme/SubThemeWrapper';

/**
 * Sub Theme Name: issueCard
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerIssueCardSubThemeHook(context: BundleContext) {
  context.registerService<SubThemeHook>(SUB_THEME_HOOK_INTERFACE_KEY, nestedSubTheme, {
    name: 'issueCard',
  });
}

const nestedSubTheme = (parentTheme: Theme, data?: any) => {
  // You can calculate styling variables here, or use other hooks as well.

  return {
    components: {
      // Define component styling for components here, e.g.:
      MuiPaper: {
        styleOverrides: {
          root: {
            background: alpha(parentTheme.palette.secondary.main, 0.97),
            color: parentTheme.palette.common.white,
          },
        },
      },
    },
  };
};
