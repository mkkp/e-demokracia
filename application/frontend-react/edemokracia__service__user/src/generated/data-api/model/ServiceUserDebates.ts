//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceDebateStored } from './ServiceDebate';

export interface ServiceUserDebates {
  activeDebatesGlobal?: null | Array<ServiceDebateStored>;
  activeDebatesInActivityCities?: null | Array<ServiceDebateStored>;
  activeDebatesInActivityDistricts?: null | Array<ServiceDebateStored>;
  activeDebatesInActivityCounties?: null | Array<ServiceDebateStored>;
  activeDebatesInResidentCounty?: null | Array<ServiceDebateStored>;
  activeDebatesInResidentCity?: null | Array<ServiceDebateStored>;
  activeDebatesInResidentDistrict?: null | Array<ServiceDebateStored>;
  ownedDebates?: null | Array<ServiceDebateStored>;
}
export type ServiceUserDebatesAttributes = '';

export type ServiceUserDebatesRelations =
  | 'activeDebatesGlobal'
  | 'activeDebatesInActivityCities'
  | 'activeDebatesInActivityDistricts'
  | 'activeDebatesInActivityCounties'
  | 'activeDebatesInResidentCounty'
  | 'activeDebatesInResidentCity'
  | 'activeDebatesInResidentDistrict'
  | 'ownedDebates';

export interface ServiceUserDebatesStored extends JudoStored<ServiceUserDebates>, ServiceUserDebates {}
