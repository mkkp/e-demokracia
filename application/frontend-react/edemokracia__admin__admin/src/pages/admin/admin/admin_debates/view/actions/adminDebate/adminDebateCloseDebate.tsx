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
import { routeToAdminDebateClosedebateOutput } from '~/routes';
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
import { AdminDebateCloseDebateForm } from './AdminDebateCloseDebateForm';
import {
  AdminDebate,
  AdminDebateQueryCustomizer,
  AdminDebateStored,
  CloseDebateInput,
  CloseDebateInputQueryCustomizer,
  CloseDebateInputStored,
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
  CloseDebateOutputVoteDefinitionReferenceStored,
  EdemokraciaVoteTypeOnCloseDebate,
} from '~/generated/data-api';

export type AdminDebateCloseDebateActionPostHandler = (
  ownerCallback: () => void,
  result?: CloseDebateOutputVoteDefinitionReferenceStored,
) => Promise<void>;

export const ADMIN_DEBATE_CLOSE_DEBATE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY =
  'AdminDebateCloseDebateActionPostHandlerHook';
export type AdminDebateCloseDebateActionPostHandlerHook = () => AdminDebateCloseDebateActionPostHandler;

export type AdminDebateCloseDebateAction = () => (
  owner: AdminDebateStored,
  successCallback: () => void,
) => Promise<void>;

export const useAdminDebateCloseDebateAction: AdminDebateCloseDebateAction = () => {
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleActionError = useErrorHandler<AdminDebate>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=AdminDebateCloseDebateAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { openRangeDialog } = useRangeDialog();
  const [createDialog, closeDialog] = useDialog();
  const { navigate } = useJudoNavigation();
  const title: string = t('admin.DebateView.closeDebate.ButtonCallOperation', { defaultValue: 'Close debate' });
  const { service: customPostHandler } = useTrackService<AdminDebateCloseDebateActionPostHandlerHook>(
    `(${OBJECTCLASS}=${ADMIN_DEBATE_CLOSE_DEBATE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY})`,
  );
  const postHandler: AdminDebateCloseDebateActionPostHandler | undefined = customPostHandler && customPostHandler();

  return async function adminDebateCloseDebateAction(owner: AdminDebateStored, successCallback: () => void) {
    createDialog({
      fullWidth: true,
      maxWidth: 'md',
      onClose: (event: object, reason: string) => {
        if (reason !== 'backdropClick') {
          closeDialog();
        }
      },
      children: (
        <AdminDebateCloseDebateForm
          successCallback={(result?: CloseDebateOutputVoteDefinitionReferenceStored) => {
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
              navigate(routeToAdminDebateClosedebateOutput(result.__signedIdentifier));
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
