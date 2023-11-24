//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceCon } from './ServiceCon';
import { ServiceConParent } from './ServiceConParent';
import { ServiceConParentStored } from './ServiceConParent';
import { ServiceConStored } from './ServiceCon';
import { ServiceProParent } from './ServiceProParent';
import { ServiceProParentStored } from './ServiceProParent';
import { ServiceServiceUser } from './ServiceServiceUser';
import { ServiceServiceUserStored } from './ServiceServiceUser';
import { ServiceSimpleVote } from './ServiceSimpleVote';
import { ServiceSimpleVoteStored } from './ServiceSimpleVote';

export interface ServicePro {
  createdByName?: null | string;
  created: Date;
  description: string;
  title: string;
  upVotes?: null | number;
  downVotes?: null | number;
  votes?: null | Array<ServiceSimpleVoteStored>;
  createdBy?: null | ServiceServiceUserStored;
  pros?: null | Array<ServiceProStored>;
  cons?: null | Array<ServiceConStored>;
  parentPro?: null | ServiceProParentStored;
  parentCon?: null | ServiceConParentStored;
}

export type ServiceProAttributes = 'createdByName' | 'created' | 'description' | 'title' | 'upVotes' | 'downVotes';
export type ServiceProRelations = 'votes' | 'createdBy' | 'pros' | 'cons' | 'parentPro' | 'parentCon';

export interface ServiceProStored extends JudoStored<ServicePro>, ServicePro {}
