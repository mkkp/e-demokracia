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
import { AdminSimpleVoteStored } from './AdminSimpleVote';

export interface AdminUser {
  firstName: string;
  lastName: string;
  phone?: null | string;
  email: string;
  isAdmin: boolean;
  created?: null | Date;
  userName: string;
  representation?: null | string;

  votes?: null | Array<AdminSimpleVoteStored>;
  activityCounties?: null | Array<AdminCountyStored>;
  residentCounty?: null | AdminCountyStored;
  activityCities?: null | Array<AdminCityStored>;
  residentCity?: null | AdminCityStored;
  activityDistricts?: null | Array<AdminDistrictStored>;
  residentDistrict?: null | AdminDistrictStored;
}
export type AdminUserAttributes =
  | 'firstName'
  | 'lastName'
  | 'phone'
  | 'email'
  | 'isAdmin'
  | 'created'
  | 'userName'
  | 'representation';

export type AdminUserRelations =
  | 'votes'
  | 'activityCounties'
  | 'residentCounty'
  | 'activityCities'
  | 'residentCity'
  | 'activityDistricts'
  | 'residentDistrict';

export interface AdminUserStored extends JudoStored<AdminUser>, AdminUser {}
