//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceVoteDefinitionStored,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceDashboard,
  ServiceVoteEntryQueryCustomizer,
  ServiceVoteDefinition,
  ServiceVoteEntryStored,
  ServiceVoteEntry,
} from '../data-api';

/**
 * Relation Service for ServiceDashboard.userVoteEntries
 */
export interface ServiceDashboardServiceForUserVoteEntries {
  listUserVoteEntries(
    owner: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceVoteEntryStored>>;
}
