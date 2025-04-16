import type { Theme, TypographyVariantsOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import createBreakpoints from '@mui/system/createBreakpoints/createBreakpoints';
import PlusJakarta from '../custom/assets/fonts/PlusJakartaSans-VariableFont_wght.ttf';
import { density } from './density';

// export function typography = () : TypographyVariantsOptions {
// }

const breakpoints = createBreakpoints({});

export const typography = (
  fontFamily: string,
  scaleXs: number,
  scaleSm: number,
  scaleMd: number,
  scaleLg: number,
  scaleXl: number,
): TypographyOptions => {
  return {
    fontFamily: `${fontFamily}`,
    fontSize: 10,
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,

    h1: {
      fontWeight: 600,
      [breakpoints.down('sm')]: {
        fontSize: `${2.375 * scaleXs}rem`,
        lineHeight: `${1.21 * scaleXs}`,
      },
      [breakpoints.between('sm', 'md')]: {
        fontSize: `${2.375 * scaleSm}rem`,
        lineHeight: `${1.21 * scaleSm}`,
      },
      [breakpoints.between('md', 'lg')]: {
        fontSize: `${2.375 * scaleMd}rem`,
        lineHeight: `${1.21 * scaleMd}`,
      },
      [breakpoints.between('lg', 'xl')]: {
        fontSize: `${2.375 * scaleLg}rem`,
        lineHeight: `${1.21 * scaleLg}`,
      },
      [breakpoints.up('xl')]: {
        fontSize: `${2.375 * scaleXl}rem`,
        lineHeight: `${1.21 * scaleXl}`,
      },
    },
    h2: {
      fontWeight: 600,
      [breakpoints.down('sm')]: {
        fontSize: `${1.875 * scaleXs}rem`,
        lineHeight: `${1.27 * scaleXs}`,
      },
      [breakpoints.between('sm', 'md')]: {
        fontSize: `${1.875 * scaleSm}rem`,
        lineHeight: `${1.27 * scaleSm}`,
      },
      [breakpoints.between('md', 'lg')]: {
        fontSize: `${1.875 * scaleMd}rem`,
        lineHeight: `${1.27 * scaleMd}`,
      },
      [breakpoints.between('lg', 'xl')]: {
        fontSize: `${1.875 * scaleLg}rem`,
        lineHeight: `${1.27 * scaleLg}`,
      },
      [breakpoints.up('xl')]: {
        fontSize: `${1.875 * scaleXl}rem`,
        lineHeight: `${1.27 * scaleXl}`,
      },
    },
    h3: {
      fontWeight: 600,
      [breakpoints.down('sm')]: {
        fontSize: `${1.5 * scaleXs}rem`,
        lineHeight: `${1.33 * scaleXs}`,
      },
      [breakpoints.between('sm', 'md')]: {
        fontSize: `${1.5 * scaleSm}rem`,
        lineHeight: `${1.33 * scaleSm}`,
      },
      [breakpoints.between('md', 'lg')]: {
        fontSize: `${1.5 * scaleMd}rem`,
        lineHeight: `${1.33 * scaleMd}`,
      },
      [breakpoints.between('lg', 'xl')]: {
        fontSize: `${1.5 * scaleLg}rem`,
        lineHeight: `${1.33 * scaleLg}`,
      },
      [breakpoints.up('xl')]: {
        fontSize: `${1.5 * scaleXl}rem`,
        lineHeight: `${1.33 * scaleXl}`,
      },
    },
    h4: {
      fontWeight: 600,
      [breakpoints.down('sm')]: {
        fontSize: `${1.25 * scaleXs}rem`,
        lineHeight: `${1.4 * scaleXs}`,
      },
      [breakpoints.between('sm', 'md')]: {
        fontSize: `${1.25 * scaleSm}rem`,
        lineHeight: `${1.4 * scaleSm}`,
      },
      [breakpoints.between('md', 'lg')]: {
        fontSize: `${1.25 * scaleMd}rem`,
        lineHeight: `${1.4 * scaleMd}`,
      },
      [breakpoints.between('lg', 'xl')]: {
        fontSize: `${1.25 * scaleLg}rem`,
        lineHeight: `${1.4 * scaleLg}`,
      },
      [breakpoints.up('xl')]: {
        fontSize: `${1.25 * scaleXl}rem`,
        lineHeight: `${1.4 * scaleXl}`,
      },
    },
    h5: {
      fontWeight: 600,
      [breakpoints.down('sm')]: {
        fontSize: `${1 * scaleXs}rem`,
        lineHeight: `${1.5 * scaleXs}`,
      },
      [breakpoints.between('sm', 'md')]: {
        fontSize: `${1 * scaleSm}rem`,
        lineHeight: `${1.5 * scaleSm}`,
      },
      [breakpoints.between('md', 'lg')]: {
        fontSize: `${1 * scaleMd}rem`,
        lineHeight: `${1.5 * scaleMd}`,
      },
      [breakpoints.between('lg', 'xl')]: {
        fontSize: `${1 * scaleLg}rem`,
        lineHeight: `${1.5 * scaleLg}`,
      },
      [breakpoints.up('xl')]: {
        fontSize: `${1 * scaleXl}rem`,
        lineHeight: `${1.5 * scaleXl}`,
      },
    },
    h6: {
      fontWeight: 400,
      [breakpoints.down('sm')]: {
        fontSize: `${0.875 * scaleXs}rem`,
        lineHeight: `${1.57 * scaleXs}`,
      },
      [breakpoints.between('sm', 'md')]: {
        fontSize: `${0.875 * scaleSm}rem`,
        lineHeight: `${1.57 * scaleSm}`,
      },
      [breakpoints.between('md', 'lg')]: {
        fontSize: `${0.875 * scaleMd}rem`,
        lineHeight: `${1.57 * scaleMd}`,
      },
      [breakpoints.between('lg', 'xl')]: {
        fontSize: `${0.875 * scaleLg}rem`,
        lineHeight: `${1.57 * scaleLg}`,
      },
      [breakpoints.up('xl')]: {
        fontSize: `${0.875 * scaleXl}rem`,
        lineHeight: `${1.57 * scaleXl}`,
      },
    },
    caption: {
      fontWeight: 400,
      [breakpoints.down('sm')]: {
        fontSize: `${0.75 * scaleXs}rem`,
        lineHeight: `${1.66 * scaleXs}`,
      },
      [breakpoints.between('sm', 'md')]: {
        fontSize: `${0.75 * scaleSm}rem`,
        lineHeight: `${1.66 * scaleSm}`,
      },
      [breakpoints.between('md', 'lg')]: {
        fontSize: `${0.75 * scaleMd}rem`,
        lineHeight: `${1.66 * scaleMd}`,
      },
      [breakpoints.between('lg', 'xl')]: {
        fontSize: `${0.75 * scaleLg}rem`,
        lineHeight: `${1.66 * scaleLg}`,
      },
      [breakpoints.up('xl')]: {
        fontSize: `${0.75 * scaleXl}rem`,
        lineHeight: `${1.66 * scaleXl}`,
      },
    },
    body1: {
      [breakpoints.down('sm')]: {
        fontSize: `${0.875 * scaleXs}rem`,
        lineHeight: `${1.57 * scaleXs}`,
      },
      [breakpoints.between('sm', 'md')]: {
        fontSize: `${0.875 * scaleSm}rem`,
        lineHeight: `${1.57 * scaleSm}`,
      },
      [breakpoints.between('md', 'lg')]: {
        fontSize: `${0.875 * scaleMd}rem`,
        lineHeight: `${1.57 * scaleMd}`,
      },
      [breakpoints.between('lg', 'xl')]: {
        fontSize: `${0.875 * scaleLg}rem`,
        lineHeight: `${1.57 * scaleLg}`,
      },
      [breakpoints.up('xl')]: {
        fontSize: `${0.875 * scaleXl}rem`,
        lineHeight: `${1.57 * scaleXl}`,
      },
    },
    body2: {
      [breakpoints.down('sm')]: {
        fontSize: `${0.875 * scaleXs}rem`,
        lineHeight: `${1.57 * scaleXs}`,
      },
      [breakpoints.between('sm', 'md')]: {
        fontSize: `${0.875 * scaleSm}rem`,
        lineHeight: `${1.57 * scaleSm}`,
      },
      [breakpoints.between('md', 'lg')]: {
        fontSize: `${0.875 * scaleMd}rem`,
        lineHeight: `${1.57 * scaleMd}`,
      },
      [breakpoints.between('lg', 'xl')]: {
        fontSize: `${0.875 * scaleLg}rem`,
        lineHeight: `${1.57 * scaleLg}`,
      },
      [breakpoints.up('xl')]: {
        fontSize: `${0.875 * scaleXl}rem`,
        lineHeight: `${1.57 * scaleXl}`,
      },
    },
    subtitle1: {
      fontWeight: 600,
      [breakpoints.down('sm')]: {
        fontSize: `${0.875 * scaleXs}rem`,
        lineHeight: `${1.57 * scaleXs}`,
      },
      [breakpoints.between('sm', 'md')]: {
        fontSize: `${0.875 * scaleSm}rem`,
        lineHeight: `${1.57 * scaleSm}`,
      },
      [breakpoints.between('md', 'lg')]: {
        fontSize: `${0.875 * scaleMd}rem`,
        lineHeight: `${1.57 * scaleMd}`,
      },
      [breakpoints.between('lg', 'xl')]: {
        fontSize: `${0.875 * scaleLg}rem`,
        lineHeight: `${1.57 * scaleLg}`,
      },
      [breakpoints.up('xl')]: {
        fontSize: `${0.875 * scaleXl}rem`,
        lineHeight: `${1.57 * scaleXl}`,
      },
    },
    subtitle2: {
      [breakpoints.down('sm')]: {
        fontSize: `${0.75 * scaleXs}rem`,
        lineHeight: `${1.66 * scaleXs}`,
      },
      [breakpoints.between('sm', 'md')]: {
        fontSize: `${0.75 * scaleSm}rem`,
        lineHeight: `${1.66 * scaleSm}`,
      },
      [breakpoints.between('md', 'lg')]: {
        fontSize: `${0.75 * scaleMd}rem`,
        lineHeight: `${1.66 * scaleMd}`,
      },
      [breakpoints.between('lg', 'xl')]: {
        fontSize: `${0.75 * scaleLg}rem`,
        lineHeight: `${1.66 * scaleLg}`,
      },
      [breakpoints.up('xl')]: {
        fontSize: `${0.75 * scaleXl}rem`,
        lineHeight: `${1.66 * scaleXl}`,
      },
    },
    overline: {
      [breakpoints.down('sm')]: {
        lineHeight: `${1.66 * scaleXs}`,
      },
      [breakpoints.between('sm', 'md')]: {
        lineHeight: `${1.66 * scaleSm}`,
      },
      [breakpoints.between('md', 'lg')]: {
        lineHeight: `${1.66 * scaleMd}`,
      },
      [breakpoints.between('lg', 'xl')]: {
        lineHeight: `${1.66 * scaleLg}`,
      },
      [breakpoints.up('xl')]: {
        lineHeight: `${1.66 * scaleXl}`,
      },
    },
    button: {
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
      textTransform: 'none',
    },
  };
};
