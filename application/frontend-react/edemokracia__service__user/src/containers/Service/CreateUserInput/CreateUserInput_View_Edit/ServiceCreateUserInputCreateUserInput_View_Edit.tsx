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
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
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

export interface ServiceCreateUserInputCreateUserInput_View_EditActionDefinitions {}

export interface ServiceCreateUserInputCreateUserInput_View_EditProps {
  refreshCounter: number;
  actions: ServiceCreateUserInputCreateUserInput_View_EditActionDefinitions;

  data: ServiceCreateUserInputStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCreateUserInput, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceCreateUserInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCreateUserInput, string>>>;
}

// XMIID: User/(esm/_eNgxcI1eEe2J66C5CrhpQw)/TransferObjectViewPageContainer
// Name: service::CreateUserInput::CreateUserInput_View_Edit
export default function ServiceCreateUserInputCreateUserInput_View_Edit(
  props: ServiceCreateUserInputCreateUserInput_View_EditProps,
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
          id="User/(esm/_eNgxcI1eEe2J66C5CrhpQw)/TransferObjectViewVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <TextField
              required={true}
              name="userName"
              id="User/(esm/_kCeGwI1rEe29qs15q2b6yw)/StringTypeTextInput"
              autoFocus
              label={
                t('service.CreateUserInput.CreateUserInput_View_Edit.userName', { defaultValue: 'UserName' }) as string
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

          <Grid item xs={12} sm={12}>
            <TextField
              required={true}
              name="email"
              id="User/(esm/_kChxII1rEe29qs15q2b6yw)/StringTypeTextInput"
              label={t('service.CreateUserInput.CreateUserInput_View_Edit.email', { defaultValue: 'Email' }) as string}
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
                    <MdiIcon path="text_fields" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormGroup>
              <FormControlLabel
                className="switch"
                sx={{ marginTop: '6px' }}
                disabled={false || !isFormUpdateable() || isLoading}
                control={
                  <Checkbox
                    checked={data.hasAdminAccess || false}
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
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              required={true}
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

          <Grid item xs={12} sm={12}>
            <TextField
              required={true}
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
        </Grid>
      </Grid>
    </Grid>
  );
}
