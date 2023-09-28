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
  AdminUserVoteDefinition,
  AdminIssueStored,
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminIssueQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  AdminDebate,
  AdminIssue,
  AdminVoteDefinition,
  AdminDebateStored,
  AdminDebateQueryCustomizer,
} from '../data-api';
import type { AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCity } from '../data-service';

/**
 * Relation Service Implementation for AdminUserVoteDefinition.activeVoteDefinitionsInResidentCity
 */
export class AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCityImpl
  extends JudoAxiosService
  implements AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCity
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listActiveVoteDefinitionsInResidentCity(
    owner: JudoIdentifiable<AdminUserVoteDefinition>,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>> {
    const path = '/admin/UserVoteDefinition/activeVoteDefinitionsInResidentCity/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}