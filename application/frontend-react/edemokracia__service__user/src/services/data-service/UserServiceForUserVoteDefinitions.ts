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
  YesNoAbstainVoteInput,
  ServiceVoteDefinition,
  SelectAnswerVoteSelection,
  ServiceUserVoteDefinition,
  RatingVoteInputStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  ServiceUserVoteDefinitionQueryCustomizer,
  ServiceUserVoteDefinitionStored,
  YesNoVoteInput,
  YesNoVoteInputStored,
} from '../data-api';

/**
 * Relation Service for User.userVoteDefinitions
 */
export interface UserServiceForUserVoteDefinitions {
  refreshForUserVoteDefinitions(
    queryCustomizer?: ServiceUserVoteDefinitionQueryCustomizer,
  ): Promise<ServiceUserVoteDefinitionStored>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceUserVoteDefinitionQueryCustomizer,
  ): Promise<ServiceUserVoteDefinitionStored>;
  listOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  updateOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored>;
  voteYesNoAbstainForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForOwnedVoteDefinitions(): Promise<YesNoAbstainVoteInput>;
  voteYesNoForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForOwnedVoteDefinitions(): Promise<YesNoVoteInput>;
  voteSelectAnswerForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForOwnedVoteDefinitions(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteRatingForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForOwnedVoteDefinitions(): Promise<RatingVoteInput>;
  listActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  updateActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored>;
  voteYesNoAbstainForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsGlobal(): Promise<YesNoAbstainVoteInput>;
  voteYesNoForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsGlobal(): Promise<YesNoVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsGlobal(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteRatingForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsGlobal(): Promise<RatingVoteInput>;
  listActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  updateActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored>;
  voteYesNoAbstainForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInActivityCounties(): Promise<YesNoAbstainVoteInput>;
  voteYesNoForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInActivityCounties(): Promise<YesNoVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInActivityCounties(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteRatingForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInActivityCounties(): Promise<RatingVoteInput>;
  listActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  updateActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored>;
  voteYesNoAbstainForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInActivityCities(): Promise<YesNoAbstainVoteInput>;
  voteYesNoForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInActivityCities(): Promise<YesNoVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInActivityCities(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteRatingForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInActivityCities(): Promise<RatingVoteInput>;
  listActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  updateActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored>;
  voteYesNoAbstainForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInActivityDistricts(): Promise<YesNoAbstainVoteInput>;
  voteYesNoForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInActivityDistricts(): Promise<YesNoVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInActivityDistricts(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteRatingForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInActivityDistricts(): Promise<RatingVoteInput>;
  listActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  updateActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored>;
  voteYesNoAbstainForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInResidentCounty(): Promise<YesNoAbstainVoteInput>;
  voteYesNoForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInResidentCounty(): Promise<YesNoVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInResidentCounty(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteRatingForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInResidentCounty(): Promise<RatingVoteInput>;
  listActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  updateActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored>;
  voteYesNoAbstainForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInResidentCity(): Promise<YesNoAbstainVoteInput>;
  voteYesNoForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInResidentCity(): Promise<YesNoVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInResidentCity(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteRatingForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInResidentCity(): Promise<RatingVoteInput>;
  listActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  updateActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored>;
  voteYesNoAbstainForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInResidentDistrict(): Promise<YesNoAbstainVoteInput>;
  voteYesNoForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInResidentDistrict(): Promise<YesNoVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInResidentDistrict(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteRatingForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInResidentDistrict(): Promise<RatingVoteInput>;
}
