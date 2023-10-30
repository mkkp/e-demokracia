//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceServiceUserStored } from './ServiceServiceUser';
import { ServiceSimpleVoteStored } from './ServiceSimpleVote';

export interface ServiceComment {
  comment: string;
  created?: null | Date;
  createdByName?: null | string;
  upVotes?: null | number;
  downVotes?: null | number;

  votes?: null | Array<ServiceSimpleVoteStored>;
  createdBy?: null | ServiceServiceUserStored;
}
export type ServiceCommentAttributes = 'comment' | 'created' | 'createdByName' | 'upVotes' | 'downVotes';

export type ServiceCommentRelations = 'votes' | 'createdBy';

export interface ServiceCommentStored extends JudoStored<ServiceComment>, ServiceComment {}
