//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { ServiceProParentQueryCustomizer, ServiceProParentStored, ServiceProParent, ServiceCon } from '../data-api';

/**
 * Relation Service for ServiceCon.parentPro
 */
export interface ServiceConServiceForParentPro {
  getParentPro(owner: JudoIdentifiable<ServiceCon>, mask?: string): Promise<ServiceProParentStored>;
}
