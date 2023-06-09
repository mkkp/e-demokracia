//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/utilities/application/change-application.ts'
// Template name: actor/src/utilities/application/change-application.ts
// Template file: actor/src/utilities/application/change-application.ts.hbs

import type { HandleApplicationChange } from './interfaces';

export const changeApplication: HandleApplicationChange = (applicationKey: string) => {
  const { pathname, origin } = window.location;
  const base = pathname.startsWith('/') ? pathname.substring(1) : pathname;
  const root: string = base.substring(0, base.indexOf('/'));

  window.location.href = origin + '/' + root + '/' + applicationKey;
};
