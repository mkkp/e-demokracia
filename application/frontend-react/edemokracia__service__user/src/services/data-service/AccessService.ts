//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'data-service/'+'AccessService.ts'
// Template name: accessService.ts.hbs
// Template file: data-service/accessService.ts.hbs

import {
  JudoRestResponse,
  ServiceCountyStored,
  ServiceDashboardStored,
  ServiceIssueCategoryStored,
  ServiceIssueStored,
  ServiceIssueTypeStored,
  ServiceRatingVoteDefinitionStored,
  ServiceRatingVoteEntryStored,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceSelectAnswerVoteEntryStored,
  ServiceServicePrincipalUserStored,
  ServiceUserIssuesStored,
  ServiceUserManagerStored,
  ServiceUserProfileStored,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinitionStored,
  ServiceVoteEntryStored,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceYesNoAbstainVoteEntryStored,
  ServiceYesNoVoteDefinitionStored,
  ServiceYesNoVoteEntryStored,
} from '../data-api';
import type { JudoDownloadFile, JudoMetaData } from '../data-api/common';

export interface AccessService {
  getPrincipal(): Promise<JudoRestResponse<ServiceServicePrincipalUserStored>>;

  getMetaData(): Promise<JudoRestResponse<JudoMetaData>>;

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
  findInstanceOfRatingVoteEntries(identifier: string, mask?: string): Promise<ServiceRatingVoteEntryStored | undefined>;
  findInstanceOfSelectAnswerVoteDefinitions(
    identifier: string,
    mask?: string,
  ): Promise<ServiceSelectAnswerVoteDefinitionStored | undefined>;
  findInstanceOfSelectAnswerVoteEntries(
    identifier: string,
    mask?: string,
  ): Promise<ServiceSelectAnswerVoteEntryStored | undefined>;
  findInstanceOfVoteEntries(identifier: string, mask?: string): Promise<ServiceVoteEntryStored | undefined>;
  findInstanceOfYesNoAbstainVoteDefinitions(
    identifier: string,
    mask?: string,
  ): Promise<ServiceYesNoAbstainVoteDefinitionStored | undefined>;
  findInstanceOfYesNoAbstainVoteEntries(
    identifier: string,
    mask?: string,
  ): Promise<ServiceYesNoAbstainVoteEntryStored | undefined>;
  findInstanceOfYesNoVoteDefinitions(
    identifier: string,
    mask?: string,
  ): Promise<ServiceYesNoVoteDefinitionStored | undefined>;
  findInstanceOfYesNoVoteEntries(identifier: string, mask?: string): Promise<ServiceYesNoVoteEntryStored | undefined>;
}
