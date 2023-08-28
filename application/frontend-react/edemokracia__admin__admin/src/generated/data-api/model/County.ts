//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { CityStored } from './City';

export interface County {
  name: string;

  cities?: null | Array<CityStored>;
}
export type CountyAttributes = 'name';

export type CountyRelations = 'cities';

export interface CountyStored extends JudoStored<County>, County {}
