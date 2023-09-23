import type { BundleContext } from '@pandino/pandino-api';
import {
  ADMIN_DASHBOARD_CREATE_ISSUE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY,
  AdminDashboardCreateIssueActionPostHandlerHook,
} from '~/pages/admin/admin/dashboardhome/actions';

import { useJudoNavigation } from '~/components';
import { processQueryCustomizer } from '~/utilities';

import { routeToAdminAdminIssuesView } from '~/routes';
import { AdminIssueStored } from '~/generated/data-api';
import { adminAdminServiceForIssuesImpl } from '~/generated/data-axios';

export function registerCustomAdminDashboardCreateIssueActionPostHandlerHook(context: BundleContext) {
  context.registerService<AdminDashboardCreateIssueActionPostHandlerHook>(
    ADMIN_DASHBOARD_CREATE_ISSUE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY,
    customAdminDashboardCreateIssueActionPostHandlerHook,
  );
}

// Override return of createIssue from dashboard
const customAdminDashboardCreateIssueActionPostHandlerHook: AdminDashboardCreateIssueActionPostHandlerHook = () => {
  const { navigate } = useJudoNavigation();

  return async (ownerCallback: () => void, result?: AdminIssueStored) => {
    // 1. Retrieve result identifier
    const id = result!.__identifier;

    // 2. Retrieve signedIdentifier from access
    const idAccessFilterCustomizer: any = {
      _identifier: id,
    };
    const res = await adminAdminServiceForIssuesImpl.listIssues(processQueryCustomizer(idAccessFilterCustomizer));

    // 3. Open view page in access
    navigate(routeToAdminAdminIssuesView(res[0].__signedIdentifier));
  };
};
