//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: CallOperationAction
// Is Access: yes
// Is Mapped: no
// Is Static: yes
// Input: yes
// InputParameterPage: yes
// OutputParameterPage: yes

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
import ServiceUserOperationOutput from '~/pages/service/usermanager/createuser/output/index';
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
import ServiceUserManagerCreateUserForm from './ServiceUserManagerCreateUserForm';
import {
  ServiceCreateUserInput,
  ServiceCreateUserInputQueryCustomizer,
  ServiceCreateUserInputStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserManager,
  ServiceUserManagerQueryCustomizer,
  ServiceUserManagerStored,
} from '~/generated/data-api';

export type ServiceUserManagerCreateUserActionPostHandler = (
  ownerCallback: () => void,
  result?: ServiceServiceUserStored,
) => Promise<void>;

export const SERVICE_USER_MANAGER_CREATE_USER_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY =
  'ServiceUserManagerCreateUserActionPostHandlerHook';
export type ServiceUserManagerCreateUserActionPostHandlerHook = () => ServiceUserManagerCreateUserActionPostHandler;

export type ServiceUserManagerCreateUserAction = () => (
  successCallback: () => void,
  errorCallback?: (error: any) => void,
  silentMode?: boolean,
) => Promise<void>;

export const useServiceUserManagerCreateUserAction: ServiceUserManagerCreateUserAction = () => {
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleActionError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=ServiceUserManagerCreateUserAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { openRangeDialog } = useRangeDialog();
  const [createDialog, closeDialog] = useDialog();
  const { navigate } = useJudoNavigation();
  const title: string = t('service.UserManagerView.createUser.ButtonCallOperation', { defaultValue: 'Create User' });
  const { service: customPostHandler } = useTrackService<ServiceUserManagerCreateUserActionPostHandlerHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_MANAGER_CREATE_USER_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY})`,
  );
  const postHandler: ServiceUserManagerCreateUserActionPostHandler | undefined =
    customPostHandler && customPostHandler();

  return async function serviceUserManagerCreateUserAction(successCallback: () => void) {
    createDialog({
      fullWidth: true,
      maxWidth: 'md',
      onClose: (event: object, reason: string) => {
        if (reason !== 'backdropClick') {
          closeDialog();
        }
      },
      children: (
        <ServiceUserManagerCreateUserForm
          successCallback={(result?: ServiceServiceUserStored) => {
            closeDialog();
            if (postHandler) {
              postHandler(successCallback, result);
              return;
            }
            enqueueSnackbar(title, {
              variant: 'success',
              ...toastConfig.success,
            });
            if (result) {
              createDialog({
                fullWidth: true,
                maxWidth: 'lg',
                onClose: (event: object, reason: string) => {
                  if (reason !== 'backdropClick') {
                    closeDialog();
                  }
                },
                children: (
                  <ServiceUserOperationOutput
                    successCallback={() => {
                      closeDialog();
                    }}
                    cancel={() => closeDialog()}
                    entry={result}
                  />
                ),
              });
            } else {
              successCallback();
            }
          }}
          cancel={closeDialog}
        />
      ),
    });
  };
};
