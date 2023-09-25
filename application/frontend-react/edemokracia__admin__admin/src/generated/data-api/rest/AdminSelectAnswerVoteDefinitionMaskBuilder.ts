//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  AdminSelectAnswerVoteSelectionAttributes,
  AdminSelectAnswerVoteDefinitionAttributes,
  AdminIssueAttributes,
  AdminDebateAttributes,
  AdminSelectAnswerVoteEntryAttributes,
} from '../model';

import { AdminSelectAnswerVoteEntryValueMaskBuilder } from './AdminSelectAnswerVoteEntryMaskBuilder';
import {} from './AdminSelectAnswerVoteSelectionMaskBuilder';

export class AdminSelectAnswerVoteDefinitionUserVoteEntryMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<AdminSelectAnswerVoteEntryAttributes | AdminSelectAnswerVoteEntryValueMaskBuilder>,
  ) {
    super('userVoteEntry', props);
  }
}
export class AdminSelectAnswerVoteDefinitionVoteSelectionsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminSelectAnswerVoteSelectionAttributes>) {
    super('voteSelections', props);
  }
}

export class AdminSelectAnswerVoteDefinitionMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | AdminSelectAnswerVoteDefinitionAttributes
      | AdminSelectAnswerVoteDefinitionUserVoteEntryMaskBuilder
      | AdminSelectAnswerVoteDefinitionVoteSelectionsMaskBuilder
    >,
  ) {
    super(props);
  }
}
