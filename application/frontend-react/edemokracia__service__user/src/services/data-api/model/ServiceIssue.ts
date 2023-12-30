//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';
import { IssueScope } from './IssueScope';
import { IssueStatus } from './IssueStatus';
import { ServiceCity } from './ServiceCity';
import { ServiceCityStored } from './ServiceCity';
import { ServiceComment } from './ServiceComment';
import { ServiceCommentStored } from './ServiceComment';
import { ServiceCon } from './ServiceCon';
import { ServiceConStored } from './ServiceCon';
import { ServiceCounty } from './ServiceCounty';
import { ServiceCountyStored } from './ServiceCounty';
import { ServiceDistrict } from './ServiceDistrict';
import { ServiceDistrictStored } from './ServiceDistrict';
import { ServiceIssueAttachment } from './ServiceIssueAttachment';
import { ServiceIssueAttachmentStored } from './ServiceIssueAttachment';
import { ServiceIssueCategory } from './ServiceIssueCategory';
import { ServiceIssueCategoryStored } from './ServiceIssueCategory';
import { ServiceIssueType } from './ServiceIssueType';
import { ServiceIssueTypeStored } from './ServiceIssueType';
import { ServicePro } from './ServicePro';
import { ServiceProStored } from './ServicePro';
import { ServiceServiceUser } from './ServiceServiceUser';
import { ServiceServiceUserStored } from './ServiceServiceUser';
import { VoteType } from './VoteType';

export interface ServiceIssue {
  cityRepresentation?: null | string;
  countyRepresentation?: null | string;
  created?: null | Date;
  debateCloseAt: Date;
  defaultVoteType?: null | VoteType;
  description: string;
  districtRepresentation?: null | string;
  isFavorite?: null | boolean;
  isIssueActive?: null | boolean;
  isIssueDeletable?: null | boolean;
  isIssueDraft?: null | boolean;
  isIssueInVoting?: null | boolean;
  isIssueNotActive?: null | boolean;
  isIssueNotDeletable?: null | boolean;
  isIssueNotDraft?: null | boolean;
  isIssueNotInVoting?: null | boolean;
  isNotFavorite?: null | boolean;
  isVoteClosable?: null | boolean;
  isVoteNotClosable?: null | boolean;
  representation?: null | string;
  scope?: null | IssueScope;
  status: IssueStatus;
  title: string;
  attachments?: null | Array<ServiceIssueAttachmentStored>;
  categories?: null | Array<ServiceIssueCategoryStored>;
  city?: null | ServiceCityStored;
  comments?: null | Array<ServiceCommentStored>;
  cons?: null | Array<ServiceConStored>;
  county?: null | ServiceCountyStored;
  createdBy?: null | ServiceServiceUserStored;
  district?: null | ServiceDistrictStored;
  issueType?: null | ServiceIssueTypeStored;
  owner?: null | ServiceServiceUserStored;
  pros?: null | Array<ServiceProStored>;
}

export type ServiceIssueAttributes =
  | 'cityRepresentation'
  | 'countyRepresentation'
  | 'created'
  | 'debateCloseAt'
  | 'defaultVoteType'
  | 'description'
  | 'districtRepresentation'
  | 'isFavorite'
  | 'isIssueActive'
  | 'isIssueDeletable'
  | 'isIssueDraft'
  | 'isIssueInVoting'
  | 'isIssueNotActive'
  | 'isIssueNotDeletable'
  | 'isIssueNotDraft'
  | 'isIssueNotInVoting'
  | 'isNotFavorite'
  | 'isVoteClosable'
  | 'isVoteNotClosable'
  | 'representation'
  | 'scope'
  | 'status'
  | 'title';
export type ServiceIssueRelations =
  | 'attachments'
  | 'categories'
  | 'city'
  | 'comments'
  | 'cons'
  | 'county'
  | 'createdBy'
  | 'district'
  | 'issueType'
  | 'owner'
  | 'pros';

export interface ServiceIssueStored extends JudoStored<ServiceIssue>, ServiceIssue {}
