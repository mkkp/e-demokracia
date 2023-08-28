//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminUserStored } from './AdminUser';

export interface AdminIssueCategory {
  title: string;
  description: string;

  subcategories?: null | Array<AdminIssueCategoryStored>;
  owner?: null | AdminUserStored;
}
export type AdminIssueCategoryAttributes = 'title' | 'description';

export type AdminIssueCategoryRelations = 'subcategories' | 'owner';

export interface AdminIssueCategoryStored extends JudoStored<AdminIssueCategory>, AdminIssueCategory {}
