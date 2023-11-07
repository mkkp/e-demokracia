//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceDistrict } from './ServiceDistrict';
import { ServiceDistrictStored } from './ServiceDistrict';

export interface ServiceCity {
  name: string;
  county?: null | string;
  representation?: null | string;

  districts?: null | Array<ServiceDistrictStored>;
}
export type ServiceCityAttributes = 'name' | 'county' | 'representation';

export type ServiceCityRelations = 'districts';

export interface ServiceCityStored extends JudoStored<ServiceCity>, ServiceCity {}
