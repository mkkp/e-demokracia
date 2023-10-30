//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  ServiceCity,
  ServiceCountyStored,
  ServiceCountyQueryCustomizer,
  ServiceCounty,
  ServiceCityStored,
  ServiceCityQueryCustomizer,
} from '../data-api';

/**
 * Access Relation Service for ServiceUser.adminCounties
 */
export interface ServiceUserServiceForAdminCounties {
  listAdminCounties(queryCustomizer?: ServiceCountyQueryCustomizer): Promise<Array<ServiceCountyStored>>;

  createAdminCounties(target: ServiceCounty): Promise<ServiceCountyStored>;
}
