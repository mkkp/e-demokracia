//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceVoteDefinition } from './ServiceVoteDefinition';
import { ServiceVoteDefinitionStored } from './ServiceVoteDefinition';

export interface ServiceUserVoteDefinition {
  ownedVoteDefinitions?: null | Array<ServiceVoteDefinitionStored>;
  activeVoteDefinitionsGlobal?: null | Array<ServiceVoteDefinitionStored>;
  activeVoteDefinitionsInActivityCounties?: null | Array<ServiceVoteDefinitionStored>;
  activeVoteDefinitionsInActivityCities?: null | Array<ServiceVoteDefinitionStored>;
  activeVoteDefinitionsInActivityDistricts?: null | Array<ServiceVoteDefinitionStored>;
  activeVoteDefinitionsInResidentCounty?: null | Array<ServiceVoteDefinitionStored>;
  activeVoteDefinitionsInResidentCity?: null | Array<ServiceVoteDefinitionStored>;
  activeVoteDefinitionsInResidentDistrict?: null | Array<ServiceVoteDefinitionStored>;
}
export type ServiceUserVoteDefinitionAttributes = '';

export type ServiceUserVoteDefinitionRelations =
  | 'ownedVoteDefinitions'
  | 'activeVoteDefinitionsGlobal'
  | 'activeVoteDefinitionsInActivityCounties'
  | 'activeVoteDefinitionsInActivityCities'
  | 'activeVoteDefinitionsInActivityDistricts'
  | 'activeVoteDefinitionsInResidentCounty'
  | 'activeVoteDefinitionsInResidentCity'
  | 'activeVoteDefinitionsInResidentDistrict';

export interface ServiceUserVoteDefinitionStored
  extends JudoStored<ServiceUserVoteDefinition>,
    ServiceUserVoteDefinition {}
