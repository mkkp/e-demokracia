//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: CreateAction

import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useJudoNavigation } from '~/components';
import type { DialogOption } from '~/components/dialog';
import { useDialog } from '~/components/dialog';
import { FilterOption, FilterType } from '~/components-api';
import { useErrorHandler, ERROR_PROCESSOR_HOOK_INTERFACE_KEY } from '~/utilities';
import { toastConfig } from '~/config';

import {
  AdminIssueCategory,
  AdminIssueCategoryQueryCustomizer,
  AdminIssueCategoryStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import {
  adminIssueCategoryServiceForSubcategoriesImpl,
  adminIssueCategoryServiceForClassImpl,
} from '~/generated/data-axios';
import { TableCreateSubcategoriesForm } from './TableCreateSubcategoriesForm';

export type TableCreateSubcategoriesAction = () => (
  owner: JudoIdentifiable<AdminIssueCategory>,
  successCallback: (result: AdminIssueCategoryStored) => void,
  closedCallback?: () => void,
) => void;

export const useTableCreateSubcategoriesAction: TableCreateSubcategoriesAction = () => {
  const [createDialog, closeDialog] = useDialog();
  const { t } = useTranslation();
  const { navigate } = useJudoNavigation();
  const { enqueueSnackbar } = useSnackbar();

  return function tableCreateSubcategoriesAction(
    owner: JudoIdentifiable<AdminIssueCategory>,
    successCallback: (result: AdminIssueCategoryStored) => void,
    closedCallback?: () => void,
  ) {
    createDialog({
      fullWidth: true,
      maxWidth: 'xs',
      onClose: (event: object, reason: string) => {
        if (reason !== 'backdropClick') {
          closeDialog();
          closedCallback && closedCallback();
        }
      },
      children: (
        <TableCreateSubcategoriesForm
          successCallback={(result: AdminIssueCategoryStored, open?: boolean) => {
            if (!open) {
              closeDialog();
              enqueueSnackbar(t('judo.action.create.success', { defaultValue: 'Create successful' }), {
                variant: 'success',
                ...toastConfig.success,
              });
            }

            successCallback(result);
          }}
          cancel={() => {
            closeDialog();
            closedCallback && closedCallback();
          }}
          owner={owner}
        />
      ),
    });
  };
};
