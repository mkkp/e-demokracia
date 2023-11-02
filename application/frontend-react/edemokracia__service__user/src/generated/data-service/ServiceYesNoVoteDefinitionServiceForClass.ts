//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteEntryStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteDefinitionStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  YesNoVoteInput,
  ServiceIssue,
  ServiceYesNoVoteEntryQueryCustomizer,
} from '../data-api';

/**
 * Class Service for ServiceYesNoVoteDefinition
 */
export interface ServiceYesNoVoteDefinitionServiceForClass {
  refresh(
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceYesNoVoteDefinitionQueryCustomizer,
  ): Promise<ServiceYesNoVoteDefinitionStored>;

  update(target: Partial<ServiceYesNoVoteDefinitionStored>): Promise<ServiceYesNoVoteDefinitionStored>;

  getIssue(
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored>;

  getRangeForIssue(
    owner?: JudoIdentifiable<ServiceYesNoVoteDefinition> | ServiceYesNoVoteDefinition,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getVoteEntries(
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceYesNoVoteEntryStored>>;

  getRangeForVoteEntries(
    owner?: JudoIdentifiable<ServiceYesNoVoteDefinition> | ServiceYesNoVoteDefinition,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceYesNoVoteEntryStored>>;

  getUserVoteEntry(
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<ServiceYesNoVoteEntryStored>;

  getRangeForUserVoteEntry(
    owner?: JudoIdentifiable<ServiceYesNoVoteDefinition> | ServiceYesNoVoteDefinition,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceYesNoVoteEntryStored>>;

  vote(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>, target: YesNoVoteInput): Promise<void>;

  takeBackVote(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<void>;
}
