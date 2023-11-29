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
  firstName: string;
  lastName: string;
  phone?: null | string;
  email: string;
  isAdmin: boolean;
  created?: null | Date;
  userName: string;
  representation?: null | string;
  votes?: null | Array<ServiceSimpleVoteStored>;
  activityCounties?: null | Array<ServiceCountyStored>;
  residentCounty?: null | ServiceCountyStored;
  activityCities?: null | Array<ServiceCityStored>;
  residentCity?: null | ServiceCityStored;
  activityDistricts?: null | Array<ServiceDistrictStored>;
  residentDistrict?: null | ServiceDistrictStored;
}

export type ServiceServiceUserAttributes =
  | 'firstName'
  | 'lastName'
  | 'phone'
  | 'email'
  | 'isAdmin'
  | 'created'
  | 'userName'
  | 'representation';
export type ServiceServiceUserRelations =
  | 'votes'
  | 'activityCounties'
  | 'residentCounty'
  | 'activityCities'
  | 'residentCity'
  | 'activityDistricts'
  | 'residentDistrict';

export interface ServiceServiceUserStored extends JudoStored<ServiceServiceUser>, ServiceServiceUser {}
