//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

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
 * Class Service for VoteEntry
 */
export interface VoteEntryServiceForClass {
  refresh(target: JudoIdentifiable<VoteEntry>, queryCustomizer?: VoteEntryQueryCustomizer): Promise<VoteEntryStored>;

  getUser(target: JudoIdentifiable<VoteEntry>, queryCustomizer?: UserQueryCustomizer): Promise<UserStored>;

  getRangeForUser(
    owner?: JudoIdentifiable<VoteEntry> | VoteEntry,
    queryCustomizer?: UserQueryCustomizer,
  ): Promise<Array<UserStored>>;

  getVoteDefinition(
    target: JudoIdentifiable<VoteEntry>,
    queryCustomizer?: VoteDefinitionQueryCustomizer,
  ): Promise<VoteDefinitionStored>;

  getRangeForVoteDefinition(
    owner?: JudoIdentifiable<VoteEntry> | VoteEntry,
    queryCustomizer?: VoteDefinitionQueryCustomizer,
  ): Promise<Array<VoteDefinitionStored>>;
}
