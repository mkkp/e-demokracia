import { Card, type Theme, alpha } from '@mui/material';
import type { BundleContext } from '@pandino/pandino-api';
import { SUB_THEME_HOOK_INTERFACE_KEY, type SubThemeHook } from '~/theme/SubThemeWrapper';

import { color, fontSize } from '@mui/system';
import issuePng from '~/custom/assets/images/issue.png';

/**
 * Sub Theme Name: issuecard
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerIssuecardSubThemeHook(context: BundleContext) {
  context.registerService<SubThemeHook>(SUB_THEME_HOOK_INTERFACE_KEY, issuecardSubTheme, {
    name: 'issueCard',
  });
}

const issuecardSubTheme = (parentTheme: Theme, data?: any) => {
  // You can calculate styling variables here, or use other hooks as well.

  return {
    components: {
      // Define component styling for components here, e.g.:
      MuiCard: {
        styleOverrides: {
          root: {
            background: alpha(parentTheme.palette.warning.light, 0.04),
            // backgroundImage: `url(${issuePng})`,
          },
        },
      },
      // MuiPaper: {
      //   styleOverrides: {
      //     root: {
      //     },
      //     Card: {
      //       backgroundImage: `url(${issuePng})`,
      //       height: '100%',
      //       display: 'flex',
      //       flexDirection: 'column',
      //       justifyContent: 'space-between',
      //     }
      //   },
      // },
      // MuiCard: {
      //   styleOverrides: {
      //     fontSize: '40px',
      //     color: '#6e7383',
      //     backgroundImage: `url(${issuePng})`,
      //     height: '100%',
      //     display: 'flex',
      //     flexDirection: 'column',
      //     justifyContent: 'space-between',
      //   }
      // }
    },
  };
};
