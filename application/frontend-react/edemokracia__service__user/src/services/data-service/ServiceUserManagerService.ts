//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  JudoRestResponse,
  ServiceCreateUserInput,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserManager,
  ServiceUserManagerQueryCustomizer,
  ServiceUserManagerStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceUserManager
 */
export interface ServiceUserManagerService {
  refresh(
    target: JudoIdentifiable<ServiceUserManager>,
    queryCustomizer?: ServiceUserManagerQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceUserManagerStored>>;
  update(
    target: Partial<ServiceUserManagerStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceUserManagerStored>>;
  validateUpdate(
    target: Partial<ServiceUserManagerStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceUserManagerStored>>;
  listUsers(
    target: JudoIdentifiable<ServiceUserManager>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  getRangeForUsers(
    owner?: JudoIdentifiable<ServiceUserManager> | ServiceUserManager,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  createUser(target: ServiceCreateUserInput): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getTemplateOnCreateUser(): Promise<JudoRestResponse<ServiceCreateUserInput>>;
}
