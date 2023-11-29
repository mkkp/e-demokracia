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
import { LoadingButton } from '@mui/lab';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { clsx } from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useL10N } from '~/l10n/l10n-context';
import { MdiIcon, DropdownButton, useJudoNavigation } from '~/components';
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

export interface ServiceCreateUserInputCreateUserInput_FormActionDefinitions {
  cancelAction?: () => Promise<void>;
  okAction?: () => Promise<void>;
}

export interface ServiceCreateUserInputCreateUserInput_FormProps {
  refreshCounter: number;
  actions: ServiceCreateUserInputCreateUserInput_FormActionDefinitions;

  data: ServiceCreateUserInputStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCreateUserInput, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceCreateUserInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCreateUserInput, string>>>;
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_eNqicI1eEe2J66C5CrhpQw)/TransferObjectFormPageContainer
// Name: service::CreateUserInput::CreateUserInput_Form
export default function ServiceCreateUserInputCreateUserInput_Form(
  props: ServiceCreateUserInputCreateUserInput_FormProps,
) {
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
    submit,
  } = props;
  const { locale: l10nLocale } = useL10N();

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_eNqicI1eEe2J66C5CrhpQw)/TransferObjectFormVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Card id="_WW_98I7EEe6rlbj78nBB0Q)/LabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="security" sx={{ marginRight: 1 }} />
                      <Typography id="_WW_98I7EEe6rlbj78nBB0Q)/Label" variant="h5" component="h1">
                        {t('service.CreateUserInput.CreateUserInput_Form.security.Icon', { defaultValue: 'Security' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_ngqE4I1rEe29qs15q2b6yw)/GroupVisualElement"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12} md={4.0}>
                        <TextField
                          required={true}
                          name="userName"
                          id="User/(esm/_kCfU4I1rEe29qs15q2b6yw)/StringTypeTextInput"
                          autoFocus
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
                          disabled={isLoading}
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
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={4.0}>
                        <FormControl error={!!validation.get('hasAdminAccess')}>
                          <FormGroup>
                            <FormControlLabel
                              className="switch"
                              sx={{
                                marginTop: '6px',
                                color: (theme) =>
                                  validation.has('hasAdminAccess') ? theme.palette.error.main : 'primary',
                              }}
                              disabled={false || !isFormUpdateable() || isLoading}
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
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Card id="_WXBzI47EEe6rlbj78nBB0Q)/LabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="card-account-details" sx={{ marginRight: 1 }} />
                      <Typography id="_WXBzI47EEe6rlbj78nBB0Q)/Label" variant="h5" component="h1">
                        {t('service.CreateUserInput.CreateUserInput_Form.personal.Icon', { defaultValue: 'Personal' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_DmCbMI1sEe29qs15q2b6yw)/GroupVisualElement"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_NdrOsI1sEe29qs15q2b6yw)/GroupVisualElement"
                          container
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12} md={4.0}>
                            <TextField
                              required={true}
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
                              disabled={isLoading}
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
                            />
                          </Grid>

                          <Grid item xs={12} sm={12} md={4.0}>
                            <TextField
                              required={true}
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
                              disabled={isLoading}
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
                            />
                          </Grid>

                          <Grid item xs={12} sm={12} md={4.0}>
                            <TextField
                              required={true}
                              name="email"
                              id="User/(esm/_kCi_QI1rEe29qs15q2b6yw)/StringTypeTextInput"
                              label={
                                t('service.CreateUserInput.CreateUserInput_Form.email', {
                                  defaultValue: 'Email',
                                }) as string
                              }
                              value={data.email ?? ''}
                              className={clsx({
                                'JUDO-viewMode': !editMode,
                                'JUDO-required': true,
                              })}
                              disabled={isLoading}
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
                            />
                          </Grid>

                          <Grid item xs={12} sm={12} md={4.0}>
                            <TextField
                              required={false}
                              name="phone"
                              id="User/(esm/_pCywkI1sEe29qs15q2b6yw)/StringTypeTextInput"
                              label={
                                t('service.CreateUserInput.CreateUserInput_Form.phone', {
                                  defaultValue: 'Phone',
                                }) as string
                              }
                              value={data.phone ?? ''}
                              className={clsx({
                                'JUDO-viewMode': !editMode,
                                'JUDO-required': false,
                              })}
                              disabled={isLoading}
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
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_CEJ8QI1tEe29qs15q2b6yw)/GroupVisualElement"
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
