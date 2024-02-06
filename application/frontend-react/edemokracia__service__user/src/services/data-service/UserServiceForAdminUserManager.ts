//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  ServiceCreateUserInput,
  ServiceCreateUserInputStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserManager,
  ServiceUserManagerQueryCustomizer,
  ServiceUserManagerStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for User.adminUserManager
 */
export interface UserServiceForAdminUserManager {
  refreshForAdminUserManager(queryCustomizer?: ServiceUserManagerQueryCustomizer): Promise<ServiceUserManagerStored>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceUserManagerQueryCustomizer,
  ): Promise<ServiceUserManagerStored>;
  update(target: Partial<ServiceUserManagerStored>): Promise<ServiceUserManagerStored>;
  validateUpdate(target: Partial<ServiceUserManagerStored>): Promise<ServiceUserManagerStored>;
  listUsers(
    owner: JudoIdentifiable<ServiceUserManager>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
  updateUsers(
    owner: JudoIdentifiable<ServiceUserManager>,
    target: Partial<ServiceServiceUserStored>,
  ): Promise<ServiceServiceUserStored>;
  validateUpdateUsers(
    owner: JudoIdentifiable<ServiceUserManager>,
    target: Partial<ServiceServiceUserStored>,
  ): Promise<ServiceServiceUserStored>;
  createUser(target: ServiceCreateUserInput): Promise<ServiceServiceUserStored>;
  getTemplateOnCreateUser(): Promise<ServiceCreateUserInput>;
}
