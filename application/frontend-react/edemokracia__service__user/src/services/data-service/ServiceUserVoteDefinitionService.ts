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
  ServiceUserVoteDefinitionQueryCustomizer,
  YesNoAbstainVoteInput,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinition,
  YesNoVoteInput,
  SelectAnswerVoteSelection,
  ServiceUserVoteDefinition,
} from '../data-api';

/**
 * Class Service for ServiceUserVoteDefinition
 */
export interface ServiceUserVoteDefinitionService {
  refresh(
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceUserVoteDefinitionQueryCustomizer,
  ): Promise<ServiceUserVoteDefinitionStored>;
  listOwnedVoteDefinitions(
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  getRangeForOwnedVoteDefinitions(
    owner?: JudoIdentifiable<ServiceUserVoteDefinition> | ServiceUserVoteDefinition,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  voteYesNoAbstainForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForOwnedVoteDefinitions(): Promise<YesNoAbstainVoteInput>;
  voteSelectAnswerForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForOwnedVoteDefinitions(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForOwnedVoteDefinitions(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteYesNoForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForOwnedVoteDefinitions(): Promise<YesNoVoteInput>;
  voteRatingForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForOwnedVoteDefinitions(): Promise<RatingVoteInput>;
  listActiveVoteDefinitionsGlobal(
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  getRangeForActiveVoteDefinitionsGlobal(
    owner?: JudoIdentifiable<ServiceUserVoteDefinition> | ServiceUserVoteDefinition,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  voteYesNoAbstainForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsGlobal(): Promise<YesNoAbstainVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsGlobal(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsGlobal(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteYesNoForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsGlobal(): Promise<YesNoVoteInput>;
  voteRatingForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsGlobal(): Promise<RatingVoteInput>;
  listActiveVoteDefinitionsInActivityCounties(
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  getRangeForActiveVoteDefinitionsInActivityCounties(
    owner?: JudoIdentifiable<ServiceUserVoteDefinition> | ServiceUserVoteDefinition,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  voteYesNoAbstainForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInActivityCounties(): Promise<YesNoAbstainVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInActivityCounties(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInActivityCounties(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteYesNoForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInActivityCounties(): Promise<YesNoVoteInput>;
  voteRatingForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInActivityCounties(): Promise<RatingVoteInput>;
  listActiveVoteDefinitionsInActivityCities(
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  getRangeForActiveVoteDefinitionsInActivityCities(
    owner?: JudoIdentifiable<ServiceUserVoteDefinition> | ServiceUserVoteDefinition,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  voteYesNoAbstainForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInActivityCities(): Promise<YesNoAbstainVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInActivityCities(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInActivityCities(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteYesNoForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInActivityCities(): Promise<YesNoVoteInput>;
  voteRatingForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInActivityCities(): Promise<RatingVoteInput>;
  listActiveVoteDefinitionsInActivityDistricts(
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  getRangeForActiveVoteDefinitionsInActivityDistricts(
    owner?: JudoIdentifiable<ServiceUserVoteDefinition> | ServiceUserVoteDefinition,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  voteYesNoAbstainForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInActivityDistricts(): Promise<YesNoAbstainVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInActivityDistricts(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInActivityDistricts(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteYesNoForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInActivityDistricts(): Promise<YesNoVoteInput>;
  voteRatingForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInActivityDistricts(): Promise<RatingVoteInput>;
  listActiveVoteDefinitionsInResidentCounty(
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  getRangeForActiveVoteDefinitionsInResidentCounty(
    owner?: JudoIdentifiable<ServiceUserVoteDefinition> | ServiceUserVoteDefinition,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  voteYesNoAbstainForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInResidentCounty(): Promise<YesNoAbstainVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInResidentCounty(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInResidentCounty(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteYesNoForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInResidentCounty(): Promise<YesNoVoteInput>;
  voteRatingForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInResidentCounty(): Promise<RatingVoteInput>;
  listActiveVoteDefinitionsInResidentCity(
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  getRangeForActiveVoteDefinitionsInResidentCity(
    owner?: JudoIdentifiable<ServiceUserVoteDefinition> | ServiceUserVoteDefinition,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  voteYesNoAbstainForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInResidentCity(): Promise<YesNoAbstainVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInResidentCity(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInResidentCity(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteYesNoForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInResidentCity(): Promise<YesNoVoteInput>;
  voteRatingForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInResidentCity(): Promise<RatingVoteInput>;
  listActiveVoteDefinitionsInResidentDistrict(
    target: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  getRangeForActiveVoteDefinitionsInResidentDistrict(
    owner?: JudoIdentifiable<ServiceUserVoteDefinition> | ServiceUserVoteDefinition,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  voteYesNoAbstainForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInResidentDistrict(): Promise<YesNoAbstainVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInResidentDistrict(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInResidentDistrict(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteYesNoForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInResidentDistrict(): Promise<YesNoVoteInput>;
  voteRatingForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInResidentDistrict(): Promise<RatingVoteInput>;
}