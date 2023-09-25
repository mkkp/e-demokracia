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
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminUserIssues,
  AdminUserIssuesStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { routeToAdminUserIssuesActiveIssuesInActivityCitiesView } from '~/routes';

export const ROW_VIEW_ACTIVE_ISSUES_IN_ACTIVITY_CITIES_ACTION_INTERFACE_KEY =
  'RowViewActiveIssuesInActivityCitiesAction';
export type RowViewActiveIssuesInActivityCitiesAction = () => (
  owner: JudoIdentifiable<AdminUserIssues>,
  entry: AdminIssueStored,
  successCallback: () => void,
) => Promise<void>;

export const useRowViewActiveIssuesInActivityCitiesAction: RowViewActiveIssuesInActivityCitiesAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewActiveIssuesInActivityCitiesAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_ACTIVE_ISSUES_IN_ACTIVITY_CITIES_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (
    owner: JudoIdentifiable<AdminUserIssues>,
    entry: AdminIssueStored,
    successCallback: () => void,
  ) {
    closeAllDialogs();
    navigate(routeToAdminUserIssuesActiveIssuesInActivityCitiesView(entry.__signedIdentifier));
  };
};
