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
import MenuItem from '@mui/material/MenuItem';
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
import { ServiceSimpleVote, ServiceSimpleVoteQueryCustomizer, ServiceSimpleVoteStored } from '~/services/data-api';

export const SERVICE_SIMPLE_VOTE_SIMPLE_VOTE_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceSimpleVoteSimpleVote_FormContainerHook';
export type ServiceSimpleVoteSimpleVote_FormContainerHook = (
  data: ServiceSimpleVoteStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceSimpleVote, value: any) => void,
) => ServiceSimpleVoteSimpleVote_FormActionDefinitions;

export interface ServiceSimpleVoteSimpleVote_FormActionDefinitions {
  isCreatedRequired?: (data: ServiceSimpleVote | ServiceSimpleVoteStored, editMode?: boolean) => boolean;
  isCreatedDisabled?: (
    data: ServiceSimpleVote | ServiceSimpleVoteStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isTypeRequired?: (data: ServiceSimpleVote | ServiceSimpleVoteStored, editMode?: boolean) => boolean;
  isTypeDisabled?: (
    data: ServiceSimpleVote | ServiceSimpleVoteStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface ServiceSimpleVoteSimpleVote_FormProps {
  refreshCounter: number;
  actions: ServiceSimpleVoteSimpleVote_FormActionDefinitions;

  data: ServiceSimpleVoteStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceSimpleVote, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceSimpleVote, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceSimpleVote, string>>>;
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_p9AJ4GksEe25ONJ3V89cVA)/TransferObjectFormPageContainer
// Name: service::SimpleVote::SimpleVote_Form
export default function ServiceSimpleVoteSimpleVote_Form(props: ServiceSimpleVoteSimpleVote_FormProps) {
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
  const { service: customContainerHook } = useTrackService<ServiceSimpleVoteSimpleVote_FormContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_SIMPLE_VOTE_SIMPLE_VOTE_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceSimpleVoteSimpleVote_FormActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_p9AJ4GksEe25ONJ3V89cVA)/TransferObjectFormVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_5-_pMG5CEe2Q6M99rsfqSQ)/GroupVisualElement"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12} md={4.0}>
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
                      id: 'User/(esm/_VQSXUGk5Ee25ONJ3V89cVA)/TimestampTypeDateTimeInput',
                      required: actions?.isCreatedRequired ? actions.isCreatedRequired(data, editMode) : true,
                      helperText: validation.get('created'),
                      error: !!validation.get('created'),
                      InputProps: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <MdiIcon path="schedule" />
                          </InputAdornment>
                        ),
                      },
                    },
                  }}
                  onError={(newError: DateTimeValidationError, value: any) => {
                    // https://mui.com/x/react-date-pickers/validation/#show-the-error
                    setValidation((prevValidation) => {
                      const copy = new Map<keyof ServiceSimpleVote, string>(prevValidation);
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
                  label={t('service.SimpleVote.SimpleVote_Form.created', { defaultValue: 'Created' }) as string}
                  value={serviceDateToUiDate(data.created ?? null)}
                  readOnly={false || !isFormUpdateable()}
                  disabled={
                    actions?.isCreatedDisabled ? actions.isCreatedDisabled(data, editMode, isLoading) : isLoading
                  }
                  onChange={(newValue: Date) => {
                    storeDiff('created', newValue);
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4.0}>
                <TextField
                  required={actions?.isTypeRequired ? actions.isTypeRequired(data, editMode) : true}
                  name="type"
                  id="User/(esm/_VQXP0Gk5Ee25ONJ3V89cVA)/EnumerationTypeCombo"
                  label={t('service.SimpleVote.SimpleVote_Form.type', { defaultValue: 'Type' }) as string}
                  value={data.type || ''}
                  className={clsx({
                    'JUDO-viewMode': !editMode,
                    'JUDO-required': true,
                  })}
                  disabled={actions?.isTypeDisabled ? actions.isTypeDisabled(data, editMode, isLoading) : isLoading}
                  error={!!validation.get('type')}
                  helperText={validation.get('type')}
                  onChange={(event) => {
                    storeDiff('type', event.target.value);
                  }}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    readOnly: false || !isFormUpdateable(),
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdiIcon path="list" />
                      </InputAdornment>
                    ),
                  }}
                  select
                >
                  <MenuItem id="User/(esm/_W1kWEGkYEe25ONJ3V89cVA)/EnumerationTypeMember" value={'UP'}>
                    {t('enumerations.SimpleVoteType.UP', { defaultValue: 'UP' })}
                  </MenuItem>
                  <MenuItem id="User/(esm/_YoByMGkYEe25ONJ3V89cVA)/EnumerationTypeMember" value={'DOWN'}>
                    {t('enumerations.SimpleVoteType.DOWN', { defaultValue: 'DOWN' })}
                  </MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_7txfMG5CEe2Q6M99rsfqSQ)/GroupVisualElement"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            ></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
