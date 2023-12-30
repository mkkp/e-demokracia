//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/PageHeader.tsx'
// Template name: actor/src/components/PageHeader.tsx
// Template file: actor/src/components/PageHeader.tsx.hbs

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useJudoNavigation } from './CustomBreadcrumb';

interface PageHeaderProps {
  title: string;
  children: ReactNode;
}

export const PageHeader = ({ title, children }: PageHeaderProps) => {
  const { setTitle } = useJudoNavigation();

  useEffect(() => {
    setTitle(title);
  }, [title]);

  return (
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
  );
};
