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
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceIssueQueryCustomizer,
  YesNoAbstainVoteInput,
  ServiceYesNoAbstainVoteDefinition,
  ServiceIssueStored,
  ServiceServiceUserStored,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceIssue,
  ServiceServiceUser,
  ServiceYesNoAbstainVoteEntryStored,
  ServiceServiceUserQueryCustomizer,
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

  getOwner(
    target: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;

  getRangeForOwner(
    owner?: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition> | ServiceYesNoAbstainVoteDefinition,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;

  setOwner(
    target: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;

  unsetOwner(target: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>): Promise<void>;

  vote(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>, target: YesNoAbstainVoteInput): Promise<void>;

  takeBackVote(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>): Promise<void>;

  removeFromFavorites(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>): Promise<void>;

  addToFavorites(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>): Promise<void>;

  deleteOrArchive(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>): Promise<void>;

  activate(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>): Promise<void>;

  closeVote(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>): Promise<void>;
}
