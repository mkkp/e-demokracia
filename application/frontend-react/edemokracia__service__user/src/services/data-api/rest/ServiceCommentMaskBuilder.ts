//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import { ServiceCommentAttributes, ServiceServiceUserAttributes, ServiceSimpleVoteAttributes } from '../model';
import {
  ServiceServiceUserActivityCountiesMaskBuilder,
  ServiceServiceUserResidentCountyMaskBuilder,
  ServiceServiceUserActivityCitiesMaskBuilder,
  ServiceServiceUserResidentCityMaskBuilder,
  ServiceServiceUserActivityDistrictsMaskBuilder,
  ServiceServiceUserResidentDistrictMaskBuilder,
} from './ServiceServiceUserMaskBuilder';

export class ServiceCommentCreatedByMaskBuilder extends RelationMaskBuilder {
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
    super('createdBy', props);
  }
}

export class ServiceCommentMaskBuilder extends MaskBuilder {
  constructor(protected props: Array<ServiceCommentAttributes | ServiceCommentCreatedByMaskBuilder>) {
    super(props);
  }
}
