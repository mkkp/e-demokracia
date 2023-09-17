//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type { AdminDebateParentStored, AdminDebateParent, AdminDebateParentQueryCustomizer } from '../data-api';
import type { AdminDebateParentServiceForClass } from '../data-service';

/**
 * Class Service Implementation for AdminDebateParent
 */
export class AdminDebateParentServiceForClassImpl extends JudoAxiosService implements AdminDebateParentServiceForClass {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<AdminDebateParent>,
    queryCustomizer?: AdminDebateParentQueryCustomizer,
  ): Promise<AdminDebateParentStored> {
    const path = '/admin/DebateParent/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }
}
