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
 * Relation Service for VoteDefinition.voteEntries
 */
export interface VoteDefinitionServiceForVoteEntries {
  listVoteEntries(
    owner: JudoIdentifiable<VoteDefinition>,
    queryCustomizer?: VoteEntryQueryCustomizer,
  ): Promise<Array<VoteEntryStored>>;

  getRangeForUser(
    owner: JudoIdentifiable<VoteDefinition>,
    queryCustomizer: UserQueryCustomizer,
  ): Promise<Array<UserStored>>;

  setUser(
    owner: JudoIdentifiable<VoteDefinition>,
    target: JudoIdentifiable<User>,
    selected: JudoIdentifiable<User>,
  ): Promise<void>;

  getRangeForVoteDefinition(
    owner: JudoIdentifiable<VoteDefinition>,
    queryCustomizer: VoteDefinitionQueryCustomizer,
  ): Promise<Array<VoteDefinitionStored>>;

  setVoteDefinition(
    owner: JudoIdentifiable<VoteDefinition>,
    target: JudoIdentifiable<VoteDefinition>,
    selected: JudoIdentifiable<VoteDefinition>,
  ): Promise<void>;
}
