//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { EdemokraciaSimpleVoteType } from './EdemokraciaSimpleVoteType';
import { ServiceServiceUserStored } from './ServiceServiceUser';

export interface ServiceSimpleVote {
  created: Date;
  type: EdemokraciaSimpleVoteType;

  user?: null | ServiceServiceUserStored;
}
export type ServiceSimpleVoteAttributes = 'created' | 'type';

export type ServiceSimpleVoteRelations = 'user';

export interface ServiceSimpleVoteStored extends JudoStored<ServiceSimpleVote>, ServiceSimpleVote {}
