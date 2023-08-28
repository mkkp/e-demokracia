//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminVoteEntryQueryCustomizer,
  AdminIssueStored,
  AdminUserStored,
  AdminCreateUserInput,
  AdminVoteEntryStored,
  AdminDashboardQueryCustomizer,
  AdminIssueQueryCustomizer,
  AdminVoteEntry,
  AdminCreateIssueInput,
  AdminDebate,
  AdminIssue,
  AdminDebateStored,
  AdminDashboardStored,
  AdminDashboard,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Class Service for AdminDashboard
 */
export interface AdminDashboardServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminDashboard>,
    queryCustomizer?: AdminDashboardQueryCustomizer,
  ): Promise<AdminDashboardStored>;

  getIssues(
    target: JudoIdentifiable<AdminDashboard>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getRangeForIssues(
    owner?: JudoIdentifiable<AdminDashboard> | AdminDashboard,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getDebates(
    target: JudoIdentifiable<AdminDashboard>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getRangeForDebates(
    owner?: JudoIdentifiable<AdminDashboard> | AdminDashboard,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getVoteEntries(
    target: JudoIdentifiable<AdminDashboard>,
    queryCustomizer?: AdminVoteEntryQueryCustomizer,
  ): Promise<Array<AdminVoteEntryStored>>;

  getRangeForVoteEntries(
    owner?: JudoIdentifiable<AdminDashboard> | AdminDashboard,
    queryCustomizer?: AdminVoteEntryQueryCustomizer,
  ): Promise<Array<AdminVoteEntryStored>>;

  createIssue(target: AdminCreateIssueInput): Promise<AdminIssueStored>;

  createUser(target: AdminCreateUserInput): Promise<AdminUserStored>;
}
