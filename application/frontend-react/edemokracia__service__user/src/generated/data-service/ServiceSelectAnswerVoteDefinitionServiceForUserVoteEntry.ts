//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
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
 * Relation Service for ServiceSelectAnswerVoteDefinition.userVoteEntry
 */
export interface ServiceSelectAnswerVoteDefinitionServiceForUserVoteEntry {
  getUserVoteEntry(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    mask?: string,
  ): Promise<ServiceSelectAnswerVoteEntryStored>;
}
