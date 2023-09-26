//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  AdminUserDebatesQueryCustomizer,
  AdminDebate,
  AdminUserDebatesStored,
  AdminDebateStored,
  AdminUserDebates,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Access Relation Service for AdminAdmin.userDebates
 */
export interface AdminAdminServiceForUserDebates {
  getUserDebates(mask?: string): Promise<AdminUserDebatesStored>;
}
