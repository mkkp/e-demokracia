//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/hooks/useHeroProps.ts'
// Template name: actor/src/hooks/useHeroProps.ts
// Template file: actor/src/hooks/useHeroProps.ts.hbs

import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { getUser } from '../auth';

export const CUSTOM_HERO_PROPS_HOOK_INTERFACE_KEY = 'CustomHeroPropsHook';
export type CustomHeroPropsHook = () => (defaults: UseHeroProps) => UseHeroProps;

export interface UseHeroProps {
  imgSrc: string;
  actorName: string;
  preferredUsername?: string;
  email?: string;
}

export function useHeroProps(): UseHeroProps {
  const { profile } = getUser();
  const defaults: UseHeroProps = {
    imgSrc: 'ninja.png',
    actorName: 'User',
    preferredUsername: profile?.preferred_username,
    email: profile?.email,
  };
  const { service: useCustomHeroProps } = useTrackService<CustomHeroPropsHook>(
    `(${OBJECTCLASS}=${CUSTOM_HERO_PROPS_HOOK_INTERFACE_KEY})`,
  );
  const getCustomHeroProps = useCustomHeroProps && useCustomHeroProps();

  return getCustomHeroProps ? getCustomHeroProps(defaults) : defaults;
}
