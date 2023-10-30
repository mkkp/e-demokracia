//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/logo/LogoMain.tsx'
// Template name: actor/src/layout/logo/LogoMain.tsx
// Template file: actor/src/layout/logo/LogoMain.tsx.hbs

import { useLogoProps } from '~/hooks';

export const LogoMain = ({ reverse, ...others }: { reverse?: boolean }) => {
  // const theme = useTheme(); // we an use theme in the future to detect light/dark modes
  const logoProps = useLogoProps();

  return <img src={logoProps.imgSrc} style={{ height: '100%', maxWidth: '100%' }} />;
};
