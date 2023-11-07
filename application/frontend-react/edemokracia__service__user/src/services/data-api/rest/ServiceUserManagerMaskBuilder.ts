//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder } from './MaskBuilder';
import { ServiceServiceUserAttributes, ServiceUserManagerAttributes } from '../model';

export class ServiceUserManagerMaskBuilder extends MaskBuilder {
  constructor(protected props: Array<ServiceUserManagerAttributes>) {
    super(props);
  }
}
