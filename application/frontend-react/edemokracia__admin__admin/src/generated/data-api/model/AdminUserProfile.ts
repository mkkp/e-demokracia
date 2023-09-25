//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminCityStored } from './AdminCity';
import { AdminCountyStored } from './AdminCounty';
import { AdminDistrictStored } from './AdminDistrict';

export interface AdminUserProfile {
  lastName: string;
  userName?: null | string;
  firstName: string;
  email: string;
  phone?: null | string;
  representation?: null | string;

  activityCounties?: null | Array<AdminCountyStored>;
  residentCounty?: null | AdminCountyStored;
  activityCities?: null | Array<AdminCityStored>;
  residentCity?: null | AdminCityStored;
  activityDistricts?: null | Array<AdminDistrictStored>;
  residentDistrict?: null | AdminDistrictStored;
}
export type AdminUserProfileAttributes = 'lastName' | 'userName' | 'firstName' | 'email' | 'phone' | 'representation';

export type AdminUserProfileRelations =
  | 'activityCounties'
  | 'residentCounty'
  | 'activityCities'
  | 'residentCity'
  | 'activityDistricts'
  | 'residentDistrict';

export interface AdminUserProfileStored extends JudoStored<AdminUserProfile>, AdminUserProfile {}
