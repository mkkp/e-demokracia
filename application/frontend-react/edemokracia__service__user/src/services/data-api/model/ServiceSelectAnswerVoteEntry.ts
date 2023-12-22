//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';
import { ServiceSelectAnswerVoteSelection } from './ServiceSelectAnswerVoteSelection';
import { ServiceSelectAnswerVoteSelectionStored } from './ServiceSelectAnswerVoteSelection';
import { ServiceServiceUser } from './ServiceServiceUser';
import { ServiceServiceUserStored } from './ServiceServiceUser';

export interface ServiceSelectAnswerVoteEntry {
  created: Date;
  createdBy?: null | string;
  valueRepresentation?: null | string;
  owner: ServiceServiceUserStored;
  value: ServiceSelectAnswerVoteSelectionStored;
}

export type ServiceSelectAnswerVoteEntryAttributes = 'created' | 'createdBy' | 'valueRepresentation';
export type ServiceSelectAnswerVoteEntryRelations = 'owner' | 'value';

export interface ServiceSelectAnswerVoteEntryStored
  extends JudoStored<ServiceSelectAnswerVoteEntry>,
    ServiceSelectAnswerVoteEntry {}
