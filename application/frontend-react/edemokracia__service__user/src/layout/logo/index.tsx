//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/logo/index.tsx'
// Template name: actor/src/layout/logo/index.tsx
// Template file: actor/src/layout/logo/index.tsx.hbs

import ButtonBase from '@mui/material/ButtonBase';
import type { SxProps } from '@mui/system';
import { Link } from 'react-router-dom';
import { routeToDashboard } from '~/routes';
import { LogoIcon } from './LogoIcon';
import { LogoMain } from './LogoMain';

export interface LogoSectionProps {
  reverse?: boolean;
  isIcon?: boolean;
  sx?: SxProps;
  to?: any;
}

export const LogoSection = ({ reverse, isIcon, sx, to }: LogoSectionProps) => (
  <ButtonBase disableRipple component={Link} to={!to ? routeToDashboard() : to} sx={sx}>
    {isIcon ? <LogoIcon /> : <LogoMain reverse={reverse} />}
  </ButtonBase>
);
