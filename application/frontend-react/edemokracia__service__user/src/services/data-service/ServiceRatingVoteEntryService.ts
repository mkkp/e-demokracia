//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  JudoRestResponse,
  ServiceRatingVoteEntry,
  ServiceRatingVoteEntryQueryCustomizer,
  ServiceRatingVoteEntryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceRatingVoteEntry
 */
export interface ServiceRatingVoteEntryService {
  refresh(
    target: JudoIdentifiable<ServiceRatingVoteEntry>,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceRatingVoteEntryStored>>;
  getOwner(
    target: JudoIdentifiable<ServiceRatingVoteEntry>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getRangeForOwner(
    owner?: JudoIdentifiable<ServiceRatingVoteEntry> | ServiceRatingVoteEntry,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  setOwner(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  unsetOwner(owner: JudoIdentifiable<ServiceRatingVoteEntry>): Promise<JudoRestResponse<void>>;
}
