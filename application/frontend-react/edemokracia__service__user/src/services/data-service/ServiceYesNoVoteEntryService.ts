//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  JudoRestResponse,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryQueryCustomizer,
  ServiceYesNoVoteEntryStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceYesNoVoteEntry
 */
export interface ServiceYesNoVoteEntryService {
  refresh(
    target: JudoIdentifiable<ServiceYesNoVoteEntry>,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceYesNoVoteEntryStored>>;
  update(
    target: Partial<ServiceYesNoVoteEntryStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceYesNoVoteEntryStored>>;
  validateUpdate(
    target: Partial<ServiceYesNoVoteEntryStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceYesNoVoteEntryStored>>;
  getOwner(
    target: JudoIdentifiable<ServiceYesNoVoteEntry>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getRangeForOwner(
    owner?: JudoIdentifiable<ServiceYesNoVoteEntry> | ServiceYesNoVoteEntry,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  setOwner(
    owner: JudoIdentifiable<ServiceYesNoVoteEntry>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  unsetOwner(owner: JudoIdentifiable<ServiceYesNoVoteEntry>): Promise<JudoRestResponse<void>>;
}
