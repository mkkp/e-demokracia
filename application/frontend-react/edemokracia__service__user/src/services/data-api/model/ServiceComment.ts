//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceServiceUser } from './ServiceServiceUser';
import { ServiceServiceUserStored } from './ServiceServiceUser';
import { ServiceSimpleVote } from './ServiceSimpleVote';
import { ServiceSimpleVoteStored } from './ServiceSimpleVote';

export interface ServiceComment {
  comment: string;
  created?: null | Date;
  createdByName?: null | string;
  downVotes?: null | number;
  upVotes?: null | number;
  createdBy?: null | ServiceServiceUserStored;
  votes?: null | Array<ServiceSimpleVoteStored>;
}

export type ServiceCommentAttributes = 'comment' | 'created' | 'createdByName' | 'downVotes' | 'upVotes';
export type ServiceCommentRelations = 'createdBy' | 'votes';

export interface ServiceCommentStored extends JudoStored<ServiceComment>, ServiceComment {}
