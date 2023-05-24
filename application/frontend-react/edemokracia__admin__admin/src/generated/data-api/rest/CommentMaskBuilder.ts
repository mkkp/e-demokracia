//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import { CommentAttributes, SimpleVoteAttributes, UserAttributes } from '../model';

import {} from './SimpleVoteMaskBuilder';

export class CommentVotesMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<SimpleVoteAttributes>) {
    super('votes', props);
  }
}

export class CommentMaskBuilder extends MaskBuilder {
  constructor(protected props: Array<CommentAttributes | CommentVotesMaskBuilder>) {
    super(props);
  }
}
