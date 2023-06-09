//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import { JudoStored } from '@judo/data-api-common';
import { EdemokraciaCreateArgumentInputType } from './EdemokraciaCreateArgumentInputType';

export interface CreateArgumentInput {
  type: EdemokraciaCreateArgumentInputType;
  title: string;
  description: string;
}
export type CreateArgumentInputAttributes = 'type' | 'title' | 'description';

export interface CreateArgumentInputStored extends JudoStored<CreateArgumentInput>, CreateArgumentInput {}
