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
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { ACCESS_FILTER_COMPONENT_INTERFACE_KEY, AuthErrorBox, AuthProxyComponent, usePrincipal } from '~/auth';
import { DRAWER_WIDTH } from '~/config';
import { BottomMenu } from '~/layout/BottomMenu';
import { Drawer } from '~/layout/Drawer';
import { Footer } from '~/layout/Footer';
import { Header } from '~/layout/Header';
import { density } from '~/theme';
import { useLayoutHelper } from '~/utilities/layout-helper';

export const Layout = () => {
  const { t } = useTranslation();
  const { principal, errorCode } = usePrincipal();

  const { container, headerPresented, horizontalMenuPresented, bottomMenu } = useLayoutHelper();

  const { marginTop } = useLayoutHelper();
  const errorCodeAndTitleMapping: Record<string, string> = {
    AUTHENTICATED_ENTITY_NOT_FOUND: t('judo.error.security.authenticatedEntityNotFoundTitle', {
      defaultValue: 'User not found',
    }),
  };
  const errorCodeAndMessageMapping: Record<string, string> = {
    AUTHENTICATED_ENTITY_NOT_FOUND: t('judo.error.security.authenticatedEntityNotFoundMessage', {
      defaultValue: 'Processing of your account is still in progress.',
    }),
  };

  return principal?.__signedIdentifier ? (
    <AuthProxyComponent filter={`(${OBJECTCLASS}=${ACCESS_FILTER_COMPONENT_INTERFACE_KEY})`} principal={principal}>
      <Box sx={{ display: 'flex', width: '100%' }}>
        {headerPresented ? <Header /> : null}
        {!horizontalMenuPresented ? <Drawer /> : null}

        <Box
          component="main"
          sx={{ width: `calc(100% - ${DRAWER_WIDTH}px)`, flexGrow: 1, p: { xs: 1, sm: 1, md: 1, lg: 2, xl: 4 } }}
        >
          <Container
            maxWidth={container ? 'xl' : false}
            sx={{
              ...(container && { px: { xs: 0, sm: 0, md: 0, lg: 2, xl: 4 } }),
              position: 'relative',
              minHeight: 'calc(100vh - 110px)',
              display: 'flex',
              flexDirection: 'column',
              mt: `${marginTop}rem`,
            }}
          >
            <Outlet />
            {bottomMenu && <BottomMenu />}
            <Footer />
          </Container>
        </Box>
      </Box>
    </AuthProxyComponent>
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
        {errorCode ? (
          <AuthErrorBox
            title={
              errorCodeAndTitleMapping[errorCode] ||
              t('judo.error.security.unknown', { defaultValue: 'An unknown error occurred!' })
            }
            message={
              errorCodeAndMessageMapping[errorCode] ||
              t('judo.error.security.unknown.message', { defaultValue: 'Please contact the system administrators.' })
            }
          />
        ) : (
          <span>{t('judo.security.loading-principal', { defaultValue: 'Loading principal data...' })}</span>
        )}
      </Grid>
    </Grid>
  );
};
