//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminCityQueryCustomizer,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminSimpleVote,
  AdminCountyQueryCustomizer,
  AdminDistrictStored,
  AdminCounty,
  AdminCity,
  AdminSimpleVoteQueryCustomizer,
  AdminDistrictQueryCustomizer,
  AdminIssue,
  AdminDistrict,
  AdminUser,
  AdminCountyStored,
  AdminCityStored,
  AdminSimpleVoteStored,
} from '../data-api';

/**
 * Relation Service for AdminIssue.owner
 */
export interface AdminIssueServiceForOwner {
  getOwner(owner: JudoIdentifiable<AdminIssue>, mask?: string): Promise<AdminUserStored>;

  getRangeForVotes(
    owner: JudoIdentifiable<AdminIssue>,
    queryCustomizer: AdminSimpleVoteQueryCustomizer,
  ): Promise<Array<AdminSimpleVoteStored>>;

  setVotes(
    owner: JudoIdentifiable<AdminIssue>,
    target: JudoIdentifiable<AdminSimpleVote>,
    selected: Array<JudoIdentifiable<AdminSimpleVote>>,
  ): Promise<void>;

  addOwnerVotes(
    owner: JudoIdentifiable<AdminIssue>,
    target: JudoIdentifiable<AdminSimpleVote>,
    selected: Array<JudoIdentifiable<AdminSimpleVote>>,
  ): Promise<void>;

  removeOwnerVotes(
    owner: JudoIdentifiable<AdminIssue>,
    target: JudoIdentifiable<AdminSimpleVote>,
    selected: Array<JudoIdentifiable<AdminSimpleVote>>,
  ): Promise<void>;
  getRangeForActivityCounties(
    owner: JudoIdentifiable<AdminIssue>,
    queryCustomizer: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>>;

  setActivityCounties(
    owner: JudoIdentifiable<AdminIssue>,
    target: JudoIdentifiable<AdminCounty>,
    selected: Array<JudoIdentifiable<AdminCounty>>,
  ): Promise<void>;

  addOwnerActivityCounties(
    owner: JudoIdentifiable<AdminIssue>,
    target: JudoIdentifiable<AdminCounty>,
    selected: Array<JudoIdentifiable<AdminCounty>>,
  ): Promise<void>;

  removeOwnerActivityCounties(
    owner: JudoIdentifiable<AdminIssue>,
    target: JudoIdentifiable<AdminCounty>,
    selected: Array<JudoIdentifiable<AdminCounty>>,
  ): Promise<void>;
  getRangeForResidentCounty(
    owner: JudoIdentifiable<AdminIssue>,
    queryCustomizer: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>>;

  setResidentCounty(
    owner: JudoIdentifiable<AdminIssue>,
    target: JudoIdentifiable<AdminCounty>,
    selected: JudoIdentifiable<AdminCounty>,
  ): Promise<void>;

  unsetResidentCounty(owner: JudoIdentifiable<AdminIssue>, target: JudoIdentifiable<AdminCounty>): Promise<void>;

  getRangeForActivityCities(
    owner: JudoIdentifiable<AdminIssue>,
    queryCustomizer: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>>;

  setActivityCities(
    owner: JudoIdentifiable<AdminIssue>,
    target: JudoIdentifiable<AdminCity>,
    selected: Array<JudoIdentifiable<AdminCity>>,
  ): Promise<void>;

  addOwnerActivityCities(
    owner: JudoIdentifiable<AdminIssue>,
    target: JudoIdentifiable<AdminCity>,
    selected: Array<JudoIdentifiable<AdminCity>>,
  ): Promise<void>;

  removeOwnerActivityCities(
    owner: JudoIdentifiable<AdminIssue>,
    target: JudoIdentifiable<AdminCity>,
    selected: Array<JudoIdentifiable<AdminCity>>,
  ): Promise<void>;
  getRangeForResidentCity(
    owner: JudoIdentifiable<AdminIssue>,
    queryCustomizer: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>>;

  setResidentCity(
    owner: JudoIdentifiable<AdminIssue>,
    target: JudoIdentifiable<AdminCity>,
    selected: JudoIdentifiable<AdminCity>,
  ): Promise<void>;

  unsetResidentCity(owner: JudoIdentifiable<AdminIssue>, target: JudoIdentifiable<AdminCity>): Promise<void>;

  getRangeForActivityDistricts(
    owner: JudoIdentifiable<AdminIssue>,
    queryCustomizer: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>>;

  setActivityDistricts(
    owner: JudoIdentifiable<AdminIssue>,
    target: JudoIdentifiable<AdminDistrict>,
    selected: Array<JudoIdentifiable<AdminDistrict>>,
  ): Promise<void>;

  addOwnerActivityDistricts(
    owner: JudoIdentifiable<AdminIssue>,
    target: JudoIdentifiable<AdminDistrict>,
    selected: Array<JudoIdentifiable<AdminDistrict>>,
  ): Promise<void>;

  removeOwnerActivityDistricts(
    owner: JudoIdentifiable<AdminIssue>,
    target: JudoIdentifiable<AdminDistrict>,
    selected: Array<JudoIdentifiable<AdminDistrict>>,
  ): Promise<void>;
  getRangeForResidentDistrict(
    owner: JudoIdentifiable<AdminIssue>,
    queryCustomizer: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>>;

  setResidentDistrict(
    owner: JudoIdentifiable<AdminIssue>,
    target: JudoIdentifiable<AdminDistrict>,
    selected: JudoIdentifiable<AdminDistrict>,
  ): Promise<void>;

  unsetResidentDistrict(owner: JudoIdentifiable<AdminIssue>, target: JudoIdentifiable<AdminDistrict>): Promise<void>;
}
