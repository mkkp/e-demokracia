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
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
} from '~/generated/data-api';
import { adminIssueServiceForClassImpl, adminCommentServiceForClassImpl } from '~/generated/data-axios';

export type AdminCommentVoteUpActionPostHandler = (ownerCallback: () => void) => Promise<void>;

export const ADMIN_COMMENT_VOTE_UP_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY = 'AdminCommentVoteUpActionPostHandlerHook';
export type AdminCommentVoteUpActionPostHandlerHook = () => AdminCommentVoteUpActionPostHandler;

export type AdminCommentVoteUpAction = () => (owner: AdminCommentStored, successCallback: () => void) => Promise<void>;

export const useAdminCommentVoteUpAction: AdminCommentVoteUpAction = () => {
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleActionError = useErrorHandler<AdminComment>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=AdminCommentVoteUpAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { openRangeDialog } = useRangeDialog();
  const [createDialog, closeDialog] = useDialog();
  const { navigate } = useJudoNavigation();
  const title: string = t('admin.IssueView.comments.voteUp.ButtonCallOperation', { defaultValue: '' });
  const { service: customPostHandler } = useTrackService<AdminCommentVoteUpActionPostHandlerHook>(
    `(${OBJECTCLASS}=${ADMIN_COMMENT_VOTE_UP_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY})`,
  );
  const postHandler: AdminCommentVoteUpActionPostHandler | undefined = customPostHandler && customPostHandler();

  return async function adminCommentVoteUpAction(owner: AdminCommentStored, successCallback: () => void) {
    try {
      const result = await adminCommentServiceForClassImpl.voteUp(owner);
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
