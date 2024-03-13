//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { Con, ConQueryCustomizer, ConStored, CreateArgumentInput, JudoRestResponse } from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for Con
 */
export interface ConService {
  refresh(
    target: JudoIdentifiable<Con>,
    queryCustomizer?: ConQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ConStored>>;
  createConArgument(owner: JudoIdentifiable<Con>, target: CreateArgumentInput): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgument(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgument(owner: JudoIdentifiable<Con>, target: CreateArgumentInput): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgument(): Promise<JudoRestResponse<CreateArgumentInput>>;
  voteDown(owner: JudoIdentifiable<Con>): Promise<JudoRestResponse<void>>;
  voteUp(owner: JudoIdentifiable<Con>): Promise<JudoRestResponse<void>>;
}
