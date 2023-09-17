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
  AdminCon,
  AdminDebateParentStored,
  AdminDebateParentQueryCustomizer,
  AdminDebateParent,
} from '../data-api';
import type { AdminConServiceForParentDebate } from '../data-service';

/**
 * Relation Service Implementation for AdminCon.parentDebate
 */
export class AdminConServiceForParentDebateImpl extends JudoAxiosService implements AdminConServiceForParentDebate {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getParentDebate(owner: JudoIdentifiable<AdminCon>, mask?: string): Promise<AdminDebateParentStored> {
    const path = '/admin/Con/parentDebate/~get';
    const queryCustomizer: AdminDebateParentQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
