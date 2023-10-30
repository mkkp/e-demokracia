//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  ServiceCreateIssueInputAttributes,
  ServiceCityAttributes,
  ServiceDistrictAttributes,
  ServiceCountyAttributes,
  ServiceIssueTypeAttributes,
} from '../model';

import { ServiceCityDistrictsMaskBuilder } from './ServiceCityMaskBuilder';
import { ServiceCountyCitiesMaskBuilder } from './ServiceCountyMaskBuilder';
import {} from './ServiceDistrictMaskBuilder';
import {} from './ServiceIssueTypeMaskBuilder';

export class ServiceCreateIssueInputIssueTypeMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceIssueTypeAttributes>) {
    super('issueType', props);
  }
}
export class ServiceCreateIssueInputCountyMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCountyAttributes | ServiceCountyCitiesMaskBuilder>) {
    super('county', props);
  }
}
export class ServiceCreateIssueInputCityMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCityAttributes | ServiceCityDistrictsMaskBuilder>) {
    super('city', props);
  }
}
export class ServiceCreateIssueInputDistrictMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceDistrictAttributes>) {
    super('district', props);
  }
}

export class ServiceCreateIssueInputMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | ServiceCreateIssueInputAttributes
      | ServiceCreateIssueInputIssueTypeMaskBuilder
      | ServiceCreateIssueInputCountyMaskBuilder
      | ServiceCreateIssueInputCityMaskBuilder
      | ServiceCreateIssueInputDistrictMaskBuilder
    >,
  ) {
    super(props);
  }
}
