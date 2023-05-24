//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { Issue, DistrictStored, DistrictQueryCustomizer, District } from '../data-api';

/**
 * Relation Service for Issue.district
 */
export interface IssueServiceForDistrict {
  getDistrict(owner: JudoIdentifiable<Issue>, mask?: string): Promise<DistrictStored>;
}
