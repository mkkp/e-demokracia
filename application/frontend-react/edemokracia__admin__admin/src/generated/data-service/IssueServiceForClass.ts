//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  CommentStored,
  Issue,
  IssueCategory,
  User,
  IssueCategoryStored,
  CreateDebateInput,
  DistrictStored,
  County,
  IssueAttachmentQueryCustomizer,
  CityStored,
  UserQueryCustomizer,
  IssueQueryCustomizer,
  CreateCommentInput,
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
  District,
  DistrictQueryCustomizer,
  IssueAttachment,
} from '../data-api';

/**
 * Class Service for Issue
 */
export interface IssueServiceForClass {
  refresh(target: JudoIdentifiable<Issue>, queryCustomizer?: IssueQueryCustomizer): Promise<IssueStored>;

  getDebates(target: JudoIdentifiable<Issue>, queryCustomizer?: DebateQueryCustomizer): Promise<Array<DebateStored>>;

  getRangeForDebates(
    owner?: JudoIdentifiable<Issue> | Issue,
    queryCustomizer?: DebateQueryCustomizer,
  ): Promise<Array<DebateStored>>;

  getAttachments(
    target: JudoIdentifiable<Issue>,
    queryCustomizer?: IssueAttachmentQueryCustomizer,
  ): Promise<Array<IssueAttachmentStored>>;

  getRangeForAttachments(
    owner?: JudoIdentifiable<Issue> | Issue,
    queryCustomizer?: IssueAttachmentQueryCustomizer,
  ): Promise<Array<IssueAttachmentStored>>;

  getCategories(
    target: JudoIdentifiable<Issue>,
    queryCustomizer?: IssueCategoryQueryCustomizer,
  ): Promise<Array<IssueCategoryStored>>;

  getRangeForCategories(
    owner?: JudoIdentifiable<Issue> | Issue,
    queryCustomizer?: IssueCategoryQueryCustomizer,
  ): Promise<Array<IssueCategoryStored>>;

  getComments(target: JudoIdentifiable<Issue>, queryCustomizer?: CommentQueryCustomizer): Promise<Array<CommentStored>>;

  getRangeForComments(
    owner?: JudoIdentifiable<Issue> | Issue,
    queryCustomizer?: CommentQueryCustomizer,
  ): Promise<Array<CommentStored>>;

  getIssueType(target: JudoIdentifiable<Issue>, queryCustomizer?: IssueTypeQueryCustomizer): Promise<IssueTypeStored>;

  getRangeForIssueType(
    owner?: JudoIdentifiable<Issue> | Issue,
    queryCustomizer?: IssueTypeQueryCustomizer,
  ): Promise<Array<IssueTypeStored>>;

  getCounty(target: JudoIdentifiable<Issue>, queryCustomizer?: CountyQueryCustomizer): Promise<CountyStored>;

  getRangeForCounty(
    owner?: JudoIdentifiable<Issue> | Issue,
    queryCustomizer?: CountyQueryCustomizer,
  ): Promise<Array<CountyStored>>;

  getDistrict(target: JudoIdentifiable<Issue>, queryCustomizer?: DistrictQueryCustomizer): Promise<DistrictStored>;

  getRangeForDistrict(
    owner?: JudoIdentifiable<Issue> | Issue,
    queryCustomizer?: DistrictQueryCustomizer,
  ): Promise<Array<DistrictStored>>;

  getCity(target: JudoIdentifiable<Issue>, queryCustomizer?: CityQueryCustomizer): Promise<CityStored>;

  getRangeForCity(
    owner?: JudoIdentifiable<Issue> | Issue,
    queryCustomizer?: CityQueryCustomizer,
  ): Promise<Array<CityStored>>;

  getOwner(target: JudoIdentifiable<Issue>, queryCustomizer?: UserQueryCustomizer): Promise<UserStored>;

  getRangeForOwner(
    owner?: JudoIdentifiable<Issue> | Issue,
    queryCustomizer?: UserQueryCustomizer,
  ): Promise<Array<UserStored>>;

  getCreatedBy(target: JudoIdentifiable<Issue>, queryCustomizer?: UserQueryCustomizer): Promise<UserStored>;

  getRangeForCreatedBy(
    owner?: JudoIdentifiable<Issue> | Issue,
    queryCustomizer?: UserQueryCustomizer,
  ): Promise<Array<UserStored>>;

  createDebate(owner: JudoIdentifiable<Issue>, target: CreateDebateInput): Promise<DebateStored>;

  createComment(owner: JudoIdentifiable<Issue>, target: CreateCommentInput): Promise<void>;
}
