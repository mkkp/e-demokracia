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
  AdminYesNoVoteDefinition,
  AdminYesNoVoteDefinitionQueryCustomizer,
  AdminYesNoVoteDefinitionStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { routeToAdminAdminUserOwnedYesNoVoteDefinitionsView } from '~/routes';

export const ROW_VIEW_USER_OWNED_YES_NO_VOTE_DEFINITIONS_ACTION_INTERFACE_KEY =
  'RowViewUserOwnedYesNoVoteDefinitionsAction';
export type RowViewUserOwnedYesNoVoteDefinitionsAction = () => (
  entry: AdminYesNoVoteDefinitionStored,
  successCallback: () => void,
) => Promise<void>;

export const useRowViewUserOwnedYesNoVoteDefinitionsAction: RowViewUserOwnedYesNoVoteDefinitionsAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewUserOwnedYesNoVoteDefinitionsAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_USER_OWNED_YES_NO_VOTE_DEFINITIONS_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (entry: AdminYesNoVoteDefinitionStored, successCallback: () => void) {
    closeAllDialogs();
    navigate(routeToAdminAdminUserOwnedYesNoVoteDefinitionsView(entry.__signedIdentifier));
  };
};
