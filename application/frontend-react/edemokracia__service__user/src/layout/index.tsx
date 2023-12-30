//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/index.tsx'
// Template name: actor/src/layout/index.tsx
// Template file: actor/src/layout/index.tsx.hbs

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Outlet } from 'react-router-dom';
import { CustomBreadcrumb } from '~/components/CustomBreadcrumb';
import { DRAWER_WIDTH, MenuOrientation } from '~/config';
import { useConfig } from '~/hooks';
import { Drawer } from './Drawer';
import { HorizontalBar } from './Drawer/HorizontalBar';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = () => {
  const theme = useTheme();
  const matchDownXL = useMediaQuery(theme.breakpoints.down('xl'));
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { container, miniDrawer, menuOrientation, onChangeMiniDrawer } = useConfig();

  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  // set media wise responsive drawer (auto-close at start based on width)
  // useEffect(() => {
  //   if (!miniDrawer) {
  //     onChangeMiniDrawer(!matchDownXL);
  //   }
  // }, [matchDownXL]);

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header />
      {!isHorizontal ? <Drawer /> : <HorizontalBar />}

      <Box component="main" sx={{ width: `calc(100% - ${DRAWER_WIDTH}px)`, flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar sx={{ mt: isHorizontal ? 8 : 'inherit' }} />
        <Container
          maxWidth={container ? 'xl' : false}
          sx={{
            ...(container && { px: { xs: 0, sm: 2 } }),
            position: 'relative',
            minHeight: 'calc(100vh - 110px)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CustomBreadcrumb />
          <Outlet />
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};
