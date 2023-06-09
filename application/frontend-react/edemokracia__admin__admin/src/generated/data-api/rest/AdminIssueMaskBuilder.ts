//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  AdminIssueTypeAttributes,
  AdminCommentAttributes,
  AdminDistrictAttributes,
  AdminIssueAttributes,
  AdminIssueDebateAttributes,
  AdminUserAttributes,
  AdminIssueCategoryAttributes,
  AdminCountyAttributes,
  AdminIssueAttachmentAttributes,
  AdminCityAttributes,
} from '../model';

import {} from './AdminIssueAttachmentMaskBuilder';
import {
  AdminIssueCategorySubcategoriesMaskBuilder,
  AdminIssueCategoryOwnerMaskBuilder,
} from './AdminIssueCategoryMaskBuilder';
import { AdminCityDistrictsMaskBuilder } from './AdminCityMaskBuilder';
import { AdminCommentCreatedByMaskBuilder } from './AdminCommentMaskBuilder';
import { AdminCountyCitiesMaskBuilder } from './AdminCountyMaskBuilder';
import {} from './AdminIssueDebateMaskBuilder';
import {} from './AdminDistrictMaskBuilder';
import {} from './AdminIssueTypeMaskBuilder';
import {
  AdminUserActivityCountiesMaskBuilder,
  AdminUserResidentCountyMaskBuilder,
  AdminUserActivityCitiesMaskBuilder,
  AdminUserResidentCityMaskBuilder,
  AdminUserActivityDistrictsMaskBuilder,
  AdminUserResidentDistrictMaskBuilder,
} from './AdminUserMaskBuilder';

export class AdminIssueAttachmentsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminIssueAttachmentAttributes>) {
    super('attachments', props);
  }
}
export class AdminIssueOwnerMaskBuilder extends RelationMaskBuilder {
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
    super('owner', props);
  }
}
export class AdminIssueCategoriesMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      AdminIssueCategoryAttributes | AdminIssueCategorySubcategoriesMaskBuilder | AdminIssueCategoryOwnerMaskBuilder
    >,
  ) {
    super('categories', props);
  }
}
export class AdminIssueDebatesMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminIssueDebateAttributes>) {
    super('debates', props);
  }
}
export class AdminIssueCommentsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminCommentAttributes | AdminCommentCreatedByMaskBuilder>) {
    super('comments', props);
  }
}
export class AdminIssueCreatedByMaskBuilder extends RelationMaskBuilder {
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
export class AdminIssueIssueTypeMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminIssueTypeAttributes>) {
    super('issueType', props);
  }
}
export class AdminIssueCountyMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminCountyAttributes | AdminCountyCitiesMaskBuilder>) {
    super('county', props);
  }
}
export class AdminIssueCityMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminCityAttributes | AdminCityDistrictsMaskBuilder>) {
    super('city', props);
  }
}
export class AdminIssueDistrictMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminDistrictAttributes>) {
    super('district', props);
  }
}

export class AdminIssueMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | AdminIssueAttributes
      | AdminIssueAttachmentsMaskBuilder
      | AdminIssueOwnerMaskBuilder
      | AdminIssueCategoriesMaskBuilder
      | AdminIssueDebatesMaskBuilder
      | AdminIssueCommentsMaskBuilder
      | AdminIssueCreatedByMaskBuilder
      | AdminIssueIssueTypeMaskBuilder
      | AdminIssueCountyMaskBuilder
      | AdminIssueCityMaskBuilder
      | AdminIssueDistrictMaskBuilder
    >,
  ) {
    super(props);
  }
}
