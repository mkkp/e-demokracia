//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Header/index.tsx'
// Template name: actor/src/layout/Header/index.tsx
// Template file: actor/src/layout/Header/index.tsx.hbs

import type { AppBarProps } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { MdiIcon } from '~/components';
import { DRAWER_WIDTH, MenuOrientation } from '~/config';
import { useConfig } from '~/hooks';
import { AppBarStyled } from '~/layout/Header/AppBarStyled';
import { HeaderContent } from '~/layout/Header/HeaderContent';

export const Header = () => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));
  const { menuOrientation, miniDrawer, onChangeMiniDrawer } = useConfig();

  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL;

  const headerContent = useMemo(() => <HeaderContent />, []);

  const mainHeader: ReactNode = (
    <Toolbar>
      {!isHorizontal ? (
        <IconButton aria-label="open drawer" color="secondary" onClick={() => onChangeMiniDrawer(!miniDrawer)}>
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
      width: isHorizontal
        ? '100%'
        : !miniDrawer
          ? `calc(100% - ${DRAWER_WIDTH}px)`
          : { xs: '100%', lg: 'calc(100% - 60px)' },
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
