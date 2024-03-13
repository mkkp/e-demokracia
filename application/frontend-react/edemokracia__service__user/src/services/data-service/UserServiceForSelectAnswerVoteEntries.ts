//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  JudoRestResponse,
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
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for User.selectAnswerVoteEntries
 */
export interface UserServiceForSelectAnswerVoteEntries {
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
  update(
    target: Partial<ServiceSelectAnswerVoteEntryStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteEntryStored>>;
  validateUpdate(
    target: Partial<ServiceSelectAnswerVoteEntryStored>,
    queryCustomizer?: CommandQueryCustomizer,
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
  validateUpdateOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: Partial<ServiceServiceUserStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
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
  validateUpdateValue(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: Partial<ServiceSelectAnswerVoteSelectionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelectionStored>>;
  setValue(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    selected: JudoIdentifiable<ServiceSelectAnswerVoteSelection>,
  ): Promise<JudoRestResponse<void>>;
  unsetValue(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceSelectAnswerVoteSelection>,
  ): Promise<JudoRestResponse<void>>;
}
