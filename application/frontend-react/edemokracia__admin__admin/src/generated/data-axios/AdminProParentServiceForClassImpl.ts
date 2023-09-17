//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type { AdminProParent, AdminProParentQueryCustomizer, AdminProParentStored } from '../data-api';
import type { AdminProParentServiceForClass } from '../data-service';

/**
 * Class Service Implementation for AdminProParent
 */
export class AdminProParentServiceForClassImpl extends JudoAxiosService implements AdminProParentServiceForClass {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<AdminProParent>,
    queryCustomizer?: AdminProParentQueryCustomizer,
  ): Promise<AdminProParentStored> {
    const path = '/admin/ProParent/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }
}
