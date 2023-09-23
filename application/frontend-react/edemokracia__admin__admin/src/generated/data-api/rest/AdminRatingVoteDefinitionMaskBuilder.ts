//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  AdminIssueAttributes,
  AdminDebateAttributes,
  AdminRatingVoteDefinitionAttributes,
  VoteEntryAttributes,
} from '../model';

import {} from './VoteEntryMaskBuilder';

export class AdminRatingVoteDefinitionVoteEntriesMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<VoteEntryAttributes>) {
    super('voteEntries', props);
  }
}

export class AdminRatingVoteDefinitionMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<AdminRatingVoteDefinitionAttributes | AdminRatingVoteDefinitionVoteEntriesMaskBuilder>,
  ) {
    super(props);
  }
}
