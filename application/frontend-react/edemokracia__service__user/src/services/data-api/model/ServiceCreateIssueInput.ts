//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceCity } from './ServiceCity';
import { ServiceCityStored } from './ServiceCity';
import { ServiceCounty } from './ServiceCounty';
import { ServiceCountyStored } from './ServiceCounty';
import { ServiceDistrict } from './ServiceDistrict';
import { ServiceDistrictStored } from './ServiceDistrict';
import { ServiceIssueType } from './ServiceIssueType';
import { ServiceIssueTypeStored } from './ServiceIssueType';

export interface ServiceCreateIssueInput {
  debateCloseAt: Date;
  description: string;
  title: string;
  city?: null | ServiceCityStored;
  county?: null | ServiceCountyStored;
  district?: null | ServiceDistrictStored;
  issueType?: null | ServiceIssueTypeStored;
}

export type ServiceCreateIssueInputAttributes = 'debateCloseAt' | 'description' | 'title';
export type ServiceCreateIssueInputRelations = 'city' | 'county' | 'district' | 'issueType';

export interface ServiceCreateIssueInputStored extends JudoStored<ServiceCreateIssueInput>, ServiceCreateIssueInput {}
