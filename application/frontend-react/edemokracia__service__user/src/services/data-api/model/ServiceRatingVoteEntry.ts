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

export interface ServiceRatingVoteEntry {
  created: Date;
  createdBy?: null | string;
  value: number;
  owner: ServiceServiceUserStored;
}

export type ServiceRatingVoteEntryAttributes = 'created' | 'createdBy' | 'value';
export type ServiceRatingVoteEntryRelations = 'owner';

export interface ServiceRatingVoteEntryStored extends JudoStored<ServiceRatingVoteEntry>, ServiceRatingVoteEntry {}
