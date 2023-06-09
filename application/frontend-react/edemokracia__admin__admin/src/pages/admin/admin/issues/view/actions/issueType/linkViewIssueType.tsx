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
  AdminIssueStored,
  AdminIssueType,
  AdminIssueTypeQueryCustomizer,
  AdminIssueTypeStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { routeToAdminIssueIssueTypeView } from '~/routes';

export const LINK_VIEW_ISSUE_TYPE_ACTION_INTERFACE_KEY = 'LinkViewIssueTypeAction';
export type LinkViewIssueTypeAction = () => (
  owner: JudoIdentifiable<AdminIssue>,
  entry: AdminIssueTypeStored,
) => Promise<void>;

export const useLinkViewIssueTypeAction: LinkViewIssueTypeAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<LinkViewIssueTypeAction>(
    `(${OBJECTCLASS}=${LINK_VIEW_ISSUE_TYPE_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminIssue>, entry: AdminIssueTypeStored) {
    navigate(routeToAdminIssueIssueTypeView(entry.__signedIdentifier));
  };
};
