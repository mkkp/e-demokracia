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
 * Relation Service for ServicePro.cons
 */
export interface ServiceProServiceForCons {
  listCons(
    owner: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>>;

  deleteCons(owner: JudoIdentifiable<ServicePro>, target: JudoIdentifiable<ServiceCon>): Promise<void>;

  updateCons(owner: JudoIdentifiable<ServicePro>, target: Partial<ServiceConStored>): Promise<ServiceConStored>;
}
