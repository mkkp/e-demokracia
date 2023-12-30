//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/theme/index.tsx'
// Template name: actor/src/theme/index.tsx
// Template file: actor/src/theme/index.tsx.hbs

import CssBaseline from '@mui/material/CssBaseline';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { huHU as huHUForMaterial } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import { huHU as huHUForGrids } from '@mui/x-data-grid';
import type {} from '@mui/x-data-grid/themeAugmentation';
import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { useConfig } from '../hooks';
import { huHU as huHUForDatePickers } from '../l10n/@mui/x-date-pickers';
import { density } from './density';
import { mainContainerPadding } from './extras';
import { paletteThemeDark, paletteThemeLight } from './palette';
import { typography } from './typography';

const baseTheme = (paletteTheme: Theme) =>
  createTheme(
    paletteTheme,
    {
      spacing: (factor: number) => `${density.spacingMultiplier * factor}rem`,
      typography: {
        ...typography,
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
              '&.checkbox > .MuiFormControlLabel-label': {
                fontSize: `${density.fontSize}rem`,
              },
            },
          },
        },
        MuiDialogTitle: {
          styleOverrides: {
            root: {
              fontSize: '1rem',
              fontWeight: 500,
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
              minWidth: '34px',
              // marginRight: paletteTheme.spacing(2),
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

declare module '@mui/material/styles' {
  interface Palette {
    subtitleColor: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    subtitleColor?: PaletteOptions['primary'];
  }
}

export { density, mainContainerPadding, baseTheme };

type ThemeCustomizationProps = {
  children: ReactNode;
};

export function ThemeCustomization({ children }: ThemeCustomizationProps) {
  const { mode } = useConfig();

  const theme = useMemo(
    () =>
      createTheme({
        ...baseTheme(mode === 'light' ? paletteThemeLight : paletteThemeDark),
        // palette: {
        //   mode,
        // },
      }),
    [mode],
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
