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
  ServiceIssueQueryCustomizer,
  YesNoAbstainVoteInput,
  ServiceVoteDefinition,
  ServiceVoteEntry,
  ServiceIssueStored,
  SelectAnswerVoteSelection,
  ServiceIssue,
  RatingVoteInputStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  YesNoVoteInput,
  YesNoVoteInputStored,
} from '../data-api';

/**
 * Relation Service for ServiceVoteEntry.voteDefinition
 */
export interface ServiceVoteEntryServiceForVoteDefinition {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<ServiceVoteDefinitionStored>;

  getIssue(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored>;

  voteRating(owner: JudoIdentifiable<ServiceVoteDefinition>, target: RatingVoteInput): Promise<void>;

  getTemplateForVoteRating(): Promise<RatingVoteInput>;

  voteSelectAnswer(owner: JudoIdentifiable<ServiceVoteDefinition>, target: SelectAnswerVoteSelection): Promise<void>;

  getTemplateForVoteSelectAnswer(): Promise<SelectAnswerVoteSelection>;

  getRangeForVoteSelectAnswer(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteYesNo(owner: JudoIdentifiable<ServiceVoteDefinition>, target: YesNoVoteInput): Promise<void>;

  getTemplateForVoteYesNo(): Promise<YesNoVoteInput>;

  voteYesNoAbstain(owner: JudoIdentifiable<ServiceVoteDefinition>, target: YesNoAbstainVoteInput): Promise<void>;

  getTemplateForVoteYesNoAbstain(): Promise<YesNoAbstainVoteInput>;
}
