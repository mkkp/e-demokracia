//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteEntryQueryCustomizer,
  RatingVoteInput,
  ServiceRatingVoteDefinitionStored,
  ServiceIssueQueryCustomizer,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceRatingVoteEntry,
  ServiceIssueStored,
  ServiceRatingVoteEntryStored,
  ServiceIssue,
} from '../data-api';

/**
 * Class Service for ServiceRatingVoteDefinition
 */
export interface ServiceRatingVoteDefinitionServiceForClass {
  refresh(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceRatingVoteDefinitionQueryCustomizer,
  ): Promise<ServiceRatingVoteDefinitionStored>;

  update(target: Partial<ServiceRatingVoteDefinitionStored>): Promise<ServiceRatingVoteDefinitionStored>;

  getIssue(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored>;

  getRangeForIssue(
    owner?: JudoIdentifiable<ServiceRatingVoteDefinition> | ServiceRatingVoteDefinition,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getVoteEntries(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceRatingVoteEntryStored>>;

  getRangeForVoteEntries(
    owner?: JudoIdentifiable<ServiceRatingVoteDefinition> | ServiceRatingVoteDefinition,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceRatingVoteEntryStored>>;

  getUserVoteEntry(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
  ): Promise<ServiceRatingVoteEntryStored>;

  getRangeForUserVoteEntry(
    owner?: JudoIdentifiable<ServiceRatingVoteDefinition> | ServiceRatingVoteDefinition,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceRatingVoteEntryStored>>;

  vote(owner: JudoIdentifiable<ServiceRatingVoteDefinition>, target: RatingVoteInput): Promise<void>;

  takeBackVote(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<void>;
}
