//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { Initializer, InitializerQueryCustomizer, InitializerStored } from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for Initializer
 */
export interface InitializerService {
  refresh(
    target: JudoIdentifiable<Initializer>,
    queryCustomizer?: InitializerQueryCustomizer,
  ): Promise<InitializerStored>;
  initAreas(): Promise<void>;
  initCategories(): Promise<void>;
  initIssueTypes(): Promise<void>;
  initUsers(): Promise<void>;
}
