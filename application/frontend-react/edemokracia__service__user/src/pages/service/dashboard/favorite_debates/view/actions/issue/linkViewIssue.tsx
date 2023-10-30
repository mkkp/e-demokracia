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
  ServiceDebate,
  ServiceDebateStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { routeToServiceDebateIssueView } from '~/routes';

export const LINK_VIEW_ISSUE_ACTION_INTERFACE_KEY = 'LinkViewIssueAction';
export type LinkViewIssueAction = () => (
  owner: JudoIdentifiable<ServiceDebate>,
  entry: ServiceIssueStored,
  successCallback: () => void,
) => Promise<void>;

export const useLinkViewIssueAction: LinkViewIssueAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<LinkViewIssueAction>(
    `(${OBJECTCLASS}=${LINK_VIEW_ISSUE_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (
    owner: JudoIdentifiable<ServiceDebate>,
    entry: ServiceIssueStored,
    successCallback: () => void,
  ) {
    closeAllDialogs();
    navigate(routeToServiceDebateIssueView(entry.__signedIdentifier));
  };
};
