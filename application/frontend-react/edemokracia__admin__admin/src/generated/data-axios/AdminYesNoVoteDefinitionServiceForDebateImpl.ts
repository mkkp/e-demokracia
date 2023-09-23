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
  AdminVoteDefinitionQueryCustomizer,
  AdminYesNoVoteDefinitionStored,
  AdminCon,
  AdminYesNoVoteDefinition,
  AdminIssueStored,
  AdminConStored,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminPro,
  AdminYesNoVoteDefinitionQueryCustomizer,
  AdminCommentQueryCustomizer,
  AdminIssueQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminProQueryCustomizer,
  AdminProStored,
  AdminDebate,
  AdminIssue,
  AdminComment,
  AdminConQueryCustomizer,
  AdminVoteDefinition,
  AdminDebateStored,
  AdminUser,
  AdminCommentStored,
  AdminDebateQueryCustomizer,
} from '../data-api';
import type { AdminYesNoVoteDefinitionServiceForDebate } from '../data-service';

/**
 * Relation Service Implementation for AdminYesNoVoteDefinition.debate
 */
export class AdminYesNoVoteDefinitionServiceForDebateImpl
  extends JudoAxiosService
  implements AdminYesNoVoteDefinitionServiceForDebate
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getDebate(owner: JudoIdentifiable<AdminYesNoVoteDefinition>, mask?: string): Promise<AdminDebateStored> {
    const path = '/admin/YesNoVoteDefinition/debate/~get';
    const queryCustomizer: AdminDebateQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
