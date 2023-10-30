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
import {
  ServiceDebate,
  ServiceDebateStored,
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceRatingVoteDefinitionStored,
} from '~/generated/data-api';
import { serviceRatingVoteDefinitionServiceForClassImpl } from '~/generated/data-axios';

export type ServiceRatingVoteDefinitionTakeBackVoteActionPostHandler = (ownerCallback: () => void) => Promise<void>;

export const SERVICE_RATING_VOTE_DEFINITION_TAKE_BACK_VOTE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY =
  'ServiceRatingVoteDefinitionTakeBackVoteActionPostHandlerHook';
export type ServiceRatingVoteDefinitionTakeBackVoteActionPostHandlerHook =
  () => ServiceRatingVoteDefinitionTakeBackVoteActionPostHandler;

export type ServiceRatingVoteDefinitionTakeBackVoteAction = () => (
  owner: ServiceRatingVoteDefinitionStored,
  successCallback: () => void,
  errorCallback?: (error: any) => void,
  silentMode?: boolean,
) => Promise<void>;

export const useServiceRatingVoteDefinitionTakeBackVoteAction: ServiceRatingVoteDefinitionTakeBackVoteAction = () => {
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleActionError = useErrorHandler<ServiceRatingVoteDefinition>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=ServiceRatingVoteDefinitionTakeBackVoteAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { openRangeDialog } = useRangeDialog();
  const [createDialog, closeDialog] = useDialog();
  const { navigate } = useJudoNavigation();
  const title: string = t('service.RatingVoteDefinitionView.takeBackVote.ButtonCallOperation', {
    defaultValue: 'TakeBackVote',
  });
  const { service: customPostHandler } = useTrackService<ServiceRatingVoteDefinitionTakeBackVoteActionPostHandlerHook>(
    `(${OBJECTCLASS}=${SERVICE_RATING_VOTE_DEFINITION_TAKE_BACK_VOTE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY})`,
  );
  const postHandler: ServiceRatingVoteDefinitionTakeBackVoteActionPostHandler | undefined =
    customPostHandler && customPostHandler();

  return async function serviceRatingVoteDefinitionTakeBackVoteAction(
    owner: ServiceRatingVoteDefinitionStored,
    successCallback: () => void,
    errorCallback?: (error: any) => void,
    silentMode?: boolean,
  ) {
    try {
      const result = await serviceRatingVoteDefinitionServiceForClassImpl.takeBackVote(owner);
      if (postHandler) {
        postHandler(successCallback);
        return;
      }
      successCallback();
      if (!silentMode) {
        enqueueSnackbar(title, {
          variant: 'success',
          ...toastConfig.success,
        });
      }
    } catch (error: any) {
      if (errorCallback) {
        errorCallback(error); // consider passing mapped content here eventually
      } else {
        handleActionError(error, undefined, owner);
      }
    }
  };
};
