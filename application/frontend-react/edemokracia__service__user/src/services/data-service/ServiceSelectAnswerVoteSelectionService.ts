//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  JudoRestResponse,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceSelectAnswerVoteSelection
 */
export interface ServiceSelectAnswerVoteSelectionService {
  getTemplate(): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelection>>;
  refresh(
    target: JudoIdentifiable<ServiceSelectAnswerVoteSelection>,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelectionStored>>;
  delete(target: JudoIdentifiable<ServiceSelectAnswerVoteSelection>): Promise<JudoRestResponse<void>>;
  update(
    target: Partial<ServiceSelectAnswerVoteSelectionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelectionStored>>;
  validateUpdate(
    target: Partial<ServiceSelectAnswerVoteSelectionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelectionStored>>;
}
