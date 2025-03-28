import type { BundleContext } from '@pandino/pandino-api';
import { jwtDecode } from 'jwt-decode';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import {
  SERVICE_ISSUE_ATTACHMENTS_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY,
  type ServiceIssueAttachmentIssueAttachment_FormActionsHook,
} from '~/dialogs/Service/Issue/Attachments/RelationFormPage/customization';
import { useServiceIssueAttachmentsRelationViewPage } from '~/dialogs/Service/Issue/Attachments/RelationViewPage/hooks';
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
 * XMIID: User/(esm/_qXz2kGksEe25ONJ3V89cVA)/RelationFeatureForm
 * Name: service::Issue::attachments::RelationFormPage
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceIssueAttachmentsRelationFormPageActionsHook(context: BundleContext) {
  context.registerService<ServiceIssueAttachmentIssueAttachment_FormActionsHook>(
    SERVICE_ISSUE_ATTACHMENTS_RELATION_FORM_PAGE_ACTIONS_HOOK_INTERFACE_KEY,
    ServiceIssueAttachmentsRelationFormPageActionsHook,
  );
}

const extractFileNameFromToken = (token?: string | null, fallbackText?: string): string => {
  if (!token) {
    return fallbackText ?? '';
  }

  try {
    const decoded: { fileName: string } = jwtDecode(token);
    return decoded.fileName;
  } catch (error) {
    console.error(`Decoding of jwt token failed for: ${token}`);
    return fallbackText ?? '';
  }
};

const ServiceIssueAttachmentsRelationFormPageActionsHook: ServiceIssueAttachmentIssueAttachment_FormActionsHook = (
  ownerData,
  data,
  editMode,
  storeDiff,
  submit,
  onSubmit,
) => {
  // call other hooks here
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { getLatestViewData, getRouterPageData } = useViewData();
  const openServiceIssueAttachmentsRelationViewPage = useServiceIssueAttachmentsRelationViewPage();
  const serviceIssueServiceForAttachmentsImpl = new ServiceIssueServiceForAttachmentsImpl(judoAxiosProvider);

  return {
    // implement actions here
    //     async createAction(openCreated) {
    // //      console.log(data.file);
    // //      storeDiff("name", extractFileNameFromToken(data.file, ''));
    //     },
    // async postCreateAction(data, res, onSubmit, onClose, openCreated) {
    //   console.log(data.file);
    //   //      storeDiff("name", extractFileNameFromToken(data.file, ''));
    // },
    // async postCreateAction(data, res, onSubmit, onClose, openCreated) {
    //   console.log(data.file);
    //   storeDiff("name", extractFileNameFromToken(data.file, ''));
    // },
    // async postCreateAction(data, res, onSubmit, onClose, openCreated) {
    //   console.log(data);
    //   console.log(extractFileNameFromToken(data.file, ''));
    //   storeDiff("name", extractFileNameFromToken(data.file, ''));
    //   await onSubmit(res);
    // },
    /*
onSubmit: (
    result?: ServiceIssueAttachmentStored,
    reason?: DialogResultReason,
    openCreated?: boolean,
  ) 
     */
  };
};
