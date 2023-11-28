//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import { ServiceIssueCategoryAttributes, ServiceServiceUserAttributes } from '../model';
import {
  ServiceServiceUserActivityCitiesMaskBuilder,
  ServiceServiceUserActivityCountiesMaskBuilder,
  ServiceServiceUserActivityDistrictsMaskBuilder,
  ServiceServiceUserResidentCityMaskBuilder,
  ServiceServiceUserResidentCountyMaskBuilder,
  ServiceServiceUserResidentDistrictMaskBuilder,
} from './ServiceServiceUserMaskBuilder';

export class ServiceIssueCategoryOwnerMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | ServiceServiceUserAttributes
      | ServiceServiceUserActivityCitiesMaskBuilder
      | ServiceServiceUserActivityCountiesMaskBuilder
      | ServiceServiceUserActivityDistrictsMaskBuilder
      | ServiceServiceUserResidentCityMaskBuilder
      | ServiceServiceUserResidentCountyMaskBuilder
      | ServiceServiceUserResidentDistrictMaskBuilder
    >,
  ) {
    super('owner', props);
  }
}
export class ServiceIssueCategorySubcategoriesMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | ServiceIssueCategoryAttributes
      | ServiceIssueCategoryOwnerMaskBuilder
      | ServiceIssueCategorySubcategoriesMaskBuilder
    >,
  ) {
    super('subcategories', props);
  }
}

export class ServiceIssueCategoryMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | ServiceIssueCategoryAttributes
      | ServiceIssueCategoryOwnerMaskBuilder
      | ServiceIssueCategorySubcategoriesMaskBuilder
    >,
  ) {
    super(props);
  }
}
