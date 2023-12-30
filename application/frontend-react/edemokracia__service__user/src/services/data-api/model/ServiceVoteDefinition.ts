//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';
import { IssueScope } from './IssueScope';
import { ServiceIssue } from './ServiceIssue';
import { ServiceIssueStored } from './ServiceIssue';
import { VoteStatus } from './VoteStatus';
import { VoteType } from './VoteType';

export interface ServiceVoteDefinition {
  cityRepresentation?: null | string;
  closeAt: Date;
  countyRepresentation?: null | string;
  created?: null | Date;
  description: string;
  districtRepresentation?: null | string;
  isFavorite?: null | boolean;
  isNotFavorite?: null | boolean;
  isNotRatingType?: null | boolean;
  isNotSelectAnswerType?: null | boolean;
  isNotYesNoAbstainType?: null | boolean;
  isNotYesNoType?: null | boolean;
  isRatingType?: null | boolean;
  isSelectAnswerType?: null | boolean;
  isYesNoAbstainType?: null | boolean;
  isYesNoType?: null | boolean;
  numberOfVotes?: null | number;
  scope?: null | IssueScope;
  status: VoteStatus;
  title: string;
  voteType?: null | VoteType;
  issue?: null | ServiceIssueStored;
}

export type ServiceVoteDefinitionAttributes =
  | 'cityRepresentation'
  | 'closeAt'
  | 'countyRepresentation'
  | 'created'
  | 'description'
  | 'districtRepresentation'
  | 'isFavorite'
  | 'isNotFavorite'
  | 'isNotRatingType'
  | 'isNotSelectAnswerType'
  | 'isNotYesNoAbstainType'
  | 'isNotYesNoType'
  | 'isRatingType'
  | 'isSelectAnswerType'
  | 'isYesNoAbstainType'
  | 'isYesNoType'
  | 'numberOfVotes'
  | 'scope'
  | 'status'
  | 'title'
  | 'voteType';
export type ServiceVoteDefinitionRelations = 'issue';

export interface ServiceVoteDefinitionStored extends JudoStored<ServiceVoteDefinition>, ServiceVoteDefinition {}
