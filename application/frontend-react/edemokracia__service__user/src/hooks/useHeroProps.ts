//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/hooks/useHeroProps.ts'
// Template name: actor/src/hooks/useHeroProps.ts
// Template file: actor/src/hooks/useHeroProps.ts.hbs

import { getUser } from '../auth';

export interface UseHeroProps {
  imgSrc: string;
  actorName: string;
  preferredUsername?: string;
  email?: string;
}

export function useHeroProps(): UseHeroProps {
  const { profile } = getUser();

  return {
    imgSrc: 'ninja.png',
    actorName: 'User',
    preferredUsername: profile?.preferred_username,
    email: profile?.email,
  };
}
