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
  ServiceServiceUserActivityCountiesMaskBuilder,
  ServiceServiceUserResidentCountyMaskBuilder,
  ServiceServiceUserActivityCitiesMaskBuilder,
  ServiceServiceUserResidentCityMaskBuilder,
  ServiceServiceUserActivityDistrictsMaskBuilder,
  ServiceServiceUserResidentDistrictMaskBuilder,
} from './ServiceServiceUserMaskBuilder';

export class ServiceIssueCategorySubcategoriesMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | ServiceIssueCategoryAttributes
      | ServiceIssueCategorySubcategoriesMaskBuilder
      | ServiceIssueCategoryOwnerMaskBuilder
    >,
  ) {
    super('subcategories', props);
  }
}
export class ServiceIssueCategoryOwnerMaskBuilder extends RelationMaskBuilder {
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
    super('owner', props);
  }
}

export class ServiceIssueCategoryMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | ServiceIssueCategoryAttributes
      | ServiceIssueCategorySubcategoriesMaskBuilder
      | ServiceIssueCategoryOwnerMaskBuilder
    >,
  ) {
    super(props);
  }
}
