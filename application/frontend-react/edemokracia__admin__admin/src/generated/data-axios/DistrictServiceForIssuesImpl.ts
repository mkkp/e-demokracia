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
  IssueAttachmentStored,
  IssueTypeStored,
  City,
  IssueCategoryQueryCustomizer,
  CityQueryCustomizer,
  District,
  DistrictQueryCustomizer,
  IssueAttachment,
} from '../data-api';
import type { DistrictServiceForIssues } from '../data-service';

/**
 * Relation Service Implementation for District.issues
 */
export class DistrictServiceForIssuesImpl extends JudoAxiosService implements DistrictServiceForIssues {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listIssues(
    owner: JudoIdentifiable<District>,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>> {
    const path = '/District/issues/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
