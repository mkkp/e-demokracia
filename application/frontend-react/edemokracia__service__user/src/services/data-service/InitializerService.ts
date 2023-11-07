//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { InitializerStored, InitializerQueryCustomizer, Initializer } from '../data-api';

/**
 * Class Service for Initializer
 */
export interface InitializerService {
  refresh(
    target: JudoIdentifiable<Initializer>,
    queryCustomizer?: InitializerQueryCustomizer,
  ): Promise<InitializerStored>;

  initUsers(): Promise<void>;

  initCategories(): Promise<void>;

  initAreas(): Promise<void>;

  initIssueTypes(): Promise<void>;
}
