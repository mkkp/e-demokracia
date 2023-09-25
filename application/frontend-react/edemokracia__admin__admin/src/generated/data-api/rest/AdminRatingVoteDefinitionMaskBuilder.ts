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
  AdminRatingVoteEntryAttributes,
} from '../model';

import {} from './AdminRatingVoteEntryMaskBuilder';

export class AdminRatingVoteDefinitionUserVoteEntryMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminRatingVoteEntryAttributes>) {
    super('userVoteEntry', props);
  }
}

export class AdminRatingVoteDefinitionMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<AdminRatingVoteDefinitionAttributes | AdminRatingVoteDefinitionUserVoteEntryMaskBuilder>,
  ) {
    super(props);
  }
}
