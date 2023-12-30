//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import {
  ServiceConAttributes,
  ServiceProAttributes,
  ServiceServiceUserAttributes,
  ServiceSimpleVoteAttributes,
} from '../model';
import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {} from './ServiceConParentMaskBuilder';
import {
  ServiceProConsMaskBuilder,
  ServiceProCreatedByMaskBuilder,
  ServiceProParentConMaskBuilder,
  ServiceProParentProMaskBuilder,
  ServiceProProsMaskBuilder,
} from './ServiceProMaskBuilder';
import {} from './ServiceProParentMaskBuilder';
import {
  ServiceServiceUserActivityCitiesMaskBuilder,
  ServiceServiceUserActivityCountiesMaskBuilder,
  ServiceServiceUserActivityDistrictsMaskBuilder,
  ServiceServiceUserResidentCityMaskBuilder,
  ServiceServiceUserResidentCountyMaskBuilder,
  ServiceServiceUserResidentDistrictMaskBuilder,
} from './ServiceServiceUserMaskBuilder';

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
