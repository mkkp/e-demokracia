//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceDebate,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceDebateStored,
  ServiceIssueQueryCustomizer,
  YesNoAbstainVoteInput,
  ServiceYesNoAbstainVoteDefinition,
  ServiceIssueStored,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceIssue,
  ServiceDebateQueryCustomizer,
  ServiceYesNoAbstainVoteEntryStored,
  ServiceYesNoAbstainVoteEntry,
} from '../data-api';

/**
 * Class Service for ServiceYesNoAbstainVoteDefinition
 */
export interface ServiceYesNoAbstainVoteDefinitionServiceForClass {
  refresh(
    target: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    queryCustomizer?: ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<ServiceYesNoAbstainVoteDefinitionStored>;

  update(target: Partial<ServiceYesNoAbstainVoteDefinitionStored>): Promise<ServiceYesNoAbstainVoteDefinitionStored>;

  getDebate(
    target: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<ServiceDebateStored>;

  getRangeForDebate(
    owner?: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition> | ServiceYesNoAbstainVoteDefinition,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;

  getIssue(
    target: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored>;

  getRangeForIssue(
    owner?: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition> | ServiceYesNoAbstainVoteDefinition,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getVoteEntries(
    target: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    queryCustomizer?: ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceYesNoAbstainVoteEntryStored>>;

  getRangeForVoteEntries(
    owner?: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition> | ServiceYesNoAbstainVoteDefinition,
    queryCustomizer?: ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceYesNoAbstainVoteEntryStored>>;

  getUserVoteEntry(
    target: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    queryCustomizer?: ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<ServiceYesNoAbstainVoteEntryStored>;

  getRangeForUserVoteEntry(
    owner?: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition> | ServiceYesNoAbstainVoteDefinition,
    queryCustomizer?: ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceYesNoAbstainVoteEntryStored>>;

  vote(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>, target: YesNoAbstainVoteInput): Promise<void>;

  takeBackVote(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>): Promise<void>;
}
