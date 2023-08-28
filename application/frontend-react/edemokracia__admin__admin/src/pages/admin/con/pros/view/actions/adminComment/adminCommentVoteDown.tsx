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
import {
  AdminComment,
  AdminCommentStored,
  AdminCon,
  AdminConStored,
  AdminPro,
  AdminProQueryCustomizer,
  AdminProStored,
} from '~/generated/data-api';
import { adminProServiceForClassImpl, adminCommentServiceForClassImpl } from '~/generated/data-axios';

export type AdminCommentVoteDownActionPostHandler = (ownerCallback: () => void) => Promise<void>;

export const ADMIN_COMMENT_VOTE_DOWN_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY =
  'AdminCommentVoteDownActionPostHandlerHook';
export type AdminCommentVoteDownActionPostHandlerHook = () => AdminCommentVoteDownActionPostHandler;

export type AdminCommentVoteDownAction = () => (
  owner: AdminCommentStored,
  successCallback: () => void,
) => Promise<void>;

export const useAdminCommentVoteDownAction: AdminCommentVoteDownAction = () => {
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleActionError = useErrorHandler<AdminComment>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=AdminCommentVoteDownAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { openRangeDialog } = useRangeDialog();
  const [createDialog, closeDialog] = useDialog();
  const { navigate } = useJudoNavigation();
  const title: string = t('admin.ProView.comments.voteDown.ButtonCallOperation', { defaultValue: '' });
  const { service: customPostHandler } = useTrackService<AdminCommentVoteDownActionPostHandlerHook>(
    `(${OBJECTCLASS}=${ADMIN_COMMENT_VOTE_DOWN_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY})`,
  );
  const postHandler: AdminCommentVoteDownActionPostHandler | undefined = customPostHandler && customPostHandler();

  return async function adminCommentVoteDownAction(owner: AdminCommentStored, successCallback: () => void) {
    try {
      const result = await adminCommentServiceForClassImpl.voteDown(owner);
      if (postHandler) {
        postHandler(successCallback);
        return;
      }
      successCallback();
      enqueueSnackbar(title, {
        variant: 'success',
        ...toastConfig.success,
      });
    } catch (error: any) {
      handleActionError(error, undefined, owner);
    }
  };
};
