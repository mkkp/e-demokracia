//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  AdminCityQueryCustomizer,
  AdminCountyQueryCustomizer,
  AdminCountyStored,
  AdminCounty,
  AdminCityStored,
  AdminCity,
} from '../data-api';

/**
 * Access Relation Service for AdminAdmin.counties
 */
export interface AdminAdminServiceForCounties {
  listCounties(queryCustomizer?: AdminCountyQueryCustomizer): Promise<Array<AdminCountyStored>>;

  createCounties(target: AdminCounty): Promise<AdminCountyStored>;
}
