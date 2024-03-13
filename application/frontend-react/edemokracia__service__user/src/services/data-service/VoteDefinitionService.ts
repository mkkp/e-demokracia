//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  JudoRestResponse,
  RatingVoteInput,
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  VoteDefinition,
  VoteDefinitionQueryCustomizer,
  VoteDefinitionStored,
  YesNoAbstainVoteInput,
  YesNoVoteInput,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for VoteDefinition
 */
export interface VoteDefinitionService {
  refresh(
    target: JudoIdentifiable<VoteDefinition>,
    queryCustomizer?: VoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<VoteDefinitionStored>>;
  activate(owner: JudoIdentifiable<VoteDefinition>): Promise<JudoRestResponse<void>>;
  addToFavorites(owner: JudoIdentifiable<VoteDefinition>): Promise<JudoRestResponse<void>>;
  closeVote(owner: JudoIdentifiable<VoteDefinition>): Promise<JudoRestResponse<void>>;
  deleteOrArchive(owner: JudoIdentifiable<VoteDefinition>): Promise<JudoRestResponse<void>>;
  removeFromFavorites(owner: JudoIdentifiable<VoteDefinition>): Promise<JudoRestResponse<void>>;
  takeBackVote(owner: JudoIdentifiable<VoteDefinition>): Promise<JudoRestResponse<void>>;
  voteRating(owner: JudoIdentifiable<VoteDefinition>, target: RatingVoteInput): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteRating(): Promise<JudoRestResponse<RatingVoteInput>>;
  voteSelectAnswer(
    owner: JudoIdentifiable<VoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteSelectAnswer(): Promise<JudoRestResponse<SelectAnswerVoteSelection>>;
  getRangeOnVoteSelectAnswer(
    owner?: VoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<SelectAnswerVoteSelectionStored>>>;
  voteYesNo(owner: JudoIdentifiable<VoteDefinition>, target: YesNoVoteInput): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNo(): Promise<JudoRestResponse<YesNoVoteInput>>;
  voteYesNoAbstain(
    owner: JudoIdentifiable<VoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoAbstain(): Promise<JudoRestResponse<YesNoAbstainVoteInput>>;
}
