//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  AdminDistrictAttributes,
  AdminUserAttributes,
  AdminSimpleVoteAttributes,
  AdminCountyAttributes,
  AdminCityAttributes,
} from '../model';

import { AdminCityDistrictsMaskBuilder } from './AdminCityMaskBuilder';
import { AdminCountyCitiesMaskBuilder } from './AdminCountyMaskBuilder';
import {} from './AdminDistrictMaskBuilder';

export class AdminUserActivityCountiesMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminCountyAttributes | AdminCountyCitiesMaskBuilder>) {
    super('activityCounties', props);
  }
}
export class AdminUserResidentCountyMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminCountyAttributes | AdminCountyCitiesMaskBuilder>) {
    super('residentCounty', props);
  }
}
export class AdminUserActivityCitiesMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminCityAttributes | AdminCityDistrictsMaskBuilder>) {
    super('activityCities', props);
  }
}
export class AdminUserResidentCityMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminCityAttributes | AdminCityDistrictsMaskBuilder>) {
    super('residentCity', props);
  }
}
export class AdminUserActivityDistrictsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminDistrictAttributes>) {
    super('activityDistricts', props);
  }
}
export class AdminUserResidentDistrictMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminDistrictAttributes>) {
    super('residentDistrict', props);
  }
}

export class AdminUserMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | AdminUserAttributes
      | AdminUserActivityCountiesMaskBuilder
      | AdminUserResidentCountyMaskBuilder
      | AdminUserActivityCitiesMaskBuilder
      | AdminUserResidentCityMaskBuilder
      | AdminUserActivityDistrictsMaskBuilder
      | AdminUserResidentDistrictMaskBuilder
    >,
  ) {
    super(props);
  }
}
