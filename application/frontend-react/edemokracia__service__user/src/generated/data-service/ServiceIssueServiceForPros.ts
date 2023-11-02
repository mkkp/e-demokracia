//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceProParentQueryCustomizer,
  ServiceConParent,
  ServiceConParentQueryCustomizer,
  ServiceSimpleVote,
  ServiceConParentStored,
  ServiceServiceUserStored,
  ServiceConStored,
  ServiceCon,
  ServiceIssue,
  ServiceSimpleVoteStored,
  ServiceServiceUser,
  ServiceProQueryCustomizer,
  ServiceProParentStored,
  ServiceConQueryCustomizer,
  ServiceProStored,
  ServiceProParent,
  ServicePro,
  ServiceServiceUserQueryCustomizer,
  ServiceSimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceIssue.pros
 */
export interface ServiceIssueServiceForPros {
  listPros(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;

  deletePros(owner: JudoIdentifiable<ServiceIssue>, target: JudoIdentifiable<ServicePro>): Promise<void>;

  updatePros(owner: JudoIdentifiable<ServiceIssue>, target: Partial<ServiceProStored>): Promise<ServiceProStored>;
}
