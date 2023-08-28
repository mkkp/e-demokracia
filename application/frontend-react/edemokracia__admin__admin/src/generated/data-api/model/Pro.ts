//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { CommentStored } from './Comment';
import { ConStored } from './Con';
import { SimpleVoteStored } from './SimpleVote';
import { UserStored } from './User';

export interface Pro {
  description: string;
  created: Date;
  title: string;

  comments?: null | Array<CommentStored>;
  createdBy?: null | UserStored;
  cons?: null | Array<ConStored>;
  pros?: null | Array<ProStored>;
  votes?: null | Array<SimpleVoteStored>;
}
export type ProAttributes = 'description' | 'created' | 'title';

export type ProRelations = 'comments' | 'createdBy' | 'cons' | 'pros' | 'votes';

export interface ProStored extends JudoStored<Pro>, Pro {}
