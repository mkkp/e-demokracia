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
import { routeToServiceIssueCreatedebateOutput } from '~/routes';
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
import ServiceIssueCreateDebateForm from './ServiceIssueCreateDebateForm';
import {
  CreateDebateInput,
  CreateDebateInputQueryCustomizer,
  CreateDebateInputStored,
  CreateDebateOutputDebateReference,
  CreateDebateOutputDebateReferenceQueryCustomizer,
  CreateDebateOutputDebateReferenceStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceUserIssuesStored,
} from '~/generated/data-api';

export type ServiceIssueCreateDebateActionPostHandler = (
  ownerCallback: () => void,
  result?: CreateDebateOutputDebateReferenceStored,
) => Promise<void>;

export const SERVICE_ISSUE_CREATE_DEBATE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY =
  'ServiceIssueCreateDebateActionPostHandlerHook';
export type ServiceIssueCreateDebateActionPostHandlerHook = () => ServiceIssueCreateDebateActionPostHandler;

export type ServiceIssueCreateDebateAction = () => (
  owner: ServiceIssueStored,
  successCallback: () => void,
  errorCallback?: (error: any) => void,
  silentMode?: boolean,
) => Promise<void>;

export const useServiceIssueCreateDebateAction: ServiceIssueCreateDebateAction = () => {
  const { t } = useTranslation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const handleActionError = useErrorHandler<ServiceIssue>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=ServiceIssueCreateDebateAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { openRangeDialog } = useRangeDialog();
  const [createDialog, closeDialog] = useDialog();
  const { navigate } = useJudoNavigation();
  const title: string = t('service.IssueTable.activeIssuesInActivityCities.createDebate.ButtonCallOperation', {
    defaultValue: 'Create debate',
  });
  const { service: customPostHandler } = useTrackService<ServiceIssueCreateDebateActionPostHandlerHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_CREATE_DEBATE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY})`,
  );
  const postHandler: ServiceIssueCreateDebateActionPostHandler | undefined = customPostHandler && customPostHandler();

  return async function serviceIssueCreateDebateAction(owner: ServiceIssueStored, successCallback: () => void) {
    createDialog({
      fullWidth: true,
      maxWidth: 'md',
      onClose: (event: object, reason: string) => {
        if (reason !== 'backdropClick') {
          closeDialog();
        }
      },
      children: (
        <ServiceIssueCreateDebateForm
          successCallback={(result?: CreateDebateOutputDebateReferenceStored) => {
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
              navigate(routeToServiceIssueCreatedebateOutput(result.__signedIdentifier));
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
