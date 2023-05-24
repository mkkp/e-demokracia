//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: ViewAction

import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import type {
  AdminIssue,
  AdminIssueCategory,
  AdminIssueCategoryQueryCustomizer,
  AdminIssueCategoryStored,
  AdminIssueStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';

export const ROW_VIEW_CATEGORIES_ACTION_INTERFACE_KEY = 'RowViewCategoriesAction';
export type RowViewCategoriesAction = () => (
  owner: JudoIdentifiable<AdminIssue>,
  entry: AdminIssueCategoryStored,
) => Promise<void>;

export const useRowViewCategoriesAction: RowViewCategoriesAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewCategoriesAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_CATEGORIES_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminIssue>, entry: AdminIssueCategoryStored) {
    navigate(`admin/issue/categories/view/${entry.__signedIdentifier}`);
  };
};
