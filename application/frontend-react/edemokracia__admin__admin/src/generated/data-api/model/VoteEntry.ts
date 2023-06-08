//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import { JudoStored } from '@judo/data-api-common';
import { UserStored } from './User';
import { VoteDefinitionStored } from './VoteDefinition';

export interface VoteEntry {
  created: Date;

  user: UserStored;
  voteDefinition: VoteDefinitionStored;
}
export type VoteEntryAttributes = 'created';

export type VoteEntryRelations = 'user' | 'voteDefinition';

export interface VoteEntryStored extends JudoStored<VoteEntry>, VoteEntry {}
