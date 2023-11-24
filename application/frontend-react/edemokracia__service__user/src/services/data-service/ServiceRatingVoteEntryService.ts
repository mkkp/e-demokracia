//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceServiceUser,
  ServiceRatingVoteEntryQueryCustomizer,
  ServiceRatingVoteEntry,
  ServiceServiceUserStored,
  ServiceServiceUserQueryCustomizer,
  ServiceRatingVoteEntryStored,
} from '../data-api';

/**
 * Class Service for ServiceRatingVoteEntry
 */
export interface ServiceRatingVoteEntryService {
  refresh(
    target: JudoIdentifiable<ServiceRatingVoteEntry>,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
  ): Promise<ServiceRatingVoteEntryStored>;
  getOwner(
    target: JudoIdentifiable<ServiceRatingVoteEntry>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  getRangeForOwner(
    owner?: JudoIdentifiable<ServiceRatingVoteEntry> | ServiceRatingVoteEntry,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
}
