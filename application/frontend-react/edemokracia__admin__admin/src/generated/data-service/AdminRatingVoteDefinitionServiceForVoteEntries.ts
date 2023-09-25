//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminRatingVoteDefinition,
  AdminRatingVoteEntryQueryCustomizer,
  AdminRatingVoteEntryStored,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminRatingVoteEntry,
  AdminUser,
} from '../data-api';

/**
 * Relation Service for AdminRatingVoteDefinition.voteEntries
 */
export interface AdminRatingVoteDefinitionServiceForVoteEntries {
  listVoteEntries(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    queryCustomizer?: AdminRatingVoteEntryQueryCustomizer,
  ): Promise<Array<AdminRatingVoteEntryStored>>;
}
