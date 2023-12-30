//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';
import { YesNoVoteValue } from './YesNoVoteValue';

export interface YesNoVoteInput {
  value?: null | YesNoVoteValue;
}

export type YesNoVoteInputAttributes = 'value';

export interface YesNoVoteInputStored extends JudoStored<YesNoVoteInput>, YesNoVoteInput {}
