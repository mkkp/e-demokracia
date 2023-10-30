//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Header/index.tsx'
// Template name: actor/src/layout/Header/index.tsx
// Template file: actor/src/layout/Header/index.tsx.hbs

import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar, useMediaQuery, IconButton } from '@mui/material';
import type { AppBarProps } from '@mui/material';
import { useConfig } from '~/hooks';
import { MenuOrientation, ThemeMode } from '~/config';
import { MdiIcon } from '~/components';
import { AppBarStyled } from './AppBarStyled';
import { HeaderContent } from './HeaderContent';

export const Header = () => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));
  const { menuOrientation, miniDrawer, onChangeMiniDrawer } = useConfig();

  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  const headerContent = useMemo(() => <HeaderContent />, []);

  const iconBackColorOpen = theme.palette.mode === ThemeMode.DARK ? 'grey.200' : 'grey.300';
  const iconBackColor = theme.palette.mode === ThemeMode.DARK ? 'background.default' : 'grey.100';

  const mainHeader: ReactNode = (
    <Toolbar>
      {!isHorizontal ? (
        <IconButton aria-label="open drawer" onClick={() => onChangeMiniDrawer(!miniDrawer)}>
          {!miniDrawer ? <MdiIcon path="menu-open" /> : <MdiIcon path="menu" />}
        </IconButton>
      ) : null}
      {headerContent}
    </Toolbar>
  );

  const appBar: AppBarProps = {
    position: 'fixed',
    color: 'inherit',
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      zIndex: 1200,
      width: isHorizontal ? '100%' : !miniDrawer ? 'calc(100% - 260px)' : { xs: '100%', lg: 'calc(100% - 60px)' },
    },
  };

  return (
    <>
      {!downLG ? (
        <AppBarStyled open={!miniDrawer} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
};
