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
  AdminComment,
  AdminCommentQueryCustomizer,
  AdminCommentStored,
  AdminIssue,
  AdminIssueStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { routeToAdminIssueCommentsView } from '~/routes';

export const ROW_VIEW_COMMENTS_ACTION_INTERFACE_KEY = 'RowViewCommentsAction';
export type RowViewCommentsAction = () => (
  owner: JudoIdentifiable<AdminIssue>,
  entry: AdminCommentStored,
) => Promise<void>;

export const useRowViewCommentsAction: RowViewCommentsAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewCommentsAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_COMMENTS_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminIssue>, entry: AdminCommentStored) {
    navigate(routeToAdminIssueCommentsView(entry.__signedIdentifier));
  };
};
