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
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, serviceDateToUiDate, uiDateToServiceDate, useErrorHandler } from '~/utilities';

import { DateTimePicker } from '@mui/x-date-pickers';
import type { DateTimeValidationError } from '@mui/x-date-pickers';
import {} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteEntryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerComponentActionDefinitions } from './components/ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerComponent';
import { ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerComponent } from './components/ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerComponent';

export const SERVICE_SELECT_ANSWER_VOTE_ENTRY_SELECT_ANSWER_VOTE_ENTRY_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditContainerHook';
export type ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditContainerHook = (
  data: ServiceSelectAnswerVoteEntryStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteEntry, value: any) => void,
) => ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditActionDefinitions;

export interface ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditActionDefinitions
  extends ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerComponentActionDefinitions {
  isCreatedRequired?: (
    data: ServiceSelectAnswerVoteEntry | ServiceSelectAnswerVoteEntryStored,
    editMode?: boolean,
  ) => boolean;
  isCreatedDisabled?: (
    data: ServiceSelectAnswerVoteEntry | ServiceSelectAnswerVoteEntryStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isValueRepresentationRequired?: (
    data: ServiceSelectAnswerVoteEntry | ServiceSelectAnswerVoteEntryStored,
    editMode?: boolean,
  ) => boolean;
  isValueRepresentationDisabled?: (
    data: ServiceSelectAnswerVoteEntry | ServiceSelectAnswerVoteEntryStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditProps {
  refreshCounter: number;
  actions: ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditActionDefinitions;

  data: ServiceSelectAnswerVoteEntryStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteEntry, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceSelectAnswerVoteEntry, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceSelectAnswerVoteEntry, string>>>;
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_mtFdkFtpEe6Mx9dH3yj5gQ)/TransferObjectViewPageContainer
// Name: service::SelectAnswerVoteEntry::SelectAnswerVoteEntry_View_Edit
export default function ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_Edit(
  props: ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditProps,
) {
  // Container props
  const {
    refreshCounter,
    actions: pageActions,
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
    useTrackService<ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_SELECT_ANSWER_VOTE_ENTRY_SELECT_ANSWER_VOTE_ENTRY_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_mtFdkFtpEe6Mx9dH3yj5gQ)/TransferObjectViewVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <DateTimePicker
              ampm={false}
              ampmInClock={false}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              autoFocus
              slotProps={{
                textField: {
                  id: 'User/(esm/_Kg6pUFuWEe6T042_LMmSdQ)/TimestampTypeDateTimeInput',
                  required: actions?.isCreatedRequired ? actions.isCreatedRequired(data, editMode) : true,
                  helperText: validation.get('created'),
                  error: !!validation.get('created'),
                  InputProps: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdiIcon path="calendar-clock" />
                      </InputAdornment>
                    ),
                  },
                },
              }}
              onError={(newError: DateTimeValidationError, value: any) => {
                // https://mui.com/x/react-date-pickers/validation/#show-the-error
                setValidation((prevValidation) => {
                  const copy = new Map<keyof ServiceSelectAnswerVoteEntry, string>(prevValidation);
                  copy.set(
                    'created',
                    newError === 'invalidDate'
                      ? (t('judo.error.validation-failed.PATTERN_VALIDATION_FAILED', {
                          defaultValue: 'Value does not match the pattern requirements.',
                        }) as string)
                      : '',
                  );
                  return copy;
                });
              }}
              views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
              label={
                t('service.SelectAnswerVoteEntry.SelectAnswerVoteEntry_View_Edit.created', {
                  defaultValue: 'Created',
                }) as string
              }
              value={serviceDateToUiDate(data.created ?? null)}
              readOnly={false || !isFormUpdateable()}
              disabled={actions?.isCreatedDisabled ? actions.isCreatedDisabled(data, editMode, isLoading) : isLoading}
              onChange={(newValue: Date) => {
                storeDiff('created', newValue);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              required={
                actions?.isValueRepresentationRequired ? actions.isValueRepresentationRequired(data, editMode) : false
              }
              name="valueRepresentation"
              id="User/(esm/_Kg7QYVuWEe6T042_LMmSdQ)/StringTypeTextInput"
              label={
                t('service.SelectAnswerVoteEntry.SelectAnswerVoteEntry_View_Edit.valueRepresentation', {
                  defaultValue: 'ValueRepresentation',
                }) as string
              }
              value={data.valueRepresentation ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': false,
              })}
              disabled={
                actions?.isValueRepresentationDisabled
                  ? actions.isValueRepresentationDisabled(data, editMode, isLoading)
                  : isLoading
              }
              error={!!validation.get('valueRepresentation')}
              helperText={validation.get('valueRepresentation')}
              onChange={(event) => {
                const realValue = event.target.value?.length === 0 ? null : event.target.value;
                storeDiff('valueRepresentation', realValue);
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                readOnly: true || !isFormUpdateable(),
                startAdornment: (
                  <InputAdornment position="start">
                    <MdiIcon path="format-size" />
                  </InputAdornment>
                ),
              }}
              inputProps={{
                maxlength: 255,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerComponent
              disabled={false}
              readOnly={false || !isFormUpdateable()}
              ownerData={data}
              editMode={editMode}
              isLoading={isLoading}
              storeDiff={storeDiff}
              validationError={validation.get('owner')}
              actions={actions}
              submit={submit}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
