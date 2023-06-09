//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import { JudoStored } from '@judo/data-api-common';
import { EdemokraciaVoteStatus } from './EdemokraciaVoteStatus';
import { VoteEntryStored } from './VoteEntry';

export interface VoteDefinition {
  title: string;
  created: Date;
  description: string;
  status: EdemokraciaVoteStatus;
  closeAt: Date;
  isYesNoType?: null | boolean;
  isYesNoAbstainType?: null | boolean;
  isSelectAnswerType?: null | boolean;
  isRatingType?: null | boolean;

  voteEntries?: null | Array<VoteEntryStored>;
}
export type VoteDefinitionAttributes =
  | 'title'
  | 'created'
  | 'description'
  | 'status'
  | 'closeAt'
  | 'isYesNoType'
  | 'isYesNoAbstainType'
  | 'isSelectAnswerType'
  | 'isRatingType';

export type VoteDefinitionRelations = 'voteEntries';

export interface VoteDefinitionStored extends JudoStored<VoteDefinition>, VoteDefinition {}
