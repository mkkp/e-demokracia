//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import {
  Issue,
  IssueCategory,
  User,
  UserQueryCustomizer,
  IssueCategoryStored,
  UserStored,
  IssueCategoryQueryCustomizer,
} from '../data-api';
import { IssueServiceForCategories } from '../data-service';

/**
 * Relation Service Implementation for Issue.categories
 */
export class IssueServiceForCategoriesImpl extends JudoAxiosService implements IssueServiceForCategories {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listCategories(
    owner: JudoIdentifiable<Issue>,
    queryCustomizer?: IssueCategoryQueryCustomizer,
  ): Promise<Array<IssueCategoryStored>> {
    const path = '/Issue/categories/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
