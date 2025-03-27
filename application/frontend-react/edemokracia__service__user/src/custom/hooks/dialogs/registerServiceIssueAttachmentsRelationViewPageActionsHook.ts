import type { BundleContext } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import {
  SERVICE_ISSUE_ATTACHMENTS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY,
  type ServiceIssueAttachmentIssueAttachment_View_EditActionsHook,
} from '~/dialogs/Service/Issue/Attachments/RelationViewPage/customization';
import { useViewData } from '~/hooks';
import type { ServiceIssue, ServiceIssueStored } from '~/services/data-api/model/ServiceIssue';
import type {
  ServiceIssueAttachment,
  ServiceIssueAttachmentStored,
} from '~/services/data-api/model/ServiceIssueAttachment';
import type { ServiceIssueAttachmentQueryCustomizer } from '~/services/data-api/rest/ServiceIssueAttachmentQueryCustomizer';
import type { ServiceIssueQueryCustomizer } from '~/services/data-api/rest/ServiceIssueQueryCustomizer';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueServiceForAttachmentsImpl } from '~/services/data-axios/ServiceIssueServiceForAttachmentsImpl';

/**
 * XMIID: User/(esm/_qXz2kGksEe25ONJ3V89cVA)/RelationFeatureView
 * Name: service::Issue::attachments::RelationViewPage
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceIssueAttachmentsRelationViewPageActionsHook(context: BundleContext) {
  context.registerService<ServiceIssueAttachmentIssueAttachment_View_EditActionsHook>(
    SERVICE_ISSUE_ATTACHMENTS_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY,
    ServiceIssueAttachmentsRelationViewPageActionsHook,
  );
}

const ServiceIssueAttachmentsRelationViewPageActionsHook: ServiceIssueAttachmentIssueAttachment_View_EditActionsHook = (
  ownerData,
  data,
  editMode,
  storeDiff,
  refresh,
  submit,
  onSubmit,
) => {
  // call other hooks here
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { getLatestViewData, getRouterPageData } = useViewData();
  const serviceIssueServiceForAttachmentsImpl = new ServiceIssueServiceForAttachmentsImpl(judoAxiosProvider);

  return {
    // implement actions here
  };
};
