//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {
  ServiceIssueAttributes,
  ServiceServiceUserAttributes,
  ServiceYesNoVoteDefinitionAttributes,
  ServiceYesNoVoteEntryAttributes,
} from '../model';
import { ServiceYesNoVoteEntryOwnerMaskBuilder } from './ServiceYesNoVoteEntryMaskBuilder';

export class ServiceYesNoVoteDefinitionUserVoteEntryMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<ServiceYesNoVoteEntryAttributes | ServiceYesNoVoteEntryOwnerMaskBuilder>) {
    super('userVoteEntry', props);
  }
}

export class ServiceYesNoVoteDefinitionMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<ServiceYesNoVoteDefinitionAttributes | ServiceYesNoVoteDefinitionUserVoteEntryMaskBuilder>,
  ) {
    super(props);
  }
}
