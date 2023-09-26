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
import AdminAdminOperationOutput from '~/pages/admin/dashboard/createuser/output/index';
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
import AdminDashboardCreateUserForm from './AdminDashboardCreateUserForm';
import {
  AdminCreateUserInput,
  AdminCreateUserInputQueryCustomizer,
  AdminCreateUserInputStored,
  AdminDashboard,
  AdminDashboardQueryCustomizer,
  AdminDashboardStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';

export type AdminDashboardCreateUserActionPostHandler = (
  ownerCallback: () => void,
  result?: AdminUserStored,
) => Promise<void>;

export const ADMIN_DASHBOARD_CREATE_USER_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY =
  'AdminDashboardCreateUserActionPostHandlerHook';
export type AdminDashboardCreateUserActionPostHandlerHook = () => AdminDashboardCreateUserActionPostHandler;

export type AdminDashboardCreateUserAction = () => (
  successCallback: () => void,
  errorCallback?: (error: any) => void,
  silentMode?: boolean,
) => Promise<void>;

export const useAdminDashboardCreateUserAction: AdminDashboardCreateUserAction = () => {
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleActionError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=AdminDashboardCreateUserAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { openRangeDialog } = useRangeDialog();
  const [createDialog, closeDialog] = useDialog();
  const { navigate } = useJudoNavigation();
  const title: string = t('admin.DashboardView.createUser.ButtonCallOperation', { defaultValue: 'Create user' });
  const { service: customPostHandler } = useTrackService<AdminDashboardCreateUserActionPostHandlerHook>(
    `(${OBJECTCLASS}=${ADMIN_DASHBOARD_CREATE_USER_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY})`,
  );
  const postHandler: AdminDashboardCreateUserActionPostHandler | undefined = customPostHandler && customPostHandler();

  return async function adminDashboardCreateUserAction(successCallback: () => void) {
    createDialog({
      fullWidth: true,
      maxWidth: 'md',
      onClose: (event: object, reason: string) => {
        if (reason !== 'backdropClick') {
          closeDialog();
        }
      },
      children: (
        <AdminDashboardCreateUserForm
          successCallback={(result?: AdminUserStored) => {
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
                  <AdminAdminOperationOutput
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
