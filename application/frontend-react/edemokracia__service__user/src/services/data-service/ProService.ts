//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { CreateArgumentInput, JudoRestResponse, Pro, ProQueryCustomizer, ProStored } from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for Pro
 */
export interface ProService {
  refresh(
    target: JudoIdentifiable<Pro>,
    queryCustomizer?: ProQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ProStored>>;
  createConArgument(owner: JudoIdentifiable<Pro>, target: CreateArgumentInput): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgument(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgument(owner: JudoIdentifiable<Pro>, target: CreateArgumentInput): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgument(): Promise<JudoRestResponse<CreateArgumentInput>>;
  voteDown(owner: JudoIdentifiable<Pro>): Promise<JudoRestResponse<void>>;
  voteUp(owner: JudoIdentifiable<Pro>): Promise<JudoRestResponse<void>>;
}
