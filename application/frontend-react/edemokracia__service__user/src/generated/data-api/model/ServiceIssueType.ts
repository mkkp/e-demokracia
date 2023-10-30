//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { EdemokraciaVoteType } from './EdemokraciaVoteType';

export interface ServiceIssueType {
  description: string;
  title: string;
  voteType?: null | EdemokraciaVoteType;
  representation?: null | string;
}
export type ServiceIssueTypeAttributes = 'description' | 'title' | 'voteType' | 'representation';

export interface ServiceIssueTypeStored extends JudoStored<ServiceIssueType>, ServiceIssueType {}
