//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { ConQueryCustomizer, Con, ConStored, CreateArgumentInput } from '../data-api';

/**
 * Class Service for Con
 */
export interface ConService {
  refresh(target: JudoIdentifiable<Con>, queryCustomizer?: ConQueryCustomizer): Promise<ConStored>;

  voteDown(owner: JudoIdentifiable<Con>): Promise<void>;

  voteUp(owner: JudoIdentifiable<Con>): Promise<void>;

  createProArgument(owner: JudoIdentifiable<Con>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateProArgument(): Promise<CreateArgumentInput>;

  createConArgument(owner: JudoIdentifiable<Con>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateConArgument(): Promise<CreateArgumentInput>;
}
