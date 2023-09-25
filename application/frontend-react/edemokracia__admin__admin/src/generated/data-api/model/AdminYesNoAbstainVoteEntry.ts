//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminUserStored } from './AdminUser';
import { EdemokraciaYesNoAbstainVoteValue } from './EdemokraciaYesNoAbstainVoteValue';

export interface AdminYesNoAbstainVoteEntry {
  created: Date;
  value: EdemokraciaYesNoAbstainVoteValue;
  createdBy?: null | string;

  owner: AdminUserStored;
}
export type AdminYesNoAbstainVoteEntryAttributes = 'created' | 'value' | 'createdBy';

export type AdminYesNoAbstainVoteEntryRelations = 'owner';

export interface AdminYesNoAbstainVoteEntryStored
  extends JudoStored<AdminYesNoAbstainVoteEntry>,
    AdminYesNoAbstainVoteEntry {}
