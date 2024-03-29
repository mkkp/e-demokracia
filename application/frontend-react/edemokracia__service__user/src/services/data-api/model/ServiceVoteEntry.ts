//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';
import { ServiceVoteDefinition } from './ServiceVoteDefinition';
import { ServiceVoteDefinitionStored } from './ServiceVoteDefinition';
import { ServiceVoteDefinitionReference } from './ServiceVoteDefinitionReference';
import { ServiceVoteDefinitionReferenceStored } from './ServiceVoteDefinitionReference';
import { VoteStatus } from './VoteStatus';

export interface ServiceVoteEntry {
  created: Date;
  issueTitle?: null | string;
  userName?: null | string;
  voteStatus?: null | VoteStatus;
  voteTitle?: null | string;
  voteDefinition?: null | ServiceVoteDefinitionStored;
  voteDefinitionReference?: null | ServiceVoteDefinitionReferenceStored;
}

export type ServiceVoteEntryAttributes = 'created' | 'issueTitle' | 'userName' | 'voteStatus' | 'voteTitle';
export type ServiceVoteEntryRelations = 'voteDefinition' | 'voteDefinitionReference';

export interface ServiceVoteEntryStored extends JudoStored<ServiceVoteEntry>, ServiceVoteEntry {}
