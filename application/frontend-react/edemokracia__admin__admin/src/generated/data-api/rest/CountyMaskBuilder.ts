//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import { CountyAttributes, CityAttributes } from '../model';

import { CityDistrictsMaskBuilder } from './CityMaskBuilder';

export class CountyCitiesMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<CityAttributes | CityDistrictsMaskBuilder>) {
    super('cities', props);
  }
}

export class CountyMaskBuilder extends MaskBuilder {
  constructor(protected props: Array<CountyAttributes | CountyCitiesMaskBuilder>) {
    super(props);
  }
}
