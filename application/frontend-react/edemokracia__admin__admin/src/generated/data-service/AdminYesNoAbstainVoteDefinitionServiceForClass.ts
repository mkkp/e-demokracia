//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminIssueStored,
  AdminYesNoAbstainVoteEntryQueryCustomizer,
  YesNoAbstainVoteInput,
  AdminYesNoAbstainVoteEntryStored,
  AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  AdminYesNoAbstainVoteDefinition,
  AdminIssueQueryCustomizer,
  AdminYesNoAbstainVoteEntry,
  AdminDebate,
  AdminIssue,
  AdminDebateStored,
  AdminYesNoAbstainVoteDefinitionStored,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Class Service for AdminYesNoAbstainVoteDefinition
 */
export interface AdminYesNoAbstainVoteDefinitionServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer?: AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<AdminYesNoAbstainVoteDefinitionStored>;

  update(target: Partial<AdminYesNoAbstainVoteDefinitionStored>): Promise<AdminYesNoAbstainVoteDefinitionStored>;

  getDebate(
    target: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<AdminDebateStored>;

  getRangeForDebate(
    owner?: JudoIdentifiable<AdminYesNoAbstainVoteDefinition> | AdminYesNoAbstainVoteDefinition,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getIssue(
    target: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<AdminIssueStored>;

  getRangeForIssue(
    owner?: JudoIdentifiable<AdminYesNoAbstainVoteDefinition> | AdminYesNoAbstainVoteDefinition,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getVoteEntries(
    target: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer?: AdminYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<Array<AdminYesNoAbstainVoteEntryStored>>;

  getRangeForVoteEntries(
    owner?: JudoIdentifiable<AdminYesNoAbstainVoteDefinition> | AdminYesNoAbstainVoteDefinition,
    queryCustomizer?: AdminYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<Array<AdminYesNoAbstainVoteEntryStored>>;

  getUserVoteEntry(
    target: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer?: AdminYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<AdminYesNoAbstainVoteEntryStored>;

  getRangeForUserVoteEntry(
    owner?: JudoIdentifiable<AdminYesNoAbstainVoteDefinition> | AdminYesNoAbstainVoteDefinition,
    queryCustomizer?: AdminYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<Array<AdminYesNoAbstainVoteEntryStored>>;

  vote(owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>, target: YesNoAbstainVoteInput): Promise<void>;

  takeBackVote(owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>): Promise<void>;
}
