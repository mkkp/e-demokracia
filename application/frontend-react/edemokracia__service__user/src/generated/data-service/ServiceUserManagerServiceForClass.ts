//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceServiceUser,
  ServiceUserManagerStored,
  ServiceCreateUserInput,
  ServiceUserManager,
  ServiceServiceUserStored,
  ServiceServiceUserQueryCustomizer,
  ServiceUserManagerQueryCustomizer,
} from '../data-api';

/**
 * Class Service for ServiceUserManager
 */
export interface ServiceUserManagerServiceForClass {
  refresh(
    target: JudoIdentifiable<ServiceUserManager>,
    queryCustomizer?: ServiceUserManagerQueryCustomizer,
  ): Promise<ServiceUserManagerStored>;

  getUsers(
    target: JudoIdentifiable<ServiceUserManager>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;

  getRangeForUsers(
    owner?: JudoIdentifiable<ServiceUserManager> | ServiceUserManager,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;

  createUser(target: ServiceCreateUserInput): Promise<ServiceServiceUserStored>;
}
