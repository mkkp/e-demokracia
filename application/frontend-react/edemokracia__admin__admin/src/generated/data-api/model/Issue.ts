//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import { JudoStored } from '@judo/data-api-common';
import { CityStored } from './City';
import { CommentStored } from './Comment';
import { CountyStored } from './County';
import { DebateStored } from './Debate';
import { DistrictStored } from './District';
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

  debates?: null | Array<DebateStored>;
  attachments?: null | Array<IssueAttachmentStored>;
  owner?: null | UserStored;
  categories?: null | Array<IssueCategoryStored>;
  comments?: null | Array<CommentStored>;
  createdBy?: null | UserStored;
  issueType?: null | IssueTypeStored;
  county?: null | CountyStored;
  district?: null | DistrictStored;
  city?: null | CityStored;
}
export type IssueAttributes = 'created' | 'title' | 'description' | 'status' | 'defaultVoteType';

export type IssueRelations =
  | 'debates'
  | 'attachments'
  | 'owner'
  | 'categories'
  | 'comments'
  | 'createdBy'
  | 'issueType'
  | 'county'
  | 'district'
  | 'city';

export interface IssueStored extends JudoStored<Issue>, Issue {}
