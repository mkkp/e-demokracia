//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminYesNoVoteEntryStored,
  AdminYesNoVoteEntry,
  AdminYesNoVoteDefinition,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminYesNoVoteEntryQueryCustomizer,
  AdminUser,
} from '../data-api';

/**
 * Relation Service for AdminYesNoVoteDefinition.voteEntries
 */
export interface AdminYesNoVoteDefinitionServiceForVoteEntries {
  listVoteEntries(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer?: AdminYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<AdminYesNoVoteEntryStored>>;
}