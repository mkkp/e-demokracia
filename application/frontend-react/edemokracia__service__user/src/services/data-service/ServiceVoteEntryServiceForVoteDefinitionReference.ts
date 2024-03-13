//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  JudoRestResponse,
  ServiceVoteDefinitionReference,
  ServiceVoteDefinitionReferenceQueryCustomizer,
  ServiceVoteDefinitionReferenceStored,
  ServiceVoteEntry,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceVoteEntry.voteDefinitionReference
 */
export interface ServiceVoteEntryServiceForVoteDefinitionReference {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceVoteDefinitionReferenceQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionReferenceStored>>;
}
