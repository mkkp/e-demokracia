//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  Issue,
  IssueCategory,
  User,
  UserQueryCustomizer,
  IssueCategoryStored,
  UserStored,
  IssueCategoryQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for Issue.categories
 */
export interface IssueServiceForCategories {
  listCategories(
    owner: JudoIdentifiable<Issue>,
    queryCustomizer?: IssueCategoryQueryCustomizer,
  ): Promise<Array<IssueCategoryStored>>;
}
