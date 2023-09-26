//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminDebateStored } from './AdminDebate';

export interface AdminUserDebates {
  activeDebatesGlobal?: null | Array<AdminDebateStored>;
  activeDebatesInActivityCities?: null | Array<AdminDebateStored>;
  activeDebatesInActivityDistricts?: null | Array<AdminDebateStored>;
  activeDebatesInActivityCounties?: null | Array<AdminDebateStored>;
  activeDebatesInResidentCounty?: null | Array<AdminDebateStored>;
  activeDebatesInResidentCity?: null | Array<AdminDebateStored>;
  activeDebatesInResidentDistrict?: null | Array<AdminDebateStored>;
  ownedDebates?: null | Array<AdminDebateStored>;
}
export type AdminUserDebatesAttributes = '';

export type AdminUserDebatesRelations =
  | 'activeDebatesGlobal'
  | 'activeDebatesInActivityCities'
  | 'activeDebatesInActivityDistricts'
  | 'activeDebatesInActivityCounties'
  | 'activeDebatesInResidentCounty'
  | 'activeDebatesInResidentCity'
  | 'activeDebatesInResidentDistrict'
  | 'ownedDebates';

export interface AdminUserDebatesStored extends JudoStored<AdminUserDebates>, AdminUserDebates {}
