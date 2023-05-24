//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import {
  IssueCategory,
  User,
  UserQueryCustomizer,
  IssueCategoryStored,
  UserStored,
  IssueCategoryQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for IssueCategory.subcategories
 */
export interface IssueCategoryServiceForSubcategories {
  listSubcategories(
    owner: JudoIdentifiable<IssueCategory>,
    queryCustomizer?: IssueCategoryQueryCustomizer,
  ): Promise<Array<IssueCategoryStored>>;
}
