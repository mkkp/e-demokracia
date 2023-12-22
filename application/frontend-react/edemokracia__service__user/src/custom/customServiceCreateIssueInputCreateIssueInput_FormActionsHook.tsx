/**
 * It navigates to User -> userCreatedIssues access view of the
 * created issue called with UserIssues 'Create new issue' button.
 */

import type { BundleContext } from '@pandino/pandino-api';
import { useMemo } from 'react';

import { useJudoNavigation } from '~/components';
import { processQueryCustomizer } from '~/utilities';

import {
  SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_CREATE_ISSUE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
  ServiceCreateIssueInputCreateIssueInput_FormActionsHook,
} from '~/dialogs/Service/UserIssues/UserIssues_View_Edit/CreateIssue/Input/Form';
import { routeToServiceUserUserCreatedIssuesAccessViewPage } from '~/routes';
import { ServiceIssue, ServiceIssueStored } from '~/services/data-api';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForUserCreatedIssuesImpl } from '~/services/data-axios/UserServiceForUserCreatedIssuesImpl';

export function registerServiceCreateIssueInputCreateIssueInput_FormActionsHook(context: BundleContext) {
  context.registerService<ServiceCreateIssueInputCreateIssueInput_FormActionsHook>(
    SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_CREATE_ISSUE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
    customServiceCreateIssueInputCreateIssueInput_FormActionsHook,
  );
}

// Override return of createIssue from user issues
const customServiceCreateIssueInputCreateIssueInput_FormActionsHook: ServiceCreateIssueInputCreateIssueInput_FormActionsHook =
  () => {
    const { navigate } = useJudoNavigation();
    const userServiceForUserCreatedIssuesImpl = useMemo(
      () => new UserServiceForUserCreatedIssuesImpl(judoAxiosProvider),
      [],
    );

    return {
      postCreateIssueForUserIssuesAction: async (
        output: ServiceIssue,
        onSubmit: (result?: ServiceIssueStored) => Promise<void>,
        onClose: () => Promise<void>,
      ) => {
        // 1. Retrieve result identifier
        // TODO: Use output as stored type
        const id = (output as any)!.__identifier;

        // 2. Retrieve signedIdentifier from access
        const idAccessFilterCustomizer: any = {
          _identifier: id,
        };

        const res = await userServiceForUserCreatedIssuesImpl.list(processQueryCustomizer(idAccessFilterCustomizer));

        await onClose();

        // 3. Open view page in access
        navigate(routeToServiceUserUserCreatedIssuesAccessViewPage(res[0].__signedIdentifier));
      },
    };
  };
