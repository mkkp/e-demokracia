//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { CityQueryCustomizer, User, CityStored, City, CountyQueryCustomizer, County, CountyStored } from '../data-api';

/**
 * Relation Service for User.residentCounty
 */
export interface UserServiceForResidentCounty {
  getResidentCounty(owner: JudoIdentifiable<User>, mask?: string): Promise<CountyStored>;
}
