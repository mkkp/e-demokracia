//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/MdiIcon.tsx'
// Template name: actor/src/components/MdiIcon.tsx
// Template file: actor/src/components/MdiIcon.tsx.hbs

import { Box } from '@mui/material';
import { mapIcon, mapMimeTypeIcon } from '../utilities/icons';

export interface MdiIconProps {
  path: string;
  rotate?: 45 | 90 | 135 | 180 | 225 | 270 | 315;
  flip?: 'h' | 'v';
  spin?: boolean;
  color?: string;
  mimeType?: {
    type: string;
    subType?: string;
  };
  sx?: any;
}

export const MdiIcon = (props: MdiIconProps) => {
  const { path, rotate, flip, spin, color, mimeType, sx } = props;
  const mappedPath = mimeType ? mapMimeTypeIcon(mimeType.type, mimeType.subType, mapIcon(path)) : mapIcon(path);
  const style = {
    color,
    width: '1rem',
    fontSize: 'large',
    height: '1rem',
    lineHeight: '1rem',
  };
  const className = `mdi mdi-${mappedPath.replace(/_/g, '-').replace(/ /g, '')} ${
    rotate ? `mdi-rotate-${rotate}` : ''
  } ${flip ? `mdi-flip-${flip}` : ''} ${spin ? 'mdi-spin' : ''}`.trim();

  return (
    <Box sx={{ display: 'flex', ...(sx || {}) }}>
      <span className={className} style={style}></span>
    </Box>
  );
};
