//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import { JudoStored } from '@judo/data-api-common';
import { AdminDistrictStored } from './AdminDistrict';

export interface AdminCity {
  name: string;
  county?: null | string;
  representation?: null | string;

  districts?: null | Array<AdminDistrictStored>;
}
export type AdminCityAttributes = 'name' | 'county' | 'representation';

export type AdminCityRelations = 'districts';

export interface AdminCityStored extends JudoStored<AdminCity>, AdminCity {}
