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
  AdminIssueQueryCustomizer,
  AdminYesNoVoteEntryStored,
  AdminDebate,
  AdminYesNoVoteDefinitionStored,
  AdminIssue,
  AdminYesNoVoteEntry,
  AdminYesNoVoteDefinition,
  AdminIssueStored,
  AdminYesNoVoteDefinitionQueryCustomizer,
  AdminDebateStored,
  AdminYesNoVoteEntryQueryCustomizer,
  AdminDebateQueryCustomizer,
} from '../data-api';
import type { AdminDebateServiceForYesNoVoteDefinition } from '../data-service';

/**
 * Relation Service Implementation for AdminDebate.yesNoVoteDefinition
 */
export class AdminDebateServiceForYesNoVoteDefinitionImpl
  extends JudoAxiosService
  implements AdminDebateServiceForYesNoVoteDefinition
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getYesNoVoteDefinition(
    owner: JudoIdentifiable<AdminDebate>,
    mask?: string,
  ): Promise<AdminYesNoVoteDefinitionStored> {
    const path = '/admin/Debate/yesNoVoteDefinition/~get';
    const queryCustomizer: AdminYesNoVoteDefinitionQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
