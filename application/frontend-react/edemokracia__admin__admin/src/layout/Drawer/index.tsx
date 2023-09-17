//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/index.tsx'
// Template name: actor/src/layout/Drawer/index.tsx
// Template file: actor/src/layout/Drawer/index.tsx.hbs

import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Drawer as MuiDrawer, useMediaQuery } from '@mui/material';
import { DrawerHeader } from './DrawerHeader';
import { DrawerContent } from './DrawerContent';
import { MiniDrawerStyled } from './MiniDrawerStyled';
import { DRAWER_WIDTH } from '~/config';
import { useConfig } from '~/hooks';

export interface DrawerProps {
  window?: () => Window;
}

export const Drawer = ({ window }: DrawerProps) => {
  const theme = useTheme();
  const { miniDrawer, onChangeMiniDrawer } = useConfig();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={!miniDrawer} />, [!miniDrawer]);

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1200 }} aria-label="mailbox folders">
      {!matchDownMD ? (
        <MiniDrawerStyled variant="permanent" open={!miniDrawer}>
          {drawerHeader}
          {drawerContent}
        </MiniDrawerStyled>
      ) : (
        <MuiDrawer
          container={container}
          variant="temporary"
          open={!miniDrawer}
          onClose={() => onChangeMiniDrawer(!miniDrawer)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              borderRight: `1px solid ${theme.palette.divider}`,
              backgroundImage: 'none',
              boxShadow: 'inherit',
            },
          }}
        >
          {drawerHeader}
          {drawerContent}
        </MuiDrawer>
      )}
    </Box>
  );
};
