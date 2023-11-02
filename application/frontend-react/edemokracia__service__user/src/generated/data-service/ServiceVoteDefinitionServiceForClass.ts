//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceVoteDefinitionStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  RatingVoteInput,
  SelectAnswerVoteSelectionStored,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceIssueQueryCustomizer,
  YesNoAbstainVoteInput,
  ServiceVoteDefinition,
  ServiceIssueStored,
  YesNoVoteInput,
  SelectAnswerVoteSelection,
  ServiceIssue,
} from '../data-api';

/**
 * Class Service for ServiceVoteDefinition
 */
export interface ServiceVoteDefinitionServiceForClass {
  refresh(
    target: JudoIdentifiable<ServiceVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<ServiceVoteDefinitionStored>;

  delete(target: JudoIdentifiable<ServiceVoteDefinition>): Promise<void>;

  update(target: Partial<ServiceVoteDefinitionStored>): Promise<ServiceVoteDefinitionStored>;

  getIssue(
    target: JudoIdentifiable<ServiceVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored>;

  getRangeForIssue(
    owner?: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  voteRating(owner: JudoIdentifiable<ServiceVoteDefinition>, target: RatingVoteInput): Promise<void>;

  voteSelectAnswer(owner: JudoIdentifiable<ServiceVoteDefinition>, target: SelectAnswerVoteSelection): Promise<void>;

  getRangeForVoteSelectAnswer(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteYesNo(owner: JudoIdentifiable<ServiceVoteDefinition>, target: YesNoVoteInput): Promise<void>;

  voteYesNoAbstain(owner: JudoIdentifiable<ServiceVoteDefinition>, target: YesNoAbstainVoteInput): Promise<void>;
}
