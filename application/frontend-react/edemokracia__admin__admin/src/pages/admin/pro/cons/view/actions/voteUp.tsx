//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#self.value)+'actions/'+#pageActionPathSuffix(#self.key,#self.value)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Base URL: mvn:hu.blackbelt.judo.generator:judo-ui-react:1.0.0.20230413_041932_3a0d360a_develop
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
import type {
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
  GridSortModel,
  GridSelectionModel,
} from '@mui/x-data-grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { useJudoNavigation, MdiIcon } from '../../../../../../components';
import { useDialog, useRangeDialog } from '../../../../../../components/dialog';
import { baseColumnConfig, toastConfig } from '../../../../../../config';
import { FilterOption, FilterType } from '../../../../../../components-api';
import {
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  fileHandling,
  processQueryCustomizer,
} from '../../../../../../utilities';
import {
  AdminProStored,
  AdminCon,
  AdminConStored,
  AdminConQueryCustomizer,
  AdminPro,
} from '../../../../../../generated/data-api';
import { adminConServiceImpl, adminProServiceImpl } from '../../../../../../generated/data-axios';

export type VoteUpAction = () => (owner: AdminProStored, successCallback: () => void) => Promise<void>;

export const useVoteUpAction: VoteUpAction = () => {
  const { t } = useTranslation();
  const { downloadFile, uploadFile } = fileHandling();
  const handleActionError = useErrorHandler<AdminProStored>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=VoteUpAction))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const { openRangeDialog } = useRangeDialog();
  const [createDialog, closeDialog] = useDialog();
  const { navigate } = useJudoNavigation();
  const title: string = t('edemokracia.admin.Pro.cons.View.edemokracia.admin.Pro.voteUp', { defaultValue: '' });

  return async function voteUpAction(owner: AdminProStored, successCallback: () => void) {
    try {
      const result = await adminProServiceImpl.voteUp(owner);
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
