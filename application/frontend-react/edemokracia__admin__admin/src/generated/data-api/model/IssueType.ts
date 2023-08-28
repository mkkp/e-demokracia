//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { EdemokraciaVoteType } from './EdemokraciaVoteType';

export interface IssueType {
  title: string;
  description: string;
  defaultVoteType?: null | EdemokraciaVoteType;
}
export type IssueTypeAttributes = 'title' | 'description' | 'defaultVoteType';

export interface IssueTypeStored extends JudoStored<IssueType>, IssueType {}
