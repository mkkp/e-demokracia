//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/theme/index.ts'
// Template name: actor/src/theme/index.ts
// Template file: actor/src/theme/index.ts.hbs

import { alpha, createTheme } from '@mui/material';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { huHU as huHUForMaterial } from '@mui/material/locale';
import { huHU as huHUForGrids } from '@mui/x-data-grid';
import { huHU as huHUForDatePickers } from '../l10n/@mui/x-date-pickers';
import { mainContainerPadding } from './extras';
import { applicationTheme } from './application-theme';
import { paletteTheme } from './palette';
import { density } from './density';

const baseTheme = createTheme(
  paletteTheme,
  {
    spacing: (factor: number) => `${density.spacingMultiplier * factor}rem`,
    typography: {
      button: {
        fontSize: `${density.fontSize}rem`,
        textTransform: 'none',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: paletteTheme.palette.background.default,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: 'contained',
          size: density.buttonSize,
        },
        styleOverrides: {
          root: {
            borderRadius: density.borderRadius,
          },
        },
      },
      MuiLoadingButton: {
        defaultProps: {
          variant: 'contained',
          size: density.buttonSize,
        },
        styleOverrides: {
          root: {
            borderRadius: density.borderRadius,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            '&.JUDO-nestedError': {
              color: paletteTheme.palette.error.main,
            },
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            margin: 0,
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            '&.switch > .MuiFormControlLabel-label': {
              fontSize: `${density.fontSize}rem`,
            },
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            backgroundColor: paletteTheme.palette.background.default,
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          asterisk: { color: 'red' },
          root: {
            '&.Mui-required': {
              fontWeight: 900,
            },
          },
        },
      },
      MuiInputBase: {
        defaultProps: {
          size: density.inputBaseSize,
        },
        styleOverrides: {
          root: {
            fontSize: `${density.fontSize}rem`,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: paletteTheme.palette.subtitleColor.main,
            fontWeight: 500,
            '&.Mui-focused': {
              color: paletteTheme.palette.subtitleColor.main,
            },
          },
        },
      },
      // To override this block, please create the 'actor/src/theme/index.ts.mui-text-field.fragment.hbs' file
      MuiTextField: {
        defaultProps: {
          fullWidth: true,
          variant: 'filled',
          color: 'secondary',
        },
        styleOverrides: {
          root: {
            '&.JUDO-viewMode:not(.Mui-readOnly):not(.Mui-disabled) .MuiInputBase-root': {
              background: 'transparent',
            },
            '.MuiInputBase-root.Mui-readOnly': {
              background: 'transparent',
            },
            '.MuiInputBase-root.Mui-disabled': {
              background: 'transparent',
            },
          },
        },
      },
      // End of 'actor/src/theme/index.ts.mui-text-field.fragment.hbs'
      MuiAutocomplete: {
        defaultProps: {
          fullWidth: true,
          variant: 'filled',
          color: 'secondary',
        },
      },
      MuiRadio: {
        defaultProps: {
          color: 'secondary',
        },
      },
      MuiSelect: {
        styleOverrides: {
          filled: {
            '&:focus': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
      // To override this block, please create the 'actor/src/theme/index.ts.mui-data-grid.fragment.hbs' file
      MuiDataGrid: {
        styleOverrides: {
          root: {
            border: 'none',
          },
        },
      },
      // End of 'actor/src/theme/index.ts.mui-data-grid.fragment.hbs'
      MuiPaper: {
        styleOverrides: {
          rounded: {
            boxShadow: '0px 0px 8px 1px rgba(0,0,0,0.05)',
            borderRadius: density.borderRadius,
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            border: 'none',
            boxShadow: '0px 0px 8px 1px rgba(0,0,0,0.05)',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: paletteTheme.palette.secondary.main,
            padding: paletteTheme.spacing(1),
          },
        },
        defaultProps: {
          size: density.buttonSize,
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            borderRadius: 4,
          },
        },
      },
      MuiToolbar: {
        defaultProps: {
          variant: 'dense',
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgb(255,255,255,0.15)',
          },
          middle: {
            marginTop: 8,
            marginBottom: 8,
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            '.MuiListSubheader-root': {
              color: paletteTheme.palette.subtitleColor.main,
            },
          },
        },
        defaultProps: {
          dense: density.isListDense,
        },
      },
      MuiListItemText: {
        styleOverrides: {
          root: {
            '> span': {
              fontSize: `${density.fontSize}rem`,
            },
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: 'inherit',
            minWidth: 'auto',
            marginRight: paletteTheme.spacing(2),
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            width: 32,
            height: 32,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            width: '100%',
            length: '100%',
          },
        },
      },
    },
  },
  huHUForMaterial,
  huHUForGrids,
  huHUForDatePickers,
);

const theme = createTheme(baseTheme, applicationTheme);

declare module '@mui/material/styles' {
  interface Palette {
    subtitleColor: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    subtitleColor?: PaletteOptions['primary'];
  }
}

export { density, mainContainerPadding, baseTheme, theme };
