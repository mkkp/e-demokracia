//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceVoteDefinition } from './ServiceVoteDefinition';
import { ServiceVoteDefinitionStored } from './ServiceVoteDefinition';
import { VoteStatus } from './VoteStatus';

export interface ServiceVoteEntry {
  created: Date;
  issueTitle?: null | string;
  voteTitle?: null | string;
  voteStatus?: null | VoteStatus;
  userName?: null | string;
  voteDefinition?: null | ServiceVoteDefinitionStored;
}

export type ServiceVoteEntryAttributes = 'created' | 'issueTitle' | 'voteTitle' | 'voteStatus' | 'userName';
export type ServiceVoteEntryRelations = 'voteDefinition';

export interface ServiceVoteEntryStored extends JudoStored<ServiceVoteEntry>, ServiceVoteEntry {}
