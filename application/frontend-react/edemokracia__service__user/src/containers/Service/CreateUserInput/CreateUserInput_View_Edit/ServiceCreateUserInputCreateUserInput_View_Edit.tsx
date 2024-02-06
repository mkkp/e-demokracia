//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'.tsx'
// Template name: actor/src/containers/container.tsx
// Template file: actor/src/containers/container.tsx.hbs

import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

import {} from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers';
import {} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceCreateUserInput,
  ServiceCreateUserInputQueryCustomizer,
  ServiceCreateUserInputStored,
} from '~/services/data-api';

export const SERVICE_CREATE_USER_INPUT_CREATE_USER_INPUT_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_CREATE_USER_INPUT_CREATE_USER_INPUT_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type ServiceCreateUserInputCreateUserInput_View_EditContainerHook = (
  data: ServiceCreateUserInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCreateUserInput, value: any) => void,
) => ServiceCreateUserInputCreateUserInput_View_EditActionDefinitions;

export interface ServiceCreateUserInputCreateUserInput_View_EditActionDefinitions {
  getPageTitle?: (data: ServiceCreateUserInput) => string;
  isEmailRequired?: (data: ServiceCreateUserInput | ServiceCreateUserInputStored, editMode?: boolean) => boolean;
  isEmailDisabled?: (
    data: ServiceCreateUserInput | ServiceCreateUserInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isFirstNameRequired?: (data: ServiceCreateUserInput | ServiceCreateUserInputStored, editMode?: boolean) => boolean;
  isFirstNameDisabled?: (
    data: ServiceCreateUserInput | ServiceCreateUserInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isHasAdminAccessRequired?: (
    data: ServiceCreateUserInput | ServiceCreateUserInputStored,
    editMode?: boolean,
  ) => boolean;
  isHasAdminAccessDisabled?: (
    data: ServiceCreateUserInput | ServiceCreateUserInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isLastNameRequired?: (data: ServiceCreateUserInput | ServiceCreateUserInputStored, editMode?: boolean) => boolean;
  isLastNameDisabled?: (
    data: ServiceCreateUserInput | ServiceCreateUserInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isUserNameRequired?: (data: ServiceCreateUserInput | ServiceCreateUserInputStored, editMode?: boolean) => boolean;
  isUserNameDisabled?: (
    data: ServiceCreateUserInput | ServiceCreateUserInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  getMask?: () => string;
}

export interface ServiceCreateUserInputCreateUserInput_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceCreateUserInputCreateUserInput_View_EditActionDefinitions;

  data: ServiceCreateUserInputStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCreateUserInput, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceCreateUserInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCreateUserInput, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_eNgxcI1eEe2J66C5CrhpQw)/TransferObjectViewPageContainer
// Name: service::CreateUserInput::CreateUserInput_View_Edit
export default function ServiceCreateUserInputCreateUserInput_View_Edit(
  props: ServiceCreateUserInputCreateUserInput_View_EditProps,
) {
  // Container props
  const {
    refreshCounter,
    isLoading,
    isDraft,
    actions: pageActions,
    data,
    isFormUpdateable,
    isFormDeleteable,
    storeDiff,
    editMode,
    validation,
    setValidation,
    submit,
  } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );
  // Pandino Container Action overrides
  const { service: customContainerHook } =
    useTrackService<ServiceCreateUserInputCreateUserInput_View_EditContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_CREATE_USER_INPUT_CREATE_USER_INPUT_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceCreateUserInputCreateUserInput_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="CreateUserInput_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_eNgxcI1eEe2J66C5CrhpQw)/TransferObjectViewVisualElement"
          data-name="CreateUserInput_View_Edit"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={4.0}>
            <TextField
              required={actions?.isUserNameRequired ? actions.isUserNameRequired(data, editMode) : true}
              name="userName"
              id="User/(esm/_kCeGwI1rEe29qs15q2b6yw)/StringTypeTextInput"
              label={
                t('service.CreateUserInput.CreateUserInput_View_Edit.userName', { defaultValue: 'UserName' }) as string
              }
              value={data.userName ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={actions?.isUserNameDisabled ? actions.isUserNameDisabled(data, editMode, isLoading) : isLoading}
              error={!!validation.get('userName')}
              helperText={validation.get('userName')}
              onChange={(event) => {
                const realValue = event.target.value?.length === 0 ? null : event.target.value;
                storeDiff('userName', realValue);
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                readOnly: false || !isFormUpdateable(),
                startAdornment: (
                  <InputAdornment position="start">
                    <MdiIcon path="text_fields" />
                  </InputAdornment>
                ),
              }}
              inputProps={{
                maxLength: 255,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4.0}>
            <TextField
              required={actions?.isEmailRequired ? actions.isEmailRequired(data, editMode) : true}
              name="email"
              id="User/(esm/_kChxII1rEe29qs15q2b6yw)/StringTypeTextInput"
              label={t('service.CreateUserInput.CreateUserInput_View_Edit.email', { defaultValue: 'Email' }) as string}
              value={data.email ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={actions?.isEmailDisabled ? actions.isEmailDisabled(data, editMode, isLoading) : isLoading}
              error={!!validation.get('email')}
              helperText={validation.get('email')}
              onChange={(event) => {
                const realValue = event.target.value?.length === 0 ? null : event.target.value;
                storeDiff('email', realValue);
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                readOnly: false || !isFormUpdateable(),
                startAdornment: (
                  <InputAdornment position="start">
                    <MdiIcon path="text_fields" />
                  </InputAdornment>
                ),
              }}
              inputProps={{
                maxLength: 255,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4.0}>
            <FormControl error={!!validation.get('hasAdminAccess')}>
              <FormGroup>
                <FormControlLabel
                  className="checkbox"
                  sx={{
                    marginTop: '6px',
                    color: (theme) => (validation.has('hasAdminAccess') ? theme.palette.error.main : 'primary'),
                  }}
                  disabled={
                    actions?.isHasAdminAccessDisabled
                      ? actions.isHasAdminAccessDisabled(data, editMode, isLoading)
                      : false || !isFormUpdateable() || isLoading
                  }
                  control={
                    <Checkbox
                      checked={data.hasAdminAccess || false}
                      sx={{
                        color: (theme) => (validation.has('hasAdminAccess') ? theme.palette.error.main : 'primary'),
                      }}
                      onChange={(event) => {
                        storeDiff('hasAdminAccess', event.target.checked);
                      }}
                    />
                  }
                  label={
                    t('service.CreateUserInput.CreateUserInput_View_Edit.hasAdminAccess', {
                      defaultValue: 'IsAdmin',
                    }) as string
                  }
                />
              </FormGroup>
              {validation.has('hasAdminAccess') && <FormHelperText>{validation.get('hasAdminAccess')}</FormHelperText>}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={4.0}>
            <TextField
              required={actions?.isFirstNameRequired ? actions.isFirstNameRequired(data, editMode) : true}
              name="firstName"
              id="User/(esm/_kCpF4I1rEe29qs15q2b6yw)/StringTypeTextInput"
              label={
                t('service.CreateUserInput.CreateUserInput_View_Edit.firstName', {
                  defaultValue: 'FirstName',
                }) as string
              }
              value={data.firstName ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={
                actions?.isFirstNameDisabled ? actions.isFirstNameDisabled(data, editMode, isLoading) : isLoading
              }
              error={!!validation.get('firstName')}
              helperText={validation.get('firstName')}
              onChange={(event) => {
                const realValue = event.target.value?.length === 0 ? null : event.target.value;
                storeDiff('firstName', realValue);
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                readOnly: false || !isFormUpdateable(),
                startAdornment: (
                  <InputAdornment position="start">
                    <MdiIcon path="text_fields" />
                  </InputAdornment>
                ),
              }}
              inputProps={{
                maxLength: 255,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4.0}>
            <TextField
              required={actions?.isLastNameRequired ? actions.isLastNameRequired(data, editMode) : true}
              name="lastName"
              id="User/(esm/_kCswQI1rEe29qs15q2b6yw)/StringTypeTextInput"
              label={
                t('service.CreateUserInput.CreateUserInput_View_Edit.lastName', { defaultValue: 'LastName' }) as string
              }
              value={data.lastName ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={actions?.isLastNameDisabled ? actions.isLastNameDisabled(data, editMode, isLoading) : isLoading}
              error={!!validation.get('lastName')}
              helperText={validation.get('lastName')}
              onChange={(event) => {
                const realValue = event.target.value?.length === 0 ? null : event.target.value;
                storeDiff('lastName', realValue);
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                readOnly: false || !isFormUpdateable(),
                startAdornment: (
                  <InputAdornment position="start">
                    <MdiIcon path="text_fields" />
                  </InputAdornment>
                ),
              }}
              inputProps={{
                maxLength: 255,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
