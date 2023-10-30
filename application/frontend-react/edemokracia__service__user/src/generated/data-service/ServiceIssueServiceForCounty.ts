//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceCity,
  ServiceCountyStored,
  ServiceCountyQueryCustomizer,
  ServiceCounty,
  ServiceCityStored,
  ServiceIssue,
  ServiceCityQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceIssue.county
 */
export interface ServiceIssueServiceForCounty {
  getCounty(owner: JudoIdentifiable<ServiceIssue>, mask?: string): Promise<ServiceCountyStored>;
}
