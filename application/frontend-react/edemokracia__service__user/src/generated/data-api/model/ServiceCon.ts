//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceConParentStored } from './ServiceConParent';
import { ServiceProParentStored } from './ServiceProParent';
import { ServiceProStored } from './ServicePro';
import { ServiceServiceUserStored } from './ServiceServiceUser';
import { ServiceSimpleVoteStored } from './ServiceSimpleVote';

export interface ServiceCon {
  createdByName?: null | string;
  created: Date;
  description: string;
  title: string;
  upVotes?: null | number;
  downVotes?: null | number;

  votes?: null | Array<ServiceSimpleVoteStored>;
  createdBy?: null | ServiceServiceUserStored;
  cons?: null | Array<ServiceConStored>;
  pros?: null | Array<ServiceProStored>;
  parentCon?: null | ServiceConParentStored;
  parentPro?: null | ServiceProParentStored;
}
export type ServiceConAttributes = 'createdByName' | 'created' | 'description' | 'title' | 'upVotes' | 'downVotes';

export type ServiceConRelations = 'votes' | 'createdBy' | 'cons' | 'pros' | 'parentCon' | 'parentPro';

export interface ServiceConStored extends JudoStored<ServiceCon>, ServiceCon {}
