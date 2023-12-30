//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceSelectAnswerVoteEntry.value
 */
export interface ServiceSelectAnswerVoteEntryServiceForValue {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteSelectionStored>;
  getRangeForValue(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry> | ServiceSelectAnswerVoteEntry,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteSelectionStored>>;
  getTemplate(): Promise<ServiceSelectAnswerVoteSelection>;
  setValue(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    selected: JudoIdentifiable<ServiceSelectAnswerVoteSelection>,
  ): Promise<void>;
  unsetValue(owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>): Promise<void>;
}
