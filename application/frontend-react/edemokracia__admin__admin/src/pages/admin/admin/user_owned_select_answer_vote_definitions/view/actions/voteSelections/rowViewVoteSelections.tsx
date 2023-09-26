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
  AdminSelectAnswerVoteDefinition,
  AdminSelectAnswerVoteDefinitionStored,
  AdminSelectAnswerVoteSelection,
  AdminSelectAnswerVoteSelectionQueryCustomizer,
  AdminSelectAnswerVoteSelectionStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import AdminAdminView from '~/pages/admin/select_answer_vote_definition/vote_selections/view/index';

export const ROW_VIEW_VOTE_SELECTIONS_ACTION_INTERFACE_KEY = 'RowViewVoteSelectionsAction';
export type RowViewVoteSelectionsAction = () => (
  owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
  entry: AdminSelectAnswerVoteSelectionStored,
  successCallback: () => void,
) => Promise<void>;

export const useRowViewVoteSelectionsAction: RowViewVoteSelectionsAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<RowViewVoteSelectionsAction>(
    `(${OBJECTCLASS}=${ROW_VIEW_VOTE_SELECTIONS_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    entry: AdminSelectAnswerVoteSelectionStored,
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
