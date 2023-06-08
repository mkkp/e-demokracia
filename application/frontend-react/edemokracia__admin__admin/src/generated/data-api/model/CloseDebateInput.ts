//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import { JudoStored } from '@judo/data-api-common';
import { EdemokraciaVoteTypeOnCloseDebate } from './EdemokraciaVoteTypeOnCloseDebate';
import { SelectAnswerInputStored } from './SelectAnswerInput';

export interface CloseDebateInput {
  voteType: EdemokraciaVoteTypeOnCloseDebate;
  title: string;
  description: string;
  closeAt: Date;

  answers?: null | Array<SelectAnswerInputStored>;
}
export type CloseDebateInputAttributes = 'voteType' | 'title' | 'description' | 'closeAt';

export type CloseDebateInputRelations = 'answers';

export interface CloseDebateInputStored extends JudoStored<CloseDebateInput>, CloseDebateInput {}
