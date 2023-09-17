//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/DrawerHeader/index.tsx'
// Template name: actor/src/layout/Drawer/DrawerHeader/index.tsx
// Template file: actor/src/layout/Drawer/DrawerHeader/index.tsx.hbs

import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { DrawerHeaderStyled } from './DrawerHeaderStyled';
import { LogoSection } from '../../logo';
import { useConfig } from '~/hooks';
import { MenuOrientation } from '~/config';

export interface DrawerHeaderProps {
  open: boolean;
}

export const DrawerHeader = ({ open }: DrawerHeaderProps) => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { menuOrientation } = useConfig();
  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  return (
    <DrawerHeaderStyled
      theme={theme}
      open={open}
      sx={{
        minHeight: isHorizontal ? 'unset' : '60px',
        width: isHorizontal ? { xs: '100%', lg: '424px' } : 'inherit',
        paddingTop: isHorizontal ? { xs: '10px', lg: '0' } : '8px',
        paddingBottom: isHorizontal ? { xs: '18px', lg: '0' } : '8px',
        paddingLeft: isHorizontal ? { xs: '24px', lg: '0' } : open ? '24px' : 0,
      }}
    >
      <LogoSection isIcon={!open} sx={{ width: open ? 'auto' : 35, height: 35 }} />
    </DrawerHeaderStyled>
  );
};
