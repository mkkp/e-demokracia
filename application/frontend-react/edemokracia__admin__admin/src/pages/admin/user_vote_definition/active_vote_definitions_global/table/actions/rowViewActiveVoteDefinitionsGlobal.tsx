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
import { routeToAdminUserVoteDefinitionActiveVoteDefinitionsGlobalView } from '~/routes';

export const ROW_VIEW_ACTIVE_VOTE_DEFINITIONS_GLOBAL_ACTION_INTERFACE_KEY = 'RowViewActiveVoteDefinitionsGlobalAction';
export type RowViewActiveVoteDefinitionsGlobalAction = () => (
  owner: JudoIdentifiable<AdminUserVoteDefinition>,
  entry: AdminVoteDefinitionStored,
  successCallback: () => void,
) => Promise<void>;

export const useRowViewActiveVoteDefinitionsGlobalAction: RowViewActiveVoteDefinitionsGlobalAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewActiveVoteDefinitionsGlobalAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_ACTIVE_VOTE_DEFINITIONS_GLOBAL_ACTION_INTERFACE_KEY})`,
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
    navigate(routeToAdminUserVoteDefinitionActiveVoteDefinitionsGlobalView(entry.__signedIdentifier));
  };
};
