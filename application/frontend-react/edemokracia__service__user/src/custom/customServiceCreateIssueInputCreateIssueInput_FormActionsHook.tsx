/**
 * It navigates to User -> Issues access view of the
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
import { routeToServiceUserIssuesAccessViewPage } from '~/routes';
import { ServiceIssue, ServiceIssueStored } from '~/services/data-api';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForIssuesImpl } from '~/services/data-axios/UserServiceForIssuesImpl';

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
    const userServiceForIssuesImpl = useMemo(() => new UserServiceForIssuesImpl(judoAxiosProvider), []);

    return {
      postCreateIssueForUserIssuesAction: async (
        output: ServiceIssueStored,
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

        const res = await userServiceForIssuesImpl.list(undefined, processQueryCustomizer(idAccessFilterCustomizer));

        await onClose();

        // 3. Open view page in access
        navigate(routeToServiceUserIssuesAccessViewPage(res.data[0].__signedIdentifier));
      },
    };
  };
