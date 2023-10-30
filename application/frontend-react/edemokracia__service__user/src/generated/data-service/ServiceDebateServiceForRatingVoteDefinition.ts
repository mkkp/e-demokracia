//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteEntryQueryCustomizer,
  ServiceDebate,
  ServiceRatingVoteDefinitionStored,
  ServiceDebateQueryCustomizer,
  ServiceDebateStored,
  ServiceIssueQueryCustomizer,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceRatingVoteEntry,
  ServiceIssueStored,
  ServiceRatingVoteEntryStored,
  ServiceIssue,
} from '../data-api';

/**
 * Relation Service for ServiceDebate.ratingVoteDefinition
 */
export interface ServiceDebateServiceForRatingVoteDefinition {
  getRatingVoteDefinition(
    owner: JudoIdentifiable<ServiceDebate>,
    mask?: string,
  ): Promise<ServiceRatingVoteDefinitionStored>;
}
