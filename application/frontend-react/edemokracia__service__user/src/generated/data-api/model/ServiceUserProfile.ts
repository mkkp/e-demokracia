//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceCityStored } from './ServiceCity';
import { ServiceCountyStored } from './ServiceCounty';
import { ServiceDistrictStored } from './ServiceDistrict';

export interface ServiceUserProfile {
  lastName: string;
  userName?: null | string;
  firstName: string;
  email: string;
  phone?: null | string;
  representation?: null | string;

  activityCounties?: null | Array<ServiceCountyStored>;
  residentCounty?: null | ServiceCountyStored;
  activityCities?: null | Array<ServiceCityStored>;
  residentCity?: null | ServiceCityStored;
  activityDistricts?: null | Array<ServiceDistrictStored>;
  residentDistrict?: null | ServiceDistrictStored;
}
export type ServiceUserProfileAttributes = 'lastName' | 'userName' | 'firstName' | 'email' | 'phone' | 'representation';

export type ServiceUserProfileRelations =
  | 'activityCounties'
  | 'residentCounty'
  | 'activityCities'
  | 'residentCity'
  | 'activityDistricts'
  | 'residentDistrict';

export interface ServiceUserProfileStored extends JudoStored<ServiceUserProfile>, ServiceUserProfile {}
