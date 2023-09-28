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
  AdminSelectAnswerVoteSelectionQueryCustomizer,
  AdminSelectAnswerVoteDefinition,
  AdminSelectAnswerVoteSelection,
  AdminSelectAnswerVoteSelectionStored,
} from '../data-api';
import type { AdminSelectAnswerVoteDefinitionServiceForVoteSelections } from '../data-service';

/**
 * Relation Service Implementation for AdminSelectAnswerVoteDefinition.voteSelections
 */
export class AdminSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl
  extends JudoAxiosService
  implements AdminSelectAnswerVoteDefinitionServiceForVoteSelections
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listVoteSelections(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    queryCustomizer?: AdminSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<AdminSelectAnswerVoteSelectionStored>> {
    const path = '/admin/SelectAnswerVoteDefinition/voteSelections/~list';
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
  async createVoteSelections(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: AdminSelectAnswerVoteSelection,
  ): Promise<AdminSelectAnswerVoteSelectionStored> {
    const path = '/admin/SelectAnswerVoteDefinition/~update/voteSelections/~create';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deleteVoteSelections(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<AdminSelectAnswerVoteSelection>,
  ): Promise<void> {
    const path = '/admin/SelectAnswerVoteDefinition/~update/voteSelections/~delete';
    await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async updateVoteSelections(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: Partial<AdminSelectAnswerVoteSelectionStored>,
  ): Promise<AdminSelectAnswerVoteSelectionStored> {
    const path = '/admin/SelectAnswerVoteDefinition/~update/voteSelections/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
