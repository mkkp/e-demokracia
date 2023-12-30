//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { ServiceCityAttributes, ServiceDistrictAttributes } from '../model';
import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {} from './ServiceDistrictMaskBuilder';

export class ServiceCityDistrictsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceDistrictAttributes>) {
    super('districts', props);
  }
}

export class ServiceCityMaskBuilder extends MaskBuilder {
  constructor(protected props: Array<ServiceCityAttributes | ServiceCityDistrictsMaskBuilder>) {
    super(props);
  }
}
