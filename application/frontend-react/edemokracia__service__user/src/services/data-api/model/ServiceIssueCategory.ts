//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';
import { ServiceServiceUser } from './ServiceServiceUser';
import { ServiceServiceUserStored } from './ServiceServiceUser';

export interface ServiceIssueCategory {
  description: string;
  title: string;
  owner?: null | ServiceServiceUserStored;
  subcategories?: null | Array<ServiceIssueCategoryStored>;
}

export type ServiceIssueCategoryAttributes = 'description' | 'title';
export type ServiceIssueCategoryRelations = 'owner' | 'subcategories';

export interface ServiceIssueCategoryStored extends JudoStored<ServiceIssueCategory>, ServiceIssueCategory {}
