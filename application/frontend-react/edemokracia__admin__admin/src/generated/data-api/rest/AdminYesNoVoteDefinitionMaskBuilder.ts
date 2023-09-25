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
  AdminIssueAttributes,
  AdminDebateAttributes,
  AdminYesNoVoteEntryAttributes,
} from '../model';

import { AdminYesNoVoteEntryOwnerMaskBuilder } from './AdminYesNoVoteEntryMaskBuilder';

export class AdminYesNoVoteDefinitionUserVoteEntryMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<AdminYesNoVoteEntryAttributes | AdminYesNoVoteEntryOwnerMaskBuilder>) {
    super('userVoteEntry', props);
  }
}

export class AdminYesNoVoteDefinitionMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<AdminYesNoVoteDefinitionAttributes | AdminYesNoVoteDefinitionUserVoteEntryMaskBuilder>,
  ) {
    super(props);
  }
}
