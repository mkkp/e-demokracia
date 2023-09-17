//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type { AdminConParentQueryCustomizer, AdminConParent, AdminConParentStored } from '../data-api';
import type { AdminConParentServiceForClass } from '../data-service';

/**
 * Class Service Implementation for AdminConParent
 */
export class AdminConParentServiceForClassImpl extends JudoAxiosService implements AdminConParentServiceForClass {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<AdminConParent>,
    queryCustomizer?: AdminConParentQueryCustomizer,
  ): Promise<AdminConParentStored> {
    const path = '/admin/ConParent/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }
}
