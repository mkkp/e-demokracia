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
  ServiceVoteEntryQueryCustomizer,
  YesNoAbstainVoteInput,
  ServiceVoteDefinition,
  ServiceVoteEntry,
  ServiceVoteEntryStored,
  YesNoVoteInput,
  SelectAnswerVoteSelection,
} from '../data-api';

/**
 * Class Service for ServiceVoteEntry
 */
export interface ServiceVoteEntryService {
  refresh(
    target: JudoIdentifiable<ServiceVoteEntry>,
    queryCustomizer?: ServiceVoteEntryQueryCustomizer,
  ): Promise<ServiceVoteEntryStored>;
  delete(target: JudoIdentifiable<ServiceVoteEntry>): Promise<void>;
  getVoteDefinition(
    target: JudoIdentifiable<ServiceVoteEntry>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<ServiceVoteDefinitionStored>;
  getRangeForVoteDefinition(
    owner?: JudoIdentifiable<ServiceVoteEntry> | ServiceVoteEntry,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  voteRatingForVoteDefinition(owner: JudoIdentifiable<ServiceVoteDefinition>, target: RatingVoteInput): Promise<void>;
  getTemplateOnVoteRatingForVoteDefinition(): Promise<RatingVoteInput>;
  voteYesNoForVoteDefinition(owner: JudoIdentifiable<ServiceVoteDefinition>, target: YesNoVoteInput): Promise<void>;
  getTemplateOnVoteYesNoForVoteDefinition(): Promise<YesNoVoteInput>;
  voteSelectAnswerForVoteDefinition(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForVoteDefinition(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForVoteDefinition(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteYesNoAbstainForVoteDefinition(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForVoteDefinition(): Promise<YesNoAbstainVoteInput>;
}
