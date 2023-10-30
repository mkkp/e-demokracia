//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  ServiceIssueAttributes,
  ServiceYesNoAbstainVoteDefinitionAttributes,
  ServiceServiceUserAttributes,
  ServiceVoteDefinitionAttributes,
  ServiceProAttributes,
  ServiceDebateAttributes,
  ServiceCommentAttributes,
  ServiceConAttributes,
  ServiceRatingVoteDefinitionAttributes,
  ServiceSelectAnswerVoteDefinitionAttributes,
  ServiceYesNoVoteDefinitionAttributes,
} from '../model';

import { ServiceCommentCreatedByMaskBuilder } from './ServiceCommentMaskBuilder';
import {
  ServiceConCreatedByMaskBuilder,
  ServiceConConsMaskBuilder,
  ServiceConProsMaskBuilder,
  ServiceConCommentsMaskBuilder,
  ServiceConParentConMaskBuilder,
  ServiceConParentProMaskBuilder,
} from './ServiceConMaskBuilder';
import {
  ServiceServiceUserActivityCountiesMaskBuilder,
  ServiceServiceUserResidentCountyMaskBuilder,
  ServiceServiceUserActivityCitiesMaskBuilder,
  ServiceServiceUserResidentCityMaskBuilder,
  ServiceServiceUserActivityDistrictsMaskBuilder,
  ServiceServiceUserResidentDistrictMaskBuilder,
} from './ServiceServiceUserMaskBuilder';
import {
  ServiceIssueAttachmentsMaskBuilder,
  ServiceIssueOwnerMaskBuilder,
  ServiceIssueCategoriesMaskBuilder,
  ServiceIssueDebatesMaskBuilder,
  ServiceIssueCommentsMaskBuilder,
  ServiceIssueCreatedByMaskBuilder,
  ServiceIssueIssueTypeMaskBuilder,
  ServiceIssueCountyMaskBuilder,
  ServiceIssueCityMaskBuilder,
  ServiceIssueDistrictMaskBuilder,
} from './ServiceIssueMaskBuilder';
import {
  ServiceProCreatedByMaskBuilder,
  ServiceProProsMaskBuilder,
  ServiceProConsMaskBuilder,
  ServiceProCommentsMaskBuilder,
  ServiceProParentProMaskBuilder,
  ServiceProParentConMaskBuilder,
} from './ServiceProMaskBuilder';
import { ServiceRatingVoteDefinitionUserVoteEntryMaskBuilder } from './ServiceRatingVoteDefinitionMaskBuilder';
import {
  ServiceSelectAnswerVoteDefinitionUserVoteEntryMaskBuilder,
  ServiceSelectAnswerVoteDefinitionVoteSelectionsMaskBuilder,
} from './ServiceSelectAnswerVoteDefinitionMaskBuilder';
import {} from './ServiceVoteDefinitionMaskBuilder';
import { ServiceYesNoAbstainVoteDefinitionUserVoteEntryMaskBuilder } from './ServiceYesNoAbstainVoteDefinitionMaskBuilder';
import { ServiceYesNoVoteDefinitionUserVoteEntryMaskBuilder } from './ServiceYesNoVoteDefinitionMaskBuilder';

export class ServiceDebateIssueMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | ServiceIssueAttributes
      | ServiceIssueAttachmentsMaskBuilder
      | ServiceIssueOwnerMaskBuilder
      | ServiceIssueCategoriesMaskBuilder
      | ServiceIssueDebatesMaskBuilder
      | ServiceIssueCommentsMaskBuilder
      | ServiceIssueCreatedByMaskBuilder
      | ServiceIssueIssueTypeMaskBuilder
      | ServiceIssueCountyMaskBuilder
      | ServiceIssueCityMaskBuilder
      | ServiceIssueDistrictMaskBuilder
    >,
  ) {
    super('issue', props);
  }
}
export class ServiceDebateCommentsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceCommentAttributes | ServiceCommentCreatedByMaskBuilder>) {
    super('comments', props);
  }
}
export class ServiceDebateCreatedByMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | ServiceServiceUserAttributes
      | ServiceServiceUserActivityCountiesMaskBuilder
      | ServiceServiceUserResidentCountyMaskBuilder
      | ServiceServiceUserActivityCitiesMaskBuilder
      | ServiceServiceUserResidentCityMaskBuilder
      | ServiceServiceUserActivityDistrictsMaskBuilder
      | ServiceServiceUserResidentDistrictMaskBuilder
    >,
  ) {
    super('createdBy', props);
  }
}
export class ServiceDebateConsMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | ServiceConAttributes
      | ServiceConCreatedByMaskBuilder
      | ServiceConConsMaskBuilder
      | ServiceConProsMaskBuilder
      | ServiceConCommentsMaskBuilder
      | ServiceConParentConMaskBuilder
      | ServiceConParentProMaskBuilder
    >,
  ) {
    super('cons', props);
  }
}
export class ServiceDebateProsMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | ServiceProAttributes
      | ServiceProCreatedByMaskBuilder
      | ServiceProProsMaskBuilder
      | ServiceProConsMaskBuilder
      | ServiceProCommentsMaskBuilder
      | ServiceProParentProMaskBuilder
      | ServiceProParentConMaskBuilder
    >,
  ) {
    super('pros', props);
  }
}
export class ServiceDebateVoteDefinitionMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceVoteDefinitionAttributes>) {
    super('voteDefinition', props);
  }
}
export class ServiceDebateYesNoVoteDefinitionMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<ServiceYesNoVoteDefinitionAttributes | ServiceYesNoVoteDefinitionUserVoteEntryMaskBuilder>,
  ) {
    super('yesNoVoteDefinition', props);
  }
}
export class ServiceDebateYesNoAbstainVoteDefinitionMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      ServiceYesNoAbstainVoteDefinitionAttributes | ServiceYesNoAbstainVoteDefinitionUserVoteEntryMaskBuilder
    >,
  ) {
    super('yesNoAbstainVoteDefinition', props);
  }
}
export class ServiceDebateRatingVoteDefinitionMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<ServiceRatingVoteDefinitionAttributes | ServiceRatingVoteDefinitionUserVoteEntryMaskBuilder>,
  ) {
    super('ratingVoteDefinition', props);
  }
}
export class ServiceDebateSelectAnswerVoteDefinitionMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<
      | ServiceSelectAnswerVoteDefinitionAttributes
      | ServiceSelectAnswerVoteDefinitionUserVoteEntryMaskBuilder
      | ServiceSelectAnswerVoteDefinitionVoteSelectionsMaskBuilder
    >,
  ) {
    super('selectAnswerVoteDefinition', props);
  }
}

export class ServiceDebateMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | ServiceDebateAttributes
      | ServiceDebateIssueMaskBuilder
      | ServiceDebateCommentsMaskBuilder
      | ServiceDebateCreatedByMaskBuilder
      | ServiceDebateConsMaskBuilder
      | ServiceDebateProsMaskBuilder
      | ServiceDebateVoteDefinitionMaskBuilder
      | ServiceDebateYesNoVoteDefinitionMaskBuilder
      | ServiceDebateYesNoAbstainVoteDefinitionMaskBuilder
      | ServiceDebateRatingVoteDefinitionMaskBuilder
      | ServiceDebateSelectAnswerVoteDefinitionMaskBuilder
    >,
  ) {
    super(props);
  }
}
