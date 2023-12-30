//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';
import { ServiceConParent } from './ServiceConParent';
import { ServiceConParentStored } from './ServiceConParent';
import { ServicePro } from './ServicePro';
import { ServiceProStored } from './ServicePro';
import { ServiceProParent } from './ServiceProParent';
import { ServiceProParentStored } from './ServiceProParent';
import { ServiceServiceUser } from './ServiceServiceUser';
import { ServiceServiceUserStored } from './ServiceServiceUser';
import { ServiceSimpleVote } from './ServiceSimpleVote';
import { ServiceSimpleVoteStored } from './ServiceSimpleVote';

export interface ServiceCon {
  created: Date;
  createdByName?: null | string;
  description: string;
  downVotes?: null | number;
  title: string;
  upVotes?: null | number;
  cons?: null | Array<ServiceConStored>;
  createdBy?: null | ServiceServiceUserStored;
  parentCon?: null | ServiceConParentStored;
  parentPro?: null | ServiceProParentStored;
  pros?: null | Array<ServiceProStored>;
  votes?: null | Array<ServiceSimpleVoteStored>;
}

export type ServiceConAttributes = 'created' | 'createdByName' | 'description' | 'downVotes' | 'title' | 'upVotes';
export type ServiceConRelations = 'cons' | 'createdBy' | 'parentCon' | 'parentPro' | 'pros' | 'votes';

export interface ServiceConStored extends JudoStored<ServiceCon>, ServiceCon {}
