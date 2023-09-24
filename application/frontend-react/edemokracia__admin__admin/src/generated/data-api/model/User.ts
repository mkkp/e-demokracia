//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { CityStored } from './City';
import { CountyStored } from './County';
import { DistrictStored } from './District';
import { IssueStored } from './Issue';
import { SimpleVoteStored } from './SimpleVote';

export interface User {
  userName: string;
  firstName: string;
  lastName: string;
  phone?: null | string;
  email: string;
  isAdmin: boolean;
  created?: null | Date;

  votes?: null | Array<SimpleVoteStored>;
  residentCity?: null | CityStored;
  activityCities?: null | Array<CityStored>;
  residentDistrict?: null | DistrictStored;
  activityDistricts?: null | Array<DistrictStored>;
  residentCounty?: null | CountyStored;
  activityCounties?: null | Array<CountyStored>;
  favoriteIssues?: null | Array<IssueStored>;
  activeIssuesInActivityCities?: null | Array<IssueStored>;
  ownedIssues?: null | Array<IssueStored>;
  createdIssues?: null | Array<IssueStored>;
  ownedPendingIssues?: null | Array<IssueStored>;
  activeIssuesInActivityCounties?: null | Array<IssueStored>;
  acitveIssuesInActivityDistricts?: null | Array<IssueStored>;
  activeIssuesGlobal?: null | Array<IssueStored>;
  activeIssuesInResidentDistrict?: null | Array<IssueStored>;
  activeIssuesInResidentCity?: null | Array<IssueStored>;
  activeIssuesInResidentCounty?: null | Array<IssueStored>;
}
export type UserAttributes = 'userName' | 'firstName' | 'lastName' | 'phone' | 'email' | 'isAdmin' | 'created';

export type UserRelations =
  | 'votes'
  | 'residentCity'
  | 'activityCities'
  | 'residentDistrict'
  | 'activityDistricts'
  | 'residentCounty'
  | 'activityCounties'
  | 'favoriteIssues'
  | 'activeIssuesInActivityCities'
  | 'ownedIssues'
  | 'createdIssues'
  | 'ownedPendingIssues'
  | 'activeIssuesInActivityCounties'
  | 'acitveIssuesInActivityDistricts'
  | 'activeIssuesGlobal'
  | 'activeIssuesInResidentDistrict'
  | 'activeIssuesInResidentCity'
  | 'activeIssuesInResidentCounty';

export interface UserStored extends JudoStored<User>, User {}
