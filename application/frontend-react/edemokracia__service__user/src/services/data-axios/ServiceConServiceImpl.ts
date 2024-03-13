//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type {
  CreateArgumentInput,
  JudoRestResponse,
  ServiceCon,
  ServiceConParent,
  ServiceConParentQueryCustomizer,
  ServiceConParentStored,
  ServiceConQueryCustomizer,
  ServiceConStored,
  ServicePro,
  ServiceProParent,
  ServiceProParentQueryCustomizer,
  ServiceProParentStored,
  ServiceProQueryCustomizer,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import { CommandQueryCustomizer } from '../data-api/common';
import { X_JUDO_MASK, X_JUDO_SIGNED_IDENTIFIER } from '../data-api/rest/headers';
import type { ServiceConService } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

const DEFAULT_COMMAND_MASK = '{}';

/**
 * Class Service Implementation for ServiceCon
 */
export class ServiceConServiceImpl extends JudoAxiosService implements ServiceConService {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceConQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceConStored>> {
    const path = '/service/Con/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async delete(target: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>> {
    const path = '/service/Con/~delete';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async update(
    target: Partial<ServiceConStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceConStored>> {
    const path = '/service/Con/~update';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        [X_JUDO_MASK]: queryCustomizer?._mask ?? DEFAULT_COMMAND_MASK,
      },
    });
  }
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async validateUpdate(target: Partial<ServiceConStored>): Promise<JudoRestResponse<ServiceConStored>> {
    const path = '/service/Con/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listCons(
    target: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceConQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceConStored>>> {
    const path = '/service/Con/cons/~list';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForCons(
    owner?: JudoIdentifiable<ServiceCon> | ServiceCon,
    queryCustomizer?: ServiceConQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceConStored>>> {
    const path = '/service/Con/cons/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deleteCons(target: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>> {
    const path = '/service/Con/~delete';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createConArgumentForCons(
    owner: JudoIdentifiable<ServiceCon>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Con/createConArgument';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateConArgumentForCons(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createProArgumentForCons(
    owner: JudoIdentifiable<ServiceCon>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Con/createProArgument';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateProArgumentForCons(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteDownForCons(owner: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>> {
    const path = '/service/Con/voteDown';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteUpForCons(owner: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>> {
    const path = '/service/Con/voteUp';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getCreatedBy(
    target: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>> {
    const path = '/service/Con/createdBy/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForCreatedBy(
    owner?: JudoIdentifiable<ServiceCon> | ServiceCon,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>> {
    const path = '/service/Con/createdBy/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getParentCon(
    target: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceConParentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceConParentStored>> {
    const path = '/service/Con/parentCon/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForParentCon(
    owner?: JudoIdentifiable<ServiceCon> | ServiceCon,
    queryCustomizer?: ServiceConParentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceConParentStored>>> {
    const path = '/service/Con/parentCon/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getParentPro(
    target: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceProParentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceProParentStored>> {
    const path = '/service/Con/parentPro/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForParentPro(
    owner?: JudoIdentifiable<ServiceCon> | ServiceCon,
    queryCustomizer?: ServiceProParentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceProParentStored>>> {
    const path = '/service/Con/parentPro/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listPros(
    target: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceProQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceProStored>>> {
    const path = '/service/Con/pros/~list';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForPros(
    owner?: JudoIdentifiable<ServiceCon> | ServiceCon,
    queryCustomizer?: ServiceProQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceProStored>>> {
    const path = '/service/Con/pros/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deletePros(target: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>> {
    const path = '/service/Pro/~delete';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createConArgumentForPros(
    owner: JudoIdentifiable<ServicePro>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Pro/createConArgument';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateConArgumentForPros(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createProArgumentForPros(
    owner: JudoIdentifiable<ServicePro>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Pro/createProArgument';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateProArgumentForPros(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteDownForPros(owner: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>> {
    const path = '/service/Pro/voteDown';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteUpForPros(owner: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>> {
    const path = '/service/Pro/voteUp';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listVotes(
    target: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSimpleVoteStored>>> {
    const path = '/service/Con/votes/~list';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForVotes(
    owner?: JudoIdentifiable<ServiceCon> | ServiceCon,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSimpleVoteStored>>> {
    const path = '/service/Con/votes/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createConArgument(
    owner: JudoIdentifiable<ServiceCon>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Con/createConArgument';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateConArgument(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createProArgument(
    owner: JudoIdentifiable<ServiceCon>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Con/createProArgument';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateProArgument(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteDown(owner: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>> {
    const path = '/service/Con/voteDown';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteUp(owner: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>> {
    const path = '/service/Con/voteUp';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }
}
