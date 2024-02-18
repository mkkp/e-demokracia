//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { ServiceVoteDefinitionAttributes, ServiceVoteEntryAttributes } from '../model';
import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import {} from './ServiceVoteDefinitionReferenceMaskBuilder';

export class ServiceVoteEntryVoteDefinitionReferenceMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<any>) {
    super('voteDefinitionReference', props);
  }
}

export class ServiceVoteEntryMaskBuilder extends MaskBuilder {
  constructor(protected props: Array<ServiceVoteEntryAttributes | ServiceVoteEntryVoteDefinitionReferenceMaskBuilder>) {
    super(props);
  }
}
