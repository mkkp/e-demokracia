//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminIssueQueryCustomizer,
  AdminYesNoVoteDefinitionStored,
  AdminDebate,
  AdminIssue,
  AdminYesNoVoteDefinition,
  AdminIssueStored,
  AdminYesNoVoteDefinitionQueryCustomizer,
  AdminDebateStored,
  YesNoVoteInput,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Class Service for AdminYesNoVoteDefinition
 */
export interface AdminYesNoVoteDefinitionServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer?: AdminYesNoVoteDefinitionQueryCustomizer,
  ): Promise<AdminYesNoVoteDefinitionStored>;

  getDebate(
    target: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<AdminDebateStored>;

  getRangeForDebate(
    owner?: JudoIdentifiable<AdminYesNoVoteDefinition> | AdminYesNoVoteDefinition,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getIssue(
    target: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<AdminIssueStored>;

  getRangeForIssue(
    owner?: JudoIdentifiable<AdminYesNoVoteDefinition> | AdminYesNoVoteDefinition,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  vote(owner: JudoIdentifiable<AdminYesNoVoteDefinition>, target: YesNoVoteInput): Promise<void>;
}
