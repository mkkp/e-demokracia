//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/utilities/application/change-application.ts'
// Template name: actor/src/utilities/application/change-application.ts
// Template file: actor/src/utilities/application/change-application.ts.hbs

import { clearSecurityStorage } from '~/auth';
import type { HandleApplicationChange } from './interfaces';

export const changeApplication: HandleApplicationChange = (applicationKey: string) => {
  clearSecurityStorage();
  const { origin } = window.location;
  window.location.href = origin + '/' + applicationKey;
};
