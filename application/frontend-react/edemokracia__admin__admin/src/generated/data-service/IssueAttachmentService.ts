//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { IssueAttachmentQueryCustomizer, IssueAttachmentStored, IssueAttachment } from '../data-api';

/**
 * Class Service for IssueAttachment
 */
export interface IssueAttachmentService {
  refresh(
    target: JudoIdentifiable<IssueAttachment>,
    queryCustomizer?: IssueAttachmentQueryCustomizer,
  ): Promise<IssueAttachmentStored>;
}
