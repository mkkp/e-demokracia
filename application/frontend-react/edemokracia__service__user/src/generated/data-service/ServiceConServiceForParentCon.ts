//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { ServiceConParent, ServiceConParentQueryCustomizer, ServiceConParentStored, ServiceCon } from '../data-api';

/**
 * Relation Service for ServiceCon.parentCon
 */
export interface ServiceConServiceForParentCon {
  getParentCon(owner: JudoIdentifiable<ServiceCon>, mask?: string): Promise<ServiceConParentStored>;
}
