//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';
import { ServiceDistrict } from './ServiceDistrict';
import { ServiceDistrictStored } from './ServiceDistrict';

export interface ServiceCity {
  county?: null | string;
  name: string;
  representation?: null | string;
  districts?: null | Array<ServiceDistrictStored>;
}

export type ServiceCityAttributes = 'county' | 'name' | 'representation';
export type ServiceCityRelations = 'districts';

export interface ServiceCityStored extends JudoStored<ServiceCity>, ServiceCity {}
