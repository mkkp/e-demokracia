//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import { IssueCategoryAttributes, UserAttributes } from '../model';

export class IssueCategorySubcategoriesMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<IssueCategoryAttributes | IssueCategorySubcategoriesMaskBuilder>) {
    super('subcategories', props);
  }
}

export class IssueCategoryMaskBuilder extends MaskBuilder {
  constructor(protected props: Array<IssueCategoryAttributes | IssueCategorySubcategoriesMaskBuilder>) {
    super(props);
  }
}
