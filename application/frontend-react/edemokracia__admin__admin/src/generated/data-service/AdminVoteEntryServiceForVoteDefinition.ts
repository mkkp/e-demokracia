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
  AdminIssueStored,
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminIssueQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  AdminVoteEntry,
  AdminDebate,
  AdminIssue,
  AdminVoteDefinition,
  AdminDebateStored,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for AdminVoteEntry.voteDefinition
 */
export interface AdminVoteEntryServiceForVoteDefinition {
  getVoteDefinition(owner: JudoIdentifiable<AdminVoteEntry>, mask?: string): Promise<AdminVoteDefinitionStored>;
}
