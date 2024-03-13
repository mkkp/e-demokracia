//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  JudoRestResponse,
  ServiceServicePrincipalUser,
  ServiceServicePrincipalUserQueryCustomizer,
  ServiceServicePrincipalUserStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceServicePrincipalUser
 */
export interface ServiceServicePrincipalUserService {
  refresh(
    target: JudoIdentifiable<ServiceServicePrincipalUser>,
    queryCustomizer?: ServiceServicePrincipalUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServicePrincipalUserStored>>;
}
