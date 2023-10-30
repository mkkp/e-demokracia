//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  ServiceServiceUserAttributes,
  ServiceSelectAnswerVoteEntryAttributes,
  ServiceSelectAnswerVoteSelectionAttributes,
} from '../model';

import {} from './ServiceSelectAnswerVoteSelectionMaskBuilder';

export class ServiceSelectAnswerVoteEntryValueMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceSelectAnswerVoteSelectionAttributes>) {
    super('value', props);
  }
}

export class ServiceSelectAnswerVoteEntryMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<ServiceSelectAnswerVoteEntryAttributes | ServiceSelectAnswerVoteEntryValueMaskBuilder>,
  ) {
    super(props);
  }
}
