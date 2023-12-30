//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';
import { ServiceCity } from './ServiceCity';
import { ServiceCityStored } from './ServiceCity';

export interface ServiceCounty {
  name: string;
  representation?: null | string;
  cities?: null | Array<ServiceCityStored>;
}

export type ServiceCountyAttributes = 'name' | 'representation';
export type ServiceCountyRelations = 'cities';

export interface ServiceCountyStored extends JudoStored<ServiceCounty>, ServiceCounty {}
