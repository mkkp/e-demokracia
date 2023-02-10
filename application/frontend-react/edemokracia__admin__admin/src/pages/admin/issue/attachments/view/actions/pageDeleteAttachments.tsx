///////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// ------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#self.value)+'actions/'+#pageActionPathSuffix(#self.key,#self.value)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx.hbs
// Action name: edemokracia::admin::Admin::edemokracia::admin::Issue::attachments#PageDelete
// Action owner name: edemokracia::admin::Issue.attachments#View
// Action DataElement name: attachments
// Action DataElement owner name: edemokracia::admin::Issue
// Action DataElement target name: edemokracia::admin::IssueAttachment
// Owner Page name: edemokracia::admin::Issue.attachments#View
// Action: DeleteAction

import type { JudoIdentifiable } from '@judo/data-api-common';
import { useSnackbar } from '../../../../../../components';
import { errorHandling } from '../../../../../../utilities';
import {
  AdminIssueAttachment,
  AdminIssue,
  AdminIssueStored,
  AdminIssueAttachmentStored,
  AdminIssueAttachmentQueryCustomizer,
} from '../../../../../../generated/data-api';
import {
  adminIssueServiceForAttachmentsImpl,
  adminIssueAttachmentServiceImpl,
} from '../../../../../../generated/data-axios';

export type PageDeleteAttachmentsAction = () => (
  owner: JudoIdentifiable<AdminIssue>,
  selected: AdminIssueAttachmentStored,
  successCallback: () => void,
) => Promise<void>;

export const usePageDeleteAttachmentsAction: PageDeleteAttachmentsAction = () => {
  const [enqueueSnackbar] = useSnackbar();

  return async function pageDeleteAttachmentsAction(
    owner: JudoIdentifiable<AdminIssue>,
    selected: AdminIssueAttachmentStored,
    successCallback: () => void,
  ) {
    try {
      await adminIssueServiceForAttachmentsImpl.deleteAttachments(owner, selected);

      successCallback();
    } catch (error) {
      errorHandling(error, enqueueSnackbar);
    }
  };
};
