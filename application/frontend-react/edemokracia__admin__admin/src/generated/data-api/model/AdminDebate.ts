//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminCommentStored } from './AdminComment';
import { AdminConStored } from './AdminCon';
import { AdminIssueStored } from './AdminIssue';
import { AdminProStored } from './AdminPro';
import { AdminRatingVoteDefinitionStored } from './AdminRatingVoteDefinition';
import { AdminSelectAnswerVoteDefinitionStored } from './AdminSelectAnswerVoteDefinition';
import { AdminUserStored } from './AdminUser';
import { AdminVoteDefinitionStored } from './AdminVoteDefinition';
import { AdminYesNoAbstainVoteDefinitionStored } from './AdminYesNoAbstainVoteDefinition';
import { AdminYesNoVoteDefinitionStored } from './AdminYesNoVoteDefinition';
import { EdemokraciaDebateStatus } from './EdemokraciaDebateStatus';
import { EdemokraciaIssueScope } from './EdemokraciaIssueScope';

export interface AdminDebate {
  closeAt: Date;
  description: string;
  status: EdemokraciaDebateStatus;
  title: string;
  issueTitle?: null | string;
  isClosed?: null | boolean;
  isNotClosed?: null | boolean;
  scope?: null | EdemokraciaIssueScope;
  districtRepresentation?: null | string;
  cityRepresentation?: null | string;
  countyRepresentation?: null | string;
  isFavorite?: null | boolean;
  isNotFavorite?: null | boolean;

  issue?: null | AdminIssueStored;
  comments?: null | Array<AdminCommentStored>;
  createdBy?: null | AdminUserStored;
  cons?: null | Array<AdminConStored>;
  pros?: null | Array<AdminProStored>;
  voteDefinition?: null | AdminVoteDefinitionStored;
  yesNoVoteDefinition?: null | AdminYesNoVoteDefinitionStored;
  yesNoAbstainVoteDefinition?: null | AdminYesNoAbstainVoteDefinitionStored;
  ratingVoteDefinition?: null | AdminRatingVoteDefinitionStored;
  selectAnswerVoteDefinition?: null | AdminSelectAnswerVoteDefinitionStored;
}
export type AdminDebateAttributes =
  | 'closeAt'
  | 'description'
  | 'status'
  | 'title'
  | 'issueTitle'
  | 'isClosed'
  | 'isNotClosed'
  | 'scope'
  | 'districtRepresentation'
  | 'cityRepresentation'
  | 'countyRepresentation'
  | 'isFavorite'
  | 'isNotFavorite';

export type AdminDebateRelations =
  | 'issue'
  | 'comments'
  | 'createdBy'
  | 'cons'
  | 'pros'
  | 'voteDefinition'
  | 'yesNoVoteDefinition'
  | 'yesNoAbstainVoteDefinition'
  | 'ratingVoteDefinition'
  | 'selectAnswerVoteDefinition';

export interface AdminDebateStored extends JudoStored<AdminDebate>, AdminDebate {}
