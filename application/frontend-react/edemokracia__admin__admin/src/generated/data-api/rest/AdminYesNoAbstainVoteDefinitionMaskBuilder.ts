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
  AdminYesNoAbstainVoteDefinitionAttributes,
  AdminYesNoAbstainVoteEntryAttributes,
} from '../model';

import { AdminYesNoAbstainVoteEntryOwnerMaskBuilder } from './AdminYesNoAbstainVoteEntryMaskBuilder';

export class AdminYesNoAbstainVoteDefinitionUserVoteEntryMaskBuilder extends RelationMaskBuilder {
  constructor(
    protected props: Array<AdminYesNoAbstainVoteEntryAttributes | AdminYesNoAbstainVoteEntryOwnerMaskBuilder>,
  ) {
    super('userVoteEntry', props);
  }
}

export class AdminYesNoAbstainVoteDefinitionMaskBuilder extends MaskBuilder {
  constructor(
    protected props: Array<
      AdminYesNoAbstainVoteDefinitionAttributes | AdminYesNoAbstainVoteDefinitionUserVoteEntryMaskBuilder
    >,
  ) {
    super(props);
  }
}
