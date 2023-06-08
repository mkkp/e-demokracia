//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/App.tsx'
// Template name: actor/src/App.tsx
// Template file: actor/src/App.tsx.hbs

import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { SnackbarProvider, closeSnackbar } from 'notistack';
import { BreadcrumbProvider, MdiIcon } from './components';
import { DialogProvider } from './components/dialog';
import { Layout } from './layout';
import { menuItems } from './menu-items';
import { useHeroProps, useLogoProps } from './hooks';
import { PrincipalProvider } from './auth';

function App() {
  const [drawerWidth] = useState<number>(300);
  const heroProps = useHeroProps();
  const logoProps = useLogoProps();

  return (
    <PrincipalProvider>
      <SnackbarProvider
        maxSnack={3}
        action={(snackbarId) => (
          <IconButton
            className="close-error-snackbar"
            style={{ color: '#fff' }}
            onClick={() => closeSnackbar(snackbarId)}
          >
            <MdiIcon path="close" />
          </IconButton>
        )}
      >
        <DialogProvider>
          <BreadcrumbProvider>
            <Layout items={menuItems} drawerWidth={drawerWidth} logo={logoProps} hero={heroProps} />
          </BreadcrumbProvider>
        </DialogProvider>
      </SnackbarProvider>
    </PrincipalProvider>
  );
}

export default App;
