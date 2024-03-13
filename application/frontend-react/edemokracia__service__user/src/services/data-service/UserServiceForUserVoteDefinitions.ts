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
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionQueryCustomizer,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
  YesNoAbstainVoteInput,
  YesNoAbstainVoteInputStored,
  YesNoVoteInput,
  YesNoVoteInputStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for User.userVoteDefinitions
 */
export interface UserServiceForUserVoteDefinitions {
  refreshForUserVoteDefinitions(
    queryCustomizer?: ServiceUserVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceUserVoteDefinitionStored>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceUserVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceUserVoteDefinitionStored>>;
  listActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  updateActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored>>;
  voteRatingForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsGlobal(): Promise<JudoRestResponse<RatingVoteInput>>;
  voteSelectAnswerForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsGlobal(): Promise<JudoRestResponse<SelectAnswerVoteSelection>>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<SelectAnswerVoteSelectionStored>>>;
  voteYesNoForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsGlobal(): Promise<JudoRestResponse<YesNoVoteInput>>;
  voteYesNoAbstainForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsGlobal(): Promise<JudoRestResponse<YesNoAbstainVoteInput>>;
  listActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  updateActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored>>;
  voteRatingForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInActivityCities(): Promise<JudoRestResponse<RatingVoteInput>>;
  voteSelectAnswerForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInActivityCities(): Promise<
    JudoRestResponse<SelectAnswerVoteSelection>
  >;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<SelectAnswerVoteSelectionStored>>>;
  voteYesNoForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInActivityCities(): Promise<JudoRestResponse<YesNoVoteInput>>;
  voteYesNoAbstainForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInActivityCities(): Promise<
    JudoRestResponse<YesNoAbstainVoteInput>
  >;
  listActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  updateActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored>>;
  voteRatingForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInActivityCounties(): Promise<JudoRestResponse<RatingVoteInput>>;
  voteSelectAnswerForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInActivityCounties(): Promise<
    JudoRestResponse<SelectAnswerVoteSelection>
  >;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<SelectAnswerVoteSelectionStored>>>;
  voteYesNoForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInActivityCounties(): Promise<JudoRestResponse<YesNoVoteInput>>;
  voteYesNoAbstainForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInActivityCounties(): Promise<
    JudoRestResponse<YesNoAbstainVoteInput>
  >;
  listActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  updateActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored>>;
  voteRatingForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInActivityDistricts(): Promise<JudoRestResponse<RatingVoteInput>>;
  voteSelectAnswerForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInActivityDistricts(): Promise<
    JudoRestResponse<SelectAnswerVoteSelection>
  >;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<SelectAnswerVoteSelectionStored>>>;
  voteYesNoForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInActivityDistricts(): Promise<JudoRestResponse<YesNoVoteInput>>;
  voteYesNoAbstainForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInActivityDistricts(): Promise<
    JudoRestResponse<YesNoAbstainVoteInput>
  >;
  listActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  updateActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored>>;
  voteRatingForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInResidentCity(): Promise<JudoRestResponse<RatingVoteInput>>;
  voteSelectAnswerForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInResidentCity(): Promise<
    JudoRestResponse<SelectAnswerVoteSelection>
  >;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<SelectAnswerVoteSelectionStored>>>;
  voteYesNoForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInResidentCity(): Promise<JudoRestResponse<YesNoVoteInput>>;
  voteYesNoAbstainForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInResidentCity(): Promise<
    JudoRestResponse<YesNoAbstainVoteInput>
  >;
  listActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  updateActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored>>;
  voteRatingForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInResidentCounty(): Promise<JudoRestResponse<RatingVoteInput>>;
  voteSelectAnswerForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInResidentCounty(): Promise<
    JudoRestResponse<SelectAnswerVoteSelection>
  >;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<SelectAnswerVoteSelectionStored>>>;
  voteYesNoForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInResidentCounty(): Promise<JudoRestResponse<YesNoVoteInput>>;
  voteYesNoAbstainForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInResidentCounty(): Promise<
    JudoRestResponse<YesNoAbstainVoteInput>
  >;
  listActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  updateActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored>>;
  voteRatingForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInResidentDistrict(): Promise<JudoRestResponse<RatingVoteInput>>;
  voteSelectAnswerForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInResidentDistrict(): Promise<
    JudoRestResponse<SelectAnswerVoteSelection>
  >;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<SelectAnswerVoteSelectionStored>>>;
  voteYesNoForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInResidentDistrict(): Promise<JudoRestResponse<YesNoVoteInput>>;
  voteYesNoAbstainForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInResidentDistrict(): Promise<
    JudoRestResponse<YesNoAbstainVoteInput>
  >;
  listOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  getRangeForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceUserVoteDefinition> | ServiceUserVoteDefinition,
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  updateOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored>>;
  addOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    selected: Array<JudoIdentifiable<ServiceVoteDefinition>>,
  ): Promise<JudoRestResponse<void>>;
  removeOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    selected: Array<JudoIdentifiable<ServiceVoteDefinition>>,
  ): Promise<JudoRestResponse<void>>;
  voteRatingForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteRatingForOwnedVoteDefinitions(): Promise<JudoRestResponse<RatingVoteInput>>;
  voteSelectAnswerForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteSelectAnswerForOwnedVoteDefinitions(): Promise<JudoRestResponse<SelectAnswerVoteSelection>>;
  getRangeOnVoteSelectAnswerForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<SelectAnswerVoteSelectionStored>>>;
  voteYesNoForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoForOwnedVoteDefinitions(): Promise<JudoRestResponse<YesNoVoteInput>>;
  voteYesNoAbstainForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoAbstainForOwnedVoteDefinitions(): Promise<JudoRestResponse<YesNoAbstainVoteInput>>;
}
