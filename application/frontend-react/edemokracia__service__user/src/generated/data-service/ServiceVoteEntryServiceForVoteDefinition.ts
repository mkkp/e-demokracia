//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceVoteDefinitionStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceIssueQueryCustomizer,
  ServiceVoteDefinition,
  ServiceVoteEntry,
  ServiceIssueStored,
  SelectAnswerVoteSelection,
  ServiceIssue,
} from '../data-api';

/**
 * Relation Service for ServiceVoteEntry.voteDefinition
 */
export interface ServiceVoteEntryServiceForVoteDefinition {
  getVoteDefinition(owner: JudoIdentifiable<ServiceVoteEntry>, mask?: string): Promise<ServiceVoteDefinitionStored>;
}
