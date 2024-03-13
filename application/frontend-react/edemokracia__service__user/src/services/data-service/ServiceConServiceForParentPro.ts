//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  JudoRestResponse,
  ServiceCon,
  ServiceProParent,
  ServiceProParentQueryCustomizer,
  ServiceProParentStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceCon.parentPro
 */
export interface ServiceConServiceForParentPro {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceProParentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceProParentStored>>;
}
