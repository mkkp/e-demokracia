//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminRatingVoteEntryStored,
  AdminRatingVoteEntryQueryCustomizer,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminRatingVoteEntry,
  AdminUser,
} from '../data-api';

/**
 * Class Service for AdminRatingVoteEntry
 */
export interface AdminRatingVoteEntryServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminRatingVoteEntry>,
    queryCustomizer?: AdminRatingVoteEntryQueryCustomizer,
  ): Promise<AdminRatingVoteEntryStored>;

  getOwner(
    target: JudoIdentifiable<AdminRatingVoteEntry>,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<AdminUserStored>;

  getRangeForOwner(
    owner?: JudoIdentifiable<AdminRatingVoteEntry> | AdminRatingVoteEntry,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;
}
