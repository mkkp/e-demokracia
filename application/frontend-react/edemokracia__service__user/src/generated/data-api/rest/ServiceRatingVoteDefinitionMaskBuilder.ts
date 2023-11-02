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
  ServiceRatingVoteEntryAttributes,
  ServiceRatingVoteDefinitionAttributes,
} from '../model';

import {} from './ServiceRatingVoteEntryMaskBuilder';

export class ServiceRatingVoteDefinitionUserVoteEntryMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceRatingVoteEntryAttributes>) {
    super('userVoteEntry', props);
  }
}

export class ServiceRatingVoteDefinitionMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<ServiceRatingVoteDefinitionAttributes | ServiceRatingVoteDefinitionUserVoteEntryMaskBuilder>,
  ) {
    super(props);
  }
}
