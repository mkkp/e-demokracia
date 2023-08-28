//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { CommentStored } from './Comment';
import { ProStored } from './Pro';
import { SimpleVoteStored } from './SimpleVote';
import { UserStored } from './User';

export interface Con {
  description: string;
  created: Date;
  title: string;

  comments?: null | Array<CommentStored>;
  createdBy?: null | UserStored;
  pros?: null | Array<ProStored>;
  cons?: null | Array<ConStored>;
  votes?: null | Array<SimpleVoteStored>;
}
export type ConAttributes = 'description' | 'created' | 'title';

export type ConRelations = 'comments' | 'createdBy' | 'pros' | 'cons' | 'votes';

export interface ConStored extends JudoStored<Con>, Con {}
