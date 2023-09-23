//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminYesNoVoteEntryStored,
  AdminYesNoVoteDefinitionStored,
  AdminYesNoVoteDefinition,
  AdminIssueStored,
  AdminYesNoVoteDefinitionQueryCustomizer,
  AdminYesNoVoteEntryQueryCustomizer,
  AdminIssueQueryCustomizer,
  AdminDebate,
  AdminIssue,
  AdminYesNoVoteEntry,
  AdminDebateStored,
  YesNoVoteInput,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Class Service for AdminYesNoVoteDefinition
 */
export interface AdminYesNoVoteDefinitionServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer?: AdminYesNoVoteDefinitionQueryCustomizer,
  ): Promise<AdminYesNoVoteDefinitionStored>;

  delete(target: JudoIdentifiable<AdminYesNoVoteDefinition>): Promise<void>;

  update(target: Partial<AdminYesNoVoteDefinitionStored>): Promise<AdminYesNoVoteDefinitionStored>;

  getDebate(
    target: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<AdminDebateStored>;

  getRangeForDebate(
    owner?: JudoIdentifiable<AdminYesNoVoteDefinition> | AdminYesNoVoteDefinition,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getIssue(
    target: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<AdminIssueStored>;

  getRangeForIssue(
    owner?: JudoIdentifiable<AdminYesNoVoteDefinition> | AdminYesNoVoteDefinition,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getVoteEntries(
    target: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer?: AdminYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<AdminYesNoVoteEntryStored>>;

  getRangeForVoteEntries(
    owner?: JudoIdentifiable<AdminYesNoVoteDefinition> | AdminYesNoVoteDefinition,
    queryCustomizer?: AdminYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<AdminYesNoVoteEntryStored>>;

  getUserVoteEntry(
    target: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer?: AdminYesNoVoteEntryQueryCustomizer,
  ): Promise<AdminYesNoVoteEntryStored>;

  getRangeForUserVoteEntry(
    owner?: JudoIdentifiable<AdminYesNoVoteDefinition> | AdminYesNoVoteDefinition,
    queryCustomizer?: AdminYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<AdminYesNoVoteEntryStored>>;

  vote(owner: JudoIdentifiable<AdminYesNoVoteDefinition>, target: YesNoVoteInput): Promise<void>;

  takeBackVote(owner: JudoIdentifiable<AdminYesNoVoteDefinition>): Promise<void>;
}
