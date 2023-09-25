//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminUserManager,
  AdminUserManagerStored,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminUser,
  AdminCreateUserInput,
  AdminUserManagerQueryCustomizer,
} from '../data-api';

/**
 * Class Service for AdminUserManager
 */
export interface AdminUserManagerServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminUserManager>,
    queryCustomizer?: AdminUserManagerQueryCustomizer,
  ): Promise<AdminUserManagerStored>;

  getUsers(
    target: JudoIdentifiable<AdminUserManager>,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;

  getRangeForUsers(
    owner?: JudoIdentifiable<AdminUserManager> | AdminUserManager,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;

  createUser(target: AdminCreateUserInput): Promise<AdminUserStored>;
}
