//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder } from './MaskBuilder';
import { ServiceIssueAttributes, ServiceUserIssuesAttributes } from '../model';

export class ServiceUserIssuesMaskBuilder extends MaskBuilder {
  constructor(protected props: Array<ServiceUserIssuesAttributes>) {
    super(props);
  }
}
