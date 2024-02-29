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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
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
import Typography from '@mui/material/Typography';
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
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

import {} from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers';
import {} from '~/components/widgets';
import { autoFocusRefDelay } from '~/config';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceCreateUserInput,
  ServiceCreateUserInputQueryCustomizer,
  ServiceCreateUserInputStored,
} from '~/services/data-api';

export const SERVICE_CREATE_USER_INPUT_CREATE_USER_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_CREATE_USER_INPUT_CREATE_USER_INPUT_FORM_CONTAINER_ACTIONS_HOOK';
export type ServiceCreateUserInputCreateUserInput_FormContainerHook = (
  data: ServiceCreateUserInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCreateUserInput, value: any) => void,
) => ServiceCreateUserInputCreateUserInput_FormActionDefinitions;

export interface ServiceCreateUserInputCreateUserInput_FormActionDefinitions {
  getPageTitle?: (data: ServiceCreateUserInput) => string;
  cancelAction?: () => Promise<void>;
  okAction?: () => Promise<void>;
  createUserForUserManagerAction?: () => Promise<void>;
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
  isLastNameRequired?: (data: ServiceCreateUserInput | ServiceCreateUserInputStored, editMode?: boolean) => boolean;
  isLastNameDisabled?: (
    data: ServiceCreateUserInput | ServiceCreateUserInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isPhoneRequired?: (data: ServiceCreateUserInput | ServiceCreateUserInputStored, editMode?: boolean) => boolean;
  isPhoneDisabled?: (
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
  isUserNameRequired?: (data: ServiceCreateUserInput | ServiceCreateUserInputStored, editMode?: boolean) => boolean;
  isUserNameDisabled?: (
    data: ServiceCreateUserInput | ServiceCreateUserInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface ServiceCreateUserInputCreateUserInput_FormProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceCreateUserInputCreateUserInput_FormActionDefinitions;

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

// XMIID: User/(esm/_eNqicI1eEe2J66C5CrhpQw)/TransferObjectFormPageContainer
// Name: service::CreateUserInput::CreateUserInput_Form
export default function ServiceCreateUserInputCreateUserInput_Form(
  props: ServiceCreateUserInputCreateUserInput_FormProps,
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
  const { service: customContainerHook } = useTrackService<ServiceCreateUserInputCreateUserInput_FormContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_CREATE_USER_INPUT_CREATE_USER_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceCreateUserInputCreateUserInput_FormActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);
  const autoFocusInputRef = useRef<any>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typeof autoFocusInputRef?.current?.focus === 'function') {
        autoFocusInputRef.current.focus();
      }
    }, autoFocusRefDelay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Grid container>
      <Grid item data-name="CreateUserInput_Form" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_eNqicI1eEe2J66C5CrhpQw)/TransferObjectFormVisualElement"
          data-name="CreateUserInput_Form"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item data-name="security" xs={12} sm={12}>
            <Card
              id="User/(esm/_ngqE4I1rEe29qs15q2b6yw)/GroupVisualElement"
              data-name="security"
              sx={{ height: '100%' }}
            >
              <CardContent>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={2}
                  sx={{ mb: 2 }}
                >
                  <Grid item>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="security" sx={{ marginRight: 1 }} />
                      <Typography
                        id="User/(esm/_ngqE4I1rEe29qs15q2b6yw)/GroupVisualElement"
                        variant="h5"
                        component="h1"
                      >
                        {t('service.CreateUserInput.CreateUserInput_Form.security', { defaultValue: 'Security' })}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12} md={4.0}>
                    <TextField
                      required={actions?.isUserNameRequired ? actions.isUserNameRequired(data, editMode) : true}
                      name="userName"
                      id="User/(esm/_kCfU4I1rEe29qs15q2b6yw)/StringTypeTextInput"
                      inputRef={autoFocusInputRef}
                      label={
                        t('service.CreateUserInput.CreateUserInput_Form.userName', {
                          defaultValue: 'UserName',
                        }) as string
                      }
                      value={data.userName ?? ''}
                      className={clsx({
                        'JUDO-viewMode': !editMode,
                        'JUDO-required': true,
                      })}
                      disabled={
                        actions?.isUserNameDisabled ? actions.isUserNameDisabled(data, editMode, isLoading) : isLoading
                      }
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
                                color: (theme) =>
                                  validation.has('hasAdminAccess') ? theme.palette.error.main : 'primary',
                              }}
                              onChange={(event) => {
                                storeDiff('hasAdminAccess', event.target.checked);
                              }}
                            />
                          }
                          label={
                            t('service.CreateUserInput.CreateUserInput_Form.hasAdminAccess', {
                              defaultValue: 'IsAdmin',
                            }) as string
                          }
                        />
                      </FormGroup>
                      {validation.has('hasAdminAccess') && (
                        <FormHelperText>{validation.get('hasAdminAccess')}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item data-name="personal" xs={12} sm={12}>
            <Card
              id="User/(esm/_DmCbMI1sEe29qs15q2b6yw)/GroupVisualElement"
              data-name="personal"
              sx={{ height: '100%' }}
            >
              <CardContent>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={2}
                  sx={{ mb: 2 }}
                >
                  <Grid item>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="card-account-details" sx={{ marginRight: 1 }} />
                      <Typography
                        id="User/(esm/_DmCbMI1sEe29qs15q2b6yw)/GroupVisualElement"
                        variant="h5"
                        component="h1"
                      >
                        {t('service.CreateUserInput.CreateUserInput_Form.personal', { defaultValue: 'Personal' })}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                  <Grid item data-name="name" xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_NdrOsI1sEe29qs15q2b6yw)/GroupVisualElement"
                      data-name="name"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12} md={4.0}>
                        <TextField
                          required={actions?.isFirstNameRequired ? actions.isFirstNameRequired(data, editMode) : true}
                          name="firstName"
                          id="User/(esm/_kCqUAI1rEe29qs15q2b6yw)/StringTypeTextInput"
                          label={
                            t('service.CreateUserInput.CreateUserInput_Form.firstName', {
                              defaultValue: 'FirstName',
                            }) as string
                          }
                          value={data.firstName ?? ''}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': true,
                          })}
                          disabled={
                            actions?.isFirstNameDisabled
                              ? actions.isFirstNameDisabled(data, editMode, isLoading)
                              : isLoading
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
                          id="User/(esm/_kCt-YI1rEe29qs15q2b6yw)/StringTypeTextInput"
                          label={
                            t('service.CreateUserInput.CreateUserInput_Form.lastName', {
                              defaultValue: 'LastName',
                            }) as string
                          }
                          value={data.lastName ?? ''}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': true,
                          })}
                          disabled={
                            actions?.isLastNameDisabled
                              ? actions.isLastNameDisabled(data, editMode, isLoading)
                              : isLoading
                          }
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

                      <Grid item xs={12} sm={12} md={4.0}>
                        <TextField
                          required={actions?.isEmailRequired ? actions.isEmailRequired(data, editMode) : true}
                          name="email"
                          id="User/(esm/_kCi_QI1rEe29qs15q2b6yw)/StringTypeTextInput"
                          label={
                            t('service.CreateUserInput.CreateUserInput_Form.email', { defaultValue: 'Email' }) as string
                          }
                          value={data.email ?? ''}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': true,
                          })}
                          disabled={
                            actions?.isEmailDisabled ? actions.isEmailDisabled(data, editMode, isLoading) : isLoading
                          }
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
                                <MdiIcon path="email" />
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
                          required={actions?.isPhoneRequired ? actions.isPhoneRequired(data, editMode) : false}
                          name="phone"
                          id="User/(esm/_pCywkI1sEe29qs15q2b6yw)/StringTypeTextInput"
                          label={
                            t('service.CreateUserInput.CreateUserInput_Form.phone', { defaultValue: 'Phone' }) as string
                          }
                          value={data.phone ?? ''}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': false,
                          })}
                          disabled={
                            actions?.isPhoneDisabled ? actions.isPhoneDisabled(data, editMode, isLoading) : isLoading
                          }
                          error={!!validation.get('phone')}
                          helperText={validation.get('phone')}
                          onChange={(event) => {
                            const realValue = event.target.value?.length === 0 ? null : event.target.value;
                            storeDiff('phone', realValue);
                          }}
                          InputLabelProps={{ shrink: true }}
                          InputProps={{
                            readOnly: false || !isFormUpdateable(),
                            startAdornment: (
                              <InputAdornment position="start">
                                <MdiIcon path="phone" />
                              </InputAdornment>
                            ),
                          }}
                          inputProps={{
                            maxLength: 20,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item data-name="buttons" xs={12} sm={12}>
            <Grid
              id="User/(esm/_CEJ8QI1tEe29qs15q2b6yw)/GroupVisualElement"
              data-name="buttons"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12} md={4.0}></Grid>

              <Grid item xs={12} sm={12} md={4.0}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
