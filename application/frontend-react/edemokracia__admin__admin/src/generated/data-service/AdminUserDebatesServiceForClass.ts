//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminUserDebatesQueryCustomizer,
  AdminDebate,
  AdminUserDebatesStored,
  AdminDebateStored,
  AdminUserDebates,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Class Service for AdminUserDebates
 */
export interface AdminUserDebatesServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminUserDebatesQueryCustomizer,
  ): Promise<AdminUserDebatesStored>;

  getActiveDebatesGlobal(
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getRangeForActiveDebatesGlobal(
    owner?: JudoIdentifiable<AdminUserDebates> | AdminUserDebates,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getActiveDebatesInActivityCities(
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getRangeForActiveDebatesInActivityCities(
    owner?: JudoIdentifiable<AdminUserDebates> | AdminUserDebates,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getActiveDebatesInActivityDistricts(
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getRangeForActiveDebatesInActivityDistricts(
    owner?: JudoIdentifiable<AdminUserDebates> | AdminUserDebates,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getActiveDebatesInActivityCounties(
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getRangeForActiveDebatesInActivityCounties(
    owner?: JudoIdentifiable<AdminUserDebates> | AdminUserDebates,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getActiveDebatesInResidentCounty(
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getRangeForActiveDebatesInResidentCounty(
    owner?: JudoIdentifiable<AdminUserDebates> | AdminUserDebates,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getActiveDebatesInResidentCity(
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getRangeForActiveDebatesInResidentCity(
    owner?: JudoIdentifiable<AdminUserDebates> | AdminUserDebates,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getActiveDebatesInResidentDistrict(
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getRangeForActiveDebatesInResidentDistrict(
    owner?: JudoIdentifiable<AdminUserDebates> | AdminUserDebates,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getOwnedDebates(
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getRangeForOwnedDebates(
    owner?: JudoIdentifiable<AdminUserDebates> | AdminUserDebates,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;
}
