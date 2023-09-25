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
  AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  AdminYesNoAbstainVoteDefinitionStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { routeToAdminAdminUserOwnedYesNoAbstainVoteDefinitionsView } from '~/routes';

export const ROW_VIEW_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACTION_INTERFACE_KEY =
  'RowViewUserOwnedYesNoAbstainVoteDefinitionsAction';
export type RowViewUserOwnedYesNoAbstainVoteDefinitionsAction = () => (
  entry: AdminYesNoAbstainVoteDefinitionStored,
  successCallback: () => void,
) => Promise<void>;

export const useRowViewUserOwnedYesNoAbstainVoteDefinitionsAction: RowViewUserOwnedYesNoAbstainVoteDefinitionsAction =
  () => {
    const [createDialog, closeDialog, closeAllDialogs] = useDialog();
    const { navigate } = useJudoNavigation();
    const { service: useCustomNavigation } = useTrackService<RowViewUserOwnedYesNoAbstainVoteDefinitionsAction>(
      `(${OBJECTCLASS}=${ROW_VIEW_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACTION_INTERFACE_KEY})`,
    );

    if (useCustomNavigation) {
      const customNavigation = useCustomNavigation();
      return customNavigation;
    }

    return async function (entry: AdminYesNoAbstainVoteDefinitionStored, successCallback: () => void) {
      closeAllDialogs();
      navigate(routeToAdminAdminUserOwnedYesNoAbstainVoteDefinitionsView(entry.__signedIdentifier));
    };
  };
