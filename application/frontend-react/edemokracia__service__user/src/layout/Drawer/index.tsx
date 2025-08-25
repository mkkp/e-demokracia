//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/index.tsx'
// Template name: actor/src/layout/Drawer/index.tsx
// Template file: actor/src/layout/Drawer/index.tsx.hbs

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { useEffect, useMemo, useRef } from 'react';
import { MdiIcon } from '~/components';
import { DRAWER_WIDTH, ThemeMode } from '~/config';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { useConfig } from '~/hooks';
import { DrawerContent } from '~/layout/Drawer/DrawerContent';
import { DrawerProfile } from '~/layout/Drawer/DrawerContent/DrawerProfile';
import { DrawerHeader } from '~/layout/Drawer/DrawerHeader';
import { MiniDrawerStyled } from '~/layout/Drawer/MiniDrawerStyled';
import { useLayoutHelper } from '~/utilities/layout-helper';
import { AppBarExtraComponentsDefinition, AppBarExtraComponentsHook } from '../Header/HeaderContent';

export interface DrawerProps {
  window?: () => Window;
}

const AppBarExtraComponentsFilter = `(&(${OBJECTCLASS}=${CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY})(component=AppBarExtraComponents))`;

const BottomSection = styled('div')({
  marginTop: 'auto',
  //paddingBottom: '16px',
  position: 'relative',
  bottom: 0,
  left: 0,
  right: 0,
});

const ToggleButton = styled(IconButton)(({ theme }) => ({
  zIndex: 1300,
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.mode === ThemeMode.DARK ? theme.palette.grey[800] : theme.palette.grey[200],
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  width: 16,
  maxWidth: 16,
  height: 64,
  borderRadius: 0,
}));

export const Drawer = ({ window }: DrawerProps) => {
  const theme = useTheme();
  const { miniDrawer, onChangeMiniDrawer } = useConfig();

  const { size, downSM, isXs, isSm, isMd, isLg, isXl } = useLayoutHelper();
  const prevSizeRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    // console.log('Change: ' + prevSizeRef.current + ' => ' + size);
    if (
      prevSizeRef.current &&
      (prevSizeRef.current == 'md' || prevSizeRef.current == 'lg' || prevSizeRef.current == 'xl') &&
      (size == 'sm' || size == 'xs')
    ) {
      onChangeMiniDrawer(true);
    } else if (prevSizeRef.current && (prevSizeRef.current == 'lg' || prevSizeRef.current == 'xl') && size == 'md') {
      onChangeMiniDrawer(true);
    } else if (
      prevSizeRef.current &&
      (prevSizeRef.current == 'md' || prevSizeRef.current == 'sm' || prevSizeRef.current == 'xs') &&
      (size == 'lg' || size == 'xl')
    ) {
      onChangeMiniDrawer(false);
    } else if (!prevSizeRef.current && (size == 'sm' || size == 'xs')) {
      onChangeMiniDrawer(true);
    }
    prevSizeRef.current = size;
  }, [size]);

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={!miniDrawer} />, [!miniDrawer]);

  const { service: appBarExtraComponentsHook } =
    useTrackService<AppBarExtraComponentsHook>(AppBarExtraComponentsFilter);
  const appBarExtraComponentsDefinition: AppBarExtraComponentsDefinition | undefined = appBarExtraComponentsHook?.();

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1200 }} aria-label="mailbox folders">
      {!downSM ? (
        <MiniDrawerStyled variant="permanent" open={!miniDrawer}>
          {!isXs && !isSm ? (
            <ToggleButton onClick={() => onChangeMiniDrawer(!miniDrawer)} size="medium">
              {miniDrawer ? (
                <MdiIcon path="chevron-right" sx={{ fontSize: 16 }} />
              ) : (
                <MdiIcon path="chevron-left" sx={{ fontSize: 16 }} />
              )}
            </ToggleButton>
          ) : (
            <></>
          )}

          {drawerHeader}

          {appBarExtraComponentsDefinition && <appBarExtraComponentsDefinition.Component />}

          {drawerContent}

          <BottomSection>
            <Divider />
            <DrawerProfile />
            <Divider />
          </BottomSection>
        </MiniDrawerStyled>
      ) : (
        <MuiDrawer
          container={container}
          variant="temporary"
          open={!miniDrawer}
          onClose={() => onChangeMiniDrawer(!miniDrawer)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              borderRight: `1px solid ${theme.palette.divider}`,
              backgroundImage: 'none',
              boxShadow: 'inherit',
            },
          }}
        >
          {drawerHeader}
          {appBarExtraComponentsDefinition && <appBarExtraComponentsDefinition.Component />}
          {drawerContent}
        </MuiDrawer>
      )}
    </Box>
  );
};
