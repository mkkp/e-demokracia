//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  ServiceCityAttributes,
  ServiceCommentAttributes,
  ServiceConAttributes,
  ServiceCountyAttributes,
  ServiceDistrictAttributes,
  ServiceIssueAttachmentAttributes,
  ServiceIssueAttributes,
  ServiceIssueCategoryAttributes,
  ServiceIssueTypeAttributes,
  ServiceProAttributes,
  ServiceServiceUserAttributes,
} from '../model';
import {} from './ServiceIssueAttachmentMaskBuilder';
import {
  ServiceIssueCategorySubcategoriesMaskBuilder,
  ServiceIssueCategoryOwnerMaskBuilder,
} from './ServiceIssueCategoryMaskBuilder';
import { ServiceCityDistrictsMaskBuilder } from './ServiceCityMaskBuilder';
import { ServiceCommentCreatedByMaskBuilder } from './ServiceCommentMaskBuilder';
import {
  ServiceConCreatedByMaskBuilder,
  ServiceConConsMaskBuilder,
  ServiceConProsMaskBuilder,
  ServiceConParentConMaskBuilder,
  ServiceConParentProMaskBuilder,
} from './ServiceConMaskBuilder';
import { ServiceCountyCitiesMaskBuilder } from './ServiceCountyMaskBuilder';
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
import {
  ServiceProCreatedByMaskBuilder,
  ServiceProProsMaskBuilder,
  ServiceProConsMaskBuilder,
  ServiceProParentProMaskBuilder,
  ServiceProParentConMaskBuilder,
} from './ServiceProMaskBuilder';

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
export class ServiceIssueConsMaskBuilder extends RelationMaskBuilder {
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
export class ServiceIssueProsMaskBuilder extends RelationMaskBuilder {
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

export class ServiceIssueMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | ServiceIssueAttributes
      | ServiceIssueAttachmentsMaskBuilder
      | ServiceIssueOwnerMaskBuilder
      | ServiceIssueCategoriesMaskBuilder
      | ServiceIssueCommentsMaskBuilder
      | ServiceIssueCreatedByMaskBuilder
      | ServiceIssueIssueTypeMaskBuilder
      | ServiceIssueCountyMaskBuilder
      | ServiceIssueCityMaskBuilder
      | ServiceIssueDistrictMaskBuilder
      | ServiceIssueConsMaskBuilder
      | ServiceIssueProsMaskBuilder
    >,
  ) {
    super(props);
  }
}
