//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import { JudoStored } from '@judo/data-api-common';
import { CommentStored } from './Comment';
import { ConStored } from './Con';
import { EdemokraciaDebateStatus } from './EdemokraciaDebateStatus';
import { IssueStored } from './Issue';
import { ProStored } from './Pro';
import { UserStored } from './User';
import { VoteDefinitionStored } from './VoteDefinition';

export interface Debate {
  title: string;
  description: string;
  status: EdemokraciaDebateStatus;
  closeAt: Date;

  issue?: null | IssueStored;
  createdBy?: null | UserStored;
  debateVote?: null | VoteDefinitionStored;
  comments?: null | Array<CommentStored>;
  cons?: null | Array<ConStored>;
  pros?: null | Array<ProStored>;
}
export type DebateAttributes = 'title' | 'description' | 'status' | 'closeAt';

export type DebateRelations = 'issue' | 'createdBy' | 'debateVote' | 'comments' | 'cons' | 'pros';

export interface DebateStored extends JudoStored<Debate>, Debate {}
