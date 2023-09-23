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
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminSimpleVote,
  AdminCountyQueryCustomizer,
  AdminDistrictStored,
  AdminCounty,
  AdminCity,
  AdminSimpleVoteQueryCustomizer,
  AdminDistrictQueryCustomizer,
  AdminYesNoVoteEntry,
  AdminDistrict,
  AdminUser,
  AdminCountyStored,
  AdminCityStored,
  AdminSimpleVoteStored,
} from '../data-api';

/**
 * Relation Service for AdminYesNoVoteEntry.user
 */
export interface AdminYesNoVoteEntryServiceForUser {
  getUser(owner: JudoIdentifiable<AdminYesNoVoteEntry>, mask?: string): Promise<AdminUserStored>;

  getRangeForVotes(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    queryCustomizer: AdminSimpleVoteQueryCustomizer,
  ): Promise<Array<AdminSimpleVoteStored>>;

  setVotes(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    target: JudoIdentifiable<AdminSimpleVote>,
    selected: Array<JudoIdentifiable<AdminSimpleVote>>,
  ): Promise<void>;

  addUserVotes(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    target: JudoIdentifiable<AdminSimpleVote>,
    selected: Array<JudoIdentifiable<AdminSimpleVote>>,
  ): Promise<void>;

  removeUserVotes(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    target: JudoIdentifiable<AdminSimpleVote>,
    selected: Array<JudoIdentifiable<AdminSimpleVote>>,
  ): Promise<void>;
  getRangeForActivityCounties(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    queryCustomizer: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>>;

  setActivityCounties(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    target: JudoIdentifiable<AdminCounty>,
    selected: Array<JudoIdentifiable<AdminCounty>>,
  ): Promise<void>;

  addUserActivityCounties(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    target: JudoIdentifiable<AdminCounty>,
    selected: Array<JudoIdentifiable<AdminCounty>>,
  ): Promise<void>;

  removeUserActivityCounties(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    target: JudoIdentifiable<AdminCounty>,
    selected: Array<JudoIdentifiable<AdminCounty>>,
  ): Promise<void>;
  getRangeForResidentCounty(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    queryCustomizer: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>>;

  setResidentCounty(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    target: JudoIdentifiable<AdminCounty>,
    selected: JudoIdentifiable<AdminCounty>,
  ): Promise<void>;

  unsetResidentCounty(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    target: JudoIdentifiable<AdminCounty>,
  ): Promise<void>;

  getRangeForActivityCities(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    queryCustomizer: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>>;

  setActivityCities(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    target: JudoIdentifiable<AdminCity>,
    selected: Array<JudoIdentifiable<AdminCity>>,
  ): Promise<void>;

  addUserActivityCities(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    target: JudoIdentifiable<AdminCity>,
    selected: Array<JudoIdentifiable<AdminCity>>,
  ): Promise<void>;

  removeUserActivityCities(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    target: JudoIdentifiable<AdminCity>,
    selected: Array<JudoIdentifiable<AdminCity>>,
  ): Promise<void>;
  getRangeForResidentCity(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    queryCustomizer: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>>;

  setResidentCity(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    target: JudoIdentifiable<AdminCity>,
    selected: JudoIdentifiable<AdminCity>,
  ): Promise<void>;

  unsetResidentCity(owner: JudoIdentifiable<AdminYesNoVoteEntry>, target: JudoIdentifiable<AdminCity>): Promise<void>;

  getRangeForActivityDistricts(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    queryCustomizer: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>>;

  setActivityDistricts(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    target: JudoIdentifiable<AdminDistrict>,
    selected: Array<JudoIdentifiable<AdminDistrict>>,
  ): Promise<void>;

  addUserActivityDistricts(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    target: JudoIdentifiable<AdminDistrict>,
    selected: Array<JudoIdentifiable<AdminDistrict>>,
  ): Promise<void>;

  removeUserActivityDistricts(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    target: JudoIdentifiable<AdminDistrict>,
    selected: Array<JudoIdentifiable<AdminDistrict>>,
  ): Promise<void>;
  getRangeForResidentDistrict(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    queryCustomizer: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>>;

  setResidentDistrict(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    target: JudoIdentifiable<AdminDistrict>,
    selected: JudoIdentifiable<AdminDistrict>,
  ): Promise<void>;

  unsetResidentDistrict(
    owner: JudoIdentifiable<AdminYesNoVoteEntry>,
    target: JudoIdentifiable<AdminDistrict>,
  ): Promise<void>;
}
