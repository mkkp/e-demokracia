//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceSelectAnswerVoteEntryStored,
  ServiceServiceUser,
  ServiceSelectAnswerVoteSelectionStored,
  ServiceSelectAnswerVoteDefinition,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteSelection,
} from '../data-api';

/**
 * Relation Service for ServiceSelectAnswerVoteDefinition.voteEntries
 */
export interface ServiceSelectAnswerVoteDefinitionServiceForVoteEntries {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteEntryStored>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteEntryStored>;
  getOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  getValue(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteSelectionStored>;
  getTemplateForValue(): Promise<ServiceSelectAnswerVoteSelection>;
}
