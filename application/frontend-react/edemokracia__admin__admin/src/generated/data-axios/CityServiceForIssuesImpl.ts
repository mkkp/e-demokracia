//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type {
  CommentStored,
  Issue,
  IssueCategory,
  User,
  IssueCategoryStored,
  DistrictStored,
  County,
  IssueAttachmentQueryCustomizer,
  CityStored,
  UserQueryCustomizer,
  IssueQueryCustomizer,
  IssueStored,
  CommentQueryCustomizer,
  Debate,
  DebateStored,
  UserStored,
  CountyQueryCustomizer,
  CountyStored,
  Comment,
  DebateQueryCustomizer,
  IssueType,
  IssueTypeQueryCustomizer,
  City,
  IssueAttachmentStored,
  IssueTypeStored,
  IssueCategoryQueryCustomizer,
  CityQueryCustomizer,
  DistrictQueryCustomizer,
  District,
  IssueAttachment,
} from '../data-api';
import type { CityServiceForIssues } from '../data-service';

/**
 * Relation Service Implementation for City.issues
 */
export class CityServiceForIssuesImpl extends JudoAxiosService implements CityServiceForIssues {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listIssues(owner: JudoIdentifiable<City>, queryCustomizer?: IssueQueryCustomizer): Promise<Array<IssueStored>> {
    const path = '/City/issues/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}