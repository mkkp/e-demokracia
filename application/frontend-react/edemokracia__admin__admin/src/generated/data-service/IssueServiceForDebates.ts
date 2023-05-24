//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import {
  CommentStored,
  Comment,
  DebateQueryCustomizer,
  Issue,
  User,
  Con,
  VoteDefinitionQueryCustomizer,
  ProStored,
  Pro,
  VoteDefinitionStored,
  ConQueryCustomizer,
  UserQueryCustomizer,
  IssueQueryCustomizer,
  ProQueryCustomizer,
  IssueStored,
  CommentQueryCustomizer,
  Debate,
  ConStored,
  DebateStored,
  UserStored,
  VoteDefinition,
} from '../data-api';

/**
 * Relation Service for Issue.debates
 */
export interface IssueServiceForDebates {
  listDebates(owner: JudoIdentifiable<Issue>, queryCustomizer?: DebateQueryCustomizer): Promise<Array<DebateStored>>;
}
