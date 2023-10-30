//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceCityStored } from './ServiceCity';
import { ServiceCountyStored } from './ServiceCounty';
import { ServiceDistrictStored } from './ServiceDistrict';
import { ServiceIssueTypeStored } from './ServiceIssueType';

export interface ServiceCreateIssueInput {
  description: string;
  title: string;
  debateCloseAt: Date;

  issueType?: null | ServiceIssueTypeStored;
  county?: null | ServiceCountyStored;
  city?: null | ServiceCityStored;
  district?: null | ServiceDistrictStored;
}
export type ServiceCreateIssueInputAttributes = 'description' | 'title' | 'debateCloseAt';

export type ServiceCreateIssueInputRelations = 'issueType' | 'county' | 'city' | 'district';

export interface ServiceCreateIssueInputStored extends JudoStored<ServiceCreateIssueInput>, ServiceCreateIssueInput {}
