//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  CloseDebateOutputVoteDefinitionReferenceStored,
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
} from '../data-api';

/**
 * Class Service for CloseDebateOutputVoteDefinitionReference
 */
export interface CloseDebateOutputVoteDefinitionReferenceService {
  refresh(
    target: JudoIdentifiable<CloseDebateOutputVoteDefinitionReference>,
    queryCustomizer?: CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
}
