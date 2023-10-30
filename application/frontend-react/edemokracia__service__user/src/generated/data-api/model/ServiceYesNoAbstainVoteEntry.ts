//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { EdemokraciaYesNoAbstainVoteValue } from './EdemokraciaYesNoAbstainVoteValue';
import { ServiceServiceUserStored } from './ServiceServiceUser';

export interface ServiceYesNoAbstainVoteEntry {
  created: Date;
  value: EdemokraciaYesNoAbstainVoteValue;
  createdBy?: null | string;

  owner: ServiceServiceUserStored;
}
export type ServiceYesNoAbstainVoteEntryAttributes = 'created' | 'value' | 'createdBy';

export type ServiceYesNoAbstainVoteEntryRelations = 'owner';

export interface ServiceYesNoAbstainVoteEntryStored
  extends JudoStored<ServiceYesNoAbstainVoteEntry>,
    ServiceYesNoAbstainVoteEntry {}
