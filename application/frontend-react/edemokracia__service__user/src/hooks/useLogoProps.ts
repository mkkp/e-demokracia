//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/hooks/useLogoProps.ts'
// Template name: actor/src/hooks/useLogoProps.ts
// Template file: actor/src/hooks/useLogoProps.ts.hbs

export interface UseLogoProps {
  subTitle: string;
  imgSrc: string;
  iconSrc: string;
}

export function useLogoProps(): UseLogoProps {
  return {
    imgSrc: 'mkkp-logo.png',
    iconSrc: 'mkkp-circle-96x96.webp',
    subTitle: 'edemokracia',
  };
}
