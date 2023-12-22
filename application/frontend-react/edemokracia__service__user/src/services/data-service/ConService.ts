//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { Con, ConQueryCustomizer, ConStored, CreateArgumentInput } from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for Con
 */
export interface ConService {
  refresh(target: JudoIdentifiable<Con>, queryCustomizer?: ConQueryCustomizer): Promise<ConStored>;
  createConArgument(owner: JudoIdentifiable<Con>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgument(): Promise<CreateArgumentInput>;
  createProArgument(owner: JudoIdentifiable<Con>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgument(): Promise<CreateArgumentInput>;
  voteDown(owner: JudoIdentifiable<Con>): Promise<void>;
  voteUp(owner: JudoIdentifiable<Con>): Promise<void>;
}
