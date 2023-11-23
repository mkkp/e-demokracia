//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceVoteDefinitionStored,
  RatingVoteInput,
  YesNoAbstainVoteInputStored,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteEntryQueryCustomizer,
  YesNoAbstainVoteInput,
  ServiceVoteDefinition,
  ServiceVoteEntryStored,
  ServiceVoteEntry,
  SelectAnswerVoteSelection,
  RatingVoteInputStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  YesNoVoteInput,
  YesNoVoteInputStored,
} from '../data-api';

/**
 * Relation Service for User.adminVoteEntries
 */
export interface UserServiceForAdminVoteEntries {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceVoteEntryStored>>;

  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceVoteEntryQueryCustomizer,
  ): Promise<ServiceVoteEntryStored>;

  delete(target: JudoIdentifiable<ServiceVoteEntry>): Promise<void>;

  getVoteDefinition(
    owner: JudoIdentifiable<ServiceVoteEntry>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<ServiceVoteDefinitionStored>;

  voteYesNoForVoteDefinition(owner: JudoIdentifiable<ServiceVoteDefinition>, target: YesNoVoteInput): Promise<void>;

  getTemplateForVoteYesNoForVoteDefinition(): Promise<YesNoVoteInput>;

  voteYesNoAbstainForVoteDefinition(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;

  getTemplateForVoteYesNoAbstainForVoteDefinition(): Promise<YesNoAbstainVoteInput>;

  voteRatingForVoteDefinition(owner: JudoIdentifiable<ServiceVoteDefinition>, target: RatingVoteInput): Promise<void>;

  getTemplateForVoteRatingForVoteDefinition(): Promise<RatingVoteInput>;

  voteSelectAnswerForVoteDefinition(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;

  getTemplateForVoteSelectAnswerForVoteDefinition(): Promise<SelectAnswerVoteSelection>;

  getRangeForVoteSelectAnswerForVoteDefinition(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
}
