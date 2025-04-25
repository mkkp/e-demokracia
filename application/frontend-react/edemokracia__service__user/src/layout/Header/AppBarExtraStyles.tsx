//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Header/AppBarStyled.tsx'
// Template name: actor/src/layout/Header/AppBarStyled.tsx
// Template file: actor/src/layout/Header/AppBarStyled.tsx.hbs

import { type AppBarProps, CreateMUIStyled, IconButton, type IconButtonPropsColorOverrides } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { DRAWER_WIDTH } from '~/config';
import { type Theme } from '@mui/material';
import { CreateStyledComponent } from '@emotion/styled';

export interface AppBarStyledProps extends AppBarProps {
  open?: boolean;
}

export const appBarExtraStyles = (theme : Theme, open : boolean | undefined) =>
  ({
    textTransform: 'uppercase',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontWeight: 'bold',
    button: {
      fontWeight: 'bold',
    },
  }) as unknown as AppBarStyledProps;
