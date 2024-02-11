//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  JudoRestResponse,
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
  refreshForAdminUserManager(
    queryCustomizer?: ServiceUserManagerQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceUserManagerStored>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceUserManagerQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceUserManagerStored>>;
  update(target: Partial<ServiceUserManagerStored>): Promise<JudoRestResponse<ServiceUserManagerStored>>;
  validateUpdate(target: Partial<ServiceUserManagerStored>): Promise<JudoRestResponse<ServiceUserManagerStored>>;
  listUsers(
    owner: JudoIdentifiable<ServiceUserManager>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  updateUsers(
    owner: JudoIdentifiable<ServiceUserManager>,
    target: Partial<ServiceServiceUserStored>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  validateUpdateUsers(
    owner: JudoIdentifiable<ServiceUserManager>,
    target: Partial<ServiceServiceUserStored>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  createUser(target: ServiceCreateUserInput): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getTemplateOnCreateUser(): Promise<JudoRestResponse<ServiceCreateUserInput>>;
}
