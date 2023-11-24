//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceIssue } from '../model/ServiceIssue';
import { FilterByIssueScope } from './FilterByIssueScope';
import { FilterByIssueStatus } from './FilterByIssueStatus';
import { FilterByVoteType } from './FilterByVoteType';
import { FilterBytypesBoolean } from './FilterBytypesBoolean';
import { FilterBytypesString } from './FilterBytypesString';
import { FilterBytypesText } from './FilterBytypesText';
import { FilterBytypesTimestamp } from './FilterBytypesTimestamp';

export interface ServiceIssueQueryCustomizer extends QueryCustomizer<ServiceIssue> {
  created?: Array<FilterBytypesTimestamp>;
  title?: Array<FilterBytypesString>;
  description?: Array<FilterBytypesText>;
  status?: Array<FilterByIssueStatus>;
  representation?: Array<FilterBytypesString>;
  defaultVoteType?: Array<FilterByVoteType>;
  scope?: Array<FilterByIssueScope>;
  countyRepresentation?: Array<FilterBytypesString>;
  cityRepresentation?: Array<FilterBytypesString>;
  districtRepresentation?: Array<FilterBytypesString>;
  isFavorite?: Array<FilterBytypesBoolean>;
  isNotFavorite?: Array<FilterBytypesBoolean>;
  debateCloseAt?: Array<FilterBytypesTimestamp>;
  isVoteClosable?: Array<FilterBytypesBoolean>;
  isIssueDraft?: Array<FilterBytypesBoolean>;
  isIssueActive?: Array<FilterBytypesBoolean>;
  isIssueDeletable?: Array<FilterBytypesBoolean>;
  isIssueNotActive?: Array<FilterBytypesBoolean>;
  isVoteNotClosable?: Array<FilterBytypesBoolean>;
  isIssueNotDraft?: Array<FilterBytypesBoolean>;
  isIssueNotDeletable?: Array<FilterBytypesBoolean>;
  isIssueInVoting?: Array<FilterBytypesBoolean>;
  isIssueNotInVoting?: Array<FilterBytypesBoolean>;
}
