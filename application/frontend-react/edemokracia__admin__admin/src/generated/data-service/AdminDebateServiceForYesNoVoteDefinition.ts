//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminIssueQueryCustomizer,
  AdminDebate,
  AdminYesNoVoteDefinitionStored,
  AdminIssue,
  AdminYesNoVoteDefinition,
  AdminIssueStored,
  AdminYesNoVoteDefinitionQueryCustomizer,
  AdminDebateStored,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for AdminDebate.yesNoVoteDefinition
 */
export interface AdminDebateServiceForYesNoVoteDefinition {
  getYesNoVoteDefinition(owner: JudoIdentifiable<AdminDebate>, mask?: string): Promise<AdminYesNoVoteDefinitionStored>;
}
