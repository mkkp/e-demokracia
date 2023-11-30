//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceIssue } from './ServiceIssue';
import { ServiceIssueStored } from './ServiceIssue';

export interface ServiceUserIssues {
  userName?: null | string;
  activeIssuesGlobal?: null | Array<ServiceIssueStored>;
  activeIssuesInActivityCities?: null | Array<ServiceIssueStored>;
  activeIssuesInActivityCounties?: null | Array<ServiceIssueStored>;
  activeIssuesInActivityDistricts?: null | Array<ServiceIssueStored>;
  activeIssuesInResidentCity?: null | Array<ServiceIssueStored>;
  activeIssuesInResidentCounty?: null | Array<ServiceIssueStored>;
  activeIssuesInResidentDistrict?: null | Array<ServiceIssueStored>;
  ownedIssues?: null | Array<ServiceIssueStored>;
}

export type ServiceUserIssuesAttributes = 'userName';
export type ServiceUserIssuesRelations =
  | 'activeIssuesGlobal'
  | 'activeIssuesInActivityCities'
  | 'activeIssuesInActivityCounties'
  | 'activeIssuesInActivityDistricts'
  | 'activeIssuesInResidentCity'
  | 'activeIssuesInResidentCounty'
  | 'activeIssuesInResidentDistrict'
  | 'ownedIssues';

export interface ServiceUserIssuesStored extends JudoStored<ServiceUserIssues>, ServiceUserIssues {}
