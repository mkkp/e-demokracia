//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import { JudoStored } from '@judo/data-api-common';
import { AdminCommentStored } from './AdminComment';
import { AdminConStored } from './AdminCon';
import { AdminSimpleVoteStored } from './AdminSimpleVote';
import { AdminUserStored } from './AdminUser';

export interface AdminPro {
  createdByName?: null | string;
  created: Date;
  description: string;
  title: string;
  upVotes?: null | number;
  downVotes?: null | number;

  votes?: null | Array<AdminSimpleVoteStored>;
  createdBy?: null | AdminUserStored;
  pros?: null | Array<AdminProStored>;
  cons?: null | Array<AdminConStored>;
  comments?: null | Array<AdminCommentStored>;
}
export type AdminProAttributes = 'createdByName' | 'created' | 'description' | 'title' | 'upVotes' | 'downVotes';

export type AdminProRelations = 'votes' | 'createdBy' | 'pros' | 'cons' | 'comments';

export interface AdminProStored extends JudoStored<AdminPro>, AdminPro {}
