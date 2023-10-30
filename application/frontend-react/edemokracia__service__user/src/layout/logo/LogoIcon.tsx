//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/logo/LogoIcon.tsx'
// Template name: actor/src/layout/logo/LogoIcon.tsx
// Template file: actor/src/layout/logo/LogoIcon.tsx.hbs

import { useLogoProps } from '~/hooks';

export const LogoIcon = () => {
  // const theme = useTheme(); // we an use theme in the future to detect light/dark modes
  const logoProps = useLogoProps();

  return <img src={logoProps.iconSrc} style={{ height: '100%', maxWidth: '100%', borderRadius: '50%' }} />;
};
