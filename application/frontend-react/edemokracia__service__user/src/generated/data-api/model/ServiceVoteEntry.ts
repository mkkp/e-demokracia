//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { EdemokraciaVoteStatus } from './EdemokraciaVoteStatus';
import { ServiceVoteDefinitionStored } from './ServiceVoteDefinition';

export interface ServiceVoteEntry {
  created: Date;
  issueTitle?: null | string;
  debateTitle?: null | string;
  voteTitle?: null | string;
  voteStatus?: null | EdemokraciaVoteStatus;
  userName?: null | string;

  voteDefinition?: null | ServiceVoteDefinitionStored;
}
export type ServiceVoteEntryAttributes =
  | 'created'
  | 'issueTitle'
  | 'debateTitle'
  | 'voteTitle'
  | 'voteStatus'
  | 'userName';

export type ServiceVoteEntryRelations = 'voteDefinition';

export interface ServiceVoteEntryStored extends JudoStored<ServiceVoteEntry>, ServiceVoteEntry {}
