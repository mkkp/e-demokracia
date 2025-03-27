import type { BundleContext } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { SERVICE_ISSUE_ATTACHMENT_ISSUE_ATTACHMENT_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY } from '~/containers/Service/IssueAttachment/IssueAttachment_View_Edit/customization';
import type { ServiceIssueAttachmentIssueAttachment_View_EditContainerHook } from '~/containers/Service/IssueAttachment/IssueAttachment_View_Edit/customization';
import { useViewData } from '~/hooks';
import type {
  ServiceIssueAttachment,
  ServiceIssueAttachmentStored,
} from '~/services/data-api/model/ServiceIssueAttachment';

/**
 * XMIID: User/(esm/_p5jNQGksEe25ONJ3V89cVA)/TransferObjectViewPageContainer
 * Name: service::IssueAttachment::IssueAttachment_View_Edit
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceIssueAttachmentIssueAttachment_View_EditActionsHook(context: BundleContext) {
  context.registerService<ServiceIssueAttachmentIssueAttachment_View_EditContainerHook>(
    SERVICE_ISSUE_ATTACHMENT_ISSUE_ATTACHMENT_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY,
    serviceIssueAttachmentIssueAttachment_View_EditActionsHook,
  );
}

const serviceIssueAttachmentIssueAttachment_View_EditActionsHook: ServiceIssueAttachmentIssueAttachment_View_EditContainerHook =
  (data, editMode, storeDiff) => {
    // call other hooks here
    const { t } = useTranslation();
    const { navigate, back } = useJudoNavigation();
    const { getLatestViewData } = useViewData();

    return {
      // implement actions here
    };
  };
