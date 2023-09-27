import type { BundleContext } from '@pandino/pandino-api';
import {
  ADMIN_USER_ISSUES_CREATE_ISSUE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY,
  AdminUserIssuesCreateIssueActionPostHandlerHook,
} from '~/pages/admin/admin/user_issues/view/actions';

import { useJudoNavigation } from '~/components';
import { processQueryCustomizer } from '~/utilities';

import { routeToAdminAdminUserCreatedIssuesView } from '~/routes';
import { AdminIssueStored } from '~/generated/data-api';
import { adminAdminServiceForUserCreatedIssuesImpl } from '~/generated/data-axios';

export function registerCustomAdminUserIssuesCreateIssueActionPostHandlerHook(context: BundleContext) {
  context.registerService<AdminUserIssuesCreateIssueActionPostHandlerHook>(
    ADMIN_USER_ISSUES_CREATE_ISSUE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY,
    customAdminUserIssuesCreateIssueActionPostHandlerHook,
  );
}

// Override return of createIssue from user issues
const customAdminUserIssuesCreateIssueActionPostHandlerHook: AdminUserIssuesCreateIssueActionPostHandlerHook = () => {
  const { navigate } = useJudoNavigation();

  return async (ownerCallback: () => void, result?: AdminIssueStored) => {
    // 1. Retrieve result identifier
    const id = result!.__identifier;

    // 2. Retrieve signedIdentifier from access
    const idAccessFilterCustomizer: any = {
      _identifier: id,
    };
    const res = await adminAdminServiceForUserCreatedIssuesImpl.listUserCreatedIssues(
      processQueryCustomizer(idAccessFilterCustomizer),
    );

    // 3. Open view page in access
    navigate(routeToAdminAdminUserCreatedIssuesView(res[0].__signedIdentifier));
  };
};
