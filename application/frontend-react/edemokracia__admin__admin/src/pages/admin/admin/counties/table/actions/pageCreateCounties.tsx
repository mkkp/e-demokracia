//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#self.value)+'actions/'+#pageActionPathSuffix(#self.key,#self.value)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Base URL: mvn:hu.blackbelt.judo.generator:judo-ui-react:1.0.0.20230413_174054_1b98627b_develop
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: CreateAction

import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { JudoIdentifiable } from '@judo/data-api-common';
import type { DialogOption } from '../../../../../../components/dialog';
import { useDialog } from '../../../../../../components/dialog';
import { FilterOption, FilterType } from '../../../../../../components-api';
import { useErrorHandler, ERROR_PROCESSOR_HOOK_INTERFACE_KEY } from '../../../../../../utilities';

import { AdminCountyQueryCustomizer, AdminCounty, AdminCountyStored } from '../../../../../../generated/data-api';
import { adminAdminServiceForCountiesImpl, adminCountyServiceImpl } from '../../../../../../generated/data-axios';
import { PageCreateCountiesForm } from './PageCreateCountiesForm';

export type PageCreateCountiesAction = () => (successCallback: (result: AdminCountyStored) => void) => void;

export const usePageCreateCountiesAction: PageCreateCountiesAction = () => {
  const [createDialog, closeDialog] = useDialog();
  const { enqueueSnackbar } = useSnackbar();

  return function pageCreateCountiesAction(successCallback: (result: AdminCountyStored) => void) {
    createDialog({
      fullWidth: true,
      maxWidth: 'lg',
      onClose: (event: object, reason: string) => {
        if (reason !== 'backdropClick') {
          closeDialog();
        }
      },
      children: (
        <PageCreateCountiesForm
          successCallback={(result) => {
            closeDialog();
            successCallback(result);
          }}
          cancel={closeDialog}
        />
      ),
    });
  };
};
