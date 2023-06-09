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
  AdminIssueCategory,
  AdminIssueCategoryQueryCustomizer,
  AdminIssueCategoryStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { routeToAdminIssueCategorySubcategoriesView } from '~/routes';

export const ROW_VIEW_SUBCATEGORIES_ACTION_INTERFACE_KEY = 'RowViewSubcategoriesAction';
export type RowViewSubcategoriesAction = () => (
  owner: JudoIdentifiable<AdminIssueCategory>,
  entry: AdminIssueCategoryStored,
) => Promise<void>;

export const useRowViewSubcategoriesAction: RowViewSubcategoriesAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewSubcategoriesAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_SUBCATEGORIES_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminIssueCategory>, entry: AdminIssueCategoryStored) {
    navigate(routeToAdminIssueCategorySubcategoriesView(entry.__signedIdentifier));
  };
};
