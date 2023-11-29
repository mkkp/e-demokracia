//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  SelectAnswerVoteSelectionQueryCustomizer,
  RatingVoteInput,
  SelectAnswerVoteSelectionStored,
  VoteDefinitionQueryCustomizer,
  YesNoAbstainVoteInput,
  VoteDefinition,
  YesNoVoteInput,
  VoteDefinitionStored,
  SelectAnswerVoteSelection,
} from '../data-api';

/**
 * Class Service for VoteDefinition
 */
export interface VoteDefinitionService {
  refresh(
    target: JudoIdentifiable<VoteDefinition>,
    queryCustomizer?: VoteDefinitionQueryCustomizer,
  ): Promise<VoteDefinitionStored>;
  voteYesNo(owner: JudoIdentifiable<VoteDefinition>, target: YesNoVoteInput): Promise<void>;
  getTemplateOnVoteYesNo(): Promise<YesNoVoteInput>;
  voteYesNoAbstain(owner: JudoIdentifiable<VoteDefinition>, target: YesNoAbstainVoteInput): Promise<void>;
  getTemplateOnVoteYesNoAbstain(): Promise<YesNoAbstainVoteInput>;
  voteSelectAnswer(owner: JudoIdentifiable<VoteDefinition>, target: SelectAnswerVoteSelection): Promise<void>;
  getTemplateOnVoteSelectAnswer(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswer(
    owner?: VoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteRating(owner: JudoIdentifiable<VoteDefinition>, target: RatingVoteInput): Promise<void>;
  getTemplateOnVoteRating(): Promise<RatingVoteInput>;
  takeBackVote(owner: JudoIdentifiable<VoteDefinition>): Promise<void>;
  addToFavorites(owner: JudoIdentifiable<VoteDefinition>): Promise<void>;
  removeFromFavorites(owner: JudoIdentifiable<VoteDefinition>): Promise<void>;
  activate(owner: JudoIdentifiable<VoteDefinition>): Promise<void>;
  deleteOrArchive(owner: JudoIdentifiable<VoteDefinition>): Promise<void>;
  closeVote(owner: JudoIdentifiable<VoteDefinition>): Promise<void>;
}
