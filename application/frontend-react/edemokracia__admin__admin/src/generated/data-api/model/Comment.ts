//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { SimpleVoteStored } from './SimpleVote';
import { UserStored } from './User';

export interface Comment {
  comment: string;
  created: Date;

  votes?: null | Array<SimpleVoteStored>;
  createdBy?: null | UserStored;
}
export type CommentAttributes = 'comment' | 'created';

export type CommentRelations = 'votes' | 'createdBy';

export interface CommentStored extends JudoStored<Comment>, Comment {}
