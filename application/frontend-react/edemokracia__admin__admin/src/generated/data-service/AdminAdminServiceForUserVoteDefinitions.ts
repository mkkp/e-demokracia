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
  AdminUserVoteDefinition,
  AdminUserVoteDefinitionQueryCustomizer,
  AdminVoteDefinition,
  AdminUserVoteDefinitionStored,
} from '../data-api';

/**
 * Access Relation Service for AdminAdmin.userVoteDefinitions
 */
export interface AdminAdminServiceForUserVoteDefinitions {
  getUserVoteDefinitions(mask?: string): Promise<AdminUserVoteDefinitionStored>;
}
