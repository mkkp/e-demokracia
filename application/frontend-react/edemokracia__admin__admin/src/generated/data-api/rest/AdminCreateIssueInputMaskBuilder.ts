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
  AdminDistrictAttributes,
  AdminCreateIssueInputAttributes,
  AdminCountyAttributes,
  AdminCityAttributes,
} from '../model';

import { AdminCityDistrictsMaskBuilder } from './AdminCityMaskBuilder';
import { AdminCountyCitiesMaskBuilder } from './AdminCountyMaskBuilder';
import {} from './AdminDistrictMaskBuilder';
import {} from './AdminIssueTypeMaskBuilder';

export class AdminCreateIssueInputIssueTypeMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminIssueTypeAttributes>) {
    super('issueType', props);
  }
}
export class AdminCreateIssueInputCountyMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminCountyAttributes | AdminCountyCitiesMaskBuilder>) {
    super('county', props);
  }
}
export class AdminCreateIssueInputCityMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminCityAttributes | AdminCityDistrictsMaskBuilder>) {
    super('city', props);
  }
}
export class AdminCreateIssueInputDistrictMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminDistrictAttributes>) {
    super('district', props);
  }
}

export class AdminCreateIssueInputMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | AdminCreateIssueInputAttributes
      | AdminCreateIssueInputIssueTypeMaskBuilder
      | AdminCreateIssueInputCountyMaskBuilder
      | AdminCreateIssueInputCityMaskBuilder
      | AdminCreateIssueInputDistrictMaskBuilder
    >,
  ) {
    super(props);
  }
}
