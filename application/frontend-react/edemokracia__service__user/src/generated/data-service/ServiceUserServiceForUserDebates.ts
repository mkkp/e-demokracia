//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  ServiceDebate,
  ServiceDebateQueryCustomizer,
  ServiceDebateStored,
  ServiceUserDebates,
  ServiceUserDebatesStored,
  ServiceUserDebatesQueryCustomizer,
} from '../data-api';

/**
 * Access Relation Service for ServiceUser.userDebates
 */
export interface ServiceUserServiceForUserDebates {
  getUserDebates(mask?: string): Promise<ServiceUserDebatesStored>;
}
