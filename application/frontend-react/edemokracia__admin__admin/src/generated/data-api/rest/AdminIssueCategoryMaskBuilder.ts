//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import { AdminUserAttributes, AdminIssueCategoryAttributes } from '../model';

import {
  AdminUserActivityCountiesMaskBuilder,
  AdminUserResidentCountyMaskBuilder,
  AdminUserActivityCitiesMaskBuilder,
  AdminUserResidentCityMaskBuilder,
  AdminUserActivityDistrictsMaskBuilder,
  AdminUserResidentDistrictMaskBuilder,
} from './AdminUserMaskBuilder';

export class AdminIssueCategorySubcategoriesMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      AdminIssueCategoryAttributes | AdminIssueCategorySubcategoriesMaskBuilder | AdminIssueCategoryOwnerMaskBuilder
    >,
  ) {
    super('subcategories', props);
  }
}
export class AdminIssueCategoryOwnerMaskBuilder extends RelationMaskBuilder {
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
    super('owner', props);
  }
}

export class AdminIssueCategoryMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      AdminIssueCategoryAttributes | AdminIssueCategorySubcategoriesMaskBuilder | AdminIssueCategoryOwnerMaskBuilder
    >,
  ) {
    super(props);
  }
}
