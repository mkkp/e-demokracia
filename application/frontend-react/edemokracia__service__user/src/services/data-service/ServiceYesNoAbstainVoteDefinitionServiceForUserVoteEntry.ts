//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceServiceUser,
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteEntryStored,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceYesNoAbstainVoteEntry,
} from '../data-api';

/**
 * Relation Service for ServiceYesNoAbstainVoteDefinition.userVoteEntry
 */
export interface ServiceYesNoAbstainVoteDefinitionServiceForUserVoteEntry {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<ServiceYesNoAbstainVoteEntryStored>;
  getOwner(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteEntry>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
}
