//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  VoteEntryStored,
  AdminRatingVoteDefinition,
  AdminIssueQueryCustomizer,
  AdminDebate,
  AdminRatingVoteDefinitionStored,
  VoteEntry,
  AdminIssue,
  AdminIssueStored,
  AdminRatingVoteDefinitionQueryCustomizer,
  AdminDebateStored,
  VoteEntryQueryCustomizer,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for AdminDebate.ratingVoteDefinition
 */
export interface AdminDebateServiceForRatingVoteDefinition {
  getRatingVoteDefinition(
    owner: JudoIdentifiable<AdminDebate>,
    mask?: string,
  ): Promise<AdminRatingVoteDefinitionStored>;
}
