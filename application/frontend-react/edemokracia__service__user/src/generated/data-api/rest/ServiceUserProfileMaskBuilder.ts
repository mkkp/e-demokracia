//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  ServiceUserProfileAttributes,
  ServiceCityAttributes,
  ServiceDistrictAttributes,
  ServiceCountyAttributes,
} from '../model';

import { ServiceCityDistrictsMaskBuilder } from './ServiceCityMaskBuilder';
import { ServiceCountyCitiesMaskBuilder } from './ServiceCountyMaskBuilder';
import {} from './ServiceDistrictMaskBuilder';

export class ServiceUserProfileActivityCountiesMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCountyAttributes | ServiceCountyCitiesMaskBuilder>) {
    super('activityCounties', props);
  }
}
export class ServiceUserProfileResidentCountyMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCountyAttributes | ServiceCountyCitiesMaskBuilder>) {
    super('residentCounty', props);
  }
}
export class ServiceUserProfileActivityCitiesMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCityAttributes | ServiceCityDistrictsMaskBuilder>) {
    super('activityCities', props);
  }
}
export class ServiceUserProfileResidentCityMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCityAttributes | ServiceCityDistrictsMaskBuilder>) {
    super('residentCity', props);
  }
}
export class ServiceUserProfileActivityDistrictsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceDistrictAttributes>) {
    super('activityDistricts', props);
  }
}
export class ServiceUserProfileResidentDistrictMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceDistrictAttributes>) {
    super('residentDistrict', props);
  }
}

export class ServiceUserProfileMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | ServiceUserProfileAttributes
      | ServiceUserProfileActivityCountiesMaskBuilder
      | ServiceUserProfileResidentCountyMaskBuilder
      | ServiceUserProfileActivityCitiesMaskBuilder
      | ServiceUserProfileResidentCityMaskBuilder
      | ServiceUserProfileActivityDistrictsMaskBuilder
      | ServiceUserProfileResidentDistrictMaskBuilder
    >,
  ) {
    super(props);
  }
}
