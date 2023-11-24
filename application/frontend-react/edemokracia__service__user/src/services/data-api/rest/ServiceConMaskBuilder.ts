//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  ServiceConAttributes,
  ServiceProAttributes,
  ServiceServiceUserAttributes,
  ServiceSimpleVoteAttributes,
} from '../model';
import {
  ServiceServiceUserActivityCountiesMaskBuilder,
  ServiceServiceUserResidentCountyMaskBuilder,
  ServiceServiceUserActivityCitiesMaskBuilder,
  ServiceServiceUserResidentCityMaskBuilder,
  ServiceServiceUserActivityDistrictsMaskBuilder,
  ServiceServiceUserResidentDistrictMaskBuilder,
} from './ServiceServiceUserMaskBuilder';
import {} from './ServiceConParentMaskBuilder';
import {} from './ServiceProParentMaskBuilder';
import {
  ServiceProCreatedByMaskBuilder,
  ServiceProProsMaskBuilder,
  ServiceProConsMaskBuilder,
  ServiceProParentProMaskBuilder,
  ServiceProParentConMaskBuilder,
} from './ServiceProMaskBuilder';

export class ServiceConCreatedByMaskBuilder extends RelationMaskBuilder {
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
export class ServiceConConsMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | ServiceConAttributes
      | ServiceConCreatedByMaskBuilder
      | ServiceConConsMaskBuilder
      | ServiceConProsMaskBuilder
      | ServiceConParentConMaskBuilder
      | ServiceConParentProMaskBuilder
    >,
  ) {
    super('cons', props);
  }
}
export class ServiceConProsMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | ServiceProAttributes
      | ServiceProCreatedByMaskBuilder
      | ServiceProProsMaskBuilder
      | ServiceProConsMaskBuilder
      | ServiceProParentProMaskBuilder
      | ServiceProParentConMaskBuilder
    >,
  ) {
    super('pros', props);
  }
}
export class ServiceConParentConMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<any>) {
    super('parentCon', props);
  }
}
export class ServiceConParentProMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<any>) {
    super('parentPro', props);
  }
}

export class ServiceConMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | ServiceConAttributes
      | ServiceConCreatedByMaskBuilder
      | ServiceConConsMaskBuilder
      | ServiceConProsMaskBuilder
      | ServiceConParentConMaskBuilder
      | ServiceConParentProMaskBuilder
    >,
  ) {
    super(props);
  }
}
