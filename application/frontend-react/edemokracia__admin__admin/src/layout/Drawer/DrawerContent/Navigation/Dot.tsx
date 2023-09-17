//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/DrawerContent/Navigation/Dot.tsx'
// Template name: actor/src/layout/Drawer/DrawerContent/Navigation/Dot.tsx
// Template file: actor/src/layout/Drawer/DrawerContent/Navigation/Dot.tsx.hbs

import { useTheme } from '@mui/material/styles';
import type { CSSObject, PaletteColor } from '@mui/material/styles';
import { Box } from '@mui/material';
import type { Palette } from '@mui/material';

export interface DotProps {
  color: keyof Palette;
  size?: number;
  variant?: string;
  sx?: CSSObject;
}

export const Dot = ({ color, size, variant, sx }: DotProps) => {
  const theme = useTheme();

  return (
    <Box
      component="span"
      sx={{
        width: size || 8,
        height: size || 8,
        borderRadius: '50%',
        ...(variant === 'outlined' && {
          border: `1px solid ${(theme.palette[color] as PaletteColor).main}`,
        }),
        ...sx,
      }}
    />
  );
};
