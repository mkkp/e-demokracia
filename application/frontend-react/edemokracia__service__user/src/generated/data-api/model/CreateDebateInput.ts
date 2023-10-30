//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';

export interface CreateDebateInput {
  title: string;
  description: string;
  closeAt: Date;
}
export type CreateDebateInputAttributes = 'title' | 'description' | 'closeAt';

export interface CreateDebateInputStored extends JudoStored<CreateDebateInput>, CreateDebateInput {}
