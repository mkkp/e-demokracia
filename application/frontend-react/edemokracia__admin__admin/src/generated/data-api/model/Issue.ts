//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { CityStored } from './City';
import { CommentStored } from './Comment';
import { CountyStored } from './County';
import { DebateStored } from './Debate';
import { DistrictStored } from './District';
import { EdemokraciaIssueScope } from './EdemokraciaIssueScope';
import { EdemokraciaIssueStatus } from './EdemokraciaIssueStatus';
import { EdemokraciaVoteType } from './EdemokraciaVoteType';
import { IssueAttachmentStored } from './IssueAttachment';
import { IssueCategoryStored } from './IssueCategory';
import { IssueTypeStored } from './IssueType';
import { UserStored } from './User';

export interface Issue {
  created: Date;
  title: string;
  description: string;
  status: EdemokraciaIssueStatus;
  defaultVoteType?: null | EdemokraciaVoteType;
  scope?: null | EdemokraciaIssueScope;

  debates?: null | Array<DebateStored>;
  attachments?: null | Array<IssueAttachmentStored>;
  categories?: null | Array<IssueCategoryStored>;
  comments?: null | Array<CommentStored>;
  issueType?: null | IssueTypeStored;
  county?: null | CountyStored;
  district?: null | DistrictStored;
  city?: null | CityStored;
  owner?: null | UserStored;
  createdBy?: null | UserStored;
}
export type IssueAttributes = 'created' | 'title' | 'description' | 'status' | 'defaultVoteType' | 'scope';

export type IssueRelations =
  | 'debates'
  | 'attachments'
  | 'categories'
  | 'comments'
  | 'issueType'
  | 'county'
  | 'district'
  | 'city'
  | 'owner'
  | 'createdBy';

export interface IssueStored extends JudoStored<Issue>, Issue {}
