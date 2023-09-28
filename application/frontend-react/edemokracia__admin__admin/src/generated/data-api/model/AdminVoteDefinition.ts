//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminDebateStored } from './AdminDebate';
import { AdminIssueStored } from './AdminIssue';
import { EdemokraciaIssueScope } from './EdemokraciaIssueScope';
import { EdemokraciaVoteStatus } from './EdemokraciaVoteStatus';
import { EdemokraciaVoteType } from './EdemokraciaVoteType';

export interface AdminVoteDefinition {
  title: string;
  created: Date;
  description: string;
  status: EdemokraciaVoteStatus;
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
  voteType?: null | EdemokraciaVoteType;
  scope?: null | EdemokraciaIssueScope;
  districtRepresentation?: null | string;
  countyRepresentation?: null | string;
  isFavorite?: null | boolean;
  cityRepresentation?: null | string;
  isNotFavorite?: null | boolean;

  debate?: null | AdminDebateStored;
  issue?: null | AdminIssueStored;
}
export type AdminVoteDefinitionAttributes =
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

export type AdminVoteDefinitionRelations = 'debate' | 'issue';

export interface AdminVoteDefinitionStored extends JudoStored<AdminVoteDefinition>, AdminVoteDefinition {}
