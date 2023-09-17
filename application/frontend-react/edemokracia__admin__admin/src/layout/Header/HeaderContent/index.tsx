//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Header/HeaderContent/index.tsx'
// Template name: actor/src/layout/Header/HeaderContent/index.tsx
// Template file: actor/src/layout/Header/HeaderContent/index.tsx.hbs

import type { Theme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import { useConfig } from '~/hooks';
import { MenuOrientation } from '~/config';
import { Profile } from './Profile';
import { MobileSection } from './MobileSection';
import { DrawerHeader } from '../../Drawer/DrawerHeader';
import { Customization } from './Customization';

export const HeaderContent = () => {
  const { /*i18n, */ menuOrientation } = useConfig();

  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  return (
    <>
      {menuOrientation === MenuOrientation.HORIZONTAL && !downLG && <DrawerHeader open={true} />}
      <Box sx={{ flex: 'auto' }} />
      {downLG && <Box sx={{ width: '100%', ml: 1 }} />}

      <Customization />
      {!downLG && <Profile />}
      {downLG && <MobileSection />}
    </>
  );
};
