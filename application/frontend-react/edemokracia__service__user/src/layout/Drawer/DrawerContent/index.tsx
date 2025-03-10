//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/DrawerContent/index.tsx'
// Template name: actor/src/layout/Drawer/DrawerContent/index.tsx
// Template file: actor/src/layout/Drawer/DrawerContent/index.tsx.hbs

import { SimpleBar } from '~/components';
import { Navigation } from './Navigation';

export const DrawerContent = () => {
  return (
    <SimpleBar
      sx={{
        '& .simplebar-content': {
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Navigation />
    </SimpleBar>
  );
};
