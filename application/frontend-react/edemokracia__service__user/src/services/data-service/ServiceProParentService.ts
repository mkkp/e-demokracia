//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { ServiceProParentQueryCustomizer, ServiceProParentStored, ServiceProParent } from '../data-api';

/**
 * Class Service for ServiceProParent
 */
export interface ServiceProParentService {
  refresh(
    target: JudoIdentifiable<ServiceProParent>,
    queryCustomizer?: ServiceProParentQueryCustomizer,
  ): Promise<ServiceProParentStored>;
}
