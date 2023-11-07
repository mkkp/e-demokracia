//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { ServiceDistrictQueryCustomizer, ServiceDistrict, ServiceDistrictStored, ServiceIssue } from '../data-api';

/**
 * Relation Service for ServiceIssue.district
 */
export interface ServiceIssueServiceForDistrict {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored>;

  getRangeForDistrict(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  getTemplate(): Promise<ServiceDistrict>;

  setDistrict(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceDistrict>): Promise<void>;

  unsetDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
}
