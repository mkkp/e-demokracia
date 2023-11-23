//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/SimpleBar.tsx'
// Template name: actor/src/components/SimpleBar.tsx
// Template file: actor/src/components/SimpleBar.tsx.hbs

import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import type { Theme } from '@mui/material';
import type { MUIStyledCommonProps } from '@mui/system';
import { default as SimpleBarOriginal } from 'simplebar-react';
import type { Props as SimpleBarProps } from 'simplebar-react';
import { BrowserView, MobileView } from 'react-device-detect';

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

export const SimpleBar = forwardRef<HTMLDivElement, MUIStyledCommonProps<Theme> & SimpleBarProps>(
  ({ children, sx, ...other }: MUIStyledCommonProps<Theme> & SimpleBarProps, ref) => {
    return (
      <div ref={ref}>
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
      </div>
    );
  },
);
