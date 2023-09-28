//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminVoteDefinitionStored } from './AdminVoteDefinition';

export interface AdminUserVoteDefinition {
  ownedVoteDefinitions?: null | Array<AdminVoteDefinitionStored>;
  activeVoteDefinitionsGlobal?: null | Array<AdminVoteDefinitionStored>;
  activeVoteDefinitionsInActivityCounties?: null | Array<AdminVoteDefinitionStored>;
  activeVoteDefinitionsInActivityCities?: null | Array<AdminVoteDefinitionStored>;
  activeVoteDefinitionsInActivityDistricts?: null | Array<AdminVoteDefinitionStored>;
  activeVoteDefinitionsInResidentCounty?: null | Array<AdminVoteDefinitionStored>;
  activeVoteDefinitionsInResidentCity?: null | Array<AdminVoteDefinitionStored>;
  activeVoteDefinitionsInResidentDistrict?: null | Array<AdminVoteDefinitionStored>;
}
export type AdminUserVoteDefinitionAttributes = '';

export type AdminUserVoteDefinitionRelations =
  | 'ownedVoteDefinitions'
  | 'activeVoteDefinitionsGlobal'
  | 'activeVoteDefinitionsInActivityCounties'
  | 'activeVoteDefinitionsInActivityCities'
  | 'activeVoteDefinitionsInActivityDistricts'
  | 'activeVoteDefinitionsInResidentCounty'
  | 'activeVoteDefinitionsInResidentCity'
  | 'activeVoteDefinitionsInResidentDistrict';

export interface AdminUserVoteDefinitionStored extends JudoStored<AdminUserVoteDefinition>, AdminUserVoteDefinition {}
