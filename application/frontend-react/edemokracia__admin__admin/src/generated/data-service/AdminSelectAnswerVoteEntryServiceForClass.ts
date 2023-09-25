//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminSelectAnswerVoteEntryStored,
  AdminSelectAnswerVoteEntry,
  AdminSelectAnswerVoteSelectionQueryCustomizer,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminUser,
  AdminSelectAnswerVoteSelection,
  AdminSelectAnswerVoteEntryQueryCustomizer,
  AdminSelectAnswerVoteSelectionStored,
} from '../data-api';

/**
 * Class Service for AdminSelectAnswerVoteEntry
 */
export interface AdminSelectAnswerVoteEntryServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminSelectAnswerVoteEntry>,
    queryCustomizer?: AdminSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<AdminSelectAnswerVoteEntryStored>;

  getOwner(
    target: JudoIdentifiable<AdminSelectAnswerVoteEntry>,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<AdminUserStored>;

  getRangeForOwner(
    owner?: JudoIdentifiable<AdminSelectAnswerVoteEntry> | AdminSelectAnswerVoteEntry,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;

  getValue(
    target: JudoIdentifiable<AdminSelectAnswerVoteEntry>,
    queryCustomizer?: AdminSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<AdminSelectAnswerVoteSelectionStored>;

  getRangeForValue(
    owner?: JudoIdentifiable<AdminSelectAnswerVoteEntry> | AdminSelectAnswerVoteEntry,
    queryCustomizer?: AdminSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<AdminSelectAnswerVoteSelectionStored>>;
}
