//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminIssueQueryCustomizer,
  AdminUserIssuesQueryCustomizer,
  AdminCreateIssueInput,
  AdminIssue,
  AdminIssueStored,
  AdminUserIssues,
  AdminUserIssuesStored,
} from '../data-api';

/**
 * Class Service for AdminUserIssues
 */
export interface AdminUserIssuesServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminUserIssues>,
    queryCustomizer?: AdminUserIssuesQueryCustomizer,
  ): Promise<AdminUserIssuesStored>;

  getOwnedIssues(
    target: JudoIdentifiable<AdminUserIssues>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getRangeForOwnedIssues(
    owner?: JudoIdentifiable<AdminUserIssues> | AdminUserIssues,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getActiveIssuesGlobal(
    target: JudoIdentifiable<AdminUserIssues>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getRangeForActiveIssuesGlobal(
    owner?: JudoIdentifiable<AdminUserIssues> | AdminUserIssues,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getActiveIssuesInActivityCounties(
    target: JudoIdentifiable<AdminUserIssues>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getRangeForActiveIssuesInActivityCounties(
    owner?: JudoIdentifiable<AdminUserIssues> | AdminUserIssues,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getActiveIssuesInActivityCities(
    target: JudoIdentifiable<AdminUserIssues>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getRangeForActiveIssuesInActivityCities(
    owner?: JudoIdentifiable<AdminUserIssues> | AdminUserIssues,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getActiveIssuesInActivityDistricts(
    target: JudoIdentifiable<AdminUserIssues>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getRangeForActiveIssuesInActivityDistricts(
    owner?: JudoIdentifiable<AdminUserIssues> | AdminUserIssues,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getActiveIssuesInResidentCounty(
    target: JudoIdentifiable<AdminUserIssues>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getRangeForActiveIssuesInResidentCounty(
    owner?: JudoIdentifiable<AdminUserIssues> | AdminUserIssues,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getActiveIssuesInResidentCity(
    target: JudoIdentifiable<AdminUserIssues>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getRangeForActiveIssuesInResidentCity(
    owner?: JudoIdentifiable<AdminUserIssues> | AdminUserIssues,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getActiveIssuesInResidentDistrict(
    target: JudoIdentifiable<AdminUserIssues>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getRangeForActiveIssuesInResidentDistrict(
    owner?: JudoIdentifiable<AdminUserIssues> | AdminUserIssues,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  createIssue(target: AdminCreateIssueInput): Promise<AdminIssueStored>;
}
