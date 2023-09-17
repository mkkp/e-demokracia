//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Footer.tsx'
// Template name: actor/src/layout/Footer.tsx
// Template file: actor/src/layout/Footer.tsx.hbs

import { Link as RouterLink } from 'react-router-dom';
import { Link, Stack, Typography } from '@mui/material';

export const Footer = () => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
    <Typography variant="caption">edemokracia - {new Date().getFullYear()}.</Typography>
    {/*<Typography variant="caption">&copy; All rights reserved</Typography>*/}
    {/*<Stack spacing={1.5} direction="row" justifyContent="space-between" alignItems="center">*/}
    {/*  <Link component={RouterLink} to="#" target="_blank" variant="caption" color="textPrimary">*/}
    {/*    About us*/}
    {/*  </Link>*/}
    {/*  <Link component={RouterLink} to="#" target="_blank" variant="caption" color="textPrimary">*/}
    {/*    Privacy*/}
    {/*  </Link>*/}
    {/*  <Link component={RouterLink} to="#" target="_blank" variant="caption" color="textPrimary">*/}
    {/*    Terms*/}
    {/*  </Link>*/}
    {/*</Stack>*/}
  </Stack>
);
