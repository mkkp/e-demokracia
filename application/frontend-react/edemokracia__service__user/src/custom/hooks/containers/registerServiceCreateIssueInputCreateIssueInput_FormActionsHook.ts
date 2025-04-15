import type { BundleContext } from '@pandino/pandino-api';
import { useJudoNavigation } from '~/components';
import { SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY } from '~/containers/Service/CreateIssueInput/CreateIssueInput_Form/customization';
import type { ServiceCreateIssueInputCreateIssueInput_FormContainerHook } from '~/containers/Service/CreateIssueInput/CreateIssueInput_Form/customization';
import { setIssueScopeForCreateIssue } from '~/custom/services/issueService';

/**
 * XMIID: User/(esm/_oCqSgIeIEe2kLcMqsIbMgQ)/TransferObjectFormPageContainer
 * Name: service::CreateIssueInput::CreateIssueInput_Form
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceCreateIssueInputCreateIssueInput_FormActionsHook(context: BundleContext) {
  context.registerService<ServiceCreateIssueInputCreateIssueInput_FormContainerHook>(
    SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY,
    serviceCreateIssueInputCreateIssueInput_FormActionsHook,
  );
}

const serviceCreateIssueInputCreateIssueInput_FormActionsHook: ServiceCreateIssueInputCreateIssueInput_FormContainerHook =
  (data, editMode, storeDiff) => {
    // call other hooks here
    const { navigate } = useJudoNavigation();

    return {
      onIsseScopeBlurAction(data, storeDiff, editMode, submit) {
        setIssueScopeForCreateIssue(data, storeDiff);
      },
    };
  };
