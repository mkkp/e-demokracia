//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { IssueScope } from './IssueScope';
import { ServiceIssue } from './ServiceIssue';
import { ServiceIssueStored } from './ServiceIssue';
import { VoteStatus } from './VoteStatus';
import { VoteType } from './VoteType';

export interface ServiceVoteDefinition {
  title: string;
  created?: null | Date;
  description: string;
  status: VoteStatus;
  closeAt: Date;
  isRatingType?: null | boolean;
  isSelectAnswerType?: null | boolean;
  isYesNoAbstainType?: null | boolean;
  isYesNoType?: null | boolean;
  isNotRatingType?: null | boolean;
  isNotSelectAnswerType?: null | boolean;
  isNotYesNoAbstainType?: null | boolean;
  isNotYesNoType?: null | boolean;
  numberOfVotes?: null | number;
  voteType?: null | VoteType;
  scope?: null | IssueScope;
  districtRepresentation?: null | string;
  countyRepresentation?: null | string;
  isFavorite?: null | boolean;
  cityRepresentation?: null | string;
  isNotFavorite?: null | boolean;

  issue?: null | ServiceIssueStored;
}
export type ServiceVoteDefinitionAttributes =
  | 'title'
  | 'created'
  | 'description'
  | 'status'
  | 'closeAt'
  | 'isRatingType'
  | 'isSelectAnswerType'
  | 'isYesNoAbstainType'
  | 'isYesNoType'
  | 'isNotRatingType'
  | 'isNotSelectAnswerType'
  | 'isNotYesNoAbstainType'
  | 'isNotYesNoType'
  | 'numberOfVotes'
  | 'voteType'
  | 'scope'
  | 'districtRepresentation'
  | 'countyRepresentation'
  | 'isFavorite'
  | 'cityRepresentation'
  | 'isNotFavorite';

export type ServiceVoteDefinitionRelations = 'issue';

export interface ServiceVoteDefinitionStored extends JudoStored<ServiceVoteDefinition>, ServiceVoteDefinition {}
