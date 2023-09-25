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
  AdminSelectAnswerVoteEntryAttributes,
  AdminUserAttributes,
} from '../model';

import {} from './AdminSelectAnswerVoteSelectionMaskBuilder';

export class AdminSelectAnswerVoteEntryValueMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminSelectAnswerVoteSelectionAttributes>) {
    super('value', props);
  }
}

export class AdminSelectAnswerVoteEntryMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<AdminSelectAnswerVoteEntryAttributes | AdminSelectAnswerVoteEntryValueMaskBuilder>,
  ) {
    super(props);
  }
}
