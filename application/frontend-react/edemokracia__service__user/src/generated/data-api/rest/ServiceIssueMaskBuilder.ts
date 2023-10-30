//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  ServiceIssueAttributes,
  ServiceCityAttributes,
  ServiceServiceUserAttributes,
  ServiceDistrictAttributes,
  ServiceCountyAttributes,
  ServiceIssueAttachmentAttributes,
  ServiceIssueCategoryAttributes,
  ServiceCommentAttributes,
  ServiceIssueDebateAttributes,
  ServiceIssueTypeAttributes,
} from '../model';

import {} from './ServiceIssueAttachmentMaskBuilder';
import {
  ServiceIssueCategorySubcategoriesMaskBuilder,
  ServiceIssueCategoryOwnerMaskBuilder,
} from './ServiceIssueCategoryMaskBuilder';
import { ServiceCityDistrictsMaskBuilder } from './ServiceCityMaskBuilder';
import { ServiceCommentCreatedByMaskBuilder } from './ServiceCommentMaskBuilder';
import { ServiceCountyCitiesMaskBuilder } from './ServiceCountyMaskBuilder';
import {} from './ServiceIssueDebateMaskBuilder';
import {} from './ServiceDistrictMaskBuilder';
import {} from './ServiceIssueTypeMaskBuilder';
import {
  ServiceServiceUserActivityCountiesMaskBuilder,
  ServiceServiceUserResidentCountyMaskBuilder,
  ServiceServiceUserActivityCitiesMaskBuilder,
  ServiceServiceUserResidentCityMaskBuilder,
  ServiceServiceUserActivityDistrictsMaskBuilder,
  ServiceServiceUserResidentDistrictMaskBuilder,
} from './ServiceServiceUserMaskBuilder';

export class ServiceIssueAttachmentsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceIssueAttachmentAttributes>) {
    super('attachments', props);
  }
}
export class ServiceIssueOwnerMaskBuilder extends RelationMaskBuilder {
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
    super('owner', props);
  }
}
export class ServiceIssueCategoriesMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | ServiceIssueCategoryAttributes
      | ServiceIssueCategorySubcategoriesMaskBuilder
      | ServiceIssueCategoryOwnerMaskBuilder
    >,
  ) {
    super('categories', props);
  }
}
export class ServiceIssueDebatesMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceIssueDebateAttributes>) {
    super('debates', props);
  }
}
export class ServiceIssueCommentsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCommentAttributes | ServiceCommentCreatedByMaskBuilder>) {
    super('comments', props);
  }
}
export class ServiceIssueCreatedByMaskBuilder extends RelationMaskBuilder {
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
export class ServiceIssueIssueTypeMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceIssueTypeAttributes>) {
    super('issueType', props);
  }
}
export class ServiceIssueCountyMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCountyAttributes | ServiceCountyCitiesMaskBuilder>) {
    super('county', props);
  }
}
export class ServiceIssueCityMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCityAttributes | ServiceCityDistrictsMaskBuilder>) {
    super('city', props);
  }
}
export class ServiceIssueDistrictMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceDistrictAttributes>) {
    super('district', props);
  }
}

export class ServiceIssueMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | ServiceIssueAttributes
      | ServiceIssueAttachmentsMaskBuilder
      | ServiceIssueOwnerMaskBuilder
      | ServiceIssueCategoriesMaskBuilder
      | ServiceIssueDebatesMaskBuilder
      | ServiceIssueCommentsMaskBuilder
      | ServiceIssueCreatedByMaskBuilder
      | ServiceIssueIssueTypeMaskBuilder
      | ServiceIssueCountyMaskBuilder
      | ServiceIssueCityMaskBuilder
      | ServiceIssueDistrictMaskBuilder
    >,
  ) {
    super(props);
  }
}
