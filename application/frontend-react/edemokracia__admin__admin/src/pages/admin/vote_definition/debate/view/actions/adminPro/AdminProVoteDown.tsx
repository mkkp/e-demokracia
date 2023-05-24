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
// Input: no
// InputParameterPage: no
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
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  fileHandling,
  processQueryCustomizer,
  serviceDateToUiDate,
  serviceTimeToUiTime,
} from '~/utilities';
import {
  AdminDebate,
  AdminDebateQueryCustomizer,
  AdminDebateStored,
  AdminPro,
  AdminProStored,
  AdminVoteDefinition,
  AdminVoteDefinitionStored,
} from '~/generated/data-api';
import { adminDebateServiceImpl, adminProServiceImpl } from '~/generated/data-axios';
export type AdminProVoteDownActionPostHandler = (ownerCallback: () => void) => Promise<void>;

export const ADMIN_PRO_VOTE_DOWN_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY = 'AdminProVoteDownActionPostHandlerHook';
export type AdminProVoteDownActionPostHandlerHook = () => AdminProVoteDownActionPostHandler;

export type AdminProVoteDownAction = () => (owner: AdminProStored, successCallback: () => void) => Promise<void>;

export const useAdminProVoteDownAction: AdminProVoteDownAction = () => {
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleActionError = useErrorHandler<AdminPro>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=AdminProVoteDownAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { openRangeDialog } = useRangeDialog();
  const [createDialog, closeDialog] = useDialog();
  const { navigate } = useJudoNavigation();
  const title: string = t('admin.DebateView.pros.voteDown.ButtonCallOperation', { defaultValue: '' });
  const { service: customPostHandler } = useTrackService<AdminProVoteDownActionPostHandlerHook>(
    `(${OBJECTCLASS}=${ADMIN_PRO_VOTE_DOWN_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY})`,
  );
  const postHandler: AdminProVoteDownActionPostHandler | undefined = customPostHandler && customPostHandler();

  return async function adminProVoteDownAction(owner: AdminProStored, successCallback: () => void) {
    try {
      const result = await adminProServiceImpl.voteDown(owner);
      if (postHandler) {
        postHandler(successCallback);
        return;
      }
      successCallback();
      enqueueSnackbar(title, {
        variant: 'success',
        ...toastConfig.success,
      });
    } catch (error) {
      handleActionError(error, undefined, owner);
    }
  };
};
