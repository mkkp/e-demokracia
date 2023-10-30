//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceServicePrincipalUserQueryCustomizer,
  ServiceServicePrincipalUser,
  ServiceServicePrincipalUserStored,
} from '../data-api';

/**
 * Class Service for ServiceServicePrincipalUser
 */
export interface ServiceServicePrincipalUserServiceForClass {
  refresh(
    target: JudoIdentifiable<ServiceServicePrincipalUser>,
    queryCustomizer?: ServiceServicePrincipalUserQueryCustomizer,
  ): Promise<ServiceServicePrincipalUserStored>;
}
