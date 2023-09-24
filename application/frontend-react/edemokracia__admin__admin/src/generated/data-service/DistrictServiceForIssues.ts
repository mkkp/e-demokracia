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
  Issue,
  IssueCategory,
  User,
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
  District,
  DistrictQueryCustomizer,
  IssueAttachment,
} from '../data-api';

/**
 * Relation Service for District.issues
 */
export interface DistrictServiceForIssues {
  listIssues(owner: JudoIdentifiable<District>, queryCustomizer?: IssueQueryCustomizer): Promise<Array<IssueStored>>;
}
