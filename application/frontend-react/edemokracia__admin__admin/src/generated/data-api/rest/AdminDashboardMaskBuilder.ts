//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder } from './MaskBuilder';
import {
  AdminVoteEntryAttributes,
  AdminIssueAttributes,
  AdminDebateAttributes,
  AdminDashboardAttributes,
} from '../model';

export class AdminDashboardMaskBuilder extends MaskBuilder {
  constructor(protected props: Array<AdminDashboardAttributes>) {
    super(props);
  }
}
