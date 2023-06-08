//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import { AdminCountyAttributes, AdminCityAttributes } from '../model';

import { AdminCityDistrictsMaskBuilder } from './AdminCityMaskBuilder';

export class AdminCountyCitiesMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminCityAttributes | AdminCityDistrictsMaskBuilder>) {
    super('cities', props);
  }
}

export class AdminCountyMaskBuilder extends MaskBuilder {
  constructor(protected props: Array<AdminCountyAttributes | AdminCountyCitiesMaskBuilder>) {
    super(props);
  }
}
