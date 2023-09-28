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
  AdminUserVoteDefinition,
  AdminUserVoteDefinitionStored,
  AdminVoteDefinition,
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { routeToAdminUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsView } from '~/routes';

export const ROW_VIEW_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_DISTRICTS_ACTION_INTERFACE_KEY =
  'RowViewActiveVoteDefinitionsInActivityDistrictsAction';
export type RowViewActiveVoteDefinitionsInActivityDistrictsAction = () => (
  owner: JudoIdentifiable<AdminUserVoteDefinition>,
  entry: AdminVoteDefinitionStored,
  successCallback: () => void,
) => Promise<void>;

export const useRowViewActiveVoteDefinitionsInActivityDistrictsAction: RowViewActiveVoteDefinitionsInActivityDistrictsAction =
  () => {
    const [createDialog, closeDialog, closeAllDialogs] = useDialog();
    const { navigate } = useJudoNavigation();
    const { service: useCustomNavigation } = useTrackService<RowViewActiveVoteDefinitionsInActivityDistrictsAction>(
      `(${OBJECTCLASS}=${ROW_VIEW_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_DISTRICTS_ACTION_INTERFACE_KEY})`,
    );

    if (useCustomNavigation) {
      const customNavigation = useCustomNavigation();
      return customNavigation;
    }

    return async function (
      owner: JudoIdentifiable<AdminUserVoteDefinition>,
      entry: AdminVoteDefinitionStored,
      successCallback: () => void,
    ) {
      closeAllDialogs();
      navigate(routeToAdminUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsView(entry.__signedIdentifier));
    };
  };
