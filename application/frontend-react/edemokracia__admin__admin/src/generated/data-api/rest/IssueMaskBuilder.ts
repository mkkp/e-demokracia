//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  CommentAttributes,
  CountyAttributes,
  CityAttributes,
  IssueTypeAttributes,
  DistrictAttributes,
  IssueAttributes,
  DebateAttributes,
  IssueAttachmentAttributes,
  IssueCategoryAttributes,
  UserAttributes,
} from '../model';

import {} from './IssueAttachmentMaskBuilder';
import { CommentVotesMaskBuilder } from './CommentMaskBuilder';

export class IssueAttachmentsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<IssueAttachmentAttributes>) {
    super('attachments', props);
  }
}
export class IssueCommentsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<CommentAttributes | CommentVotesMaskBuilder>) {
    super('comments', props);
  }
}

export class IssueMaskBuilder extends MaskBuilder {
  constructor(protected props: Array<IssueAttributes | IssueAttachmentsMaskBuilder | IssueCommentsMaskBuilder>) {
    super(props);
  }
}
