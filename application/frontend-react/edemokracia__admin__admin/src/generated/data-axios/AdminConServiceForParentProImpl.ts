//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type { AdminProParentQueryCustomizer, AdminProParent, AdminCon, AdminProParentStored } from '../data-api';
import type { AdminConServiceForParentPro } from '../data-service';

/**
 * Relation Service Implementation for AdminCon.parentPro
 */
export class AdminConServiceForParentProImpl extends JudoAxiosService implements AdminConServiceForParentPro {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getParentPro(owner: JudoIdentifiable<AdminCon>, mask?: string): Promise<AdminProParentStored> {
    const path = '/admin/Con/parentPro/~get';
    const queryCustomizer: AdminProParentQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
