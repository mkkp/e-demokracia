//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceIssueDebateQueryCustomizer,
  ServiceDistrictQueryCustomizer,
  ServiceCommentQueryCustomizer,
  ServiceIssueQueryCustomizer,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueStored,
  ServiceIssueDebateStored,
  ServiceIssue,
  ServiceIssueDebate,
  ServiceServiceUser,
  ServiceCity,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueCategory,
  ServiceCountyStored,
  ServiceCounty,
  ServiceIssueType,
  ServiceComment,
  ServiceIssueAttachment,
  ServiceDistrict,
  ServiceCountyQueryCustomizer,
  ServiceServiceUserStored,
  ServiceCommentStored,
  ServiceIssueCategoryStored,
  ServiceDashboard,
  ServiceDistrictStored,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceServiceUserQueryCustomizer,
  ServiceCityStored,
  ServiceIssueAttachmentStored,
  ServiceIssueTypeStored,
  ServiceCityQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceDashboard.issuesOwned
 */
export interface ServiceDashboardServiceForIssuesOwned {
  listIssuesOwned(
    owner: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  deleteIssuesOwned(owner: JudoIdentifiable<ServiceDashboard>, target: JudoIdentifiable<ServiceIssue>): Promise<void>;

  updateIssuesOwned(
    owner: JudoIdentifiable<ServiceDashboard>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;

  getRangeForOwner(
    owner: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;

  setOwner(
    owner: JudoIdentifiable<ServiceDashboard>,
    target: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;

  unsetOwner(owner: JudoIdentifiable<ServiceDashboard>, target: JudoIdentifiable<ServiceServiceUser>): Promise<void>;

  getRangeForCategories(
    owner: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;

  setCategories(
    owner: JudoIdentifiable<ServiceDashboard>,
    target: JudoIdentifiable<ServiceIssueCategory>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  addIssuesOwnedCategories(
    owner: JudoIdentifiable<ServiceDashboard>,
    target: JudoIdentifiable<ServiceIssueCategory>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  removeIssuesOwnedCategories(
    owner: JudoIdentifiable<ServiceDashboard>,
    target: JudoIdentifiable<ServiceIssueCategory>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  getRangeForIssueType(
    owner: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ): Promise<Array<ServiceIssueTypeStored>>;

  setIssueType(
    owner: JudoIdentifiable<ServiceDashboard>,
    target: JudoIdentifiable<ServiceIssueType>,
    selected: JudoIdentifiable<ServiceIssueType>,
  ): Promise<void>;

  unsetIssueType(owner: JudoIdentifiable<ServiceDashboard>, target: JudoIdentifiable<ServiceIssueType>): Promise<void>;

  getRangeForCounty(
    owner: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;

  setCounty(
    owner: JudoIdentifiable<ServiceDashboard>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;

  unsetCounty(owner: JudoIdentifiable<ServiceDashboard>, target: JudoIdentifiable<ServiceCounty>): Promise<void>;

  getRangeForCity(
    owner: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  setCity(
    owner: JudoIdentifiable<ServiceDashboard>,
    target: JudoIdentifiable<ServiceCity>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<void>;

  unsetCity(owner: JudoIdentifiable<ServiceDashboard>, target: JudoIdentifiable<ServiceCity>): Promise<void>;

  getRangeForDistrict(
    owner: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  setDistrict(
    owner: JudoIdentifiable<ServiceDashboard>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;

  unsetDistrict(owner: JudoIdentifiable<ServiceDashboard>, target: JudoIdentifiable<ServiceDistrict>): Promise<void>;
}
