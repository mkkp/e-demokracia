//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminUserVoteDefinition,
  AdminUserVoteDefinitionQueryCustomizer,
  AdminVoteDefinition,
  AdminUserVoteDefinitionStored,
} from '../data-api';

/**
 * Class Service for AdminUserVoteDefinition
 */
export interface AdminUserVoteDefinitionServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminUserVoteDefinition>,
    queryCustomizer?: AdminUserVoteDefinitionQueryCustomizer,
  ): Promise<AdminUserVoteDefinitionStored>;

  getOwnedVoteDefinitions(
    target: JudoIdentifiable<AdminUserVoteDefinition>,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;

  getRangeForOwnedVoteDefinitions(
    owner?: JudoIdentifiable<AdminUserVoteDefinition> | AdminUserVoteDefinition,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;

  getActiveVoteDefinitionsGlobal(
    target: JudoIdentifiable<AdminUserVoteDefinition>,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;

  getRangeForActiveVoteDefinitionsGlobal(
    owner?: JudoIdentifiable<AdminUserVoteDefinition> | AdminUserVoteDefinition,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;

  getActiveVoteDefinitionsInActivityCounties(
    target: JudoIdentifiable<AdminUserVoteDefinition>,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;

  getRangeForActiveVoteDefinitionsInActivityCounties(
    owner?: JudoIdentifiable<AdminUserVoteDefinition> | AdminUserVoteDefinition,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;

  getActiveVoteDefinitionsInActivityCities(
    target: JudoIdentifiable<AdminUserVoteDefinition>,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;

  getRangeForActiveVoteDefinitionsInActivityCities(
    owner?: JudoIdentifiable<AdminUserVoteDefinition> | AdminUserVoteDefinition,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;

  getActiveVoteDefinitionsInActivityDistricts(
    target: JudoIdentifiable<AdminUserVoteDefinition>,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;

  getRangeForActiveVoteDefinitionsInActivityDistricts(
    owner?: JudoIdentifiable<AdminUserVoteDefinition> | AdminUserVoteDefinition,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;

  getActiveVoteDefinitionsInResidentCounty(
    target: JudoIdentifiable<AdminUserVoteDefinition>,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;

  getRangeForActiveVoteDefinitionsInResidentCounty(
    owner?: JudoIdentifiable<AdminUserVoteDefinition> | AdminUserVoteDefinition,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;

  getActiveVoteDefinitionsInResidentCity(
    target: JudoIdentifiable<AdminUserVoteDefinition>,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;

  getRangeForActiveVoteDefinitionsInResidentCity(
    owner?: JudoIdentifiable<AdminUserVoteDefinition> | AdminUserVoteDefinition,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;

  getActiveVoteDefinitionsInResidentDistrict(
    target: JudoIdentifiable<AdminUserVoteDefinition>,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;

  getRangeForActiveVoteDefinitionsInResidentDistrict(
    owner?: JudoIdentifiable<AdminUserVoteDefinition> | AdminUserVoteDefinition,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;
}
