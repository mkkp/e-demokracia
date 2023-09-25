//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminDebateStored } from './AdminDebate';
import { AdminIssueStored } from './AdminIssue';
import { AdminRatingVoteEntryStored } from './AdminRatingVoteEntry';
import { EdemokraciaVoteStatus } from './EdemokraciaVoteStatus';

export interface AdminRatingVoteDefinition {
  title: string;
  created: Date;
  description: string;
  status: EdemokraciaVoteStatus;
  closeAt: Date;
  maxRateValue?: null | number;
  minRateValue?: null | number;
  userHasVoteEntry?: null | boolean;
  userHasNoVoteEntry?: null | boolean;

  debate?: null | AdminDebateStored;
  issue?: null | AdminIssueStored;
  voteEntries?: null | Array<AdminRatingVoteEntryStored>;
  userVoteEntry?: null | AdminRatingVoteEntryStored;
}
export type AdminRatingVoteDefinitionAttributes =
  | 'title'
  | 'created'
  | 'description'
  | 'status'
  | 'closeAt'
  | 'maxRateValue'
  | 'minRateValue'
  | 'userHasVoteEntry'
  | 'userHasNoVoteEntry';

export type AdminRatingVoteDefinitionRelations = 'debate' | 'issue' | 'voteEntries' | 'userVoteEntry';

export interface AdminRatingVoteDefinitionStored
  extends JudoStored<AdminRatingVoteDefinition>,
    AdminRatingVoteDefinition {}
