//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  SimpleVote,
  User,
  Issue,
  DistrictStored,
  City,
  County,
  SimpleVoteQueryCustomizer,
  CityQueryCustomizer,
  CityStored,
  UserQueryCustomizer,
  IssueQueryCustomizer,
  IssueStored,
  UserStored,
  SimpleVoteStored,
  District,
  DistrictQueryCustomizer,
  CountyQueryCustomizer,
  CountyStored,
} from '../data-api';

/**
 * Class Service for User
 */
export interface UserServiceForClass {
  refresh(target: JudoIdentifiable<User>, queryCustomizer?: UserQueryCustomizer): Promise<UserStored>;

  getVotes(
    target: JudoIdentifiable<User>,
    queryCustomizer?: SimpleVoteQueryCustomizer,
  ): Promise<Array<SimpleVoteStored>>;

  getRangeForVotes(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: SimpleVoteQueryCustomizer,
  ): Promise<Array<SimpleVoteStored>>;

  getResidentCity(target: JudoIdentifiable<User>, queryCustomizer?: CityQueryCustomizer): Promise<CityStored>;

  getRangeForResidentCity(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: CityQueryCustomizer,
  ): Promise<Array<CityStored>>;

  getActivityCities(target: JudoIdentifiable<User>, queryCustomizer?: CityQueryCustomizer): Promise<Array<CityStored>>;

  getRangeForActivityCities(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: CityQueryCustomizer,
  ): Promise<Array<CityStored>>;

  getResidentDistrict(
    target: JudoIdentifiable<User>,
    queryCustomizer?: DistrictQueryCustomizer,
  ): Promise<DistrictStored>;

  getRangeForResidentDistrict(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: DistrictQueryCustomizer,
  ): Promise<Array<DistrictStored>>;

  getActivityDistricts(
    target: JudoIdentifiable<User>,
    queryCustomizer?: DistrictQueryCustomizer,
  ): Promise<Array<DistrictStored>>;

  getRangeForActivityDistricts(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: DistrictQueryCustomizer,
  ): Promise<Array<DistrictStored>>;

  getResidentCounty(target: JudoIdentifiable<User>, queryCustomizer?: CountyQueryCustomizer): Promise<CountyStored>;

  getRangeForResidentCounty(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: CountyQueryCustomizer,
  ): Promise<Array<CountyStored>>;

  getActivityCounties(
    target: JudoIdentifiable<User>,
    queryCustomizer?: CountyQueryCustomizer,
  ): Promise<Array<CountyStored>>;

  getRangeForActivityCounties(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: CountyQueryCustomizer,
  ): Promise<Array<CountyStored>>;

  getFavoriteIssues(
    target: JudoIdentifiable<User>,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getRangeForFavoriteIssues(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getActiveIssuesInActivityCities(
    target: JudoIdentifiable<User>,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getRangeForActiveIssuesInActivityCities(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getOwnedIssues(target: JudoIdentifiable<User>, queryCustomizer?: IssueQueryCustomizer): Promise<Array<IssueStored>>;

  getRangeForOwnedIssues(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getCreatedIssues(target: JudoIdentifiable<User>, queryCustomizer?: IssueQueryCustomizer): Promise<Array<IssueStored>>;

  getRangeForCreatedIssues(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getOwnedPendingIssues(
    target: JudoIdentifiable<User>,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getRangeForOwnedPendingIssues(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getActiveIssuesInActivityCounties(
    target: JudoIdentifiable<User>,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getRangeForActiveIssuesInActivityCounties(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getAcitveIssuesInActivityDistricts(
    target: JudoIdentifiable<User>,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getRangeForAcitveIssuesInActivityDistricts(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getActiveIssuesGlobal(
    target: JudoIdentifiable<User>,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getRangeForActiveIssuesGlobal(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getActiveIssuesInResidentDistrict(
    target: JudoIdentifiable<User>,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getRangeForActiveIssuesInResidentDistrict(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getActiveIssuesInResidentCity(
    target: JudoIdentifiable<User>,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getRangeForActiveIssuesInResidentCity(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getActiveIssuesInResidentCounty(
    target: JudoIdentifiable<User>,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  getRangeForActiveIssuesInResidentCounty(
    owner?: JudoIdentifiable<User> | User,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;
}
