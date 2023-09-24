//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { CityStored } from './City';
import { IssueStored } from './Issue';

export interface County {
  name: string;

  cities?: null | Array<CityStored>;
  issues?: null | Array<IssueStored>;
}
export type CountyAttributes = 'name';

export type CountyRelations = 'cities' | 'issues';

export interface CountyStored extends JudoStored<County>, County {}
