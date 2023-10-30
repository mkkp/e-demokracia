//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  ServiceServiceUser,
  ServiceUserManagerStored,
  ServiceUserManager,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserManagerQueryCustomizer,
} from '../data-api';

/**
 * Access Relation Service for ServiceUser.adminUserManager
 */
export interface ServiceUserServiceForAdminUserManager {
  getAdminUserManager(mask?: string): Promise<ServiceUserManagerStored>;
}
