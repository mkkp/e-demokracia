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
  AdminUserProfile,
  AdminCityQueryCustomizer,
  AdminCountyQueryCustomizer,
  AdminCountyStored,
  AdminCounty,
  AdminCityStored,
  AdminCity,
} from '../data-api';
import type { AdminUserProfileServiceForResidentCounty } from '../data-service';

/**
 * Relation Service Implementation for AdminUserProfile.residentCounty
 */
export class AdminUserProfileServiceForResidentCountyImpl
  extends JudoAxiosService
  implements AdminUserProfileServiceForResidentCounty
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getResidentCounty(owner: JudoIdentifiable<AdminUserProfile>, mask?: string): Promise<AdminCountyStored> {
    const path = '/admin/UserProfile/residentCounty/~get';
    const queryCustomizer: AdminCountyQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
