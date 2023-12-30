//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { ServiceServiceUserAttributes, ServiceYesNoAbstainVoteEntryAttributes } from '../model';
import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  ServiceServiceUserActivityCitiesMaskBuilder,
  ServiceServiceUserActivityCountiesMaskBuilder,
  ServiceServiceUserActivityDistrictsMaskBuilder,
  ServiceServiceUserResidentCityMaskBuilder,
  ServiceServiceUserResidentCountyMaskBuilder,
  ServiceServiceUserResidentDistrictMaskBuilder,
} from './ServiceServiceUserMaskBuilder';

export class ServiceYesNoAbstainVoteEntryOwnerMaskBuilder extends RelationMaskBuilder {
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

export class ServiceYesNoAbstainVoteEntryMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<ServiceYesNoAbstainVoteEntryAttributes | ServiceYesNoAbstainVoteEntryOwnerMaskBuilder>,
  ) {
    super(props);
  }
}
