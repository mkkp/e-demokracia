//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminUserStored } from './AdminUser';
import { EdemokraciaSimpleVoteType } from './EdemokraciaSimpleVoteType';

export interface AdminSimpleVote {
  created: Date;
  type: EdemokraciaSimpleVoteType;

  user?: null | AdminUserStored;
}
export type AdminSimpleVoteAttributes = 'created' | 'type';

export type AdminSimpleVoteRelations = 'user';

export interface AdminSimpleVoteStored extends JudoStored<AdminSimpleVote>, AdminSimpleVote {}
