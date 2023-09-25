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
  AdminYesNoVoteDefinitionStored,
  AdminYesNoVoteEntry,
  AdminYesNoVoteEntryQueryCustomizer,
  AdminYesNoVoteEntryStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import AdminAdminView from '~/pages/admin/yes_no_vote_definition/vote_entries/view/index';

export const ROW_VIEW_VOTE_ENTRIES_ACTION_INTERFACE_KEY = 'RowViewVoteEntriesAction';
export type RowViewVoteEntriesAction = () => (
  owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
  entry: AdminYesNoVoteEntryStored,
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
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    entry: AdminYesNoVoteEntryStored,
    successCallback: () => void,
  ) {
    createDialog({
      fullWidth: true,
      maxWidth: 'md',
      onClose: (event: object, reason: string) => {
        if (reason !== 'backdropClick') {
          closeDialog();
        }
      },
      children: (
        <AdminAdminView
          successCallback={() => {
            successCallback();
          }}
          cancel={closeDialog}
          entry={entry}
        />
      ),
    });
  };
};
