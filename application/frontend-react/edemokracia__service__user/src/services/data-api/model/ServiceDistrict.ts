//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';

export interface ServiceDistrict {
  city?: null | string;
  county?: null | string;
  name: string;
  representation?: null | string;
}

export type ServiceDistrictAttributes = 'city' | 'county' | 'name' | 'representation';

export interface ServiceDistrictStored extends JudoStored<ServiceDistrict>, ServiceDistrict {}
