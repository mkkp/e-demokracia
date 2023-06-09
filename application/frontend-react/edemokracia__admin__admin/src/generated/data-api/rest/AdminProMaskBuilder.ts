//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  AdminCommentAttributes,
  AdminProAttributes,
  AdminUserAttributes,
  AdminConAttributes,
  AdminSimpleVoteAttributes,
} from '../model';

import { AdminCommentCreatedByMaskBuilder } from './AdminCommentMaskBuilder';
import {
  AdminConCreatedByMaskBuilder,
  AdminConConsMaskBuilder,
  AdminConProsMaskBuilder,
  AdminConCommentsMaskBuilder,
} from './AdminConMaskBuilder';
import {
  AdminUserActivityCountiesMaskBuilder,
  AdminUserResidentCountyMaskBuilder,
  AdminUserActivityCitiesMaskBuilder,
  AdminUserResidentCityMaskBuilder,
  AdminUserActivityDistrictsMaskBuilder,
  AdminUserResidentDistrictMaskBuilder,
} from './AdminUserMaskBuilder';

export class AdminProCreatedByMaskBuilder extends RelationMaskBuilder {
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
    super('createdBy', props);
  }
}
export class AdminProProsMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | AdminProAttributes
      | AdminProCreatedByMaskBuilder
      | AdminProProsMaskBuilder
      | AdminProConsMaskBuilder
      | AdminProCommentsMaskBuilder
    >,
  ) {
    super('pros', props);
  }
}
export class AdminProConsMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | AdminConAttributes
      | AdminConCreatedByMaskBuilder
      | AdminConConsMaskBuilder
      | AdminConProsMaskBuilder
      | AdminConCommentsMaskBuilder
    >,
  ) {
    super('cons', props);
  }
}
export class AdminProCommentsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminCommentAttributes | AdminCommentCreatedByMaskBuilder>) {
    super('comments', props);
  }
}

export class AdminProMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | AdminProAttributes
      | AdminProCreatedByMaskBuilder
      | AdminProProsMaskBuilder
      | AdminProConsMaskBuilder
      | AdminProCommentsMaskBuilder
    >,
  ) {
    super(props);
  }
}
