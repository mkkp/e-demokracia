//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceDistrictQueryCustomizer,
  ServiceCreateIssueInput,
  ServiceDistrict,
  ServiceDistrictStored,
} from '../data-api';

/**
 * Relation Service for ServiceCreateIssueInput.district
 */
export interface ServiceCreateIssueInputServiceForDistrict {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored>;
  getRangeForDistrict(
    owner: JudoIdentifiable<ServiceCreateIssueInput> | ServiceCreateIssueInput,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  getTemplate(): Promise<ServiceDistrict>;
}
