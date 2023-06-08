//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { AdminCreateUserInputStored, AdminCreateUserInput } from '../data-api';

/**
 * Class Service for AdminCreateUserInput
 */
export interface AdminCreateUserInputService {
  getTemplate(): Promise<AdminCreateUserInput>;
}
