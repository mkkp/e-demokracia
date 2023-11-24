//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceServiceUser } from './ServiceServiceUser';
import { ServiceServiceUserStored } from './ServiceServiceUser';
import { YesNoVoteValue } from './YesNoVoteValue';

export interface ServiceYesNoVoteEntry {
  created: Date;
  value: YesNoVoteValue;
  createdBy?: null | string;
  owner: ServiceServiceUserStored;
}

export type ServiceYesNoVoteEntryAttributes = 'created' | 'value' | 'createdBy';
export type ServiceYesNoVoteEntryRelations = 'owner';

export interface ServiceYesNoVoteEntryStored extends JudoStored<ServiceYesNoVoteEntry>, ServiceYesNoVoteEntry {}