//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';
import { ServiceServiceUser } from './ServiceServiceUser';
import { ServiceServiceUserStored } from './ServiceServiceUser';
import { YesNoVoteValue } from './YesNoVoteValue';

export interface ServiceYesNoVoteEntry {
  created: Date;
  createdBy?: null | string;
  value: YesNoVoteValue;
  owner: ServiceServiceUserStored;
}

export type ServiceYesNoVoteEntryAttributes = 'created' | 'createdBy' | 'value';
export type ServiceYesNoVoteEntryRelations = 'owner';

export interface ServiceYesNoVoteEntryStored extends JudoStored<ServiceYesNoVoteEntry>, ServiceYesNoVoteEntry {}
