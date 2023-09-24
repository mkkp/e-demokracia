//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminIssueStored } from './AdminIssue';

export interface AdminUserIssues {
  userName?: null | string;

  ownedIssues?: null | Array<AdminIssueStored>;
  activeIssuesGlobal?: null | Array<AdminIssueStored>;
  activeIssuesInActivityCounties?: null | Array<AdminIssueStored>;
  activeIssuesInActivityCities?: null | Array<AdminIssueStored>;
  activeIssuesInActivityDistricts?: null | Array<AdminIssueStored>;
  activeIssuesInResidentCounty?: null | Array<AdminIssueStored>;
  activeIssuesInResidentCity?: null | Array<AdminIssueStored>;
  activeIssuesInResidentDistrict?: null | Array<AdminIssueStored>;
}
export type AdminUserIssuesAttributes = 'userName';

export type AdminUserIssuesRelations =
  | 'ownedIssues'
  | 'activeIssuesGlobal'
  | 'activeIssuesInActivityCounties'
  | 'activeIssuesInActivityCities'
  | 'activeIssuesInActivityDistricts'
  | 'activeIssuesInResidentCounty'
  | 'activeIssuesInResidentCity'
  | 'activeIssuesInResidentDistrict';

export interface AdminUserIssuesStored extends JudoStored<AdminUserIssues>, AdminUserIssues {}
