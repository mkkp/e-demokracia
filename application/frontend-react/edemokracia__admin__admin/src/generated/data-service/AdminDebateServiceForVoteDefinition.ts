//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminVoteDefinitionQueryCustomizer,
  SelectAnswerVoteSelectionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminIssueQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  AdminDebate,
  AdminIssue,
  AdminIssueStored,
  AdminVoteDefinition,
  AdminDebateStored,
  SelectAnswerVoteSelection,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for AdminDebate.voteDefinition
 */
export interface AdminDebateServiceForVoteDefinition {
  getVoteDefinition(owner: JudoIdentifiable<AdminDebate>, mask?: string): Promise<AdminVoteDefinitionStored>;
}
