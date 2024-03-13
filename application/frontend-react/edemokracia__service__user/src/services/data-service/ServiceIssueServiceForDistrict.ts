//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  JudoRestResponse,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceIssue.district
 */
export interface ServiceIssueServiceForDistrict {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  getRangeForDistrict(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  getTemplate(): Promise<JudoRestResponse<ServiceDistrict>>;
  setDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<JudoRestResponse<void>>;
  unsetDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
}
