//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceServiceUserStored } from './ServiceServiceUser';

export interface ServiceRatingVoteEntry {
  created: Date;
  value: number;
  createdBy?: null | string;

  owner: ServiceServiceUserStored;
}
export type ServiceRatingVoteEntryAttributes = 'created' | 'value' | 'createdBy';

export type ServiceRatingVoteEntryRelations = 'owner';

export interface ServiceRatingVoteEntryStored extends JudoStored<ServiceRatingVoteEntry>, ServiceRatingVoteEntry {}
