//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminSelectAnswerVoteSelectionStored } from './AdminSelectAnswerVoteSelection';
import { AdminUserStored } from './AdminUser';

export interface AdminSelectAnswerVoteEntry {
  created: Date;
  createdBy?: null | string;
  valueRepresentation?: null | string;

  owner: AdminUserStored;
  value: AdminSelectAnswerVoteSelectionStored;
}
export type AdminSelectAnswerVoteEntryAttributes = 'created' | 'createdBy' | 'valueRepresentation';

export type AdminSelectAnswerVoteEntryRelations = 'owner' | 'value';

export interface AdminSelectAnswerVoteEntryStored
  extends JudoStored<AdminSelectAnswerVoteEntry>,
    AdminSelectAnswerVoteEntry {}
