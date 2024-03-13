//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  JudoRestResponse,
  RatingVoteInput,
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
  YesNoVoteInput,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceUserVoteDefinition
 */
export interface ServiceUserVoteDefinitionService {
  refresh(
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceUserVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceUserVoteDefinitionStored>>;
  listActiveVoteDefinitionsGlobal(
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  getRangeForActiveVoteDefinitionsGlobal(
    owner?: JudoIdentifiable<ServiceUserVoteDefinition> | ServiceUserVoteDefinition,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
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
    owner?: ServiceVoteDefinitionStored,
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
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  getRangeForActiveVoteDefinitionsInActivityCities(
    owner?: JudoIdentifiable<ServiceUserVoteDefinition> | ServiceUserVoteDefinition,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
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
    owner?: ServiceVoteDefinitionStored,
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
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  getRangeForActiveVoteDefinitionsInActivityCounties(
    owner?: JudoIdentifiable<ServiceUserVoteDefinition> | ServiceUserVoteDefinition,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
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
    owner?: ServiceVoteDefinitionStored,
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
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  getRangeForActiveVoteDefinitionsInActivityDistricts(
    owner?: JudoIdentifiable<ServiceUserVoteDefinition> | ServiceUserVoteDefinition,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
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
    owner?: ServiceVoteDefinitionStored,
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
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  getRangeForActiveVoteDefinitionsInResidentCity(
    owner?: JudoIdentifiable<ServiceUserVoteDefinition> | ServiceUserVoteDefinition,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
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
    owner?: ServiceVoteDefinitionStored,
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
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  getRangeForActiveVoteDefinitionsInResidentCounty(
    owner?: JudoIdentifiable<ServiceUserVoteDefinition> | ServiceUserVoteDefinition,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
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
    owner?: ServiceVoteDefinitionStored,
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
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  getRangeForActiveVoteDefinitionsInResidentDistrict(
    owner?: JudoIdentifiable<ServiceUserVoteDefinition> | ServiceUserVoteDefinition,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
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
    owner?: ServiceVoteDefinitionStored,
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
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  getRangeForOwnedVoteDefinitions(
    owner?: JudoIdentifiable<ServiceUserVoteDefinition> | ServiceUserVoteDefinition,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
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
    owner?: ServiceVoteDefinitionStored,
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
