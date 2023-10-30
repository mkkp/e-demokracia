//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceSimpleVoteStored,
  ServiceServiceUser,
  ServiceSimpleVote,
  ServiceServiceUserStored,
  ServiceServiceUserQueryCustomizer,
  ServiceSimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Class Service for ServiceSimpleVote
 */
export interface ServiceSimpleVoteServiceForClass {
  refresh(
    target: JudoIdentifiable<ServiceSimpleVote>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
  ): Promise<ServiceSimpleVoteStored>;

  getUser(
    target: JudoIdentifiable<ServiceSimpleVote>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;

  getRangeForUser(
    owner?: JudoIdentifiable<ServiceSimpleVote> | ServiceSimpleVote,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
}
