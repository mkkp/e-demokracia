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
import { ServiceCounty } from './ServiceCounty';
import { ServiceCountyStored } from './ServiceCounty';
import { ServiceDistrict } from './ServiceDistrict';
import { ServiceDistrictStored } from './ServiceDistrict';

export interface ServiceUserProfile {
  email: string;
  firstName: string;
  lastName: string;
  phone?: null | string;
  representation?: null | string;
  userName?: null | string;
  activityCities?: null | Array<ServiceCityStored>;
  activityCounties?: null | Array<ServiceCountyStored>;
  activityDistricts?: null | Array<ServiceDistrictStored>;
  residentCity?: null | ServiceCityStored;
  residentCounty?: null | ServiceCountyStored;
  residentDistrict?: null | ServiceDistrictStored;
}

export type ServiceUserProfileAttributes = 'email' | 'firstName' | 'lastName' | 'phone' | 'representation' | 'userName';
export type ServiceUserProfileRelations =
  | 'activityCities'
  | 'activityCounties'
  | 'activityDistricts'
  | 'residentCity'
  | 'residentCounty'
  | 'residentDistrict';

export interface ServiceUserProfileStored extends JudoStored<ServiceUserProfile>, ServiceUserProfile {}
