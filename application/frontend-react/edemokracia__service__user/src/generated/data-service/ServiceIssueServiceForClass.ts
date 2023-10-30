//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceIssueDebateQueryCustomizer,
  ServiceDistrictQueryCustomizer,
  ServiceCommentQueryCustomizer,
  CreateDebateInput,
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
  CreateCommentInput,
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
  CreateDebateOutputDebateReferenceStored,
  ServiceDistrictStored,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceServiceUserQueryCustomizer,
  ServiceCityStored,
  ServiceIssueAttachmentStored,
  ServiceIssueTypeStored,
  ServiceCityQueryCustomizer,
} from '../data-api';

/**
 * Class Service for ServiceIssue
 */
export interface ServiceIssueServiceForClass {
  refresh(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored>;

  delete(target: JudoIdentifiable<ServiceIssue>): Promise<void>;

  update(target: Partial<ServiceIssueStored>): Promise<ServiceIssueStored>;

  getAttachments(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueAttachmentQueryCustomizer,
  ): Promise<Array<ServiceIssueAttachmentStored>>;

  getRangeForAttachments(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceIssueAttachmentQueryCustomizer,
  ): Promise<Array<ServiceIssueAttachmentStored>>;

  getOwner(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;

  getRangeForOwner(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;

  setOwner(target: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceServiceUser>): Promise<void>;

  unsetOwner(target: JudoIdentifiable<ServiceIssue>): Promise<void>;

  getCategories(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;

  getRangeForCategories(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;

  setCategories(
    target: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  addCategories(
    target: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  removeCategories(
    target: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  getDebates(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueDebateQueryCustomizer,
  ): Promise<Array<ServiceIssueDebateStored>>;

  getRangeForDebates(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceIssueDebateQueryCustomizer,
  ): Promise<Array<ServiceIssueDebateStored>>;

  getComments(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCommentQueryCustomizer,
  ): Promise<Array<ServiceCommentStored>>;

  getRangeForComments(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceCommentQueryCustomizer,
  ): Promise<Array<ServiceCommentStored>>;

  getCreatedBy(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;

  getRangeForCreatedBy(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;

  getIssueType(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<ServiceIssueTypeStored>;

  getRangeForIssueType(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<Array<ServiceIssueTypeStored>>;

  setIssueType(target: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceIssueType>): Promise<void>;

  unsetIssueType(target: JudoIdentifiable<ServiceIssue>): Promise<void>;

  getCounty(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored>;

  getRangeForCounty(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;

  setCounty(target: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceCounty>): Promise<void>;

  unsetCounty(target: JudoIdentifiable<ServiceIssue>): Promise<void>;

  getCity(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored>;

  getRangeForCity(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  setCity(target: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceCity>): Promise<void>;

  unsetCity(target: JudoIdentifiable<ServiceIssue>): Promise<void>;

  getDistrict(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored>;

  getRangeForDistrict(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  setDistrict(target: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceDistrict>): Promise<void>;

  unsetDistrict(target: JudoIdentifiable<ServiceIssue>): Promise<void>;

  createDebate(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateDebateInput,
  ): Promise<CreateDebateOutputDebateReferenceStored>;

  createComment(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;

  addToFavorites(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  removeFromFavorites(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
}
