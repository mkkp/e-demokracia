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
  ProAttributes,
  IssueAttributes,
  VoteDefinitionAttributes,
  ConAttributes,
  DebateAttributes,
  UserAttributes,
} from '../model';

import { CommentVotesMaskBuilder } from './CommentMaskBuilder';
import { ConCommentsMaskBuilder, ConProsMaskBuilder, ConConsMaskBuilder, ConVotesMaskBuilder } from './ConMaskBuilder';
import {} from './VoteDefinitionMaskBuilder';
import { ProCommentsMaskBuilder, ProConsMaskBuilder, ProProsMaskBuilder, ProVotesMaskBuilder } from './ProMaskBuilder';

export class DebateDebateVoteMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<VoteDefinitionAttributes>) {
    super('debateVote', props);
  }
}
export class DebateCommentsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<CommentAttributes | CommentVotesMaskBuilder>) {
    super('comments', props);
  }
}
export class DebateConsMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      ConAttributes | ConCommentsMaskBuilder | ConProsMaskBuilder | ConConsMaskBuilder | ConVotesMaskBuilder
    >,
  ) {
    super('cons', props);
  }
}
export class DebateProsMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      ProAttributes | ProCommentsMaskBuilder | ProConsMaskBuilder | ProProsMaskBuilder | ProVotesMaskBuilder
    >,
  ) {
    super('pros', props);
  }
}

export class DebateMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | DebateAttributes
      | DebateDebateVoteMaskBuilder
      | DebateCommentsMaskBuilder
      | DebateConsMaskBuilder
      | DebateProsMaskBuilder
    >,
  ) {
    super(props);
  }
}
