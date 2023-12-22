//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import { ServicePro, ServiceProParent, ServiceProParentQueryCustomizer, ServiceProParentStored } from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServicePro.parentPro
 */
export interface ServiceProServiceForParentPro {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceProParentQueryCustomizer,
  ): Promise<ServiceProParentStored>;
}
