//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminCityStored } from './AdminCity';
import { AdminCommentStored } from './AdminComment';
import { AdminCountyStored } from './AdminCounty';
import { AdminDistrictStored } from './AdminDistrict';
import { AdminIssueAttachmentStored } from './AdminIssueAttachment';
import { AdminIssueCategoryStored } from './AdminIssueCategory';
import { AdminIssueDebateStored } from './AdminIssueDebate';
import { AdminIssueTypeStored } from './AdminIssueType';
import { AdminUserStored } from './AdminUser';
import { EdemokraciaIssueScope } from './EdemokraciaIssueScope';
import { EdemokraciaIssueStatus } from './EdemokraciaIssueStatus';
import { EdemokraciaVoteType } from './EdemokraciaVoteType';

export interface AdminIssue {
  created?: null | Date;
  title: string;
  description: string;
  status: EdemokraciaIssueStatus;
  representation?: null | string;
  numberOfDebates?: null | number;
  defaultVoteType?: null | EdemokraciaVoteType;
  scope?: null | EdemokraciaIssueScope;
  countyRepresentation?: null | string;
  cityRepresentation?: null | string;
  districtRepresentation?: null | string;
  isFavorite?: null | boolean;
  isNotFavorite?: null | boolean;

  attachments?: null | Array<AdminIssueAttachmentStored>;
  owner?: null | AdminUserStored;
  categories?: null | Array<AdminIssueCategoryStored>;
  debates?: null | Array<AdminIssueDebateStored>;
  comments?: null | Array<AdminCommentStored>;
  createdBy?: null | AdminUserStored;
  issueType?: null | AdminIssueTypeStored;
  county?: null | AdminCountyStored;
  city?: null | AdminCityStored;
  district?: null | AdminDistrictStored;
}
export type AdminIssueAttributes =
  | 'created'
  | 'title'
  | 'description'
  | 'status'
  | 'representation'
  | 'numberOfDebates'
  | 'defaultVoteType'
  | 'scope'
  | 'countyRepresentation'
  | 'cityRepresentation'
  | 'districtRepresentation'
  | 'isFavorite'
  | 'isNotFavorite';

export type AdminIssueRelations =
  | 'attachments'
  | 'owner'
  | 'categories'
  | 'debates'
  | 'comments'
  | 'createdBy'
  | 'issueType'
  | 'county'
  | 'city'
  | 'district';

export interface AdminIssueStored extends JudoStored<AdminIssue>, AdminIssue {}
