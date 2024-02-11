//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  JudoRestResponse,
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceSelectAnswerVoteDefinition.voteSelections
 */
export interface ServiceSelectAnswerVoteDefinitionServiceForVoteSelections {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSelectAnswerVoteSelectionStored>>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelectionStored>>;
  getTemplate(): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelection>>;
  create(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: ServiceSelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelectionStored>>;
  validateCreate(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: ServiceSelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelection>>;
  delete(target: JudoIdentifiable<ServiceSelectAnswerVoteSelection>): Promise<JudoRestResponse<void>>;
  update(
    target: Partial<ServiceSelectAnswerVoteSelectionStored>,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelectionStored>>;
  validateUpdate(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: Partial<ServiceSelectAnswerVoteSelectionStored>,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelectionStored>>;
}
