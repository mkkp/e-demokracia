import type { BundleContext } from '@pandino/pandino-api';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { navigateToIssue } from '~/custom/services/issueService';
import {
  SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_CREATE_ISSUE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
  type ServiceCreateIssueInputCreateIssueInput_FormActionsHook,
} from '~/dialogs/Service/UserIssues/UserIssues_View_Edit/CreateIssue/Input/Form/customization';
import type { ServiceIssueStored } from '~/services/data-api/model/ServiceIssue';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForIssuesImpl } from '~/services/data-axios/UserServiceForIssuesImpl';

/**
 * XMIID: User/(esm/_jK51w1q4Ee6_67aMO2jOsw)/OperationUnmappedInputPageDefinition
 * Name: service::UserIssues::UserIssues_View_Edit::createIssue::Input::Form
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceUserIssuesUserIssues_View_EditCreateIssueInputFormActionsHook(context: BundleContext) {
  context.registerService<ServiceCreateIssueInputCreateIssueInput_FormActionsHook>(
    SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_CREATE_ISSUE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
    ServiceUserIssuesUserIssues_View_EditCreateIssueInputFormActionsHook,
  );
}

const ServiceUserIssuesUserIssues_View_EditCreateIssueInputFormActionsHook: ServiceCreateIssueInputCreateIssueInput_FormActionsHook =
  (ownerData, data, editMode, storeDiff, submit, onSubmit) => {
    // call other hooks here
    const { t } = useTranslation();
    const { navigate } = useJudoNavigation();
    const userServiceForIssuesImpl = useMemo(() => new UserServiceForIssuesImpl(judoAxiosProvider), []);

    return {
      postCreateIssueForUserIssuesAction: async (
        output: ServiceIssueStored,
        onSubmit: (result?: ServiceIssueStored) => Promise<void>,
        onClose: () => Promise<void>,
      ) => {
        await onClose();
        navigateToIssue(output, userServiceForIssuesImpl, navigate);
      },
    };
  };
