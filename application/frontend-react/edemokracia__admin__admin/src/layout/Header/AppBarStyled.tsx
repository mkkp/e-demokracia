//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Header/AppBarStyled.tsx'
// Template name: actor/src/layout/Header/AppBarStyled.tsx
// Template file: actor/src/layout/Header/AppBarStyled.tsx.hbs

import { styled } from '@mui/material/styles';
import type { AppBarProps } from '@mui/material';
import { AppBar } from '@mui/material';
import { DRAWER_WIDTH } from '~/config';

export interface AppBarStyledProps extends AppBarProps {
  open?: boolean;
}

export const AppBarStyled = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'open' })<AppBarStyledProps>(
  ({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(!open && {
      width: `calc(100% - ${theme.spacing(7.5)})`,
    }),
    ...(open && {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }),
);
