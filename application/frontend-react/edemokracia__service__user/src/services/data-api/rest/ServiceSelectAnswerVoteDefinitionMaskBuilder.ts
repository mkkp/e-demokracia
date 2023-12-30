//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import {
  ServiceIssueAttributes,
  ServiceSelectAnswerVoteDefinitionAttributes,
  ServiceSelectAnswerVoteEntryAttributes,
  ServiceSelectAnswerVoteSelectionAttributes,
  ServiceServiceUserAttributes,
} from '../model';
import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import { ServiceSelectAnswerVoteEntryValueMaskBuilder } from './ServiceSelectAnswerVoteEntryMaskBuilder';
import {} from './ServiceSelectAnswerVoteSelectionMaskBuilder';

export class ServiceSelectAnswerVoteDefinitionUserVoteEntryMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<ServiceSelectAnswerVoteEntryAttributes | ServiceSelectAnswerVoteEntryValueMaskBuilder>,
  ) {
    super('userVoteEntry', props);
  }
}
export class ServiceSelectAnswerVoteDefinitionVoteSelectionsMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceSelectAnswerVoteSelectionAttributes>) {
    super('voteSelections', props);
  }
}

export class ServiceSelectAnswerVoteDefinitionMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      | ServiceSelectAnswerVoteDefinitionAttributes
      | ServiceSelectAnswerVoteDefinitionUserVoteEntryMaskBuilder
      | ServiceSelectAnswerVoteDefinitionVoteSelectionsMaskBuilder
    >,
  ) {
    super(props);
  }
}
