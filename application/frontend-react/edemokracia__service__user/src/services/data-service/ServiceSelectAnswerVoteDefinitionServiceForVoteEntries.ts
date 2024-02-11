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
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteEntryStored,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceSelectAnswerVoteDefinition.voteEntries
 */
export interface ServiceSelectAnswerVoteDefinitionServiceForVoteEntries {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSelectAnswerVoteEntryStored>>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteEntryStored>>;
  getOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getRangeForOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry> | ServiceSelectAnswerVoteEntry,
    queryCustomizer: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  setOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  unsetOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  getValue(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelectionStored>>;
  getRangeForValue(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry> | ServiceSelectAnswerVoteEntry,
    queryCustomizer: ServiceSelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSelectAnswerVoteSelectionStored>>>;
  getTemplateForValue(): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelection>>;
  setValue(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    selected: JudoIdentifiable<ServiceSelectAnswerVoteSelection>,
  ): Promise<JudoRestResponse<void>>;
  unsetValue(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceSelectAnswerVoteSelection>,
  ): Promise<JudoRestResponse<void>>;
}
