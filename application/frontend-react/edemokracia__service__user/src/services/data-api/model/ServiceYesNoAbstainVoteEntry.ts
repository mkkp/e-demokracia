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
import { YesNoAbstainVoteValue } from './YesNoAbstainVoteValue';

export interface ServiceYesNoAbstainVoteEntry {
  created: Date;
  createdBy?: null | string;
  value: YesNoAbstainVoteValue;
  owner: ServiceServiceUserStored;
}

export type ServiceYesNoAbstainVoteEntryAttributes = 'created' | 'createdBy' | 'value';
export type ServiceYesNoAbstainVoteEntryRelations = 'owner';

export interface ServiceYesNoAbstainVoteEntryStored
  extends JudoStored<ServiceYesNoAbstainVoteEntry>,
    ServiceYesNoAbstainVoteEntry {}
