//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  AdminVoteEntryAttributes,
  AdminIssueAttributes,
  AdminDebateAttributes,
  AdminDashboardAttributes,
} from '../model';

import {
  AdminDebateIssueMaskBuilder,
  AdminDebateCommentsMaskBuilder,
  AdminDebateCreatedByMaskBuilder,
  AdminDebateConsMaskBuilder,
  AdminDebateProsMaskBuilder,
  AdminDebateVoteDefinitionMaskBuilder,
  AdminDebateYesNoVoteDefinitionMaskBuilder,
  AdminDebateYesNoAbstainVoteDefinitionMaskBuilder,
  AdminDebateRatingVoteDefinitionMaskBuilder,
  AdminDebateSelectAnswerVoteDefinitionMaskBuilder,
} from './AdminDebateMaskBuilder';
import {
  AdminIssueAttachmentsMaskBuilder,
  AdminIssueOwnerMaskBuilder,
  AdminIssueCategoriesMaskBuilder,
  AdminIssueDebatesMaskBuilder,
  AdminIssueCommentsMaskBuilder,
  AdminIssueCreatedByMaskBuilder,
  AdminIssueIssueTypeMaskBuilder,
  AdminIssueCountyMaskBuilder,
  AdminIssueCityMaskBuilder,
  AdminIssueDistrictMaskBuilder,
} from './AdminIssueMaskBuilder';
import {} from './AdminVoteEntryMaskBuilder';

export class AdminDashboardIssuesOwnedMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | AdminIssueAttributes
      | AdminIssueAttachmentsMaskBuilder
      | AdminIssueOwnerMaskBuilder
      | AdminIssueCategoriesMaskBuilder
      | AdminIssueDebatesMaskBuilder
      | AdminIssueCommentsMaskBuilder
      | AdminIssueCreatedByMaskBuilder
      | AdminIssueIssueTypeMaskBuilder
      | AdminIssueCountyMaskBuilder
      | AdminIssueCityMaskBuilder
      | AdminIssueDistrictMaskBuilder
    >,
  ) {
    super('issuesOwned', props);
  }
}
export class AdminDashboardDebatesMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | AdminDebateAttributes
      | AdminDebateIssueMaskBuilder
      | AdminDebateCommentsMaskBuilder
      | AdminDebateCreatedByMaskBuilder
      | AdminDebateConsMaskBuilder
      | AdminDebateProsMaskBuilder
      | AdminDebateVoteDefinitionMaskBuilder
      | AdminDebateYesNoVoteDefinitionMaskBuilder
      | AdminDebateYesNoAbstainVoteDefinitionMaskBuilder
      | AdminDebateRatingVoteDefinitionMaskBuilder
      | AdminDebateSelectAnswerVoteDefinitionMaskBuilder
    >,
  ) {
    super('debates', props);
  }
}
export class AdminDashboardVoteEntriesMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminVoteEntryAttributes>) {
    super('voteEntries', props);
  }
}

export class AdminDashboardMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | AdminDashboardAttributes
      | AdminDashboardIssuesOwnedMaskBuilder
      | AdminDashboardDebatesMaskBuilder
      | AdminDashboardVoteEntriesMaskBuilder
    >,
  ) {
    super(props);
  }
}
