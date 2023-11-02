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
  ServiceVoteDefinitionStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceIssueQueryCustomizer,
  ServiceVoteDefinition,
  ServiceIssueStored,
  SelectAnswerVoteSelection,
  ServiceUserVoteDefinition,
  ServiceIssue,
} from '../data-api';
import type { ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsGlobal } from '../data-service';

/**
 * Relation Service Implementation for ServiceUserVoteDefinition.activeVoteDefinitionsGlobal
 */
export class ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsGlobalImpl
  extends JudoAxiosService
  implements ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsGlobal
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>> {
    const path = '/service/UserVoteDefinition/activeVoteDefinitionsGlobal/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async updateActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<ServiceUserVoteDefinition>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored> {
    const path = '/service/UserVoteDefinition/~update/activeVoteDefinitionsGlobal/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
