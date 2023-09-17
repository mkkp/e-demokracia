//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { AdminDebateParentStored, AdminPro, AdminDebateParentQueryCustomizer, AdminDebateParent } from '../data-api';

/**
 * Relation Service for AdminPro.parentDebate
 */
export interface AdminProServiceForParentDebate {
  getParentDebate(owner: JudoIdentifiable<AdminPro>, mask?: string): Promise<AdminDebateParentStored>;
}
