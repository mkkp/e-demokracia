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
  ServiceServiceUserActivityCitiesMaskBuilder,
  ServiceServiceUserActivityCountiesMaskBuilder,
  ServiceServiceUserActivityDistrictsMaskBuilder,
  ServiceServiceUserResidentCityMaskBuilder,
  ServiceServiceUserResidentCountyMaskBuilder,
  ServiceServiceUserResidentDistrictMaskBuilder,
} from './ServiceServiceUserMaskBuilder';
import {} from './ServiceConParentMaskBuilder';
import {} from './ServiceProParentMaskBuilder';
import {
  ServiceProConsMaskBuilder,
  ServiceProCreatedByMaskBuilder,
  ServiceProParentConMaskBuilder,
  ServiceProParentProMaskBuilder,
  ServiceProProsMaskBuilder,
} from './ServiceProMaskBuilder';

export class ServiceConConsMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | ServiceConAttributes
      | ServiceConConsMaskBuilder
      | ServiceConCreatedByMaskBuilder
      | ServiceConParentConMaskBuilder
      | ServiceConParentProMaskBuilder
      | ServiceConProsMaskBuilder
    >,
  ) {
    super('cons', props);
  }
}
export class ServiceConCreatedByMaskBuilder extends RelationMaskBuilder {
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
    super('createdBy', props);
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
export class ServiceConProsMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | ServiceProAttributes
      | ServiceProConsMaskBuilder
      | ServiceProCreatedByMaskBuilder
      | ServiceProParentConMaskBuilder
      | ServiceProParentProMaskBuilder
      | ServiceProProsMaskBuilder
    >,
  ) {
    super('pros', props);
  }
}

export class ServiceConMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | ServiceConAttributes
      | ServiceConConsMaskBuilder
      | ServiceConCreatedByMaskBuilder
      | ServiceConParentConMaskBuilder
      | ServiceConParentProMaskBuilder
      | ServiceConProsMaskBuilder
    >,
  ) {
    super(props);
  }
}
