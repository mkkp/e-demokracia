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
  ServiceCity,
  ServiceCreateIssueInput,
  ServiceCountyStored,
  ServiceCountyQueryCustomizer,
  ServiceCounty,
  ServiceCityStored,
  ServiceCityQueryCustomizer,
} from '../data-api';
import type { ServiceCreateIssueInputServiceForCounty } from '../data-service';

/**
 * Relation Service Implementation for ServiceCreateIssueInput.county
 */
export class ServiceCreateIssueInputServiceForCountyImpl
  extends JudoAxiosService
  implements ServiceCreateIssueInputServiceForCounty {}
