//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceDebate,
  ServiceDebateQueryCustomizer,
  ServiceDebateStored,
  ServiceUserDebates,
  ServiceUserDebatesStored,
  ServiceUserDebatesQueryCustomizer,
} from '../data-api';

/**
 * Class Service for ServiceUserDebates
 */
export interface ServiceUserDebatesServiceForClass {
  refresh(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceUserDebatesQueryCustomizer,
  ): Promise<ServiceUserDebatesStored>;

  getActiveDebatesGlobal(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;

  getRangeForActiveDebatesGlobal(
    owner?: JudoIdentifiable<ServiceUserDebates> | ServiceUserDebates,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;

  getActiveDebatesInActivityCities(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;

  getRangeForActiveDebatesInActivityCities(
    owner?: JudoIdentifiable<ServiceUserDebates> | ServiceUserDebates,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;

  getActiveDebatesInActivityDistricts(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;

  getRangeForActiveDebatesInActivityDistricts(
    owner?: JudoIdentifiable<ServiceUserDebates> | ServiceUserDebates,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;

  getActiveDebatesInActivityCounties(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;

  getRangeForActiveDebatesInActivityCounties(
    owner?: JudoIdentifiable<ServiceUserDebates> | ServiceUserDebates,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;

  getActiveDebatesInResidentCounty(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;

  getRangeForActiveDebatesInResidentCounty(
    owner?: JudoIdentifiable<ServiceUserDebates> | ServiceUserDebates,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;

  getActiveDebatesInResidentCity(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;

  getRangeForActiveDebatesInResidentCity(
    owner?: JudoIdentifiable<ServiceUserDebates> | ServiceUserDebates,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;

  getActiveDebatesInResidentDistrict(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;

  getRangeForActiveDebatesInResidentDistrict(
    owner?: JudoIdentifiable<ServiceUserDebates> | ServiceUserDebates,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;

  getOwnedDebates(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;

  getRangeForOwnedDebates(
    owner?: JudoIdentifiable<ServiceUserDebates> | ServiceUserDebates,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;
}
