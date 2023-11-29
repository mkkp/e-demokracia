//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  ServiceCityAttributes,
  ServiceCountyAttributes,
  ServiceDistrictAttributes,
  ServiceServiceUserAttributes,
  ServiceSimpleVoteAttributes,
} from '../model';
import { ServiceCityDistrictsMaskBuilder } from './ServiceCityMaskBuilder';
import { ServiceCountyCitiesMaskBuilder } from './ServiceCountyMaskBuilder';
import {} from './ServiceDistrictMaskBuilder';

export class ServiceServiceUserActivityCountiesMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCountyAttributes | ServiceCountyCitiesMaskBuilder>) {
    super('activityCounties', props);
  }
}
export class ServiceServiceUserResidentCountyMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCountyAttributes | ServiceCountyCitiesMaskBuilder>) {
    super('residentCounty', props);
  }
}
export class ServiceServiceUserActivityCitiesMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCityAttributes | ServiceCityDistrictsMaskBuilder>) {
    super('activityCities', props);
  }
}
export class ServiceServiceUserResidentCityMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCityAttributes | ServiceCityDistrictsMaskBuilder>) {
    super('residentCity', props);
  }
}
export class ServiceServiceUserActivityDistrictsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceDistrictAttributes>) {
    super('activityDistricts', props);
  }
}
export class ServiceServiceUserResidentDistrictMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceDistrictAttributes>) {
    super('residentDistrict', props);
  }
}

export class ServiceServiceUserMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | ServiceServiceUserAttributes
      | ServiceServiceUserActivityCountiesMaskBuilder
      | ServiceServiceUserResidentCountyMaskBuilder
      | ServiceServiceUserActivityCitiesMaskBuilder
      | ServiceServiceUserResidentCityMaskBuilder
      | ServiceServiceUserActivityDistrictsMaskBuilder
      | ServiceServiceUserResidentDistrictMaskBuilder
    >,
  ) {
    super(props);
  }
}
