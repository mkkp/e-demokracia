//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';

export interface ServiceSelectAnswerVoteSelection {
  description?: null | string;
  title: string;
}

export type ServiceSelectAnswerVoteSelectionAttributes = 'description' | 'title';

export interface ServiceSelectAnswerVoteSelectionStored
  extends JudoStored<ServiceSelectAnswerVoteSelection>,
    ServiceSelectAnswerVoteSelection {}
