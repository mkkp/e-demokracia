//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: CallOperationAction
// Is Access: no
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
import ServiceYesNoVoteDefinitionVoteForm from './ServiceYesNoVoteDefinitionVoteForm';
import {
  EdemokraciaYesNoVoteValue,
  ServiceDebate,
  ServiceDebateStored,
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceYesNoVoteDefinitionStored,
  YesNoVoteInput,
  YesNoVoteInputQueryCustomizer,
  YesNoVoteInputStored,
} from '~/generated/data-api';

export type ServiceYesNoVoteDefinitionVoteActionPostHandler = (ownerCallback: () => void) => Promise<void>;

export const SERVICE_YES_NO_VOTE_DEFINITION_VOTE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY =
  'ServiceYesNoVoteDefinitionVoteActionPostHandlerHook';
export type ServiceYesNoVoteDefinitionVoteActionPostHandlerHook = () => ServiceYesNoVoteDefinitionVoteActionPostHandler;

export type ServiceYesNoVoteDefinitionVoteAction = () => (
  owner: ServiceYesNoVoteDefinitionStored,
  successCallback: () => void,
  errorCallback?: (error: any) => void,
  silentMode?: boolean,
) => Promise<void>;

export const useServiceYesNoVoteDefinitionVoteAction: ServiceYesNoVoteDefinitionVoteAction = () => {
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleActionError = useErrorHandler<ServiceYesNoVoteDefinition>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=ServiceYesNoVoteDefinitionVoteAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { openRangeDialog } = useRangeDialog();
  const [createDialog, closeDialog] = useDialog();
  const { navigate } = useJudoNavigation();
  const title: string = t('service.YesNoVoteDefinitionView.vote.ButtonCallOperation', { defaultValue: 'Take a vote' });
  const { service: customPostHandler } = useTrackService<ServiceYesNoVoteDefinitionVoteActionPostHandlerHook>(
    `(${OBJECTCLASS}=${SERVICE_YES_NO_VOTE_DEFINITION_VOTE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY})`,
  );
  const postHandler: ServiceYesNoVoteDefinitionVoteActionPostHandler | undefined =
    customPostHandler && customPostHandler();

  return async function serviceYesNoVoteDefinitionVoteAction(
    owner: ServiceYesNoVoteDefinitionStored,
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
        <ServiceYesNoVoteDefinitionVoteForm
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
