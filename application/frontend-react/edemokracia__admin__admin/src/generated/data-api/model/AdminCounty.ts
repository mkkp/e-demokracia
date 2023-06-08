//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import { JudoStored } from '@judo/data-api-common';
import { AdminCityStored } from './AdminCity';

export interface AdminCounty {
  name: string;
  representation?: null | string;

  cities?: null | Array<AdminCityStored>;
}
export type AdminCountyAttributes = 'name' | 'representation';

export type AdminCountyRelations = 'cities';

export interface AdminCountyStored extends JudoStored<AdminCounty>, AdminCounty {}
