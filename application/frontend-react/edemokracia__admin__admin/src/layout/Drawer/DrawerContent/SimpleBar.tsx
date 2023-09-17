//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/DrawerContent/SimpleBar.tsx'
// Template name: actor/src/layout/Drawer/DrawerContent/SimpleBar.tsx
// Template file: actor/src/layout/Drawer/DrawerContent/SimpleBar.tsx.hbs

import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import type { Theme } from '@mui/material';
import { default as SimpleBarOriginal } from 'simplebar-react';
import type { Props as SimpleBarProps } from 'simplebar-react';
import { BrowserView, MobileView } from 'react-device-detect';
import type { MUIStyledCommonProps } from '@mui/system';
import type { ReactNode } from 'react';

import 'simplebar-react/dist/simplebar.min.css';

const RootStyle = styled(BrowserView)({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
});

export const SimpleBarStyle = styled(SimpleBarOriginal)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[500], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));

export function SimpleBar({ children, sx, ...other }: MUIStyledCommonProps<Theme> & SimpleBarProps) {
  return (
    <>
      <RootStyle>
        <SimpleBarStyle clickOnTrack={false} sx={sx} {...other}>
          {children as ReactNode}
        </SimpleBarStyle>
      </RootStyle>
      <MobileView>
        <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
          {children as ReactNode}
        </Box>
      </MobileView>
    </>
  );
}
