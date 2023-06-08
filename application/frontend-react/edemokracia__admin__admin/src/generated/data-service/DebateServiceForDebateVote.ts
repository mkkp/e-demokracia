//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import {
  VoteEntryStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  VoteDefinitionQueryCustomizer,
  VoteEntry,
  Debate,
  VoteDefinition,
  VoteEntryQueryCustomizer,
  VoteDefinitionStored,
  SelectAnswerVoteSelection,
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
