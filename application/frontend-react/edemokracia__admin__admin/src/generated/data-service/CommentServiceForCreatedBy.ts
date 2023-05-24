//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import {
  Comment,
  SimpleVote,
  User,
  DistrictStored,
  City,
  County,
  SimpleVoteQueryCustomizer,
  CityQueryCustomizer,
  CityStored,
  UserQueryCustomizer,
  UserStored,
  SimpleVoteStored,
  DistrictQueryCustomizer,
  District,
  CountyQueryCustomizer,
  CountyStored,
} from '../data-api';

/**
 * Relation Service for Comment.createdBy
 */
export interface CommentServiceForCreatedBy {
  getCreatedBy(owner: JudoIdentifiable<Comment>, mask?: string): Promise<UserStored>;
}
