//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { EdemokraciaVoteStatus } from './EdemokraciaVoteStatus';
import { ServiceDebateStored } from './ServiceDebate';
import { ServiceIssueStored } from './ServiceIssue';
import { ServiceYesNoAbstainVoteEntryStored } from './ServiceYesNoAbstainVoteEntry';

export interface ServiceYesNoAbstainVoteDefinition {
  title: string;
  created: Date;
  description: string;
  status: EdemokraciaVoteStatus;
  closeAt: Date;
  userHasVoteEntry?: null | boolean;
  userHasNoVoteEntry?: null | boolean;

  debate?: null | ServiceDebateStored;
  issue?: null | ServiceIssueStored;
  voteEntries?: null | Array<ServiceYesNoAbstainVoteEntryStored>;
  userVoteEntry?: null | ServiceYesNoAbstainVoteEntryStored;
}
export type ServiceYesNoAbstainVoteDefinitionAttributes =
  | 'title'
  | 'created'
  | 'description'
  | 'status'
  | 'closeAt'
  | 'userHasVoteEntry'
  | 'userHasNoVoteEntry';

export type ServiceYesNoAbstainVoteDefinitionRelations = 'debate' | 'issue' | 'voteEntries' | 'userVoteEntry';

export interface ServiceYesNoAbstainVoteDefinitionStored
  extends JudoStored<ServiceYesNoAbstainVoteDefinition>,
    ServiceYesNoAbstainVoteDefinition {}
