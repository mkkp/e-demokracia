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
import { routeToAdminYesNoAbstainVoteDefinitionVoteEntriesView } from '~/routes';

export const ROW_VIEW_VOTE_ENTRIES_ACTION_INTERFACE_KEY = 'RowViewVoteEntriesAction';
export type RowViewVoteEntriesAction = () => (
  owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
  entry: AdminYesNoAbstainVoteEntryStored,
  successCallback: () => void,
) => Promise<void>;

export const useRowViewVoteEntriesAction: RowViewVoteEntriesAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewVoteEntriesAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_VOTE_ENTRIES_ACTION_INTERFACE_KEY})`,
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
    navigate(routeToAdminYesNoAbstainVoteDefinitionVoteEntriesView(entry.__signedIdentifier));
  };
};
