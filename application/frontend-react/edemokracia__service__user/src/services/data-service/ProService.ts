//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { ProStored, ProQueryCustomizer, CreateArgumentInput, Pro } from '../data-api';

/**
 * Class Service for Pro
 */
export interface ProService {
  refresh(target: JudoIdentifiable<Pro>, queryCustomizer?: ProQueryCustomizer): Promise<ProStored>;

  voteDown(owner: JudoIdentifiable<Pro>): Promise<void>;

  voteUp(owner: JudoIdentifiable<Pro>): Promise<void>;

  createProArgument(owner: JudoIdentifiable<Pro>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateProArgument(): Promise<CreateArgumentInput>;

  createConArgument(owner: JudoIdentifiable<Pro>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateConArgument(): Promise<CreateArgumentInput>;
}
