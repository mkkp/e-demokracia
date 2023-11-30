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
  ServiceIssueCategoryOwnerMaskBuilder,
  ServiceIssueCategorySubcategoriesMaskBuilder,
} from './ServiceIssueCategoryMaskBuilder';
import { ServiceCityDistrictsMaskBuilder } from './ServiceCityMaskBuilder';
import { ServiceCommentCreatedByMaskBuilder } from './ServiceCommentMaskBuilder';
import {
  ServiceConConsMaskBuilder,
  ServiceConCreatedByMaskBuilder,
  ServiceConParentConMaskBuilder,
  ServiceConParentProMaskBuilder,
  ServiceConProsMaskBuilder,
} from './ServiceConMaskBuilder';
import { ServiceCountyCitiesMaskBuilder } from './ServiceCountyMaskBuilder';
import {
  ServiceServiceUserActivityCitiesMaskBuilder,
  ServiceServiceUserActivityCountiesMaskBuilder,
  ServiceServiceUserActivityDistrictsMaskBuilder,
  ServiceServiceUserResidentCityMaskBuilder,
  ServiceServiceUserResidentCountyMaskBuilder,
  ServiceServiceUserResidentDistrictMaskBuilder,
} from './ServiceServiceUserMaskBuilder';
import {} from './ServiceDistrictMaskBuilder';
import {} from './ServiceIssueTypeMaskBuilder';
import {
  ServiceProConsMaskBuilder,
  ServiceProCreatedByMaskBuilder,
  ServiceProParentConMaskBuilder,
  ServiceProParentProMaskBuilder,
  ServiceProProsMaskBuilder,
} from './ServiceProMaskBuilder';

export class ServiceIssueAttachmentsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceIssueAttachmentAttributes>) {
    super('attachments', props);
  }
}
export class ServiceIssueCategoriesMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | ServiceIssueCategoryAttributes
      | ServiceIssueCategoryOwnerMaskBuilder
      | ServiceIssueCategorySubcategoriesMaskBuilder
    >,
  ) {
    super('categories', props);
  }
}
export class ServiceIssueCityMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCityAttributes | ServiceCityDistrictsMaskBuilder>) {
    super('city', props);
  }
}
export class ServiceIssueCommentsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCommentAttributes | ServiceCommentCreatedByMaskBuilder>) {
    super('comments', props);
  }
}
export class ServiceIssueConsMaskBuilder extends RelationMaskBuilder {
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
export class ServiceIssueCountyMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCountyAttributes | ServiceCountyCitiesMaskBuilder>) {
    super('county', props);
  }
}
export class ServiceIssueCreatedByMaskBuilder extends RelationMaskBuilder {
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
export class ServiceIssueDistrictMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceDistrictAttributes>) {
    super('district', props);
  }
}
export class ServiceIssueIssueTypeMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceIssueTypeAttributes>) {
    super('issueType', props);
  }
}
export class ServiceIssueOwnerMaskBuilder extends RelationMaskBuilder {
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
    super('owner', props);
  }
}
export class ServiceIssueProsMaskBuilder extends RelationMaskBuilder {
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

export class ServiceIssueMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | ServiceIssueAttributes
      | ServiceIssueAttachmentsMaskBuilder
      | ServiceIssueCategoriesMaskBuilder
      | ServiceIssueCityMaskBuilder
      | ServiceIssueCommentsMaskBuilder
      | ServiceIssueConsMaskBuilder
      | ServiceIssueCountyMaskBuilder
      | ServiceIssueCreatedByMaskBuilder
      | ServiceIssueDistrictMaskBuilder
      | ServiceIssueIssueTypeMaskBuilder
      | ServiceIssueOwnerMaskBuilder
      | ServiceIssueProsMaskBuilder
    >,
  ) {
    super(props);
  }
}
