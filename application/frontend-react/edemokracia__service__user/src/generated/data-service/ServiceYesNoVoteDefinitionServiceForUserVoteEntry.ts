//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceYesNoVoteDefinition,
  ServiceServiceUser,
  ServiceYesNoVoteEntryStored,
  ServiceYesNoVoteEntry,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoVoteEntryQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceYesNoVoteDefinition.userVoteEntry
 */
export interface ServiceYesNoVoteDefinitionServiceForUserVoteEntry {
  getUserVoteEntry(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    mask?: string,
  ): Promise<ServiceYesNoVoteEntryStored>;
}
