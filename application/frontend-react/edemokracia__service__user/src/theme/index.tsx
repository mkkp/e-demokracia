//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/theme/index.tsx'
// Template name: actor/src/theme/index.tsx
// Template file: actor/src/theme/index.tsx.hbs

import CssBaseline from '@mui/material/CssBaseline';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { huHU as huHUForMaterial } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createBreakpoints/createBreakpoints';
import { huHU as huHUForGrids } from '@mui/x-data-grid/locales';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { huHU as huHUForDatePickers } from '@mui/x-date-pickers/locales';
import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { defaultScales } from '~/config';
import { useConfig } from '../hooks';
import { density } from './density';
import { mainContainerPadding } from './extras';
import { getDefaultFontName } from './fonts';
import { paletteThemeDark, paletteThemeLight } from './palette';
import { typography } from './typography';

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
              // variants: [
              //   {
              //     props: { variant: 'outlined' },
              //     style: {
              //       borderWidth: '3px',
              //       borderColor: 'white'
              //     },
              //   },
              // ],
            },
            outlined: {
              borderWidth: '3px',
              borderColor: paletteTheme.palette.primary.light,
              color: paletteTheme.palette.primary.light,
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

        MuiChip: {
          styleOverrides: {
            root: {
              height: '28px',
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
              padding: 4,
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
        // End of 'actor/src/theme/index.ts.mui-input-base.fragment.hbs'
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
        MuiButtonGroup: {
          defaultProps: {
            size: density.buttonSize,
          },
        },
        MuiIconButton: {
          defaultProps: {
            size: density.buttonSize,
          },
          styleOverrides: {},
        },
        MuiIcon: {
          styleOverrides: {
            root: {},
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
        MuiListItemIcon: {
          styleOverrides: {
            root: {
              color: 'inherit',
              minWidth: '34px',
              // marginRight: breakpoints.spacing(2),
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
        MuiGrid: {
          styleOverrides: {
            item: {
              pt: 4,
              pl: 4,
            },
          },
        },
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
