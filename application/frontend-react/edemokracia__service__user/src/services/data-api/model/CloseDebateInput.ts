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
  closeAt: Date;
  description: string;
  title: string;
  voteType: VoteTypeOnCloseDebate;
}

export type CloseDebateInputAttributes = 'closeAt' | 'description' | 'title' | 'voteType';

export interface CloseDebateInputStored extends JudoStored<CloseDebateInput>, CloseDebateInput {}
