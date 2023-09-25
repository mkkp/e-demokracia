//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  AdminUserProfileAttributes,
  AdminDistrictAttributes,
  AdminCountyAttributes,
  AdminCityAttributes,
} from '../model';

import { AdminCityDistrictsMaskBuilder } from './AdminCityMaskBuilder';
import { AdminCountyCitiesMaskBuilder } from './AdminCountyMaskBuilder';
import {} from './AdminDistrictMaskBuilder';

export class AdminUserProfileActivityCountiesMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminCountyAttributes | AdminCountyCitiesMaskBuilder>) {
    super('activityCounties', props);
  }
}
export class AdminUserProfileResidentCountyMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminCountyAttributes | AdminCountyCitiesMaskBuilder>) {
    super('residentCounty', props);
  }
}
export class AdminUserProfileActivityCitiesMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminCityAttributes | AdminCityDistrictsMaskBuilder>) {
    super('activityCities', props);
  }
}
export class AdminUserProfileResidentCityMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminCityAttributes | AdminCityDistrictsMaskBuilder>) {
    super('residentCity', props);
  }
}
export class AdminUserProfileActivityDistrictsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminDistrictAttributes>) {
    super('activityDistricts', props);
  }
}
export class AdminUserProfileResidentDistrictMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminDistrictAttributes>) {
    super('residentDistrict', props);
  }
}

export class AdminUserProfileMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | AdminUserProfileAttributes
      | AdminUserProfileActivityCountiesMaskBuilder
      | AdminUserProfileResidentCountyMaskBuilder
      | AdminUserProfileActivityCitiesMaskBuilder
      | AdminUserProfileResidentCityMaskBuilder
      | AdminUserProfileActivityDistrictsMaskBuilder
      | AdminUserProfileResidentDistrictMaskBuilder
    >,
  ) {
    super(props);
  }
}
