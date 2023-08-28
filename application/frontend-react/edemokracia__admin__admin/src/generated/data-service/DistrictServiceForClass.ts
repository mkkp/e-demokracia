//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { DistrictStored, District, DistrictQueryCustomizer } from '../data-api';

/**
 * Class Service for District
 */
export interface DistrictServiceForClass {
  refresh(target: JudoIdentifiable<District>, queryCustomizer?: DistrictQueryCustomizer): Promise<DistrictStored>;
}
