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
  ServiceYesNoAbstainVoteEntryAttributes,
} from '../model';

import { ServiceYesNoAbstainVoteEntryOwnerMaskBuilder } from './ServiceYesNoAbstainVoteEntryMaskBuilder';

export class ServiceYesNoAbstainVoteDefinitionUserVoteEntryMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<ServiceYesNoAbstainVoteEntryAttributes | ServiceYesNoAbstainVoteEntryOwnerMaskBuilder>,
  ) {
    super('userVoteEntry', props);
  }
}

export class ServiceYesNoAbstainVoteDefinitionMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      ServiceYesNoAbstainVoteDefinitionAttributes | ServiceYesNoAbstainVoteDefinitionUserVoteEntryMaskBuilder
    >,
  ) {
    super(props);
  }
}
