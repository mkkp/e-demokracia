//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Header/AppBarExtraStyles.tsx'
// Template name: actor/src/layout/Header/AppBarExtraStyles.tsx
// Template file: actor/src/layout/Header/AppBarExtraStyles.tsx.hbs

import { type AppBarProps } from '@mui/material';
import { type Theme } from '@mui/material';

export interface AppBarStyledProps extends AppBarProps {
  open?: boolean;
}

export const appBarExtraStyles = (theme: Theme, open: boolean | undefined) =>
  ({
    textTransform: 'uppercase',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    button: {
      fontWeight: 'bold',
    },
  }) as unknown as AppBarStyledProps;
