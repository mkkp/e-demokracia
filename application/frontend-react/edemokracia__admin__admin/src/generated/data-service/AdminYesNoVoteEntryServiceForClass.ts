//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminYesNoVoteEntryStored,
  AdminYesNoVoteEntry,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminYesNoVoteEntryQueryCustomizer,
  AdminUser,
} from '../data-api';

/**
 * Class Service for AdminYesNoVoteEntry
 */
export interface AdminYesNoVoteEntryServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminYesNoVoteEntry>,
    queryCustomizer?: AdminYesNoVoteEntryQueryCustomizer,
  ): Promise<AdminYesNoVoteEntryStored>;

  getOwner(
    target: JudoIdentifiable<AdminYesNoVoteEntry>,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<AdminUserStored>;

  getRangeForOwner(
    owner?: JudoIdentifiable<AdminYesNoVoteEntry> | AdminYesNoVoteEntry,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;
}
