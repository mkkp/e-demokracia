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
import { createBreakpoints } from '@mui/system';
import { huHU as huHUForGrids } from '@mui/x-data-grid/locales';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { huHU as huHUForDatePickers } from '@mui/x-date-pickers/locales';
import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { defaultScales } from '~/config';
import { useConfig } from '~/hooks';
import { density } from '~/theme/density';
import { mainContainerPadding } from '~/theme/extras';
import { getDefaultFontName } from '~/theme/fonts';
import { paletteThemeDark, paletteThemeLight } from '~/theme/palette';
import { typography } from '~/theme/typography';

const breakpoints = createBreakpoints({});

const baseTheme = (
  paletteTheme: Theme,
  scaleXs: number,
  scaleSm: number,
  scaleMd: number,
  scaleLg: number,
  scaleXl: number,
): Theme => {
  return createTheme(
    paletteTheme,
    {
      // To override this block, please create the 'actor/src/theme/index.ts.theme-options.fragment.hbs' file
      spacing: (factor: number) => `${density.spacingMultiplier * factor}rem`,
      typography: {
        ...typography(
          getDefaultFontName(),
          scaleXs * density.fontSize,
          scaleSm * density.fontSize,
          scaleMd * density.fontSize,
          scaleLg * density.fontSize,
          scaleXl * density.fontSize,
        ),
        button: {
          [breakpoints.down('sm')]: {
            fontSize: `${0.9 * density.fontSize * scaleXs}rem`,
            lineHeight: `${1.15 * density.fontSize * scaleXs}rem`,
          },
          [breakpoints.between('sm', 'md')]: {
            fontSize: `${0.9 * density.fontSize * scaleSm}rem`,
            lineHeight: `${1.35 * density.fontSize * scaleXs}rem`,
          },
          [breakpoints.between('md', 'lg')]: {
            fontSize: `${0.9 * density.fontSize * scaleMd}rem`,
            lineHeight: `${1.65 * density.fontSize * scaleXs}rem`,
          },
          [breakpoints.between('lg', 'xl')]: {
            fontSize: `${0.9 * density.fontSize * scaleLg}rem`,
            lineHeight: `${1.75 * density.fontSize * scaleXs}rem`,
          },
          [breakpoints.up('xl')]: {
            fontSize: `${0.9 * density.fontSize * scaleXl}rem`,
            lineHeight: `${2 * density.fontSize * scaleXs}rem`,
          },
          textTransform: 'none',
        },
      },
      mixins: {
        MuiDataGrid: {
          // workaround for mui pro grid issue, otherwise this should not be required
          containerBackground: paletteTheme.palette.background.paper,
        },
      },
      // End of 'actor/src/theme/index.ts.theme-options.fragment.hbs'
      components: {
        // To override this block, please create the 'actor/src/theme/index.ts.mui-app-bar.fragment.hbs' file
        MuiAppBar: {
          styleOverrides: {
            colorPrimary: {
              backgroundColor: paletteTheme.palette.background.default,
            },
          },
        },
        // End of 'actor/src/theme/index.ts.mui-app-bar.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.mui-button.fragment.hbs' file
        MuiIconButton: {
          defaultProps: {
            size: density.buttonSize,
          },
          styleOverrides: {},
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
        MuiToggleButtonGroup: {
          styleOverrides: {
            root: {
              '.MuiToggleButtonGroup-grouped': {
                padding: '6px',
              },
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
        // End of 'actor/src/theme/index.ts.mui-button.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.mui-chip.fragment.hbs' file
        MuiChip: {
          styleOverrides: {
            root: {
              [breakpoints.down('sm')]: {
                height: `${2 * scaleXs}rem`,
              },
              [breakpoints.between('sm', 'md')]: {
                height: `${2 * scaleSm}rem`,
              },
              [breakpoints.between('md', 'lg')]: {
                height: `${2 * scaleMd}rem`,
              },
              [breakpoints.between('lg', 'xl')]: {
                height: `${2 * scaleLg}rem`,
              },
              [breakpoints.up('xl')]: {
                height: `${2 * scaleXl}rem`,
              },
            },
            label: {
              [breakpoints.down('sm')]: {
                fontSize: `${0.9 * density.fontSize * scaleXs}rem`,
              },
              [breakpoints.between('sm', 'md')]: {
                fontSize: `${0.9 * density.fontSize * scaleSm}rem`,
              },
              [breakpoints.between('md', 'lg')]: {
                fontSize: `${0.9 * density.fontSize * scaleMd}rem`,
              },
              [breakpoints.between('lg', 'xl')]: {
                fontSize: `${0.9 * density.fontSize * scaleLg}rem`,
              },
              [breakpoints.up('xl')]: {
                fontSize: `${0.9 * density.fontSize * scaleXl}rem`,
              },
            },
          },
        },
        // End of 'actor/src/theme/index.ts.mui-chip.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.mui-tab.fragment.hbs' file
        MuiTab: {
          styleOverrides: {
            [breakpoints.down('sm')]: {
              minHeight: `${2 * density.fontSize * scaleXs}rem`,
              marginTop: `${density.fontSize * scaleXs}rem`,
              paddingLeft: `${0.3 * density.fontSize * scaleXs}rem`,
              paddingRight: `${0.3 * density.fontSize * scaleXs}rem`,
              marginLeft: `${0.3 * density.fontSize * scaleXs}rem`,
              marginRight: `${0.3 * density.fontSize * scaleXs}rem`,
            },
            [breakpoints.between('sm', 'md')]: {
              minHeight: `${2 * density.fontSize * scaleSm}rem`,
              marginTop: `${density.fontSize * scaleSm}rem`,
              paddingLeft: `${0.3 * density.fontSize * scaleSm}rem`,
              paddingRight: `${0.3 * density.fontSize * scaleSm}rem`,
              marginLeft: `${0.3 * density.fontSize * scaleSm}rem`,
              marginRight: `${0.3 * density.fontSize * scaleSm}rem`,
            },
            [breakpoints.between('md', 'lg')]: {
              minHeight: `${2 * density.fontSize * scaleMd}rem`,
              marginTop: `${density.fontSize * scaleMd}rem`,
              paddingLeft: `${0.3 * density.fontSize * scaleMd}rem`,
              paddingRight: `${0.3 * density.fontSize * scaleMd}rem`,
              marginLeft: `${0.3 * density.fontSize * scaleMd}rem`,
              marginRight: `${0.3 * density.fontSize * scaleMd}rem`,
            },
            [breakpoints.between('lg', 'xl')]: {
              minHeight: `${2 * density.fontSize * scaleLg}rem`,
              marginTop: `${density.fontSize * scaleLg}rem`,
              paddingLeft: `${0.3 * density.fontSize * scaleLg}rem`,
              paddingRight: `${0.3 * density.fontSize * scaleLg}rem`,
              marginLeft: `${0.3 * density.fontSize * scaleLg}rem`,
              marginRight: `${0.3 * density.fontSize * scaleLg}rem`,
            },
            [breakpoints.up('xl')]: {
              minHeight: `${2 * density.fontSize * scaleXl}rem`,
              marginTop: `${density.fontSize * scaleXl}rem`,
              paddingLeft: `${0.3 * density.fontSize * scaleXl}rem`,
              paddingRight: `${0.3 * density.fontSize * scaleXl}rem`,
              marginLeft: `${0.3 * density.fontSize * scaleXl}rem`,
              marginRight: `${0.3 * density.fontSize * scaleXl}rem`,
            },
            root: {
              '&.JUDO-nestedError': {
                color: paletteTheme.palette.error.main,
              },
            },
          },
        },
        // End of 'actor/src/theme/index.ts.mui-tab.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.mui-form-control.fragment.hbs' file
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
                [breakpoints.down('sm')]: {
                  fontSize: `${density.fontSize * scaleXs}rem`,
                },
                [breakpoints.between('sm', 'md')]: {
                  fontSize: `${density.fontSize * scaleSm}rem`,
                },
                [breakpoints.between('md', 'lg')]: {
                  fontSize: `${density.fontSize * scaleMd}rem`,
                },
                [breakpoints.between('lg', 'xl')]: {
                  fontSize: `${density.fontSize * scaleLg}rem`,
                },
                [breakpoints.up('xl')]: {
                  fontSize: `${density.fontSize * scaleXl}rem`,
                },
              },
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

        // End of 'actor/src/theme/index.ts.mui-form-control.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.mui-dialog.fragment.hbs' file
        MuiDialogTitle: {
          styleOverrides: {
            root: {
              fontWeight: 500,
              [breakpoints.down('sm')]: {
                fontSize: `${density.fontSize * scaleXs}rem`,
              },
              [breakpoints.between('sm', 'md')]: {
                fontSize: `${density.fontSize * scaleSm}rem`,
              },
              [breakpoints.between('md', 'lg')]: {
                fontSize: `${density.fontSize * scaleMd}rem`,
              },
              [breakpoints.between('lg', 'xl')]: {
                fontSize: `${density.fontSize * scaleLg}rem`,
              },
              [breakpoints.up('xl')]: {
                fontSize: `${density.fontSize * scaleXl}rem`,
              },
            },
          },
        },
        MuiDialogContent: {
          styleOverrides: {
            root: {
              backgroundColor: paletteTheme.palette.background.default,
              [breakpoints.down('sm')]: {
                padding: `${scaleXs}rem`,
              },
              [breakpoints.between('sm', 'md')]: {
                padding: `${scaleSm}rem`,
              },
              [breakpoints.between('md', 'lg')]: {
                padding: `${scaleMd}rem`,
              },
              [breakpoints.between('lg', 'xl')]: {
                padding: `${scaleLg}rem`,
              },
              [breakpoints.up('xl')]: {
                padding: `${scaleXl}rem`,
              },
            },
          },
        },
        // End of 'actor/src/theme/index.ts.mui-dialog.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.mui-input-base.fragment.hbs' file
        MuiInputBase: {
          defaultProps: {
            size: density.inputBaseSize,
          },
          styleOverrides: {
            root: {
              [breakpoints.down('sm')]: {
                fontSize: `${density.fontSize * scaleXs}rem`,
              },
              [breakpoints.between('sm', 'md')]: {
                fontSize: `${density.fontSize * scaleSm}rem`,
              },
              [breakpoints.between('md', 'lg')]: {
                fontSize: `${density.fontSize * scaleMd}rem`,
              },
              [breakpoints.between('lg', 'xl')]: {
                fontSize: `${density.fontSize * scaleLg}rem`,
              },
              [breakpoints.up('xl')]: {
                fontSize: `${density.fontSize * scaleXl}rem`,
              },

              '.MuiIconButton-root': {
                color: paletteTheme.palette.secondary.main,
              },
              '&.Mui-readOnly:before': {
                border: 0,
              },
              '&.Mui-readOnly:hover:not(.Mui-disabled, .Mui-error)::before': {
                border: 0,
              },
              '&.Mui-readOnly:after': {
                border: 0,
              },
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

        // End of 'actor/src/theme/index.ts.mui-input-base.fragment.hbs'
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
        // To override this block, please create the 'actor/src/theme/index.ts.mui-autocomplete.fragment.hbs' file
        MuiAutocomplete: {
          defaultProps: {
            fullWidth: true,
            variant: 'filled',
            color: 'secondary',
          },
          styleOverrides: {
            root: {
              '.AggregationInputButtonGroup': {
                position: 'absolute',
                top: 'calc(50% - 14px)', // MUI internals have the same burned in values...
                right: 8,
              },
              '.AggregationInputButtonGroup .AggregationInputLoading': {
                margin: 'auto 0',
              },
              '.TagsButtonGroup': {
                position: 'absolute',
                top: 'calc(50% - 14px)', // MUI internals have the same burned in values...
                right: 8,
              },
              '.TagsButtonGroup .TagsLoading': {
                margin: 'auto 0',
              },
              '.MuiInputBase-root.MuiInputBase-formControl.MuiAutocomplete-inputRoot': {
                paddingRight: '85px',
              },
              '.JUDO-readOnly .MuiInputBase-root:before': {
                border: 0,
              },
              '.JUDO-readOnly .MuiInputBase-root .MuiAutocomplete-endAdornment': {
                visibility: 'hidden',
              },
            },
          },
        },
        // End of 'actor/src/theme/index.ts.mui-autocomplete.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.mui-radio.fragment.hbs' file
        MuiRadio: {
          defaultProps: {
            color: 'secondary',
          },
        },
        // End of 'actor/src/theme/index.ts.mui-radio.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.mui-select.fragment.hbs' file
        MuiSelect: {
          styleOverrides: {
            filled: {
              '&:focus': {
                backgroundColor: 'transparent',
              },
            },
          },
        },
        // End of 'actor/src/theme/index.ts.mui-select.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.mui-data-grid.fragment.hbs' file
        MuiDataGrid: {
          styleOverrides: {
            root: {
              border: 'none',
            },
          },
        },
        // End of 'actor/src/theme/index.ts.mui-data-grid.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.mui-paper.fragment.hbs' file
        MuiPaper: {
          styleOverrides: {
            rounded: {
              boxShadow: '0px 0px 8px 1px rgba(0,0,0,0.05)',
              borderRadius: density.borderRadius,
            },
          },
        },
        // End of 'actor/src/theme/index.ts.mui-paper.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.mui-drawer.fragment.hbs' file
        MuiDrawer: {
          styleOverrides: {
            paper: {
              border: 'none',
              boxShadow: '0px 0px 8px 1px rgba(0,0,0,0.05)',
            },
          },
        },
        // End of 'actor/src/theme/index.ts.mui-drawer.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.mui-tooltip.fragment.hbs' file
        MuiTooltip: {
          styleOverrides: {
            tooltip: {
              borderRadius: 4,
            },
          },
        },
        // End of 'actor/src/theme/index.ts.mui-tooltip.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.mui-divider.fragment.hbs' file
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
        // End of 'actor/src/theme/index.ts.mui-divider.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.mui-list.fragment.hbs' file
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
        MuiListItemIcon: {
          styleOverrides: {
            root: {
              color: 'inherit',
              minWidth: '34px',
            },
          },
        },
        // End of 'actor/src/theme/index.ts.mui-list.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.mui-avatar.fragment.hbs' file
        MuiAvatar: {
          styleOverrides: {
            root: {
              width: 32,
              height: 32,
            },
          },
        },
        // End of 'actor/src/theme/index.ts.mui-avatar.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.mui-card.fragment.hbs' file
        MuiCard: {
          styleOverrides: {
            root: {
              width: '100%',
              height: '100%',
            },
          },
        },
        MuiCardContent: {
          styleOverrides: {
            root: {
              padding: '1rem',
              '&:last-child': {
                paddingBottom: '2rem',
              },
            },
          },
        },
        // End of 'actor/src/theme/index.ts.mui-card.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.mui-grid.fragment.hbs' file
        MuiGrid: {
          styleOverrides: {
            item: {
              pt: 4,
              pl: 4,
            },
          },
        },
        // End of 'actor/src/theme/index.ts.mui-grid.fragment.hbs'
        // To override this block, please create the 'actor/src/theme/index.ts.extra-components.fragment.hbs' file
        // End of 'actor/src/theme/index.ts.extra-components.fragment.hbs'
      },
    },
    huHUForMaterial,
    huHUForGrids,
    huHUForDatePickers,
  );
};
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

  const base = useMemo(() => {
    const theme = createTheme({});
    theme.palette = mode === 'light' ? paletteThemeLight.palette : paletteThemeDark.palette;
    return baseTheme(
      theme,
      defaultScales.scaleXs,
      defaultScales.scaleSm,
      defaultScales.scaleMd,
      defaultScales.scaleLg,
      defaultScales.scaleXl,
    );
  }, [mode]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={base}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
