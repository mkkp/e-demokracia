//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import { JudoStored } from '@judo/data-api-common';

export interface AdminDistrict {
  name: string;
  county?: null | string;
  city?: null | string;
  representation?: null | string;
}
export type AdminDistrictAttributes = 'name' | 'county' | 'city' | 'representation';

export interface AdminDistrictStored extends JudoStored<AdminDistrict>, AdminDistrict {}
