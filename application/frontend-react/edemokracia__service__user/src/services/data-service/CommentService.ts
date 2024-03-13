//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { Comment, CommentQueryCustomizer, CommentStored, JudoRestResponse } from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for Comment
 */
export interface CommentService {
  refresh(
    target: JudoIdentifiable<Comment>,
    queryCustomizer?: CommentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<CommentStored>>;
  voteDown(owner: JudoIdentifiable<Comment>): Promise<JudoRestResponse<void>>;
  voteUp(owner: JudoIdentifiable<Comment>): Promise<JudoRestResponse<void>>;
}
