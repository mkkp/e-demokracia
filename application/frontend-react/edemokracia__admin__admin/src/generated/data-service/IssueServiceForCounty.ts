//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { CityQueryCustomizer, Issue, CityStored, City, CountyQueryCustomizer, County, CountyStored } from '../data-api';

/**
 * Relation Service for Issue.county
 */
export interface IssueServiceForCounty {
  getCounty(owner: JudoIdentifiable<Issue>, mask?: string): Promise<CountyStored>;
}
