//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

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
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceSelectAnswerVoteEntry
 */
export interface ServiceSelectAnswerVoteEntryService {
  refresh(
    target: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteEntryStored>>;
  getOwner(
    target: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getRangeForOwner(
    owner?: JudoIdentifiable<ServiceSelectAnswerVoteEntry> | ServiceSelectAnswerVoteEntry,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  setOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  unsetOwner(owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>): Promise<JudoRestResponse<void>>;
  getTemplateForValue(): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelection>>;
  getValue(
    target: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelectionStored>>;
  getRangeForValue(
    owner?: JudoIdentifiable<ServiceSelectAnswerVoteEntry> | ServiceSelectAnswerVoteEntry,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSelectAnswerVoteSelectionStored>>>;
  setValue(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    selected: JudoIdentifiable<ServiceSelectAnswerVoteSelection>,
  ): Promise<JudoRestResponse<void>>;
  unsetValue(owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>): Promise<JudoRestResponse<void>>;
}
