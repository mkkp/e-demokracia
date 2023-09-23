//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  RatingVoteInput,
  DebateQueryCustomizer,
  Issue,
  VoteDefinitionQueryCustomizer,
  VoteEntry,
  YesNoAbstainVoteInput,
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
  YesNoVoteInput,
} from '../data-api';

/**
 * Class Service for VoteDefinition
 */
export interface VoteDefinitionServiceForClass {
  refresh(
    target: JudoIdentifiable<VoteDefinition>,
    queryCustomizer?: VoteDefinitionQueryCustomizer,
  ): Promise<VoteDefinitionStored>;

  delete(target: JudoIdentifiable<VoteDefinition>): Promise<void>;

  update(target: Partial<VoteDefinitionStored>): Promise<VoteDefinitionStored>;

  getVoteEntries(
    target: JudoIdentifiable<VoteDefinition>,
    queryCustomizer?: VoteEntryQueryCustomizer,
  ): Promise<Array<VoteEntryStored>>;

  getRangeForVoteEntries(
    owner?: JudoIdentifiable<VoteDefinition> | VoteDefinition,
    queryCustomizer?: VoteEntryQueryCustomizer,
  ): Promise<Array<VoteEntryStored>>;

  getDebate(target: JudoIdentifiable<VoteDefinition>, queryCustomizer?: DebateQueryCustomizer): Promise<DebateStored>;

  getRangeForDebate(
    owner?: JudoIdentifiable<VoteDefinition> | VoteDefinition,
    queryCustomizer?: DebateQueryCustomizer,
  ): Promise<Array<DebateStored>>;

  getIssue(target: JudoIdentifiable<VoteDefinition>, queryCustomizer?: IssueQueryCustomizer): Promise<IssueStored>;

  getRangeForIssue(
    owner?: JudoIdentifiable<VoteDefinition> | VoteDefinition,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;

  voteYesNo(owner: JudoIdentifiable<VoteDefinition>, target: YesNoVoteInput): Promise<void>;

  voteYesNoAbstain(owner: JudoIdentifiable<VoteDefinition>, target: YesNoAbstainVoteInput): Promise<void>;

  voteSelectAnswer(owner: JudoIdentifiable<VoteDefinition>, target: SelectAnswerVoteSelection): Promise<void>;

  getRangeForVoteSelectAnswer(
    owner?: VoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteRating(owner: JudoIdentifiable<VoteDefinition>, target: RatingVoteInput): Promise<void>;
}
