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
  ServiceProParentQueryCustomizer,
  ServiceProParentStored,
  ServiceProParent,
  ServicePro,
} from '../data-api';
import type { ServiceProServiceForParentPro } from '../data-service';

/**
 * Relation Service Implementation for ServicePro.parentPro
 */
export class ServiceProServiceForParentProImpl extends JudoAxiosService implements ServiceProServiceForParentPro {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getParentPro(owner: JudoIdentifiable<ServicePro>, mask?: string): Promise<ServiceProParentStored> {
    const path = '/service/Pro/parentPro/~get';
    const queryCustomizer: ServiceProParentQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
