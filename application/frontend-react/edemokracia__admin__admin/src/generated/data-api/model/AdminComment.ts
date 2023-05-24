//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import { JudoStored } from '@judo/data-api-common';
import { AdminSimpleVoteStored } from './AdminSimpleVote';
import { AdminUserStored } from './AdminUser';

export interface AdminComment {
  comment: string;
  created?: null | Date;
  createdByName?: null | string;
  upVotes?: null | number;
  downVotes?: null | number;

  votes?: null | Array<AdminSimpleVoteStored>;
  createdBy?: null | AdminUserStored;
}
export type AdminCommentAttributes = 'comment' | 'created' | 'createdByName' | 'upVotes' | 'downVotes';

export type AdminCommentRelations = 'votes' | 'createdBy';

export interface AdminCommentStored extends JudoStored<AdminComment>, AdminComment {}
