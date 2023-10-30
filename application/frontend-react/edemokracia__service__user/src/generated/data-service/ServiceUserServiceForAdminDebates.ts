//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceCommentQueryCustomizer,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceRatingVoteDefinitionStored,
  ServiceSelectAnswerVoteDefinition,
  ServiceDebateStored,
  ServiceIssueQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceYesNoAbstainVoteDefinition,
  ServiceIssueStored,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceConStored,
  ServiceIssue,
  ServiceServiceUser,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceDebateQueryCustomizer,
  ServiceConQueryCustomizer,
  ServiceProStored,
  ServicePro,
  ServiceVoteDefinitionStored,
  ServiceRatingVoteDefinition,
  ServiceComment,
  ServiceDebate,
  ServiceYesNoVoteDefinitionStored,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceCommentStored,
  ServiceServiceUserStored,
  ServiceCon,
  ServiceYesNoVoteDefinition,
  ServiceProQueryCustomizer,
  ServiceServiceUserQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
} from '../data-api';

/**
 * Access Relation Service for ServiceUser.adminDebates
 */
export interface ServiceUserServiceForAdminDebates {
  listAdminDebates(queryCustomizer?: ServiceDebateQueryCustomizer): Promise<Array<ServiceDebateStored>>;
}
