//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import { JudoStored } from '@judo/data-api-common';
import { AdminCommentStored } from './AdminComment';
import { AdminProStored } from './AdminPro';
import { AdminSimpleVoteStored } from './AdminSimpleVote';
import { AdminUserStored } from './AdminUser';

export interface AdminCon {
  createdByName?: null | string;
  created: Date;
  description: string;
  title: string;
  upVotes?: null | number;
  downVotes?: null | number;

  votes?: null | Array<AdminSimpleVoteStored>;
  createdBy?: null | AdminUserStored;
  cons?: null | Array<AdminConStored>;
  pros?: null | Array<AdminProStored>;
  comments?: null | Array<AdminCommentStored>;
}
export type AdminConAttributes = 'createdByName' | 'created' | 'description' | 'title' | 'upVotes' | 'downVotes';

export type AdminConRelations = 'votes' | 'createdBy' | 'cons' | 'pros' | 'comments';

export interface AdminConStored extends JudoStored<AdminCon>, AdminCon {}
