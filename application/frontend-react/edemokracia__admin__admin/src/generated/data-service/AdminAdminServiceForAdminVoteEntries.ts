//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminVoteEntry,
  AdminVoteEntryQueryCustomizer,
  AdminVoteDefinition,
  AdminVoteEntryStored,
} from '../data-api';

/**
 * Access Relation Service for AdminAdmin.adminVoteEntries
 */
export interface AdminAdminServiceForAdminVoteEntries {
  listAdminVoteEntries(queryCustomizer?: AdminVoteEntryQueryCustomizer): Promise<Array<AdminVoteEntryStored>>;
}
