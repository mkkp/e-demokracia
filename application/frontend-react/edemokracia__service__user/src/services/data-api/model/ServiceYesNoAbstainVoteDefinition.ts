//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceIssue } from './ServiceIssue';
import { ServiceIssueStored } from './ServiceIssue';
import { ServiceServiceUser } from './ServiceServiceUser';
import { ServiceServiceUserStored } from './ServiceServiceUser';
import { ServiceYesNoAbstainVoteEntry } from './ServiceYesNoAbstainVoteEntry';
import { ServiceYesNoAbstainVoteEntryStored } from './ServiceYesNoAbstainVoteEntry';
import { VoteStatus } from './VoteStatus';

export interface ServiceYesNoAbstainVoteDefinition {
  closeAt: Date;
  created: Date;
  createdBy?: null | string;
  description: string;
  isFavorite?: null | boolean;
  isNotFavorite?: null | boolean;
  isVoteDeletable?: null | boolean;
  isVoteEditable?: null | boolean;
  isVoteNotDeletable?: null | boolean;
  isVoteNotEditable?: null | boolean;
  isVoteNotOpen?: null | boolean;
  isVoteOpen?: null | boolean;
  status: VoteStatus;
  title: string;
  userHasNoVoteEntry?: null | boolean;
  userHasVoteEntry?: null | boolean;
  issue?: null | ServiceIssueStored;
  owner?: null | ServiceServiceUserStored;
  userVoteEntry?: null | ServiceYesNoAbstainVoteEntryStored;
  voteEntries?: null | Array<ServiceYesNoAbstainVoteEntryStored>;
}

export type ServiceYesNoAbstainVoteDefinitionAttributes =
  | 'closeAt'
  | 'created'
  | 'createdBy'
  | 'description'
  | 'isFavorite'
  | 'isNotFavorite'
  | 'isVoteDeletable'
  | 'isVoteEditable'
  | 'isVoteNotDeletable'
  | 'isVoteNotEditable'
  | 'isVoteNotOpen'
  | 'isVoteOpen'
  | 'status'
  | 'title'
  | 'userHasNoVoteEntry'
  | 'userHasVoteEntry';
export type ServiceYesNoAbstainVoteDefinitionRelations = 'issue' | 'owner' | 'userVoteEntry' | 'voteEntries';

export interface ServiceYesNoAbstainVoteDefinitionStored
  extends JudoStored<ServiceYesNoAbstainVoteDefinition>,
    ServiceYesNoAbstainVoteDefinition {}
