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
  User,
  VoteEntry,
  UserQueryCustomizer,
  VoteDefinitionQueryCustomizer,
  UserStored,
  VoteDefinition,
  VoteEntryQueryCustomizer,
  VoteDefinitionStored,
} from '../data-api';

/**
 * Relation Service for AdminRatingVoteDefinition.voteEntries
 */
export interface AdminRatingVoteDefinitionServiceForVoteEntries {
  listVoteEntries(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    queryCustomizer?: VoteEntryQueryCustomizer,
  ): Promise<Array<VoteEntryStored>>;

  createVoteEntries(owner: JudoIdentifiable<AdminRatingVoteDefinition>, target: VoteEntry): Promise<VoteEntryStored>;

  deleteVoteEntries(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: JudoIdentifiable<VoteEntry>,
  ): Promise<void>;

  updateVoteEntries(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: Partial<VoteEntryStored>,
  ): Promise<VoteEntryStored>;

  getRangeForUser(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    queryCustomizer: UserQueryCustomizer,
  ): Promise<Array<UserStored>>;

  setUser(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: JudoIdentifiable<User>,
    selected: JudoIdentifiable<User>,
  ): Promise<void>;

  getRangeForVoteDefinition(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    queryCustomizer: VoteDefinitionQueryCustomizer,
  ): Promise<Array<VoteDefinitionStored>>;

  setVoteDefinition(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: JudoIdentifiable<VoteDefinition>,
    selected: JudoIdentifiable<VoteDefinition>,
  ): Promise<void>;
}
