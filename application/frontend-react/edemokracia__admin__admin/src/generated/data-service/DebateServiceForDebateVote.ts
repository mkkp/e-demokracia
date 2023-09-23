//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  DebateQueryCustomizer,
  Issue,
  VoteDefinitionQueryCustomizer,
  VoteEntry,
  VoteEntryQueryCustomizer,
  VoteDefinitionStored,
  SelectAnswerVoteSelection,
  VoteEntryStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  IssueQueryCustomizer,
  IssueStored,
  Debate,
  DebateStored,
  VoteDefinition,
} from '../data-api';

/**
 * Relation Service for Debate.debateVote
 */
export interface DebateServiceForDebateVote {
  getDebateVote(owner: JudoIdentifiable<Debate>, mask?: string): Promise<VoteDefinitionStored>;

  getRangeForVoteEntries(
    owner: JudoIdentifiable<Debate>,
    queryCustomizer: VoteEntryQueryCustomizer,
  ): Promise<Array<VoteEntryStored>>;
}
