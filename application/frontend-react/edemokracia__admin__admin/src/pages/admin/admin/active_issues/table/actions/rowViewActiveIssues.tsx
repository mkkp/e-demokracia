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
import type { AdminIssue, AdminIssueQueryCustomizer, AdminIssueStored } from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { routeToAdminAdminActiveIssuesView } from '~/routes';

export const ROW_VIEW_ACTIVE_ISSUES_ACTION_INTERFACE_KEY = 'RowViewActiveIssuesAction';
export type RowViewActiveIssuesAction = () => (entry: AdminIssueStored, successCallback: () => void) => Promise<void>;

export const useRowViewActiveIssuesAction: RowViewActiveIssuesAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewActiveIssuesAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_ACTIVE_ISSUES_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (entry: AdminIssueStored, successCallback: () => void) {
    closeAllDialogs();
    navigate(routeToAdminAdminActiveIssuesView(entry.__signedIdentifier));
  };
};