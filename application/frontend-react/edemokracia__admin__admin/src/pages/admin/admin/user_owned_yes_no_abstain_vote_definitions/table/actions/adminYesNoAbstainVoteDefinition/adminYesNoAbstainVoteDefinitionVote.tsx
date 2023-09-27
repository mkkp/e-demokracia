//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: CallOperationAction
// Is Access: yes
// Is Mapped: yes
// Is Static: no
// Input: yes
// InputParameterPage: yes
// OutputParameterPage: no

import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import type {
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
  GridFilterModel,
  GridSortModel,
  GridRowSelectionModel,
  GridValueFormatterParams,
} from '@mui/x-data-grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { useSnackbar } from 'notistack';
import { useJudoNavigation, MdiIcon } from '~/components';
import { useDialog, useRangeDialog } from '~/components/dialog';
import { baseColumnConfig, toastConfig } from '~/config';
import { FilterOption, FilterType } from '~/components-api';
import { useL10N } from '~/l10n/l10n-context';
import {
  isErrorOperationFault,
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  fileHandling,
  processQueryCustomizer,
  serviceDateToUiDate,
  serviceTimeToUiTime,
} from '~/utilities';
import AdminYesNoAbstainVoteDefinitionVoteForm from './AdminYesNoAbstainVoteDefinitionVoteForm';
import {
  AdminYesNoAbstainVoteDefinition,
  AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  AdminYesNoAbstainVoteDefinitionStored,
  EdemokraciaYesNoAbstainVoteValue,
  YesNoAbstainVoteInput,
  YesNoAbstainVoteInputQueryCustomizer,
  YesNoAbstainVoteInputStored,
} from '~/generated/data-api';

export type AdminYesNoAbstainVoteDefinitionVoteActionPostHandler = (ownerCallback: () => void) => Promise<void>;

export const ADMIN_YES_NO_ABSTAIN_VOTE_DEFINITION_VOTE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY =
  'AdminYesNoAbstainVoteDefinitionVoteActionPostHandlerHook';
export type AdminYesNoAbstainVoteDefinitionVoteActionPostHandlerHook =
  () => AdminYesNoAbstainVoteDefinitionVoteActionPostHandler;

export type AdminYesNoAbstainVoteDefinitionVoteAction = () => (
  owner: AdminYesNoAbstainVoteDefinitionStored,
  successCallback: () => void,
  errorCallback?: (error: any) => void,
  silentMode?: boolean,
) => Promise<void>;

export const useAdminYesNoAbstainVoteDefinitionVoteAction: AdminYesNoAbstainVoteDefinitionVoteAction = () => {
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleActionError = useErrorHandler<AdminYesNoAbstainVoteDefinition>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=AdminYesNoAbstainVoteDefinitionVoteAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { openRangeDialog } = useRangeDialog();
  const [createDialog, closeDialog] = useDialog();
  const { navigate } = useJudoNavigation();
  const title: string = t(
    'admin.YesNoAbstainVoteDefinitionTable.userOwnedYesNoAbstainVoteDefinitions.vote.ButtonCallOperation',
    { defaultValue: 'Take a vote' },
  );
  const { service: customPostHandler } = useTrackService<AdminYesNoAbstainVoteDefinitionVoteActionPostHandlerHook>(
    `(${OBJECTCLASS}=${ADMIN_YES_NO_ABSTAIN_VOTE_DEFINITION_VOTE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY})`,
  );
  const postHandler: AdminYesNoAbstainVoteDefinitionVoteActionPostHandler | undefined =
    customPostHandler && customPostHandler();

  return async function adminYesNoAbstainVoteDefinitionVoteAction(
    owner: AdminYesNoAbstainVoteDefinitionStored,
    successCallback: () => void,
  ) {
    createDialog({
      fullWidth: true,
      maxWidth: 'xs',
      onClose: (event: object, reason: string) => {
        if (reason !== 'backdropClick') {
          closeDialog();
        }
      },
      children: (
        <AdminYesNoAbstainVoteDefinitionVoteForm
          successCallback={() => {
            closeDialog();
            if (postHandler) {
              postHandler(successCallback);
              return;
            }
            enqueueSnackbar(title, {
              variant: 'success',
              ...toastConfig.success,
            });
            successCallback();
          }}
          cancel={closeDialog}
          owner={owner}
        />
      ),
    });
  };
};