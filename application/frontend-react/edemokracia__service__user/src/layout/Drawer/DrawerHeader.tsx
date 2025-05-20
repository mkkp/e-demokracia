//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/DrawerHeader.tsx'
// Template name: actor/src/layout/Drawer/DrawerHeader.tsx
// Template file: actor/src/layout/Drawer/DrawerHeader.tsx.hbs

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { LogoSection } from '~/layout/logo';
import { useLayoutHelper } from '~/utilities/layout-helper';

export interface DrawerHeaderProps {
  open: boolean;
}

export const DrawerHeader = ({ open }: DrawerHeaderProps) => {
  const theme = useTheme();
  const { isMenuOrientationHorizontal } = useLayoutHelper();

  return (
    <Box
      sx={{
        ...theme.mixins.toolbar,
        display: 'flex',
        alignItems: 'center',
        justifyContent: open ? 'flex-start' : 'center',
        minHeight: isMenuOrientationHorizontal ? 'unset' : '60px',
        width: isMenuOrientationHorizontal ? { xs: '100%', lg: '424px' } : 'inherit',
        paddingTop: isMenuOrientationHorizontal ? { xs: '10px', lg: '0' } : '8px',
        paddingBottom: isMenuOrientationHorizontal ? { xs: '18px', lg: '0' } : '8px',
        paddingLeft: isMenuOrientationHorizontal ? { xs: '24px', lg: '0' } : open ? '24px' : 0,
        paddingRight: isMenuOrientationHorizontal ? { xs: '24px', lg: '0' } : open ? '24px' : 0,
      }}
    >
      <LogoSection isIcon={!open} sx={{ width: open ? 'auto' : 35, height: 35 }} />
    </Box>
  );
};
