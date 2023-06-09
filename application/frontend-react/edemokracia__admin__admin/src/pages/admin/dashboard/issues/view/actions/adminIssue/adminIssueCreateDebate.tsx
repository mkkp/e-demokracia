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
// OutputParameterPage: yes

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
import { routeToAdminIssueCreatedebateOutput } from '~/routes';
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
import { AdminIssueCreateDebateForm } from './AdminIssueCreateDebateForm';
import {
  AdminDashboard,
  AdminDashboardStored,
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  CreateDebateInput,
  CreateDebateInputQueryCustomizer,
  CreateDebateInputStored,
  Debate,
  DebateQueryCustomizer,
  DebateStored,
} from '~/generated/data-api';

export type AdminIssueCreateDebateActionPostHandler = (
  ownerCallback: () => void,
  result?: DebateStored,
) => Promise<void>;

export const ADMIN_ISSUE_CREATE_DEBATE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY =
  'AdminIssueCreateDebateActionPostHandlerHook';
export type AdminIssueCreateDebateActionPostHandlerHook = () => AdminIssueCreateDebateActionPostHandler;

export type AdminIssueCreateDebateAction = () => (
  owner: AdminIssueStored,
  successCallback: () => void,
) => Promise<void>;

export const useAdminIssueCreateDebateAction: AdminIssueCreateDebateAction = () => {
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleActionError = useErrorHandler<AdminIssue>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=AdminIssueCreateDebateAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { openRangeDialog } = useRangeDialog();
  const [createDialog, closeDialog] = useDialog();
  const { navigate } = useJudoNavigation();
  const title: string = t('admin.IssueView.createDebate.ButtonCallOperation', { defaultValue: 'Create debate' });
  const { service: customPostHandler } = useTrackService<AdminIssueCreateDebateActionPostHandlerHook>(
    `(${OBJECTCLASS}=${ADMIN_ISSUE_CREATE_DEBATE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY})`,
  );
  const postHandler: AdminIssueCreateDebateActionPostHandler | undefined = customPostHandler && customPostHandler();

  return async function adminIssueCreateDebateAction(owner: AdminIssueStored, successCallback: () => void) {
    createDialog({
      fullWidth: true,
      maxWidth: 'lg',
      onClose: (event: object, reason: string) => {
        if (reason !== 'backdropClick') {
          closeDialog();
        }
      },
      children: (
        <AdminIssueCreateDebateForm
          successCallback={(result?: DebateStored) => {
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
              navigate(routeToAdminIssueCreatedebateOutput(result.__signedIdentifier));
            } else {
              successCallback();
            }
          }}
          cancel={closeDialog}
          owner={owner}
        />
      ),
    });
  };
};
