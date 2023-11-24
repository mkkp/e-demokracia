//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { Comment, CommentStored, CommentQueryCustomizer } from '../data-api';

/**
 * Class Service for Comment
 */
export interface CommentService {
  refresh(target: JudoIdentifiable<Comment>, queryCustomizer?: CommentQueryCustomizer): Promise<CommentStored>;
  voteUp(owner: JudoIdentifiable<Comment>): Promise<void>;
  voteDown(owner: JudoIdentifiable<Comment>): Promise<void>;
}
