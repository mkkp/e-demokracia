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
  AdminRatingVoteDefinitionStored,
  AdminCon,
  AdminIssueStored,
  AdminYesNoVoteDefinition,
  AdminCommentQueryCustomizer,
  AdminIssueQueryCustomizer,
  AdminProQueryCustomizer,
  AdminComment,
  AdminDebateStored,
  AdminUser,
  AdminSelectAnswerVoteDefinitionQueryCustomizer,
  AdminDebateQueryCustomizer,
  AdminVoteDefinitionQueryCustomizer,
  AdminYesNoVoteDefinitionStored,
  AdminConStored,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminPro,
  AdminRatingVoteDefinitionQueryCustomizer,
  AdminYesNoVoteDefinitionQueryCustomizer,
  AdminUserDebates,
  AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminYesNoAbstainVoteDefinition,
  AdminRatingVoteDefinition,
  AdminProStored,
  AdminSelectAnswerVoteDefinitionStored,
  AdminDebate,
  AdminIssue,
  AdminConQueryCustomizer,
  AdminVoteDefinition,
  AdminSelectAnswerVoteDefinition,
  AdminCommentStored,
  AdminYesNoAbstainVoteDefinitionStored,
} from '../data-api';
import type { AdminUserDebatesServiceForActiveDebatesInActivityCounties } from '../data-service';

/**
 * Relation Service Implementation for AdminUserDebates.activeDebatesInActivityCounties
 */
export class AdminUserDebatesServiceForActiveDebatesInActivityCountiesImpl
  extends JudoAxiosService
  implements AdminUserDebatesServiceForActiveDebatesInActivityCounties
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listActiveDebatesInActivityCounties(
    owner: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/UserDebates/activeDebatesInActivityCounties/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
