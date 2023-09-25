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
  AdminIssueStored,
  AdminSelectAnswerVoteSelection,
  AdminSelectAnswerVoteEntryQueryCustomizer,
  AdminSelectAnswerVoteSelectionStored,
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  AdminIssueQueryCustomizer,
  AdminSelectAnswerVoteDefinitionStored,
  SelectAnswerVoteSelectionStored,
  AdminDebate,
  AdminIssue,
  AdminSelectAnswerVoteDefinition,
  AdminDebateStored,
  AdminSelectAnswerVoteDefinitionQueryCustomizer,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for AdminDebate.selectAnswerVoteDefinition
 */
export interface AdminDebateServiceForSelectAnswerVoteDefinition {
  getSelectAnswerVoteDefinition(
    owner: JudoIdentifiable<AdminDebate>,
    mask?: string,
  ): Promise<AdminSelectAnswerVoteDefinitionStored>;
}
