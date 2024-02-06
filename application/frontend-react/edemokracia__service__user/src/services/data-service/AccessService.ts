//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'data-service/'+'AccessService.ts'
// Template name: accessService.ts.hbs
// Template file: data-service/accessService.ts.hbs

import {
  ServiceCountyStored,
  ServiceDashboardStored,
  ServiceIssueCategoryStored,
  ServiceIssueStored,
  ServiceIssueTypeStored,
  ServiceRatingVoteDefinitionStored,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceServicePrincipalUserStored,
  ServiceUserIssuesStored,
  ServiceUserManagerStored,
  ServiceUserProfileStored,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinitionStored,
  ServiceVoteEntryStored,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceYesNoVoteDefinitionStored,
} from '../data-api';
import type { JudoDownloadFile, JudoMetaData } from '../data-api/common';

export interface AccessService {
  getPrincipal(): Promise<ServiceServicePrincipalUserStored>;

  getMetaData(): Promise<JudoMetaData>;

  uploadFile(attributePath: string, file: File): Promise<string>;

  downloadFile(downloadToken: string, disposition: 'inline' | 'attachment'): Promise<any>;

  findInstanceOfAdminCategories(identifier: string, mask?: string): Promise<ServiceIssueCategoryStored | undefined>;
  findInstanceOfAdminCounties(identifier: string, mask?: string): Promise<ServiceCountyStored | undefined>;
  findInstanceOfAdminIssueTypes(identifier: string, mask?: string): Promise<ServiceIssueTypeStored | undefined>;
  findInstanceOfAdminIssues(identifier: string, mask?: string): Promise<ServiceIssueStored | undefined>;
  findInstanceOfAdminVoteDefinitions(
    identifier: string,
    mask?: string,
  ): Promise<ServiceVoteDefinitionStored | undefined>;
  findInstanceOfAdminVoteEntries(identifier: string, mask?: string): Promise<ServiceVoteEntryStored | undefined>;
  findInstanceOfIssues(identifier: string, mask?: string): Promise<ServiceIssueStored | undefined>;
  findInstanceOfRatingVoteDefinitions(
    identifier: string,
    mask?: string,
  ): Promise<ServiceRatingVoteDefinitionStored | undefined>;
  findInstanceOfSelectAnswerVoteDefinitions(
    identifier: string,
    mask?: string,
  ): Promise<ServiceSelectAnswerVoteDefinitionStored | undefined>;
  findInstanceOfVoteEntries(identifier: string, mask?: string): Promise<ServiceVoteEntryStored | undefined>;
  findInstanceOfYesNoAbstainVoteDefinitions(
    identifier: string,
    mask?: string,
  ): Promise<ServiceYesNoAbstainVoteDefinitionStored | undefined>;
  findInstanceOfYesNoVoteDefinitions(
    identifier: string,
    mask?: string,
  ): Promise<ServiceYesNoVoteDefinitionStored | undefined>;
}
