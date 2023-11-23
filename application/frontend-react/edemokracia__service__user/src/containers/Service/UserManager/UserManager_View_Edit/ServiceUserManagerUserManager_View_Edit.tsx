//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'.tsx'
// Template name: actor/src/containers/container.tsx
// Template file: actor/src/containers/container.tsx.hbs

import type { Dispatch, SetStateAction, FC } from 'react';
import { forwardRef, useEffect, useState, useCallback, useImperativeHandle } from 'react';
import { useTranslation } from 'react-i18next';
import { NumericFormat } from 'react-number-format';
import { LoadingButton } from '@mui/lab';
import { OBJECTCLASS } from '@pandino/pandino-api';
import type { JudoIdentifiable } from '@judo/data-api-common';
import type { CustomFormVisualElementProps } from '~/custom';
import { ComponentProxy } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { GridFilterModel } from '@mui/x-data-grid';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { mainContainerPadding } from '~/theme';
import { DIVIDER_HEIGHT } from '~/config';
import type { Filter } from '~/components-api';
import { MdiIcon, ModeledTabs, DropdownButton, useJudoNavigation } from '~/components';
import {
  isErrorOperationFault,
  useErrorHandler,
  fileHandling,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '~/utilities';

import { DatePicker, DateTimePicker, TimePicker } from '@mui/x-date-pickers';
import type { DateValidationError, DateTimeValidationError, TimeValidationError } from '@mui/x-date-pickers';
import {
  AssociationButton,
  BinaryInput,
  CollectionAssociationButton,
  NumericInput,
  TrinaryLogicCombobox,
} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserManager,
  ServiceUserManagerQueryCustomizer,
  ServiceUserManagerStored,
} from '~/services/data-api';
import type { ServiceUserManagerUserManager_View_EditUsersComponentActionDefinitions } from './components/ServiceUserManagerUserManager_View_EditUsersComponent';
import { ServiceUserManagerUserManager_View_EditUsersComponent } from './components/ServiceUserManagerUserManager_View_EditUsersComponent';

export interface ServiceUserManagerUserManager_View_EditActionDefinitions
  extends ServiceUserManagerUserManager_View_EditUsersComponentActionDefinitions {
  createUserAction?: () => Promise<void>;
}

export interface ServiceUserManagerUserManager_View_EditProps {
  refreshCounter: number;
  actions: ServiceUserManagerUserManager_View_EditActionDefinitions;

  data: ServiceUserManagerStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceUserManager, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceUserManager, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceUserManager, string>>>;
}

// XMIID: User/(esm/_dGIWgFvOEe6jm_SkPSYEYw)/TransferObjectViewPageContainer
// Name: service::UserManager::UserManager_View_Edit
export default function ServiceUserManagerUserManager_View_Edit(props: ServiceUserManagerUserManager_View_EditProps) {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    refreshCounter,
    actions,
    data,
    isLoading,
    isFormUpdateable,
    isFormDeleteable,
    storeDiff,
    editMode,
    validation,
    setValidation,
  } = props;
  const { locale: l10nLocale } = useL10N();

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );

  return (
    <Grid container spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item>
            <LoadingButton
              id="User/(esm/_rDBEIFv6Ee6nEc5rp_Qy4A)/OperationFormVisualElement"
              loading={isLoading}
              startIcon={<MdiIcon path="account-plus" />}
              loadingPosition="start"
              onClick={
                actions.createUserAction
                  ? async () => {
                      await actions.createUserAction!();
                    }
                  : undefined
              }
              disabled={editMode}
            >
              <span>{t('service.UserManager.UserManager_View_Edit.createUser', { defaultValue: 'Create User' })}</span>
            </LoadingButton>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
        >
          <ServiceUserManagerUserManager_View_EditUsersComponent
            uniqueId={'User/(esm/_MJ6o0FvVEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable'}
            actions={actions}
            ownerData={data}
            editMode={editMode}
            isFormUpdateable={isFormUpdateable}
            validationError={validation.get('users')}
            refreshCounter={refreshCounter}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
