//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';

export interface SelectAnswerVoteSelection {
  description?: null | string;
  title: string;
}

export type SelectAnswerVoteSelectionAttributes = 'description' | 'title';

export interface SelectAnswerVoteSelectionStored
  extends JudoStored<SelectAnswerVoteSelection>,
    SelectAnswerVoteSelection {}
