//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/DrawerHeader/DrawerHeaderStyled.tsx'
// Template name: actor/src/layout/Drawer/DrawerHeader/DrawerHeaderStyled.tsx
// Template file: actor/src/layout/Drawer/DrawerHeader/DrawerHeaderStyled.tsx.hbs

import type { Theme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

interface Props {
  theme: Theme;
  open: boolean;
}

export const DrawerHeaderStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }: Props) => ({
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    justifyContent: open ? 'flex-start' : 'center',
    paddingLeft: theme.spacing(open ? 3 : 0),
  }),
);
