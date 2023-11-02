//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceVoteDefinitionStored,
  ServiceDashboardQueryCustomizer,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceDashboard,
  ServiceVoteEntryQueryCustomizer,
  ServiceIssueQueryCustomizer,
  ServiceVoteDefinition,
  ServiceDashboardStored,
  ServiceIssueStored,
  ServiceVoteEntry,
  ServiceVoteEntryStored,
  ServiceIssue,
} from '../data-api';

/**
 * Class Service for ServiceDashboard
 */
export interface ServiceDashboardServiceForClass {
  refresh(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceDashboardQueryCustomizer,
  ): Promise<ServiceDashboardStored>;

  getIssuesOwned(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getRangeForIssuesOwned(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getUserVoteEntries(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceVoteEntryStored>>;

  getRangeForUserVoteEntries(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceVoteEntryStored>>;

  getFavoriteIssues(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getRangeForFavoriteIssues(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getFavoriteVoteDefinitions(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;

  getRangeForFavoriteVoteDefinitions(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;

  getOwnedVoteDefinitions(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;

  getRangeForOwnedVoteDefinitions(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
}
