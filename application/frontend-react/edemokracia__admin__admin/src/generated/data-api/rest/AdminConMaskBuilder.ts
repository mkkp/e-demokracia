//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  AdminConParentAttributes,
  AdminCommentAttributes,
  AdminDebateParentAttributes,
  AdminProParentAttributes,
  AdminProAttributes,
  AdminUserAttributes,
  AdminConAttributes,
  AdminSimpleVoteAttributes,
} from '../model';

import { AdminCommentCreatedByMaskBuilder } from './AdminCommentMaskBuilder';
import {
  AdminUserActivityCountiesMaskBuilder,
  AdminUserResidentCountyMaskBuilder,
  AdminUserActivityCitiesMaskBuilder,
  AdminUserResidentCityMaskBuilder,
  AdminUserActivityDistrictsMaskBuilder,
  AdminUserResidentDistrictMaskBuilder,
} from './AdminUserMaskBuilder';
import {} from './AdminConParentMaskBuilder';
import {} from './AdminDebateParentMaskBuilder';
import {} from './AdminProParentMaskBuilder';
import {
  AdminProCreatedByMaskBuilder,
  AdminProProsMaskBuilder,
  AdminProConsMaskBuilder,
  AdminProCommentsMaskBuilder,
  AdminProParentDebateMaskBuilder,
  AdminProParentProMaskBuilder,
  AdminProParentConMaskBuilder,
} from './AdminProMaskBuilder';

export class AdminConCreatedByMaskBuilder extends RelationMaskBuilder {
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
export class AdminConConsMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | AdminConAttributes
      | AdminConCreatedByMaskBuilder
      | AdminConConsMaskBuilder
      | AdminConProsMaskBuilder
      | AdminConCommentsMaskBuilder
      | AdminConParentDebateMaskBuilder
      | AdminConParentConMaskBuilder
      | AdminConParentProMaskBuilder
    >,
  ) {
    super('cons', props);
  }
}
export class AdminConProsMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | AdminProAttributes
      | AdminProCreatedByMaskBuilder
      | AdminProProsMaskBuilder
      | AdminProConsMaskBuilder
      | AdminProCommentsMaskBuilder
      | AdminProParentDebateMaskBuilder
      | AdminProParentProMaskBuilder
      | AdminProParentConMaskBuilder
    >,
  ) {
    super('pros', props);
  }
}
export class AdminConCommentsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminCommentAttributes | AdminCommentCreatedByMaskBuilder>) {
    super('comments', props);
  }
}
export class AdminConParentDebateMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminDebateParentAttributes>) {
    super('parentDebate', props);
  }
}
export class AdminConParentConMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminConParentAttributes>) {
    super('parentCon', props);
  }
}
export class AdminConParentProMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminProParentAttributes>) {
    super('parentPro', props);
  }
}

export class AdminConMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | AdminConAttributes
      | AdminConCreatedByMaskBuilder
      | AdminConConsMaskBuilder
      | AdminConProsMaskBuilder
      | AdminConCommentsMaskBuilder
      | AdminConParentDebateMaskBuilder
      | AdminConParentConMaskBuilder
      | AdminConParentProMaskBuilder
    >,
  ) {
    super(props);
  }
}
