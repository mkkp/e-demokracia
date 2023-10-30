//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceSimpleVoteStored,
  ServiceServiceUser,
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceSimpleVote,
  ServicePro,
  ServiceCommentStored,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServicePro.comments
 */
export interface ServiceProServiceForComments {
  listComments(
    owner: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceCommentQueryCustomizer,
  ): Promise<Array<ServiceCommentStored>>;
}
