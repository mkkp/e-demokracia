//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminVoteEntry,
  AdminVoteEntryQueryCustomizer,
  AdminVoteDefinition,
  AdminVoteEntryStored,
} from '../data-api';

/**
 * Class Service for AdminVoteEntry
 */
export interface AdminVoteEntryServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminVoteEntry>,
    queryCustomizer?: AdminVoteEntryQueryCustomizer,
  ): Promise<AdminVoteEntryStored>;

  getVoteDefinition(
    target: JudoIdentifiable<AdminVoteEntry>,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<AdminVoteDefinitionStored>;

  getRangeForVoteDefinition(
    owner?: JudoIdentifiable<AdminVoteEntry> | AdminVoteEntry,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;
}
