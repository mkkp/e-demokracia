//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  JudoRestResponse,
  ServiceConParent,
  ServiceConParentQueryCustomizer,
  ServiceConParentStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceConParent
 */
export interface ServiceConParentService {
  refresh(
    target: JudoIdentifiable<ServiceConParent>,
    queryCustomizer?: ServiceConParentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceConParentStored>>;
}
