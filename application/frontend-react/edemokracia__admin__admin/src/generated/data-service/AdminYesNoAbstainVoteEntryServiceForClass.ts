//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminYesNoAbstainVoteEntry,
  AdminYesNoAbstainVoteEntryQueryCustomizer,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminYesNoAbstainVoteEntryStored,
  AdminUser,
} from '../data-api';

/**
 * Class Service for AdminYesNoAbstainVoteEntry
 */
export interface AdminYesNoAbstainVoteEntryServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
    queryCustomizer?: AdminYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<AdminYesNoAbstainVoteEntryStored>;

  getOwner(
    target: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<AdminUserStored>;

  getRangeForOwner(
    owner?: JudoIdentifiable<AdminYesNoAbstainVoteEntry> | AdminYesNoAbstainVoteEntry,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;
}
