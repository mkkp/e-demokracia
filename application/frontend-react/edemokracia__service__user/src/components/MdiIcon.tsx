//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/MdiIcon.tsx'
// Template name: actor/src/components/MdiIcon.tsx
// Template file: actor/src/components/MdiIcon.tsx.hbs

import Box from '@mui/material/Box';
import { mapIcon, mapMimeTypeIcon } from '../utilities/icons';

import { useMemo } from 'react';
import { defaultScales } from '~/config';
import { useLayoutHelper } from '~/utilities/layout-helper';

export interface MdiIconProps {
  className?: string;
  path: string;
  iconSize?: string;
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
  const { className, path, iconSize, rotate, flip, spin, color, mimeType, sx } = props;
  const mappedPath = mimeType ? mapMimeTypeIcon(mimeType.type, mimeType.subType, mapIcon(path)) : mapIcon(path);

  const layoutHelper = useLayoutHelper();

  const style = useMemo(() => {
    let style = {};
    if (layoutHelper.isSm) {
      style = {
        color,
        width: `${defaultScales.scaleXs}rem`,
        fontSize: `${iconSize ?? 'xs'}`,
        height: `${defaultScales.scaleXs}rem`,
        lineHeight: `${defaultScales.scaleXs}rem`,
      };
    } else if (layoutHelper.isSm) {
      style = {
        color,
        width: `${defaultScales.scaleSm}rem`,
        fontSize: `${iconSize ?? 'sm'}`,
        height: `${defaultScales.scaleSm}rem`,
        lineHeight: `${defaultScales.scaleSm}rem`,
      };
    } else if (layoutHelper.isMd) {
      style = {
        color,
        width: `${defaultScales.scaleMd}rem`,
        fontSize: `${iconSize ?? 'md'}`,
        height: `${defaultScales.scaleMd}rem`,
        lineHeight: `${defaultScales.scaleMd}rem`,
      };
    } else if (layoutHelper.isLg) {
      style = {
        color,
        width: `${defaultScales.scaleLg}rem`,
        fontSize: `${iconSize ?? 'lg'}`,
        height: `${defaultScales.scaleLg}rem`,
        lineHeight: `${defaultScales.scaleLg}rem`,
      };
    } else if (layoutHelper.isXl) {
      style = {
        color,
        width: `${defaultScales.scaleXl}rem`,
        fontSize: `${iconSize ?? 'xl'}`,
        height: `${defaultScales.scaleXl}rem`,
        lineHeight: `${defaultScales.scaleXl}rem`,
      };
    }
    return style;
  }, [layoutHelper]);

  const classes = `mdi mdi-${mappedPath.replace(/_/g, '-').replace(/ /g, '')} ${
    rotate ? `mdi-rotate-${rotate}` : ''
  } ${flip ? `mdi-flip-${flip}` : ''} ${spin ? 'mdi-spin' : ''}`
    .trim()
    .concat(' JUDO-mdi-icon ' + (className ?? ''))
    .trim();

  return (
    <Box sx={{ display: 'flex', ...(sx || {}) }}>
      <span className={classes} style={style}></span>
    </Box>
  );
};
