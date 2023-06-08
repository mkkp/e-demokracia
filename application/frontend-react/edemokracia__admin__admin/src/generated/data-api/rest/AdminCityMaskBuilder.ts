//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import { AdminDistrictAttributes, AdminCityAttributes } from '../model';

import {} from './AdminDistrictMaskBuilder';

export class AdminCityDistrictsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminDistrictAttributes>) {
    super('districts', props);
  }
}

export class AdminCityMaskBuilder extends MaskBuilder {
  constructor(protected props: Array<AdminCityAttributes | AdminCityDistrictsMaskBuilder>) {
    super(props);
  }
}
