//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminSelectAnswerVoteSelectionQueryCustomizer,
  AdminSelectAnswerVoteSelection,
  AdminSelectAnswerVoteSelectionStored,
} from '../data-api';

/**
 * Class Service for AdminSelectAnswerVoteSelection
 */
export interface AdminSelectAnswerVoteSelectionServiceForClass {
  getTemplate(): Promise<AdminSelectAnswerVoteSelection>;

  refresh(
    target: JudoIdentifiable<AdminSelectAnswerVoteSelection>,
    queryCustomizer?: AdminSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<AdminSelectAnswerVoteSelectionStored>;

  delete(target: JudoIdentifiable<AdminSelectAnswerVoteSelection>): Promise<void>;

  update(target: Partial<AdminSelectAnswerVoteSelectionStored>): Promise<AdminSelectAnswerVoteSelectionStored>;
}
