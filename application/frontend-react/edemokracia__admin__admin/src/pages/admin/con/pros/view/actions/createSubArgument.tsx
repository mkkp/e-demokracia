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
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import type {
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
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
import { CreateSubArgumentForm } from './CreateSubArgumentForm';
import {
  AdminCon,
  AdminConStored,
  AdminPro,
  AdminProQueryCustomizer,
  AdminProStored,
  CreateArgumentInput,
  CreateArgumentInputQueryCustomizer,
  CreateArgumentInputStored,
  EdemokraciaCreateArgumentInputType,
} from '~/generated/data-api';

export type CreateSubArgumentActionPostHandler = (ownerCallback: () => void) => Promise<void>;

export const CREATE_SUB_ARGUMENT_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY = 'CreateSubArgumentActionPostHandlerHook';
export type CreateSubArgumentActionPostHandlerHook = () => CreateSubArgumentActionPostHandler;

export type CreateSubArgumentAction = () => (owner: AdminConStored, successCallback: () => void) => Promise<void>;

export const useCreateSubArgumentAction: CreateSubArgumentAction = () => {
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleActionError = useErrorHandler<AdminCon>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=CreateSubArgumentAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { openRangeDialog } = useRangeDialog();
  const [createDialog, closeDialog] = useDialog();
  const { navigate } = useJudoNavigation();
  const title: string = t('admin.ProView.cons.createSubArgument.ButtonCallOperation', { defaultValue: 'Add argument' });
  const { service: customPostHandler } = useTrackService<CreateSubArgumentActionPostHandlerHook>(
    `(${OBJECTCLASS}=${CREATE_SUB_ARGUMENT_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY})`,
  );
  const postHandler: CreateSubArgumentActionPostHandler | undefined = customPostHandler && customPostHandler();

  return async function createSubArgumentAction(owner: AdminConStored, successCallback: () => void) {
    createDialog({
      fullWidth: true,
      maxWidth: 'lg',
      onClose: (event: object, reason: string) => {
        if (reason !== 'backdropClick') {
          closeDialog();
        }
      },
      children: (
        <CreateSubArgumentForm
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
