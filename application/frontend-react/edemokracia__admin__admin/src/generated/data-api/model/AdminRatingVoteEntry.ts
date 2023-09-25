//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminUserStored } from './AdminUser';

export interface AdminRatingVoteEntry {
  created: Date;
  value: number;
  createdBy?: null | string;

  owner: AdminUserStored;
}
export type AdminRatingVoteEntryAttributes = 'created' | 'value' | 'createdBy';

export type AdminRatingVoteEntryRelations = 'owner';

export interface AdminRatingVoteEntryStored extends JudoStored<AdminRatingVoteEntry>, AdminRatingVoteEntry {}
