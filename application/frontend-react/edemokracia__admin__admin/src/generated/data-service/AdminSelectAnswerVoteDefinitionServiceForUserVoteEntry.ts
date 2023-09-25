//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminSelectAnswerVoteEntryStored,
  AdminSelectAnswerVoteEntry,
  AdminSelectAnswerVoteSelectionQueryCustomizer,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminSelectAnswerVoteDefinition,
  AdminUser,
  AdminSelectAnswerVoteSelection,
  AdminSelectAnswerVoteEntryQueryCustomizer,
  AdminSelectAnswerVoteSelectionStored,
} from '../data-api';

/**
 * Relation Service for AdminSelectAnswerVoteDefinition.userVoteEntry
 */
export interface AdminSelectAnswerVoteDefinitionServiceForUserVoteEntry {
  getUserVoteEntry(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    mask?: string,
  ): Promise<AdminSelectAnswerVoteEntryStored>;
}
