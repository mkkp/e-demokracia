//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminSelectAnswerVoteSelectionQueryCustomizer,
  AdminSelectAnswerVoteDefinition,
  AdminSelectAnswerVoteSelection,
  AdminSelectAnswerVoteSelectionStored,
} from '../data-api';

/**
 * Relation Service for AdminSelectAnswerVoteDefinition.voteSelections
 */
export interface AdminSelectAnswerVoteDefinitionServiceForVoteSelections {
  listVoteSelections(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    queryCustomizer?: AdminSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<AdminSelectAnswerVoteSelectionStored>>;

  createVoteSelections(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: AdminSelectAnswerVoteSelection,
  ): Promise<AdminSelectAnswerVoteSelectionStored>;

  deleteVoteSelections(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<AdminSelectAnswerVoteSelection>,
  ): Promise<void>;

  updateVoteSelections(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: Partial<AdminSelectAnswerVoteSelectionStored>,
  ): Promise<AdminSelectAnswerVoteSelectionStored>;
}
