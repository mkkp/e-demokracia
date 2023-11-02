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
  ServiceCon,
  ServiceConStored,
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
 * Relation Service for ServiceCon.pros
 */
export interface ServiceConServiceForPros {
  listPros(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;

  deletePros(owner: JudoIdentifiable<ServiceCon>, target: JudoIdentifiable<ServicePro>): Promise<void>;

  updatePros(owner: JudoIdentifiable<ServiceCon>, target: Partial<ServiceProStored>): Promise<ServiceProStored>;
}
