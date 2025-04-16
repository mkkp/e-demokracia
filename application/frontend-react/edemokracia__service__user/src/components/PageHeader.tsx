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
import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { MdiIcon } from '~/components';
import { useLayoutHelper } from '~/utilities/layout-helper';
import { CustomBreadcrumb, useJudoNavigation } from './CustomBreadcrumb';

interface PageHeaderProps {
  title: string;
  icon?: string;
  children: ReactNode;
}

export const PageHeader = ({ title, icon, children }: PageHeaderProps) => {
  const { setTitle } = useJudoNavigation();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { pageHeaderOffset, container, headerPresented, isXs, isSm, isMd, isLg, isXl } = useLayoutHelper();

  const titleWidth = useMemo(() => {
    if (isXs) {
      return '10rem';
    } else if (isSm) {
      return '20rem';
    } else if (isMd) {
      return '30rem';
    } else if (isLg) {
      return '40rem';
    } else if (isXl) {
      return '50rem';
    } else {
      return '10rem';
    }
  }, [isXs, isSm, isMd, isLg, isXl]);

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
        top: headerPresented ? { xs: 56, sm: 64 } : { xs: 0, sm: 0 },
        left: `calc(${pageHeaderOffset}px)`,
        width: `calc(100% - ${pageHeaderOffset}px)`,
        backgroundColor: (theme) =>
          headerPresented ? theme.palette.background.default : theme.palette.background.paper,
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {icon && <MdiIcon path={icon} />}
                  <Typography
                    id="application-page-header-title"
                    component="span"
                    color="text.primary"
                    variant="h3"
                    sx={{ overflow: 'hidden', width: `${titleWidth}`, whiteSpace: 'noWrap', textOverflow: 'ellipsis' }}
                  >
                    {title}
                  </Typography>
                </Box>
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
