//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { YesNoAbstainVoteValue } from './YesNoAbstainVoteValue';

export interface YesNoAbstainVoteInput {
  value?: null | YesNoAbstainVoteValue;
}

export type YesNoAbstainVoteInputAttributes = 'value';

export interface YesNoAbstainVoteInputStored extends JudoStored<YesNoAbstainVoteInput>, YesNoAbstainVoteInput {}
