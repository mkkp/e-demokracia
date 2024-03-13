//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  JudoRestResponse,
  RatingVoteInput,
  RatingVoteInputStored,
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  ServiceDashboard,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionReference,
  ServiceVoteDefinitionReferenceQueryCustomizer,
  ServiceVoteDefinitionReferenceStored,
  ServiceVoteDefinitionStored,
  ServiceVoteEntry,
  ServiceVoteEntryQueryCustomizer,
  ServiceVoteEntryStored,
  YesNoAbstainVoteInput,
  YesNoAbstainVoteInputStored,
  YesNoVoteInput,
  YesNoVoteInputStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceDashboard.userVoteEntries
 */
export interface ServiceDashboardServiceForUserVoteEntries {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteEntryStored>>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceVoteEntryStored>>;
  getVoteDefinition(
    owner: JudoIdentifiable<ServiceVoteEntry>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored>>;
  voteRatingForVoteDefinition(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteRatingForVoteDefinition(): Promise<JudoRestResponse<RatingVoteInput>>;
  voteSelectAnswerForVoteDefinition(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteSelectAnswerForVoteDefinition(): Promise<JudoRestResponse<SelectAnswerVoteSelection>>;
  getRangeOnVoteSelectAnswerForVoteDefinition(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<SelectAnswerVoteSelectionStored>>>;
  voteYesNoForVoteDefinition(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoForVoteDefinition(): Promise<JudoRestResponse<YesNoVoteInput>>;
  voteYesNoAbstainForVoteDefinition(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoAbstainForVoteDefinition(): Promise<JudoRestResponse<YesNoAbstainVoteInput>>;
  getVoteDefinitionReference(
    owner: JudoIdentifiable<ServiceVoteEntry>,
    queryCustomizer?: ServiceVoteDefinitionReferenceQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionReferenceStored>>;
}
