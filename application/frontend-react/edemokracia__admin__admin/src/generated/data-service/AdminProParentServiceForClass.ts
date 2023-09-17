//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { AdminProParent, AdminProParentQueryCustomizer, AdminProParentStored } from '../data-api';

/**
 * Class Service for AdminProParent
 */
export interface AdminProParentServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminProParent>,
    queryCustomizer?: AdminProParentQueryCustomizer,
  ): Promise<AdminProParentStored>;
}
