//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminYesNoAbstainVoteDefinition,
  AdminYesNoAbstainVoteEntry,
  AdminYesNoAbstainVoteEntryQueryCustomizer,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminYesNoAbstainVoteEntryStored,
  AdminUser,
} from '../data-api';

/**
 * Relation Service for AdminYesNoAbstainVoteDefinition.userVoteEntry
 */
export interface AdminYesNoAbstainVoteDefinitionServiceForUserVoteEntry {
  getUserVoteEntry(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    mask?: string,
  ): Promise<AdminYesNoAbstainVoteEntryStored>;
}
