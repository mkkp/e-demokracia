//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/PageHeader.tsx'
// Template name: actor/src/components/PageHeader.tsx
// Template file: actor/src/components/PageHeader.tsx.hbs

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from '~/config';
import { useConfig } from '~/hooks';
import { CustomBreadcrumb, useJudoNavigation } from './CustomBreadcrumb';

interface PageHeaderProps {
  title: string;
  children: ReactNode;
}

export const PageHeader = ({ title, children }: PageHeaderProps) => {
  const { setTitle } = useJudoNavigation();
  const { container, miniDrawer } = useConfig();

  useEffect(() => {
    setTitle(title);
  }, [title]);

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        mt: 8,
        width: `calc(100% - ${miniDrawer ? MINI_DRAWER_WIDTH : DRAWER_WIDTH}px)`,
        flexGrow: 1,
      }}
    >
      <Container maxWidth={container ? 'xl' : false} sx={{ ...(container && { px: { xs: 0, sm: 2 } }) }}>
        <Grid container alignItems="vertical" sx={{ pt: 2, pb: 2, pl: !container ? 3 : 0, pr: !container ? 3 : 0 }}>
          <Grid item xs={12}>
            <CustomBreadcrumb />
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center" justifyContent="space-between" spacing={1}>
              <Grid item>
                <Typography id="application-page-header-title" component="span" color="text.primary" variant="h3">
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction="row" alignItems="center" spacing={1}>
                  {children}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};
