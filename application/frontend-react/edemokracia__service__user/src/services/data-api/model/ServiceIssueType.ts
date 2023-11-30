//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { VoteType } from './VoteType';

export interface ServiceIssueType {
  description: string;
  representation?: null | string;
  title: string;
  voteType?: null | VoteType;
}

export type ServiceIssueTypeAttributes = 'description' | 'representation' | 'title' | 'voteType';

export interface ServiceIssueTypeStored extends JudoStored<ServiceIssueType>, ServiceIssueType {}
