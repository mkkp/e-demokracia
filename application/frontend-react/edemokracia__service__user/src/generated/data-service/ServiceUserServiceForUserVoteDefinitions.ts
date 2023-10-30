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
  ServiceUserVoteDefinitionQueryCustomizer,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceUserVoteDefinition,
} from '../data-api';

/**
 * Access Relation Service for ServiceUser.userVoteDefinitions
 */
export interface ServiceUserServiceForUserVoteDefinitions {
  getUserVoteDefinitions(mask?: string): Promise<ServiceUserVoteDefinitionStored>;
}
