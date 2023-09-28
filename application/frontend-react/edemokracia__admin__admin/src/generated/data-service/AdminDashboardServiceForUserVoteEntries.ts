//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminVoteEntry,
  AdminVoteEntryQueryCustomizer,
  AdminVoteDefinition,
  AdminVoteEntryStored,
  AdminDashboard,
} from '../data-api';

/**
 * Relation Service for AdminDashboard.userVoteEntries
 */
export interface AdminDashboardServiceForUserVoteEntries {
  listUserVoteEntries(
    owner: JudoIdentifiable<AdminDashboard>,
    queryCustomizer?: AdminVoteEntryQueryCustomizer,
  ): Promise<Array<AdminVoteEntryStored>>;
}