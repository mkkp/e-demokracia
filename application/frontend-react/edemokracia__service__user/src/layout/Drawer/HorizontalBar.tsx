//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/HorizontalBar.tsx'
// Template name: actor/src/layout/Drawer/HorizontalBar.tsx
// Template file: actor/src/layout/Drawer/HorizontalBar.tsx.hbs

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { cloneElement } from 'react';
import type { ReactElement } from 'react';
import { useConfig } from '~/hooks';
import { Navigation } from './DrawerContent/Navigation';

interface ElevationScrollProps {
  children: ReactElement;
  window?: Window | Node;
}

function ElevationScroll({ children, window }: ElevationScrollProps) {
  // const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window!,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const HorizontalBar = () => {
  const theme = useTheme();
  const { container } = useConfig();

  return (
    <ElevationScroll>
      <AppBar
        sx={{
          top: 64,
          bgcolor: theme.palette.background.paper,
          width: '100%',
          height: 62,
          justifyContent: 'center',
          borderTop: `1px solid ${theme.palette.divider}`,
          borderBottom: `1px solid ${theme.palette.divider}`,
          zIndex: 1098,
          color: 'inherit',
        }}
      >
        <Container maxWidth={container ? 'xl' : false}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Navigation />
          </Box>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};
