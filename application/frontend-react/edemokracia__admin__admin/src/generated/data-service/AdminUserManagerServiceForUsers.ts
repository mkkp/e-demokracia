//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminCityQueryCustomizer,
  AdminUserManager,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminSimpleVote,
  AdminCountyQueryCustomizer,
  AdminDistrictStored,
  AdminCounty,
  AdminCity,
  AdminSimpleVoteQueryCustomizer,
  AdminDistrictQueryCustomizer,
  AdminDistrict,
  AdminUser,
  AdminCountyStored,
  AdminCityStored,
  AdminSimpleVoteStored,
} from '../data-api';

/**
 * Relation Service for AdminUserManager.users
 */
export interface AdminUserManagerServiceForUsers {
  listUsers(
    owner: JudoIdentifiable<AdminUserManager>,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;

  updateUsers(owner: JudoIdentifiable<AdminUserManager>, target: Partial<AdminUserStored>): Promise<AdminUserStored>;

  getRangeForVotes(
    owner: JudoIdentifiable<AdminUserManager>,
    queryCustomizer: AdminSimpleVoteQueryCustomizer,
  ): Promise<Array<AdminSimpleVoteStored>>;

  setVotes(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminSimpleVote>,
    selected: Array<JudoIdentifiable<AdminSimpleVote>>,
  ): Promise<void>;

  addUsersVotes(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminSimpleVote>,
    selected: Array<JudoIdentifiable<AdminSimpleVote>>,
  ): Promise<void>;

  removeUsersVotes(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminSimpleVote>,
    selected: Array<JudoIdentifiable<AdminSimpleVote>>,
  ): Promise<void>;
  getRangeForActivityCounties(
    owner: JudoIdentifiable<AdminUserManager>,
    queryCustomizer: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>>;

  setActivityCounties(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminCounty>,
    selected: Array<JudoIdentifiable<AdminCounty>>,
  ): Promise<void>;

  addUsersActivityCounties(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminCounty>,
    selected: Array<JudoIdentifiable<AdminCounty>>,
  ): Promise<void>;

  removeUsersActivityCounties(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminCounty>,
    selected: Array<JudoIdentifiable<AdminCounty>>,
  ): Promise<void>;
  getRangeForResidentCounty(
    owner: JudoIdentifiable<AdminUserManager>,
    queryCustomizer: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>>;

  setResidentCounty(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminCounty>,
    selected: JudoIdentifiable<AdminCounty>,
  ): Promise<void>;

  unsetResidentCounty(owner: JudoIdentifiable<AdminUserManager>, target: JudoIdentifiable<AdminCounty>): Promise<void>;

  getRangeForActivityCities(
    owner: JudoIdentifiable<AdminUserManager>,
    queryCustomizer: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>>;

  setActivityCities(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminCity>,
    selected: Array<JudoIdentifiable<AdminCity>>,
  ): Promise<void>;

  addUsersActivityCities(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminCity>,
    selected: Array<JudoIdentifiable<AdminCity>>,
  ): Promise<void>;

  removeUsersActivityCities(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminCity>,
    selected: Array<JudoIdentifiable<AdminCity>>,
  ): Promise<void>;
  getRangeForResidentCity(
    owner: JudoIdentifiable<AdminUserManager>,
    queryCustomizer: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>>;

  setResidentCity(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminCity>,
    selected: JudoIdentifiable<AdminCity>,
  ): Promise<void>;

  unsetResidentCity(owner: JudoIdentifiable<AdminUserManager>, target: JudoIdentifiable<AdminCity>): Promise<void>;

  getRangeForActivityDistricts(
    owner: JudoIdentifiable<AdminUserManager>,
    queryCustomizer: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>>;

  setActivityDistricts(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminDistrict>,
    selected: Array<JudoIdentifiable<AdminDistrict>>,
  ): Promise<void>;

  addUsersActivityDistricts(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminDistrict>,
    selected: Array<JudoIdentifiable<AdminDistrict>>,
  ): Promise<void>;

  removeUsersActivityDistricts(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminDistrict>,
    selected: Array<JudoIdentifiable<AdminDistrict>>,
  ): Promise<void>;
  getRangeForResidentDistrict(
    owner: JudoIdentifiable<AdminUserManager>,
    queryCustomizer: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>>;

  setResidentDistrict(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminDistrict>,
    selected: JudoIdentifiable<AdminDistrict>,
  ): Promise<void>;

  unsetResidentDistrict(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminDistrict>,
  ): Promise<void>;
}
