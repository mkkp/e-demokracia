//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: ViewAction

import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import type {
  AdminIssue,
  AdminIssueAttachment,
  AdminIssueAttachmentQueryCustomizer,
  AdminIssueAttachmentStored,
  AdminIssueStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { routeToAdminIssueAttachmentsView } from '~/routes';

export const ROW_VIEW_ATTACHMENTS_ACTION_INTERFACE_KEY = 'RowViewAttachmentsAction';
export type RowViewAttachmentsAction = () => (
  owner: JudoIdentifiable<AdminIssue>,
  entry: AdminIssueAttachmentStored,
) => Promise<void>;

export const useRowViewAttachmentsAction: RowViewAttachmentsAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewAttachmentsAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_ATTACHMENTS_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminIssue>, entry: AdminIssueAttachmentStored) {
    navigate(routeToAdminIssueAttachmentsView(entry.__signedIdentifier));
  };
};
