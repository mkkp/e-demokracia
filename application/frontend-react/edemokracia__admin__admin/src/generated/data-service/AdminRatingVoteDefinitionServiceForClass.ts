//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  RatingVoteInput,
  AdminRatingVoteDefinitionStored,
  VoteEntry,
  AdminIssueStored,
  AdminRatingVoteDefinitionQueryCustomizer,
  VoteEntryQueryCustomizer,
  VoteEntryStored,
  AdminRatingVoteDefinition,
  AdminIssueQueryCustomizer,
  AdminDebate,
  AdminIssue,
  AdminDebateStored,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Class Service for AdminRatingVoteDefinition
 */
export interface AdminRatingVoteDefinitionServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminRatingVoteDefinition>,
    queryCustomizer?: AdminRatingVoteDefinitionQueryCustomizer,
  ): Promise<AdminRatingVoteDefinitionStored>;

  getVoteEntries(
    target: JudoIdentifiable<AdminRatingVoteDefinition>,
    queryCustomizer?: VoteEntryQueryCustomizer,
  ): Promise<Array<VoteEntryStored>>;

  getRangeForVoteEntries(
    owner?: JudoIdentifiable<AdminRatingVoteDefinition> | AdminRatingVoteDefinition,
    queryCustomizer?: VoteEntryQueryCustomizer,
  ): Promise<Array<VoteEntryStored>>;

  getDebate(
    target: JudoIdentifiable<AdminRatingVoteDefinition>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<AdminDebateStored>;

  getRangeForDebate(
    owner?: JudoIdentifiable<AdminRatingVoteDefinition> | AdminRatingVoteDefinition,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getIssue(
    target: JudoIdentifiable<AdminRatingVoteDefinition>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<AdminIssueStored>;

  getRangeForIssue(
    owner?: JudoIdentifiable<AdminRatingVoteDefinition> | AdminRatingVoteDefinition,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  vote(owner: JudoIdentifiable<AdminRatingVoteDefinition>, target: RatingVoteInput): Promise<void>;
}
