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
import { ServiceConStored } from './ServiceCon';
import { ServiceCountyStored } from './ServiceCounty';
import { ServiceDistrictStored } from './ServiceDistrict';
import { ServiceIssueAttachmentStored } from './ServiceIssueAttachment';
import { ServiceIssueCategoryStored } from './ServiceIssueCategory';
import { ServiceIssueTypeStored } from './ServiceIssueType';
import { ServiceProStored } from './ServicePro';
import { ServiceServiceUserStored } from './ServiceServiceUser';

export interface ServiceIssue {
  created?: null | Date;
  title: string;
  description: string;
  status: EdemokraciaIssueStatus;
  representation?: null | string;
  defaultVoteType?: null | EdemokraciaVoteType;
  scope?: null | EdemokraciaIssueScope;
  countyRepresentation?: null | string;
  cityRepresentation?: null | string;
  districtRepresentation?: null | string;
  isFavorite?: null | boolean;
  isNotFavorite?: null | boolean;
  debateCloseAt: Date;
  isVoteClosable?: null | boolean;
  isIssueDraft?: null | boolean;
  isIssueActive?: null | boolean;
  isIssueDeletable?: null | boolean;
  isIssueNotActive?: null | boolean;
  isVoteNotClosable?: null | boolean;
  isIssueNotDraft?: null | boolean;
  isIssueNotDeletable?: null | boolean;
  isIssueInVoting?: null | boolean;
  isIssueNotInVoting?: null | boolean;

  attachments?: null | Array<ServiceIssueAttachmentStored>;
  owner?: null | ServiceServiceUserStored;
  categories?: null | Array<ServiceIssueCategoryStored>;
  comments?: null | Array<ServiceCommentStored>;
  createdBy?: null | ServiceServiceUserStored;
  issueType?: null | ServiceIssueTypeStored;
  county?: null | ServiceCountyStored;
  city?: null | ServiceCityStored;
  district?: null | ServiceDistrictStored;
  cons?: null | Array<ServiceConStored>;
  pros?: null | Array<ServiceProStored>;
}
export type ServiceIssueAttributes =
  | 'created'
  | 'title'
  | 'description'
  | 'status'
  | 'representation'
  | 'defaultVoteType'
  | 'scope'
  | 'countyRepresentation'
  | 'cityRepresentation'
  | 'districtRepresentation'
  | 'isFavorite'
  | 'isNotFavorite'
  | 'debateCloseAt'
  | 'isVoteClosable'
  | 'isIssueDraft'
  | 'isIssueActive'
  | 'isIssueDeletable'
  | 'isIssueNotActive'
  | 'isVoteNotClosable'
  | 'isIssueNotDraft'
  | 'isIssueNotDeletable'
  | 'isIssueInVoting'
  | 'isIssueNotInVoting';

export type ServiceIssueRelations =
  | 'attachments'
  | 'owner'
  | 'categories'
  | 'comments'
  | 'createdBy'
  | 'issueType'
  | 'county'
  | 'city'
  | 'district'
  | 'cons'
  | 'pros';

export interface ServiceIssueStored extends JudoStored<ServiceIssue>, ServiceIssue {}
