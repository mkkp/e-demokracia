//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  CityQueryCustomizer,
  CityStored,
  Issue,
  IssueQueryCustomizer,
  IssueStored,
  City,
  County,
  CountyQueryCustomizer,
  CountyStored,
} from '../data-api';

/**
 * Class Service for County
 */
export interface CountyServiceForClass {
  refresh(target: JudoIdentifiable<County>, queryCustomizer?: CountyQueryCustomizer): Promise<CountyStored>;

  getCities(target: JudoIdentifiable<County>, queryCustomizer?: CityQueryCustomizer): Promise<Array<CityStored>>;

  getRangeForCities(
    owner?: JudoIdentifiable<County> | County,
    queryCustomizer?: CityQueryCustomizer,
  ): Promise<Array<CityStored>>;

  getIssues(target: JudoIdentifiable<County>, queryCustomizer?: IssueQueryCustomizer): Promise<Array<IssueStored>>;

  getRangeForIssues(
    owner?: JudoIdentifiable<County> | County,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>>;
}
