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
  AdminYesNoAbstainVoteDefinition,
  AdminIssueQueryCustomizer,
  AdminDebate,
  AdminIssue,
  AdminIssueStored,
  AdminDebateStored,
  AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  AdminYesNoAbstainVoteDefinitionStored,
  AdminDebateQueryCustomizer,
} from '../data-api';
import type { AdminDebateServiceForYesNoAbstainVoteDefinition } from '../data-service';

/**
 * Relation Service Implementation for AdminDebate.yesNoAbstainVoteDefinition
 */
export class AdminDebateServiceForYesNoAbstainVoteDefinitionImpl
  extends JudoAxiosService
  implements AdminDebateServiceForYesNoAbstainVoteDefinition
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getYesNoAbstainVoteDefinition(
    owner: JudoIdentifiable<AdminDebate>,
    mask?: string,
  ): Promise<AdminYesNoAbstainVoteDefinitionStored> {
    const path = '/admin/Debate/yesNoAbstainVoteDefinition/~get';
    const queryCustomizer: AdminYesNoAbstainVoteDefinitionQueryCustomizer | undefined = mask
      ? { _mask: mask }
      : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
