//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceSelectAnswerVoteSelectionStored,
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelection,
} from '../data-api';

/**
 * Relation Service for ServiceSelectAnswerVoteDefinition.voteSelections
 */
export interface ServiceSelectAnswerVoteDefinitionServiceForVoteSelections {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteSelectionStored>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteSelectionStored>;
  getTemplate(): Promise<ServiceSelectAnswerVoteSelection>;
  create(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: ServiceSelectAnswerVoteSelection,
  ): Promise<ServiceSelectAnswerVoteSelectionStored>;
  delete(target: JudoIdentifiable<ServiceSelectAnswerVoteSelection>): Promise<void>;
  update(target: Partial<ServiceSelectAnswerVoteSelectionStored>): Promise<ServiceSelectAnswerVoteSelectionStored>;
}
