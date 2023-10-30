//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceDebate,
  ServiceDebateQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceDebateStored,
  ServiceIssueQueryCustomizer,
  ServiceYesNoAbstainVoteDefinition,
  ServiceIssueStored,
  ServiceYesNoAbstainVoteEntryStored,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceYesNoAbstainVoteEntry,
  ServiceIssue,
} from '../data-api';

/**
 * Relation Service for ServiceDebate.yesNoAbstainVoteDefinition
 */
export interface ServiceDebateServiceForYesNoAbstainVoteDefinition {
  getYesNoAbstainVoteDefinition(
    owner: JudoIdentifiable<ServiceDebate>,
    mask?: string,
  ): Promise<ServiceYesNoAbstainVoteDefinitionStored>;
}
