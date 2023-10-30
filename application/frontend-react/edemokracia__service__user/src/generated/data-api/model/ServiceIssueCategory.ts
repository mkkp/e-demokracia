//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceServiceUserStored } from './ServiceServiceUser';

export interface ServiceIssueCategory {
  title: string;
  description: string;

  subcategories?: null | Array<ServiceIssueCategoryStored>;
  owner?: null | ServiceServiceUserStored;
}
export type ServiceIssueCategoryAttributes = 'title' | 'description';

export type ServiceIssueCategoryRelations = 'subcategories' | 'owner';

export interface ServiceIssueCategoryStored extends JudoStored<ServiceIssueCategory>, ServiceIssueCategory {}
