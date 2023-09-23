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
  VoteEntry,
  VoteDefinitionQueryCustomizer,
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
 * Relation Service for VoteEntry.voteDefinition
 */
export interface VoteEntryServiceForVoteDefinition {
  getVoteDefinition(owner: JudoIdentifiable<VoteEntry>, mask?: string): Promise<VoteDefinitionStored>;

  getRangeForVoteEntries(
    owner: JudoIdentifiable<VoteEntry>,
    queryCustomizer: VoteEntryQueryCustomizer,
  ): Promise<Array<VoteEntryStored>>;
}
