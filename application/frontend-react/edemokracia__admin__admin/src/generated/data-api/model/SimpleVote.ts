//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { EdemokraciaSimpleVoteType } from './EdemokraciaSimpleVoteType';
import { UserStored } from './User';

export interface SimpleVote {
  created: Date;
  type: EdemokraciaSimpleVoteType;

  user?: null | UserStored;
}
export type SimpleVoteAttributes = 'created' | 'type';

export type SimpleVoteRelations = 'user';

export interface SimpleVoteStored extends JudoStored<SimpleVote>, SimpleVote {}
