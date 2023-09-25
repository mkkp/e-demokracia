//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminSelectAnswerVoteEntry,
  AdminSelectAnswerVoteSelectionQueryCustomizer,
  AdminSelectAnswerVoteSelection,
  AdminSelectAnswerVoteSelectionStored,
} from '../data-api';

/**
 * Relation Service for AdminSelectAnswerVoteEntry.value
 */
export interface AdminSelectAnswerVoteEntryServiceForValue {
  getValue(
    owner: JudoIdentifiable<AdminSelectAnswerVoteEntry>,
    mask?: string,
  ): Promise<AdminSelectAnswerVoteSelectionStored>;
}