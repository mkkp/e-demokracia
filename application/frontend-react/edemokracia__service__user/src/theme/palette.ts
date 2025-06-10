//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/theme/palette.ts'
// Template name: actor/src/theme/palette.ts
// Template file: actor/src/theme/palette.ts.hbs

import { createTheme } from '@mui/material/styles';
// You can add extra imports by overriding the `actor/src/theme/palette.ts.extra-imports.fragment.hbs` file

export const paletteThemeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      //main: '#aa2e25',
      main: '#840605',
    },
    secondary: {
      main: '#ff9100',
    },
    text: {
      primary: '#17191DFF',
      secondary: '#434448FF',
    },
    background: {
      default: '#FAFAFAFF',
      paper: '#FFFFFFFF',
    },
    subtitleColor: {
      main: '#8C8C8C',
    },
    // You can add extra palette attributes by overriding the `actor/src/theme/palette.ts.extra-palette-attributes.fragment.hbs` file
  },
  // You can add extra theme attributes by overriding the `actor/src/theme/palette.ts.extra-attributes.fragment.hbs` file
});

// WIP
export const paletteThemeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      //main: '#3c4dcc',
      main: '#840605',
    },
    secondary: {
      //      main: '#E7501DFF',
      main: '#ff9100',
    },
    text: {
      primary: '#d9d9d9',
      secondary: '#848484',
    },
    background: {
      default: '#1a1a1a',
      paper: '#2a2a2a',
    },
    subtitleColor: {
      main: '#8C8C8C',
    },
  },
});
