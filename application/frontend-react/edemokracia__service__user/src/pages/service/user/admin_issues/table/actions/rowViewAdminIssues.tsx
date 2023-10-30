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
import type { ServiceIssue, ServiceIssueQueryCustomizer, ServiceIssueStored } from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { routeToServiceUserAdminIssuesView } from '~/routes';

export const ROW_VIEW_ADMIN_ISSUES_ACTION_INTERFACE_KEY = 'RowViewAdminIssuesAction';
export type RowViewAdminIssuesAction = () => (entry: ServiceIssueStored, successCallback: () => void) => Promise<void>;

export const useRowViewAdminIssuesAction: RowViewAdminIssuesAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewAdminIssuesAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_ADMIN_ISSUES_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (entry: ServiceIssueStored, successCallback: () => void) {
    closeAllDialogs();
    navigate(routeToServiceUserAdminIssuesView(entry.__signedIdentifier));
  };
};
