//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminCityStored } from './AdminCity';
import { AdminCountyStored } from './AdminCounty';
import { AdminDistrictStored } from './AdminDistrict';
import { AdminIssueTypeStored } from './AdminIssueType';

export interface AdminCreateIssueInput {
  description: string;
  title: string;
  debateCloseAt: Date;

  issueType?: null | AdminIssueTypeStored;
  county?: null | AdminCountyStored;
  city?: null | AdminCityStored;
  district?: null | AdminDistrictStored;
}
export type AdminCreateIssueInputAttributes = 'description' | 'title' | 'debateCloseAt';

export type AdminCreateIssueInputRelations = 'issueType' | 'county' | 'city' | 'district';

export interface AdminCreateIssueInputStored extends JudoStored<AdminCreateIssueInput>, AdminCreateIssueInput {}
