//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  CommentStored,
  User,
  Issue,
  IssueCategory,
  IssueCategoryStored,
  DistrictStored,
  County,
  IssueAttachmentQueryCustomizer,
  CityStored,
  UserQueryCustomizer,
  IssueQueryCustomizer,
  IssueStored,
  CommentQueryCustomizer,
  Debate,
  DebateStored,
  UserStored,
  CountyQueryCustomizer,
  CountyStored,
  Comment,
  DebateQueryCustomizer,
  IssueType,
  IssueTypeQueryCustomizer,
  IssueAttachmentStored,
  IssueTypeStored,
  City,
  IssueCategoryQueryCustomizer,
  CityQueryCustomizer,
  DistrictQueryCustomizer,
  District,
  IssueAttachment,
} from '../data-api';

/**
 * Relation Service for User.activeIssuesInResidentCity
 */
export interface UserServiceForActiveIssuesInResidentCity {
  listActiveIssuesInResidentCity(
    owner: JudoIdentifiable<User>,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;
}
