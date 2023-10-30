//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  ServiceVoteDefinitionStored,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteEntryQueryCustomizer,
  ServiceVoteDefinition,
  ServiceVoteEntryStored,
  ServiceVoteEntry,
} from '../data-api';

/**
 * Access Relation Service for ServiceUser.adminVoteEntries
 */
export interface ServiceUserServiceForAdminVoteEntries {
  listAdminVoteEntries(queryCustomizer?: ServiceVoteEntryQueryCustomizer): Promise<Array<ServiceVoteEntryStored>>;
}
