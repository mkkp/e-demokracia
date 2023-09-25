//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminUserStored } from './AdminUser';
import { EdemokraciaYesNoVoteValue } from './EdemokraciaYesNoVoteValue';

export interface AdminYesNoVoteEntry {
  created: Date;
  value: EdemokraciaYesNoVoteValue;
  createdBy?: null | string;

  owner: AdminUserStored;
}
export type AdminYesNoVoteEntryAttributes = 'created' | 'value' | 'createdBy';

export type AdminYesNoVoteEntryRelations = 'owner';

export interface AdminYesNoVoteEntryStored extends JudoStored<AdminYesNoVoteEntry>, AdminYesNoVoteEntry {}
