//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';

export interface CreateCommentInput {
  comment: string;
}

export type CreateCommentInputAttributes = 'comment';

export interface CreateCommentInputStored extends JudoStored<CreateCommentInput>, CreateCommentInput {}
