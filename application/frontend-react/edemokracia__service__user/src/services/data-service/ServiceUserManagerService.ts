//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  ServiceCreateUserInput,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserManager,
  ServiceUserManagerQueryCustomizer,
  ServiceUserManagerStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceUserManager
 */
export interface ServiceUserManagerService {
  refresh(
    target: JudoIdentifiable<ServiceUserManager>,
    queryCustomizer?: ServiceUserManagerQueryCustomizer,
  ): Promise<ServiceUserManagerStored>;
  update(target: Partial<ServiceUserManagerStored>): Promise<ServiceUserManagerStored>;
  listUsers(
    target: JudoIdentifiable<ServiceUserManager>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
  getRangeForUsers(
    owner?: JudoIdentifiable<ServiceUserManager> | ServiceUserManager,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
  createUser(target: ServiceCreateUserInput): Promise<ServiceServiceUserStored>;
  getTemplateOnCreateUser(): Promise<ServiceCreateUserInput>;
}
