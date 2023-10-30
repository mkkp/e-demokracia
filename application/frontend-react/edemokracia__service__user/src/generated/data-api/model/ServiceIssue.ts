//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { EdemokraciaIssueScope } from './EdemokraciaIssueScope';
import { EdemokraciaIssueStatus } from './EdemokraciaIssueStatus';
import { EdemokraciaVoteType } from './EdemokraciaVoteType';
import { ServiceCityStored } from './ServiceCity';
import { ServiceCommentStored } from './ServiceComment';
import { ServiceCountyStored } from './ServiceCounty';
import { ServiceDistrictStored } from './ServiceDistrict';
import { ServiceIssueAttachmentStored } from './ServiceIssueAttachment';
import { ServiceIssueCategoryStored } from './ServiceIssueCategory';
import { ServiceIssueDebateStored } from './ServiceIssueDebate';
import { ServiceIssueTypeStored } from './ServiceIssueType';
import { ServiceServiceUserStored } from './ServiceServiceUser';

export interface ServiceIssue {
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

  attachments?: null | Array<ServiceIssueAttachmentStored>;
  owner?: null | ServiceServiceUserStored;
  categories?: null | Array<ServiceIssueCategoryStored>;
  debates?: null | Array<ServiceIssueDebateStored>;
  comments?: null | Array<ServiceCommentStored>;
  createdBy?: null | ServiceServiceUserStored;
  issueType?: null | ServiceIssueTypeStored;
  county?: null | ServiceCountyStored;
  city?: null | ServiceCityStored;
  district?: null | ServiceDistrictStored;
}
export type ServiceIssueAttributes =
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

export type ServiceIssueRelations =
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

export interface ServiceIssueStored extends JudoStored<ServiceIssue>, ServiceIssue {}
