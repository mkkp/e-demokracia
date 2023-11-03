//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceIssue } from '../model/ServiceIssue';

import { FilterByBoolean } from './FilterByBoolean';
import { FilterByIssueScope } from './FilterByIssueScope';
import { FilterByIssueStatus } from './FilterByIssueStatus';
import { FilterByString } from './FilterByString';
import { FilterByText } from './FilterByText';
import { FilterByTimestamp } from './FilterByTimestamp';
import { FilterByVoteType } from './FilterByVoteType';

export interface ServiceIssueQueryCustomizer extends QueryCustomizer<ServiceIssue> {
  created?: Array<FilterByTimestamp>;
  title?: Array<FilterByString>;
  description?: Array<FilterByText>;
  status?: Array<FilterByIssueStatus>;
  representation?: Array<FilterByString>;
  defaultVoteType?: Array<FilterByVoteType>;
  scope?: Array<FilterByIssueScope>;
  countyRepresentation?: Array<FilterByString>;
  cityRepresentation?: Array<FilterByString>;
  districtRepresentation?: Array<FilterByString>;
  isFavorite?: Array<FilterByBoolean>;
  isNotFavorite?: Array<FilterByBoolean>;
  debateCloseAt?: Array<FilterByTimestamp>;
  isVoteClosable?: Array<FilterByBoolean>;
  isIssueDraft?: Array<FilterByBoolean>;
  isIssueActive?: Array<FilterByBoolean>;
  isIssueDeletable?: Array<FilterByBoolean>;
  isIssueNotActive?: Array<FilterByBoolean>;
  isVoteNotClosable?: Array<FilterByBoolean>;
  isIssueNotDraft?: Array<FilterByBoolean>;
  isIssueNotDeletable?: Array<FilterByBoolean>;
  isIssueInVoting?: Array<FilterByBoolean>;
  isIssueNotInVoting?: Array<FilterByBoolean>;
}
