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
  AdminYesNoAbstainVoteDefinition,
  AdminYesNoAbstainVoteDefinitionStored,
  AdminYesNoAbstainVoteEntry,
  AdminYesNoAbstainVoteEntryQueryCustomizer,
  AdminYesNoAbstainVoteEntryStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { routeToAdminYesNoAbstainVoteDefinitionUserVoteEntryView } from '~/routes';

export const LINK_VIEW_USER_VOTE_ENTRY_ACTION_INTERFACE_KEY = 'LinkViewUserVoteEntryAction';
export type LinkViewUserVoteEntryAction = () => (
  owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
  entry: AdminYesNoAbstainVoteEntryStored,
  successCallback: () => void,
) => Promise<void>;

export const useLinkViewUserVoteEntryAction: LinkViewUserVoteEntryAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<LinkViewUserVoteEntryAction>(
    `(${OBJECTCLASS}=${LINK_VIEW_USER_VOTE_ENTRY_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    entry: AdminYesNoAbstainVoteEntryStored,
    successCallback: () => void,
  ) {
    closeAllDialogs();
    navigate(routeToAdminYesNoAbstainVoteDefinitionUserVoteEntryView(entry.__signedIdentifier));
  };
};
