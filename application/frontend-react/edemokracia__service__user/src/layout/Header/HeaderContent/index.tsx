//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Header/HeaderContent/index.tsx'
// Template name: actor/src/layout/Header/HeaderContent/index.tsx
// Template file: actor/src/layout/Header/HeaderContent/index.tsx.hbs

import Grid from '@mui/material/Grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { FC } from 'react';
import { MenuOrientation } from '~/config';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { useConfig } from '~/hooks';
import { DrawerHeader } from '~/layout/Drawer/DrawerHeader';
import { HorizontalBar } from '~/layout/Drawer/HorizontalBar';
import { Customization } from '~/layout/Header/HeaderContent/Customization';
import { HeaderProfile } from '~/layout/Header/HeaderContent/HeaderProfile';
import { useLayoutHelper } from '~/utilities/layout-helper';

const AppBarExtraComponentsFilter = `(&(${OBJECTCLASS}=${CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY})(component=AppBarExtraComponents))`;

export interface AppBarExtraComponentsDefinition {
  spaceRequired?: number; // defaults to 1, takes this much space in addition to the default space claims of default components
  Component: FC<any>;
}

export type AppBarExtraComponentsHook = () => AppBarExtraComponentsDefinition;

export const HeaderContent = () => {
  const { /*i18n, */ menuOrientation } = useConfig();

  const { service: appBarExtraComponentsHook } =
    useTrackService<AppBarExtraComponentsHook>(AppBarExtraComponentsFilter);
  const appBarExtraComponentsDefinition: AppBarExtraComponentsDefinition | undefined = appBarExtraComponentsHook?.();
  const appBarExtraSpaceClaim: number = appBarExtraComponentsDefinition?.spaceRequired ?? 1;

  const { downLG, isMenuOrientationHorizontal } = useLayoutHelper();

  return (
    <Grid container alignItems="center">
      {isMenuOrientationHorizontal && (
        <Grid item xs={2}>
          <DrawerHeader open={true} />
        </Grid>
      )}
      {isMenuOrientationHorizontal && (
        <Grid item xs={8 - appBarExtraSpaceClaim}>
          <HorizontalBar />
        </Grid>
      )}
      {(downLG || menuOrientation !== MenuOrientation.HORIZONTAL) && <Grid item xs={10 - appBarExtraSpaceClaim} />}
      <Grid item xs={2 + appBarExtraSpaceClaim}>
        <Grid container justifyContent="flex-end">
          {appBarExtraComponentsDefinition && <appBarExtraComponentsDefinition.Component />}
          <Customization />
          <HeaderProfile />
        </Grid>
      </Grid>
    </Grid>
  );
};
