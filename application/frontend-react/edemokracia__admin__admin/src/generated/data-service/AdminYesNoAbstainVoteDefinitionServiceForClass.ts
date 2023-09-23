//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminYesNoAbstainVoteDefinition,
  AdminIssueQueryCustomizer,
  AdminDebate,
  AdminIssue,
  AdminIssueStored,
  YesNoAbstainVoteInput,
  AdminDebateStored,
  AdminYesNoAbstainVoteDefinitionStored,
  AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Class Service for AdminYesNoAbstainVoteDefinition
 */
export interface AdminYesNoAbstainVoteDefinitionServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer?: AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<AdminYesNoAbstainVoteDefinitionStored>;

  getDebate(
    target: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<AdminDebateStored>;

  getRangeForDebate(
    owner?: JudoIdentifiable<AdminYesNoAbstainVoteDefinition> | AdminYesNoAbstainVoteDefinition,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getIssue(
    target: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<AdminIssueStored>;

  getRangeForIssue(
    owner?: JudoIdentifiable<AdminYesNoAbstainVoteDefinition> | AdminYesNoAbstainVoteDefinition,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  vote(owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>, target: YesNoAbstainVoteInput): Promise<void>;
}
