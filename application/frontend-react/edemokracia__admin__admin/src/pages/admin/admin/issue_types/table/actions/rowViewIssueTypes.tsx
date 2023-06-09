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
import type { AdminIssueType, AdminIssueTypeQueryCustomizer, AdminIssueTypeStored } from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { routeToAdminAdminIssueTypesView } from '~/routes';

export const ROW_VIEW_ISSUE_TYPES_ACTION_INTERFACE_KEY = 'RowViewIssueTypesAction';
export type RowViewIssueTypesAction = () => (entry: AdminIssueTypeStored) => Promise<void>;

export const useRowViewIssueTypesAction: RowViewIssueTypesAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewIssueTypesAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_ISSUE_TYPES_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (entry: AdminIssueTypeStored) {
    navigate(routeToAdminAdminIssueTypesView(entry.__signedIdentifier));
  };
};
