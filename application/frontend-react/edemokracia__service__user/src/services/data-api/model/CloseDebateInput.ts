//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { VoteTypeOnCloseDebate } from './VoteTypeOnCloseDebate';

export interface CloseDebateInput {
  voteType: VoteTypeOnCloseDebate;
  title: string;
  description: string;
  closeAt: Date;
}
export type CloseDebateInputAttributes = 'voteType' | 'title' | 'description' | 'closeAt';

export interface CloseDebateInputStored extends JudoStored<CloseDebateInput>, CloseDebateInput {}
