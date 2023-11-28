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
  ServiceConConsMaskBuilder,
  ServiceConCreatedByMaskBuilder,
  ServiceConParentConMaskBuilder,
  ServiceConParentProMaskBuilder,
  ServiceConProsMaskBuilder,
} from './ServiceConMaskBuilder';
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

export class ServiceProConsMaskBuilder extends RelationMaskBuilder {
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
export class ServiceProCreatedByMaskBuilder extends RelationMaskBuilder {
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
export class ServiceProParentConMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<any>) {
    super('parentCon', props);
  }
}
export class ServiceProParentProMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<any>) {
    super('parentPro', props);
  }
}
export class ServiceProProsMaskBuilder extends RelationMaskBuilder {
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

export class ServiceProMaskBuilder extends MaskBuilder {
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
    super(props);
  }
}
