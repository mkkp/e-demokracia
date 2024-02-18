//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Header/HeaderContent/index.tsx'
// Template name: actor/src/layout/Header/HeaderContent/index.tsx
// Template file: actor/src/layout/Header/HeaderContent/index.tsx.hbs

import Grid from '@mui/material/Grid';
import type { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MenuOrientation } from '~/config';
import { useConfig } from '~/hooks';
import { HorizontalBar } from '~/layout/Drawer/HorizontalBar';
import { DrawerHeader } from '../../Drawer/DrawerHeader';
import { Customization } from './Customization';
import { MobileSection } from './MobileSection';
import { Profile } from './Profile';

export const HeaderContent = () => {
  const { /*i18n, */ menuOrientation } = useConfig();

  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  return (
    <Grid container alignItems="center">
      {menuOrientation === MenuOrientation.HORIZONTAL && !downLG && (
        <Grid item xs={2}>
          <DrawerHeader open={true} />
        </Grid>
      )}
      {!downLG && menuOrientation === MenuOrientation.HORIZONTAL && (
        <Grid item xs={8}>
          <HorizontalBar />
        </Grid>
      )}
      {(downLG || menuOrientation !== MenuOrientation.HORIZONTAL) && <Grid item xs={10} />}
      <Grid item xs={2}>
        <Grid container justifyContent="flex-end">
          <Customization />
          {!downLG && <Profile />}
          {downLG && <MobileSection />}
        </Grid>
      </Grid>
    </Grid>
  );
};
