import type { BundleContext } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { SERVICE_ISSUE_ATTACHMENT_ISSUE_ATTACHMENT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY } from '~/containers/Service/IssueAttachment/IssueAttachment_Form/customization';
import type { ServiceIssueAttachmentIssueAttachment_FormContainerHook } from '~/containers/Service/IssueAttachment/IssueAttachment_Form/customization';
import { useViewData } from '~/hooks';
import type {
  ServiceIssueAttachment,
  ServiceIssueAttachmentStored,
} from '~/services/data-api/model/ServiceIssueAttachment';

/**
 * XMIID: User/(esm/_p5sXMGksEe25ONJ3V89cVA)/TransferObjectFormPageContainer
 * Name: service::IssueAttachment::IssueAttachment_Form
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceIssueAttachmentIssueAttachment_FormActionsHook(context: BundleContext) {
  context.registerService<ServiceIssueAttachmentIssueAttachment_FormContainerHook>(
    SERVICE_ISSUE_ATTACHMENT_ISSUE_ATTACHMENT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY,
    serviceIssueAttachmentIssueAttachment_FormActionsHook,
  );
}

const serviceIssueAttachmentIssueAttachment_FormActionsHook: ServiceIssueAttachmentIssueAttachment_FormContainerHook = (
  data,
  editMode,
  storeDiff,
) => {
  // call other hooks here
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { getLatestViewData } = useViewData();

  return {
    // implement actions here
    
  };
};
