//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteEntryStored,
  ServiceDebate,
  ServiceYesNoVoteEntry,
  ServiceDebateQueryCustomizer,
  ServiceYesNoVoteDefinitionStored,
  ServiceDebateStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceIssue,
  ServiceYesNoVoteEntryQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceDebate.yesNoVoteDefinition
 */
export interface ServiceDebateServiceForYesNoVoteDefinition {
  getYesNoVoteDefinition(
    owner: JudoIdentifiable<ServiceDebate>,
    mask?: string,
  ): Promise<ServiceYesNoVoteDefinitionStored>;
}
