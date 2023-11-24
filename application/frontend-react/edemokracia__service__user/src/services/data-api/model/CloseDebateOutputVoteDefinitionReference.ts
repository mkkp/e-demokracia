//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';

export interface CloseDebateOutputVoteDefinitionReference {
  context?: null | string;
}

export type CloseDebateOutputVoteDefinitionReferenceAttributes = 'context';

export interface CloseDebateOutputVoteDefinitionReferenceStored
  extends JudoStored<CloseDebateOutputVoteDefinitionReference>,
    CloseDebateOutputVoteDefinitionReference {}