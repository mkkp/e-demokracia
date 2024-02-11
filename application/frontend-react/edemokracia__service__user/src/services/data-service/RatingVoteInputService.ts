//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { JudoRestResponse, RatingVoteInput, RatingVoteInputStored } from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for RatingVoteInput
 */
export interface RatingVoteInputService {
  getTemplate(): Promise<JudoRestResponse<RatingVoteInput>>;
}
