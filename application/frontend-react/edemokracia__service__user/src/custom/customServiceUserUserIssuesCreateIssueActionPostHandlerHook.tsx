import type { BundleContext } from '@pandino/pandino-api';
import {
  SERVICE_USER_ISSUES_CREATE_ISSUE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY,
  ServiceUserIssuesCreateIssueActionPostHandlerHook,
} from '~/pages/service/user/user_issues/view/actions';

import { useJudoNavigation } from '~/components';
import { processQueryCustomizer } from '~/utilities';

import { routeToServiceUserUserCreatedIssuesView } from '~/routes';
import { ServiceIssueStored } from '~/generated/data-api';
import { serviceUserServiceForUserCreatedIssuesImpl } from '~/generated/data-axios';

export function registerCustomServiceUserIssuesCreateIssueActionPostHandlerHook(context: BundleContext) {
  context.registerService<ServiceUserIssuesCreateIssueActionPostHandlerHook>(
    SERVICE_USER_ISSUES_CREATE_ISSUE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY,
    customServiceUserIssuesCreateIssueActionPostHandlerHook,
  );
}

// Override return of createIssue from user issues
const customServiceUserIssuesCreateIssueActionPostHandlerHook: ServiceUserIssuesCreateIssueActionPostHandlerHook =
  () => {
    const { navigate } = useJudoNavigation();

    return async (ownerCallback: () => void, result?: ServiceIssueStored) => {
      // 1. Retrieve result identifier
      const id = result!.__identifier;

      // 2. Retrieve signedIdentifier from access
      const idAccessFilterCustomizer: any = {
        _identifier: id,
      };
      const res = await serviceUserServiceForUserCreatedIssuesImpl.listUserCreatedIssues(
        processQueryCustomizer(idAccessFilterCustomizer),
      );

      // 3. Open view page in access
      navigate(routeToServiceUserUserCreatedIssuesView(res[0].__signedIdentifier));
    };
  };
