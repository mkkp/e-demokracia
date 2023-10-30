//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { EdemokraciaDebateStatus } from './EdemokraciaDebateStatus';
import { EdemokraciaIssueScope } from './EdemokraciaIssueScope';
import { ServiceCommentStored } from './ServiceComment';
import { ServiceConStored } from './ServiceCon';
import { ServiceIssueStored } from './ServiceIssue';
import { ServiceProStored } from './ServicePro';
import { ServiceRatingVoteDefinitionStored } from './ServiceRatingVoteDefinition';
import { ServiceSelectAnswerVoteDefinitionStored } from './ServiceSelectAnswerVoteDefinition';
import { ServiceServiceUserStored } from './ServiceServiceUser';
import { ServiceVoteDefinitionStored } from './ServiceVoteDefinition';
import { ServiceYesNoAbstainVoteDefinitionStored } from './ServiceYesNoAbstainVoteDefinition';
import { ServiceYesNoVoteDefinitionStored } from './ServiceYesNoVoteDefinition';

export interface ServiceDebate {
  closeAt: Date;
  description: string;
  status: EdemokraciaDebateStatus;
  title: string;
  issueTitle?: null | string;
  isClosed?: null | boolean;
  isNotClosed?: null | boolean;
  scope?: null | EdemokraciaIssueScope;
  districtRepresentation?: null | string;
  cityRepresentation?: null | string;
  countyRepresentation?: null | string;
  isFavorite?: null | boolean;
  isNotFavorite?: null | boolean;

  issue?: null | ServiceIssueStored;
  comments?: null | Array<ServiceCommentStored>;
  createdBy?: null | ServiceServiceUserStored;
  cons?: null | Array<ServiceConStored>;
  pros?: null | Array<ServiceProStored>;
  voteDefinition?: null | ServiceVoteDefinitionStored;
  yesNoVoteDefinition?: null | ServiceYesNoVoteDefinitionStored;
  yesNoAbstainVoteDefinition?: null | ServiceYesNoAbstainVoteDefinitionStored;
  ratingVoteDefinition?: null | ServiceRatingVoteDefinitionStored;
  selectAnswerVoteDefinition?: null | ServiceSelectAnswerVoteDefinitionStored;
}
export type ServiceDebateAttributes =
  | 'closeAt'
  | 'description'
  | 'status'
  | 'title'
  | 'issueTitle'
  | 'isClosed'
  | 'isNotClosed'
  | 'scope'
  | 'districtRepresentation'
  | 'cityRepresentation'
  | 'countyRepresentation'
  | 'isFavorite'
  | 'isNotFavorite';

export type ServiceDebateRelations =
  | 'issue'
  | 'comments'
  | 'createdBy'
  | 'cons'
  | 'pros'
  | 'voteDefinition'
  | 'yesNoVoteDefinition'
  | 'yesNoAbstainVoteDefinition'
  | 'ratingVoteDefinition'
  | 'selectAnswerVoteDefinition';

export interface ServiceDebateStored extends JudoStored<ServiceDebate>, ServiceDebate {}
