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
  AdminDebateParentStored,
  AdminPro,
  AdminDebateParentQueryCustomizer,
  AdminDebateParent,
} from '../data-api';
import type { AdminProServiceForParentDebate } from '../data-service';

/**
 * Relation Service Implementation for AdminPro.parentDebate
 */
export class AdminProServiceForParentDebateImpl extends JudoAxiosService implements AdminProServiceForParentDebate {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getParentDebate(owner: JudoIdentifiable<AdminPro>, mask?: string): Promise<AdminDebateParentStored> {
    const path = '/admin/Pro/parentDebate/~get';
    const queryCustomizer: AdminDebateParentQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
