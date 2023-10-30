//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  ServiceServiceUserAttributes,
  ServiceProParentAttributes,
  ServiceProAttributes,
  ServiceConParentAttributes,
  ServiceCommentAttributes,
  ServiceConAttributes,
  ServiceSimpleVoteAttributes,
} from '../model';

import { ServiceCommentCreatedByMaskBuilder } from './ServiceCommentMaskBuilder';
import {
  ServiceConCreatedByMaskBuilder,
  ServiceConConsMaskBuilder,
  ServiceConProsMaskBuilder,
  ServiceConCommentsMaskBuilder,
  ServiceConParentConMaskBuilder,
  ServiceConParentProMaskBuilder,
} from './ServiceConMaskBuilder';
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

export class ServiceProCreatedByMaskBuilder extends RelationMaskBuilder {
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
export class ServiceProProsMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | ServiceProAttributes
      | ServiceProCreatedByMaskBuilder
      | ServiceProProsMaskBuilder
      | ServiceProConsMaskBuilder
      | ServiceProCommentsMaskBuilder
      | ServiceProParentProMaskBuilder
      | ServiceProParentConMaskBuilder
    >,
  ) {
    super('pros', props);
  }
}
export class ServiceProConsMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | ServiceConAttributes
      | ServiceConCreatedByMaskBuilder
      | ServiceConConsMaskBuilder
      | ServiceConProsMaskBuilder
      | ServiceConCommentsMaskBuilder
      | ServiceConParentConMaskBuilder
      | ServiceConParentProMaskBuilder
    >,
  ) {
    super('cons', props);
  }
}
export class ServiceProCommentsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCommentAttributes | ServiceCommentCreatedByMaskBuilder>) {
    super('comments', props);
  }
}
export class ServiceProParentProMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceProParentAttributes>) {
    super('parentPro', props);
  }
}
export class ServiceProParentConMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceConParentAttributes>) {
    super('parentCon', props);
  }
}

export class ServiceProMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | ServiceProAttributes
      | ServiceProCreatedByMaskBuilder
      | ServiceProProsMaskBuilder
      | ServiceProConsMaskBuilder
      | ServiceProCommentsMaskBuilder
      | ServiceProParentProMaskBuilder
      | ServiceProParentConMaskBuilder
    >,
  ) {
    super(props);
  }
}
