//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/index.tsx'
// Template name: actor/src/layout/Drawer/index.tsx
// Template file: actor/src/layout/Drawer/index.tsx.hbs

import { Divider, IconButton, styled } from '@mui/material';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { MdiIcon } from '~/components';
import { DRAWER_WIDTH, ThemeMode } from '~/config';
import { useConfig } from '~/hooks';
import { DrawerContent } from '~/layout/Drawer/DrawerContent';
import { DrawerProfile } from '~/layout/Drawer/DrawerContent/DrawerProfile';
import { DrawerHeader } from '~/layout/Drawer/DrawerHeader';
import { MiniDrawerStyled } from '~/layout/Drawer/MiniDrawerStyled';
import { useLayoutHelper } from '~/utilities/layout-helper';

export interface DrawerProps {
  window?: () => Window;
}

const BottomSection = styled('div')({
  marginTop: 'auto',
  paddingBotttom: '16px',
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
  const { downSM, downMD, downLG, isXs, isSm, isMd, isLg, isXl } = useLayoutHelper();

  const [size, setSize] = useState<string | undefined>(undefined);
  const prevSizeRef = useRef<string | undefined>(undefined);

  const getSize = useCallback(() => {
    if (isXs) return 'xs';
    if (isSm) return 'sm';
    if (isMd) return 'md';
    if (isLg) return 'lg';
    if (isXl) return 'xl';
  }, [isXs, isSm, isMd, isLg, isXl]);

  useEffect(() => {
    setSize(getSize());
  }, [getSize]);

  useEffect(() => {
    // console.log("Change: "  + prevSizeRef.current + " => " + size );
    if (prevSizeRef.current && prevSizeRef.current == 'md' && size == 'sm') {
      onChangeMiniDrawer(true);
    } else if (prevSizeRef.current && prevSizeRef.current == 'lg' && size == 'md') {
      onChangeMiniDrawer(true);
    } else if (prevSizeRef.current && prevSizeRef.current == 'md' && size == 'lg') {
      onChangeMiniDrawer(false);
    }
    prevSizeRef.current = size;
  }, [size]);

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={!miniDrawer} />, [!miniDrawer]);

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1200 }} aria-label="mailbox folders">
      {!downSM ? (
        <MiniDrawerStyled variant="permanent" open={!miniDrawer}>
          <ToggleButton onClick={() => onChangeMiniDrawer(!miniDrawer)} size="medium">
            {miniDrawer ? (
              <MdiIcon path="chevron-right" sx={{ fontSize: 16 }} />
            ) : (
              <MdiIcon path="chevron-left" sx={{ fontSize: 16 }} />
            )}
          </ToggleButton>
          {drawerHeader}
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
          {drawerContent}
        </MuiDrawer>
      )}
    </Box>
  );
};
