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
 * Class Service for AdminSelectAnswerVoteDefinition
 */
export interface AdminSelectAnswerVoteDefinitionServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    queryCustomizer?: AdminSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<AdminSelectAnswerVoteDefinitionStored>;

  getDebate(
    target: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<AdminDebateStored>;

  getRangeForDebate(
    owner?: JudoIdentifiable<AdminSelectAnswerVoteDefinition> | AdminSelectAnswerVoteDefinition,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getIssue(
    target: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<AdminIssueStored>;

  getRangeForIssue(
    owner?: JudoIdentifiable<AdminSelectAnswerVoteDefinition> | AdminSelectAnswerVoteDefinition,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getVoteEntries(
    target: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    queryCustomizer?: AdminSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<Array<AdminSelectAnswerVoteEntryStored>>;

  getRangeForVoteEntries(
    owner?: JudoIdentifiable<AdminSelectAnswerVoteDefinition> | AdminSelectAnswerVoteDefinition,
    queryCustomizer?: AdminSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<Array<AdminSelectAnswerVoteEntryStored>>;

  getUserVoteEntry(
    target: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    queryCustomizer?: AdminSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<AdminSelectAnswerVoteEntryStored>;

  getRangeForUserVoteEntry(
    owner?: JudoIdentifiable<AdminSelectAnswerVoteDefinition> | AdminSelectAnswerVoteDefinition,
    queryCustomizer?: AdminSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<Array<AdminSelectAnswerVoteEntryStored>>;

  getVoteSelections(
    target: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    queryCustomizer?: AdminSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<AdminSelectAnswerVoteSelectionStored>>;

  getRangeForVoteSelections(
    owner?: JudoIdentifiable<AdminSelectAnswerVoteDefinition> | AdminSelectAnswerVoteDefinition,
    queryCustomizer?: AdminSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<AdminSelectAnswerVoteSelectionStored>>;

  vote(owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>, target: SelectAnswerVoteSelection): Promise<void>;

  getRangeForVote(
    owner?: AdminSelectAnswerVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  takeBackVote(owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>): Promise<void>;
}