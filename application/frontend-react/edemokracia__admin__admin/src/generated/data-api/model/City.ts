//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { DistrictStored } from './District';
import { IssueStored } from './Issue';

export interface City {
  name: string;

  districts?: null | Array<DistrictStored>;
  issues?: null | Array<IssueStored>;
}
export type CityAttributes = 'name';

export type CityRelations = 'districts' | 'issues';

export interface CityStored extends JudoStored<City>, City {}
