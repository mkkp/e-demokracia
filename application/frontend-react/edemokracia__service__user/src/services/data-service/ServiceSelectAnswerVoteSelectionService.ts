//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceSelectAnswerVoteSelection
 */
export interface ServiceSelectAnswerVoteSelectionService {
  getTemplate(): Promise<ServiceSelectAnswerVoteSelection>;
  refresh(
    target: JudoIdentifiable<ServiceSelectAnswerVoteSelection>,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteSelectionStored>;
  delete(target: JudoIdentifiable<ServiceSelectAnswerVoteSelection>): Promise<void>;
  update(target: Partial<ServiceSelectAnswerVoteSelectionStored>): Promise<ServiceSelectAnswerVoteSelectionStored>;
}
