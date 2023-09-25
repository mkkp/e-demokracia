//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  AdminUserManagerStored,
  AdminUserManager,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminUser,
  AdminUserManagerQueryCustomizer,
} from '../data-api';

/**
 * Access Relation Service for AdminAdmin.adminUserManager
 */
export interface AdminAdminServiceForAdminUserManager {
  getAdminUserManager(mask?: string): Promise<AdminUserManagerStored>;
}
