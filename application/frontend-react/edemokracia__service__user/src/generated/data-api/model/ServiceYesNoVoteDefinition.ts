//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { EdemokraciaVoteStatus } from './EdemokraciaVoteStatus';
import { ServiceIssueStored } from './ServiceIssue';
import { ServiceServiceUserStored } from './ServiceServiceUser';
import { ServiceYesNoVoteEntryStored } from './ServiceYesNoVoteEntry';

export interface ServiceYesNoVoteDefinition {
  title: string;
  created: Date;
  description: string;
  status: EdemokraciaVoteStatus;
  closeAt: Date;
  userHasVoteEntry?: null | boolean;
  userHasNoVoteEntry?: null | boolean;
  isFavorite?: null | boolean;
  isVoteEditable?: null | boolean;
  isVoteNotOpen?: null | boolean;
  isVoteOpen?: null | boolean;
  isNotFavorite?: null | boolean;
  isVoteNotDeletable?: null | boolean;
  isVoteDeletable?: null | boolean;
  isVoteNotEditable?: null | boolean;
  createdBy?: null | string;

  issue?: null | ServiceIssueStored;
  voteEntries?: null | Array<ServiceYesNoVoteEntryStored>;
  userVoteEntry?: null | ServiceYesNoVoteEntryStored;
  owner?: null | ServiceServiceUserStored;
}
export type ServiceYesNoVoteDefinitionAttributes =
  | 'title'
  | 'created'
  | 'description'
  | 'status'
  | 'closeAt'
  | 'userHasVoteEntry'
  | 'userHasNoVoteEntry'
  | 'isFavorite'
  | 'isVoteEditable'
  | 'isVoteNotOpen'
  | 'isVoteOpen'
  | 'isNotFavorite'
  | 'isVoteNotDeletable'
  | 'isVoteDeletable'
  | 'isVoteNotEditable'
  | 'createdBy';

export type ServiceYesNoVoteDefinitionRelations = 'issue' | 'voteEntries' | 'userVoteEntry' | 'owner';

export interface ServiceYesNoVoteDefinitionStored
  extends JudoStored<ServiceYesNoVoteDefinition>,
    ServiceYesNoVoteDefinition {}
