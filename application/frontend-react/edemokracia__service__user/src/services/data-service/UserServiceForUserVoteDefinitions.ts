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
  voteYesNoForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForOwnedVoteDefinitions(): Promise<YesNoVoteInput>;
  voteYesNoAbstainForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForOwnedVoteDefinitions(): Promise<YesNoAbstainVoteInput>;
  voteRatingForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForOwnedVoteDefinitions(): Promise<RatingVoteInput>;
  voteSelectAnswerForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForOwnedVoteDefinitions(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  listActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  updateActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored>;
  voteYesNoForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsGlobal(): Promise<YesNoVoteInput>;
  voteYesNoAbstainForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsGlobal(): Promise<YesNoAbstainVoteInput>;
  voteRatingForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsGlobal(): Promise<RatingVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsGlobal(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  listActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  updateActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored>;
  voteYesNoForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInActivityCounties(): Promise<YesNoVoteInput>;
  voteYesNoAbstainForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInActivityCounties(): Promise<YesNoAbstainVoteInput>;
  voteRatingForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInActivityCounties(): Promise<RatingVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInActivityCounties(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInActivityCounties(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  listActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  updateActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored>;
  voteYesNoForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInActivityCities(): Promise<YesNoVoteInput>;
  voteYesNoAbstainForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInActivityCities(): Promise<YesNoAbstainVoteInput>;
  voteRatingForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInActivityCities(): Promise<RatingVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInActivityCities(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInActivityCities(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  listActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  updateActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored>;
  voteYesNoForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInActivityDistricts(): Promise<YesNoVoteInput>;
  voteYesNoAbstainForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInActivityDistricts(): Promise<YesNoAbstainVoteInput>;
  voteRatingForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInActivityDistricts(): Promise<RatingVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInActivityDistricts(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInActivityDistricts(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  listActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  updateActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored>;
  voteYesNoForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInResidentCounty(): Promise<YesNoVoteInput>;
  voteYesNoAbstainForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInResidentCounty(): Promise<YesNoAbstainVoteInput>;
  voteRatingForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInResidentCounty(): Promise<RatingVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInResidentCounty(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInResidentCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  listActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  updateActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored>;
  voteYesNoForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInResidentCity(): Promise<YesNoVoteInput>;
  voteYesNoAbstainForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInResidentCity(): Promise<YesNoAbstainVoteInput>;
  voteRatingForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInResidentCity(): Promise<RatingVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInResidentCity(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  listActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  updateActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored>;
  voteYesNoForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoForActiveVoteDefinitionsInResidentDistrict(): Promise<YesNoVoteInput>;
  voteYesNoAbstainForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForActiveVoteDefinitionsInResidentDistrict(): Promise<YesNoAbstainVoteInput>;
  voteRatingForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForActiveVoteDefinitionsInResidentDistrict(): Promise<RatingVoteInput>;
  voteSelectAnswerForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForActiveVoteDefinitionsInResidentDistrict(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForActiveVoteDefinitionsInResidentDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
}
