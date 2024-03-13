//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { Initializer, InitializerQueryCustomizer, InitializerStored, JudoRestResponse } from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for Initializer
 */
export interface InitializerService {
  refresh(
    target: JudoIdentifiable<Initializer>,
    queryCustomizer?: InitializerQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<InitializerStored>>;
  initAreas(): Promise<JudoRestResponse<void>>;
  initCategories(): Promise<JudoRestResponse<void>>;
  initIssueTypes(): Promise<JudoRestResponse<void>>;
  initUsers(): Promise<JudoRestResponse<void>>;
}
