//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type { AdminCon, AdminConParentQueryCustomizer, AdminConParent, AdminConParentStored } from '../data-api';
import type { AdminConServiceForParentCon } from '../data-service';

/**
 * Relation Service Implementation for AdminCon.parentCon
 */
export class AdminConServiceForParentConImpl extends JudoAxiosService implements AdminConServiceForParentCon {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getParentCon(owner: JudoIdentifiable<AdminCon>, mask?: string): Promise<AdminConParentStored> {
    const path = '/admin/Con/parentCon/~get';
    const queryCustomizer: AdminConParentQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
