//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceCity } from './ServiceCity';
import { ServiceCityStored } from './ServiceCity';
import { ServiceCounty } from './ServiceCounty';
import { ServiceCountyStored } from './ServiceCounty';
import { ServiceDistrict } from './ServiceDistrict';
import { ServiceDistrictStored } from './ServiceDistrict';
import { ServiceSimpleVote } from './ServiceSimpleVote';
import { ServiceSimpleVoteStored } from './ServiceSimpleVote';

export interface ServiceServiceUser {
  created?: null | Date;
  email: string;
  firstName: string;
  isAdmin: boolean;
  lastName: string;
  phone?: null | string;
  representation?: null | string;
  userName: string;
  activityCities?: null | Array<ServiceCityStored>;
  activityCounties?: null | Array<ServiceCountyStored>;
  activityDistricts?: null | Array<ServiceDistrictStored>;
  residentCity?: null | ServiceCityStored;
  residentCounty?: null | ServiceCountyStored;
  residentDistrict?: null | ServiceDistrictStored;
  votes?: null | Array<ServiceSimpleVoteStored>;
}

export type ServiceServiceUserAttributes =
  | 'created'
  | 'email'
  | 'firstName'
  | 'isAdmin'
  | 'lastName'
  | 'phone'
  | 'representation'
  | 'userName';
export type ServiceServiceUserRelations =
  | 'activityCities'
  | 'activityCounties'
  | 'activityDistricts'
  | 'residentCity'
  | 'residentCounty'
  | 'residentDistrict'
  | 'votes';

export interface ServiceServiceUserStored extends JudoStored<ServiceServiceUser>, ServiceServiceUser {}
