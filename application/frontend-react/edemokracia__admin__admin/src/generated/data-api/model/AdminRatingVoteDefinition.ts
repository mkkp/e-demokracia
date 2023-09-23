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
import { EdemokraciaVoteStatus } from './EdemokraciaVoteStatus';
import { VoteEntryStored } from './VoteEntry';

export interface AdminRatingVoteDefinition {
  minRateValue?: null | number;
  maxRateValue?: null | number;
  title: string;
  created: Date;
  description: string;
  status: EdemokraciaVoteStatus;
  closeAt: Date;

  voteEntries?: null | Array<VoteEntryStored>;
  debate?: null | AdminDebateStored;
  issue?: null | AdminIssueStored;
}
export type AdminRatingVoteDefinitionAttributes =
  | 'minRateValue'
  | 'maxRateValue'
  | 'title'
  | 'created'
  | 'description'
  | 'status'
  | 'closeAt';

export type AdminRatingVoteDefinitionRelations = 'voteEntries' | 'debate' | 'issue';

export interface AdminRatingVoteDefinitionStored
  extends JudoStored<AdminRatingVoteDefinition>,
    AdminRatingVoteDefinition {}
