//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  AdminIssueDebate,
  AdminCityQueryCustomizer,
  AdminIssueStored,
  AdminDistrictStored,
  AdminCommentQueryCustomizer,
  AdminCounty,
  AdminCity,
  AdminIssueDebateQueryCustomizer,
  AdminDistrictQueryCustomizer,
  AdminIssueQueryCustomizer,
  AdminIssueCategoryStored,
  AdminIssueCategory,
  AdminComment,
  AdminUser,
  AdminCountyStored,
  AdminCityStored,
  AdminIssueTypeStored,
  AdminUserStored,
  AdminIssueAttachmentStored,
  AdminUserQueryCustomizer,
  AdminCountyQueryCustomizer,
  AdminIssueDebateStored,
  AdminIssueAttachmentQueryCustomizer,
  AdminIssueAttachment,
  AdminIssue,
  AdminIssueTypeQueryCustomizer,
  AdminIssueType,
  AdminDistrict,
  AdminIssueCategoryQueryCustomizer,
  AdminCommentStored,
} from '../data-api';

/**
 * Access Relation Service for AdminAdmin.adminIssues
 */
export interface AdminAdminServiceForAdminIssues {
  listAdminIssues(queryCustomizer?: AdminIssueQueryCustomizer): Promise<Array<AdminIssueStored>>;
}
