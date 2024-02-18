//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/PageHeader.tsx'
// Template name: actor/src/components/PageHeader.tsx
// Template file: actor/src/components/PageHeader.tsx.hbs

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH, MenuOrientation } from '~/config';
import { useConfig } from '~/hooks';
import { CustomBreadcrumb, useJudoNavigation } from './CustomBreadcrumb';

interface PageHeaderProps {
  title: string;
  children: ReactNode;
}

export const PageHeader = ({ title, children }: PageHeaderProps) => {
  const { setTitle } = useJudoNavigation();
  const { container, miniDrawer, menuOrientation } = useConfig();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  useEffect(() => {
    setTitle(title);
  }, [title]);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 1);
    };
    window.addEventListener('scroll', fn);
    return () => {
      window.removeEventListener('scroll', fn);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        zIndex: 1100,
        top: { xs: 56, sm: 64 },
        right: 0,
        width: `calc(100% - ${
          menuOrientation === MenuOrientation.HORIZONTAL
            ? 0
            : !downLG
              ? miniDrawer
                ? MINI_DRAWER_WIDTH
                : DRAWER_WIDTH
              : 0
        }px)`,
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Container
        data-name="PageHeaderContainer"
        maxWidth={container ? 'xl' : false}
        sx={{ px: !container ? { xs: 4, sm: 6 } : { sm: 5, md: 5, lg: 5, xl: 2 } }}
      >
        <Grid
          container
          alignItems="vertical"
          sx={{
            pt: 1,
            pb: 1,
            pl: 0,
            pr: 0,
            borderBottom: scrolled ? 1 : undefined,
            borderColor: 'grey.300',
          }}
        >
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
    </Box>
  );
};
