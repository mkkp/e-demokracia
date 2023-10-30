//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';

export interface ServiceDistrict {
  name: string;
  county?: null | string;
  city?: null | string;
  representation?: null | string;
}
export type ServiceDistrictAttributes = 'name' | 'county' | 'city' | 'representation';

export interface ServiceDistrictStored extends JudoStored<ServiceDistrict>, ServiceDistrict {}
