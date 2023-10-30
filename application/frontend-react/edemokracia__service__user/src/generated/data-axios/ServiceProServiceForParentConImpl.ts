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
  ServiceConParent,
  ServiceConParentQueryCustomizer,
  ServiceConParentStored,
  ServicePro,
} from '../data-api';
import type { ServiceProServiceForParentCon } from '../data-service';

/**
 * Relation Service Implementation for ServicePro.parentCon
 */
export class ServiceProServiceForParentConImpl extends JudoAxiosService implements ServiceProServiceForParentCon {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getParentCon(owner: JudoIdentifiable<ServicePro>, mask?: string): Promise<ServiceConParentStored> {
    const path = '/service/Pro/parentCon/~get';
    const queryCustomizer: ServiceConParentQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
