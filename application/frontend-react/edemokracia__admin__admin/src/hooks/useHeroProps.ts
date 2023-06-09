//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/hooks/useHeroProps.ts'
// Template name: actor/src/hooks/useHeroProps.ts
// Template file: actor/src/hooks/useHeroProps.ts.hbs

import type { HeroProps } from '../components-api';
import { getUser } from '../auth';

export function useHeroProps(): HeroProps {
  const { profile } = getUser();

  return {
    imgSrc: 'ninja.png',
    actorName: 'Admin',
    preferredUsername: profile?.preferred_username,
    email: profile?.email,
  };
}
