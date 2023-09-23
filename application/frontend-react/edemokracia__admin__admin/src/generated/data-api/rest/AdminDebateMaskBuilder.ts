//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  AdminYesNoVoteDefinitionAttributes,
  AdminCommentAttributes,
  AdminIssueAttributes,
  AdminVoteDefinitionAttributes,
  AdminDebateAttributes,
  AdminYesNoAbstainVoteDefinitionAttributes,
  AdminProAttributes,
  AdminRatingVoteDefinitionAttributes,
  AdminUserAttributes,
  AdminConAttributes,
} from '../model';

import { AdminCommentCreatedByMaskBuilder } from './AdminCommentMaskBuilder';
import {
  AdminConCreatedByMaskBuilder,
  AdminConConsMaskBuilder,
  AdminConProsMaskBuilder,
  AdminConCommentsMaskBuilder,
  AdminConParentDebateMaskBuilder,
  AdminConParentConMaskBuilder,
  AdminConParentProMaskBuilder,
} from './AdminConMaskBuilder';
import {
  AdminUserActivityCountiesMaskBuilder,
  AdminUserResidentCountyMaskBuilder,
  AdminUserActivityCitiesMaskBuilder,
  AdminUserResidentCityMaskBuilder,
  AdminUserActivityDistrictsMaskBuilder,
  AdminUserResidentDistrictMaskBuilder,
} from './AdminUserMaskBuilder';
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
import {
  AdminProCreatedByMaskBuilder,
  AdminProProsMaskBuilder,
  AdminProConsMaskBuilder,
  AdminProCommentsMaskBuilder,
  AdminProParentDebateMaskBuilder,
  AdminProParentProMaskBuilder,
  AdminProParentConMaskBuilder,
} from './AdminProMaskBuilder';
import { AdminRatingVoteDefinitionVoteEntriesMaskBuilder } from './AdminRatingVoteDefinitionMaskBuilder';
import {} from './AdminVoteDefinitionMaskBuilder';
import {} from './AdminYesNoAbstainVoteDefinitionMaskBuilder';
import {} from './AdminYesNoVoteDefinitionMaskBuilder';

export class AdminDebateIssueMaskBuilder extends RelationMaskBuilder {
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
    super('issue', props);
  }
}
export class AdminDebateCommentsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminCommentAttributes | AdminCommentCreatedByMaskBuilder>) {
    super('comments', props);
  }
}
export class AdminDebateCreatedByMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | AdminUserAttributes
      | AdminUserActivityCountiesMaskBuilder
      | AdminUserResidentCountyMaskBuilder
      | AdminUserActivityCitiesMaskBuilder
      | AdminUserResidentCityMaskBuilder
      | AdminUserActivityDistrictsMaskBuilder
      | AdminUserResidentDistrictMaskBuilder
    >,
  ) {
    super('createdBy', props);
  }
}
export class AdminDebateConsMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | AdminConAttributes
      | AdminConCreatedByMaskBuilder
      | AdminConConsMaskBuilder
      | AdminConProsMaskBuilder
      | AdminConCommentsMaskBuilder
      | AdminConParentDebateMaskBuilder
      | AdminConParentConMaskBuilder
      | AdminConParentProMaskBuilder
    >,
  ) {
    super('cons', props);
  }
}
export class AdminDebateProsMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | AdminProAttributes
      | AdminProCreatedByMaskBuilder
      | AdminProProsMaskBuilder
      | AdminProConsMaskBuilder
      | AdminProCommentsMaskBuilder
      | AdminProParentDebateMaskBuilder
      | AdminProParentProMaskBuilder
      | AdminProParentConMaskBuilder
    >,
  ) {
    super('pros', props);
  }
}
export class AdminDebateVoteDefinitionMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminVoteDefinitionAttributes>) {
    super('voteDefinition', props);
  }
}
export class AdminDebateYesNoVoteDefinitionMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminYesNoVoteDefinitionAttributes>) {
    super('yesNoVoteDefinition', props);
  }
}
export class AdminDebateYesNoAbstainVoteDefinitionMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminYesNoAbstainVoteDefinitionAttributes>) {
    super('yesNoAbstainVoteDefinition', props);
  }
}
export class AdminDebateRatingVoteDefinitionMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<AdminRatingVoteDefinitionAttributes | AdminRatingVoteDefinitionVoteEntriesMaskBuilder>,
  ) {
    super('ratingVoteDefinition', props);
  }
}

export class AdminDebateMaskBuilder extends MaskBuilder {
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
    >,
  ) {
    super(props);
  }
}
