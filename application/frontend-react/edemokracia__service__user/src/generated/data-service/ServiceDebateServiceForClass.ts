//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceCommentQueryCustomizer,
  ServiceVoteDefinitionQueryCustomizer,
  CloseDebateOutputVoteDefinitionReferenceStored,
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
  CreateCommentInput,
  ServiceConQueryCustomizer,
  ServiceProStored,
  CreateArgumentInput,
  ServicePro,
  CloseDebateInput,
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
 * Class Service for ServiceDebate
 */
export interface ServiceDebateServiceForClass {
  refresh(
    target: JudoIdentifiable<ServiceDebate>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<ServiceDebateStored>;

  delete(target: JudoIdentifiable<ServiceDebate>): Promise<void>;

  update(target: Partial<ServiceDebateStored>): Promise<ServiceDebateStored>;

  getIssue(
    target: JudoIdentifiable<ServiceDebate>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored>;

  getRangeForIssue(
    owner?: JudoIdentifiable<ServiceDebate> | ServiceDebate,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getComments(
    target: JudoIdentifiable<ServiceDebate>,
    queryCustomizer?: ServiceCommentQueryCustomizer,
  ): Promise<Array<ServiceCommentStored>>;

  getRangeForComments(
    owner?: JudoIdentifiable<ServiceDebate> | ServiceDebate,
    queryCustomizer?: ServiceCommentQueryCustomizer,
  ): Promise<Array<ServiceCommentStored>>;

  getCreatedBy(
    target: JudoIdentifiable<ServiceDebate>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;

  getRangeForCreatedBy(
    owner?: JudoIdentifiable<ServiceDebate> | ServiceDebate,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;

  getCons(
    target: JudoIdentifiable<ServiceDebate>,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>>;

  getRangeForCons(
    owner?: JudoIdentifiable<ServiceDebate> | ServiceDebate,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>>;

  getPros(
    target: JudoIdentifiable<ServiceDebate>,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;

  getRangeForPros(
    owner?: JudoIdentifiable<ServiceDebate> | ServiceDebate,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;

  getVoteDefinition(
    target: JudoIdentifiable<ServiceDebate>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<ServiceVoteDefinitionStored>;

  getRangeForVoteDefinition(
    owner?: JudoIdentifiable<ServiceDebate> | ServiceDebate,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;

  getYesNoVoteDefinition(
    target: JudoIdentifiable<ServiceDebate>,
    queryCustomizer?: ServiceYesNoVoteDefinitionQueryCustomizer,
  ): Promise<ServiceYesNoVoteDefinitionStored>;

  getRangeForYesNoVoteDefinition(
    owner?: JudoIdentifiable<ServiceDebate> | ServiceDebate,
    queryCustomizer?: ServiceYesNoVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceYesNoVoteDefinitionStored>>;

  getYesNoAbstainVoteDefinition(
    target: JudoIdentifiable<ServiceDebate>,
    queryCustomizer?: ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<ServiceYesNoAbstainVoteDefinitionStored>;

  getRangeForYesNoAbstainVoteDefinition(
    owner?: JudoIdentifiable<ServiceDebate> | ServiceDebate,
    queryCustomizer?: ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceYesNoAbstainVoteDefinitionStored>>;

  getRatingVoteDefinition(
    target: JudoIdentifiable<ServiceDebate>,
    queryCustomizer?: ServiceRatingVoteDefinitionQueryCustomizer,
  ): Promise<ServiceRatingVoteDefinitionStored>;

  getRangeForRatingVoteDefinition(
    owner?: JudoIdentifiable<ServiceDebate> | ServiceDebate,
    queryCustomizer?: ServiceRatingVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceRatingVoteDefinitionStored>>;

  getSelectAnswerVoteDefinition(
    target: JudoIdentifiable<ServiceDebate>,
    queryCustomizer?: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteDefinitionStored>;

  getRangeForSelectAnswerVoteDefinition(
    owner?: JudoIdentifiable<ServiceDebate> | ServiceDebate,
    queryCustomizer?: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteDefinitionStored>>;

  closeDebate(
    owner: JudoIdentifiable<ServiceDebate>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;

  createArgument(owner: JudoIdentifiable<ServiceDebate>, target: CreateArgumentInput): Promise<void>;

  createComment(owner: JudoIdentifiable<ServiceDebate>, target: CreateCommentInput): Promise<void>;

  addToFavorites(owner: JudoIdentifiable<ServiceDebate>): Promise<void>;

  removeFromFavorites(owner: JudoIdentifiable<ServiceDebate>): Promise<void>;
}
