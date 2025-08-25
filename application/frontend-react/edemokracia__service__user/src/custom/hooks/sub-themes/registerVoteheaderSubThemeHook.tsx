import { type Theme, alpha } from '@mui/material';
import type { BundleContext } from '@pandino/pandino-api';
import { SUB_THEME_HOOK_INTERFACE_KEY, type SubThemeHook } from '~/theme/SubThemeWrapper';

/**
 * Sub Theme Name: voteheader
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerVoteheaderSubThemeHook(context: BundleContext) {
  context.registerService<SubThemeHook>(SUB_THEME_HOOK_INTERFACE_KEY, voteheaderSubTheme, {
    name: 'voteHeader',
  });
}

const voteheaderSubTheme = (parentTheme: Theme, data?: any) => {
  // You can calculate styling variables here, or use other hooks as well.

  return {
    components: {
      // Define component styling for components here, e.g.:
      MuiCard: {
        styleOverrides: {
          root: {
            //background: alpha(parentTheme.palette.warning.light, 0.04),
            // backgroundImage: `url(${issuePng})`,
            border: `12px dashed ${parentTheme.palette.warning}`,
            background: `linear-gradient(180deg, transparent 0%,${parentTheme.palette.info.light} 1300%)`,
          },
        },
      },
    },
  };
};
