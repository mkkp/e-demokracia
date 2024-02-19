//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '../common';
import { ServiceIssue } from '../model/ServiceIssue';
import { FilterByIssueScope } from './FilterByIssueScope';
import { FilterByIssueStatus } from './FilterByIssueStatus';
import { FilterByVoteType } from './FilterByVoteType';
import { FilterBytypesBoolean } from './FilterBytypesBoolean';
import { FilterBytypesString } from './FilterBytypesString';
import { FilterBytypesText } from './FilterBytypesText';
import { FilterBytypesTimestamp } from './FilterBytypesTimestamp';

export interface ServiceIssueQueryCustomizer extends QueryCustomizer<ServiceIssue> {
  cityRepresentation?: Array<FilterBytypesString>;
  countyRepresentation?: Array<FilterBytypesString>;
  created?: Array<FilterBytypesTimestamp>;
  debateCloseAt?: Array<FilterBytypesTimestamp>;
  defaultVoteType?: Array<FilterByVoteType>;
  description?: Array<FilterBytypesText>;
  districtRepresentation?: Array<FilterBytypesString>;
  isEditable?: Array<FilterBytypesBoolean>;
  isFavorite?: Array<FilterBytypesBoolean>;
  isIssueActive?: Array<FilterBytypesBoolean>;
  isIssueDeletable?: Array<FilterBytypesBoolean>;
  isIssueDraft?: Array<FilterBytypesBoolean>;
  isIssueInVoting?: Array<FilterBytypesBoolean>;
  isIssueNotActive?: Array<FilterBytypesBoolean>;
  isIssueNotDeletable?: Array<FilterBytypesBoolean>;
  isIssueNotDraft?: Array<FilterBytypesBoolean>;
  isIssueNotInVoting?: Array<FilterBytypesBoolean>;
  isNotFavorite?: Array<FilterBytypesBoolean>;
  isVoteClosable?: Array<FilterBytypesBoolean>;
  isVoteNotClosable?: Array<FilterBytypesBoolean>;
  representation?: Array<FilterBytypesString>;
  scope?: Array<FilterByIssueScope>;
  status?: Array<FilterByIssueStatus>;
  title?: Array<FilterBytypesString>;
}
