//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import { JudoStored } from '@judo/data-api-common';
import { UserStored } from './User';

export interface IssueCategory {
  title: string;
  description: string;

  subcategories?: null | Array<IssueCategoryStored>;
  owner?: null | UserStored;
}
export type IssueCategoryAttributes = 'title' | 'description';

export type IssueCategoryRelations = 'subcategories' | 'owner';

export interface IssueCategoryStored extends JudoStored<IssueCategory>, IssueCategory {}
