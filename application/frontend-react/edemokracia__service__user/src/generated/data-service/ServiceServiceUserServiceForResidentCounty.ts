//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceServiceUser,
  ServiceCity,
  ServiceCountyStored,
  ServiceCountyQueryCustomizer,
  ServiceCounty,
  ServiceCityStored,
  ServiceCityQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceServiceUser.residentCounty
 */
export interface ServiceServiceUserServiceForResidentCounty {
  getResidentCounty(owner: JudoIdentifiable<ServiceServiceUser>, mask?: string): Promise<ServiceCountyStored>;

  updateResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceCountyStored>,
  ): Promise<ServiceCountyStored>;
}
