//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/index.tsx'
// Template name: actor/src/layout/index.tsx
// Template file: actor/src/layout/index.tsx.hbs

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { usePrincipal } from '~/auth';
import { DRAWER_WIDTH, MenuOrientation } from '~/config';
import { useConfig } from '~/hooks';
import { Drawer } from './Drawer';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = () => {
  const theme = useTheme();
  const matchDownXL = useMediaQuery(theme.breakpoints.down('xl'));
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));
  const { t } = useTranslation();
  const { principal } = usePrincipal();

  const { container, miniDrawer, menuOrientation, onChangeMiniDrawer } = useConfig();

  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  const principalLoaded = () => principal && principal.__signedIdentifier;

  return principalLoaded() ? (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header />
      {!isHorizontal ? <Drawer /> : null}

      <Box component="main" sx={{ width: `calc(100% - ${DRAWER_WIDTH}px)`, flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Container
          maxWidth={container ? 'xl' : false}
          sx={{
            ...(container && { px: { xs: 0, sm: 2 } }),
            position: 'relative',
            minHeight: 'calc(100vh - 110px)',
            display: 'flex',
            flexDirection: 'column',
            mt: 12,
          }}
        >
          <Outlet />
          <Footer />
        </Container>
      </Box>
    </Box>
  ) : (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        {t('judo.security.loading-principal', { defaultValue: 'Loading principal data...' })}
      </Grid>
    </Grid>
  );
};
