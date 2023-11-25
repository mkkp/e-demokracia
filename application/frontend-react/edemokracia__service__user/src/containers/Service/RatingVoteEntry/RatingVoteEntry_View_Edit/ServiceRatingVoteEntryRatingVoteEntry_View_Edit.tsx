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
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useL10N } from '~/l10n/l10n-context';
import { MdiIcon, DropdownButton, useJudoNavigation } from '~/components';
import { isErrorOperationFault, useErrorHandler, uiDateToServiceDate, serviceDateToUiDate } from '~/utilities';

import { DateTimePicker } from '@mui/x-date-pickers';
import type { DateTimeValidationError } from '@mui/x-date-pickers';
import { NumericInput } from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceRatingVoteEntry,
  ServiceRatingVoteEntryQueryCustomizer,
  ServiceRatingVoteEntryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerComponentActionDefinitions } from './components/ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerComponent';
import { ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerComponent } from './components/ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerComponent';

export interface ServiceRatingVoteEntryRatingVoteEntry_View_EditActionDefinitions
  extends ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerComponentActionDefinitions {}

export interface ServiceRatingVoteEntryRatingVoteEntry_View_EditProps {
  refreshCounter: number;
  actions: ServiceRatingVoteEntryRatingVoteEntry_View_EditActionDefinitions;

  data: ServiceRatingVoteEntryStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceRatingVoteEntry, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceRatingVoteEntry, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceRatingVoteEntry, string>>>;
}

// XMIID: User/(esm/_J1HkoFslEe6Mx9dH3yj5gQ)/TransferObjectViewPageContainer
// Name: service::RatingVoteEntry::RatingVoteEntry_View_Edit
export default function ServiceRatingVoteEntryRatingVoteEntry_View_Edit(
  props: ServiceRatingVoteEntryRatingVoteEntry_View_EditProps,
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
    <Grid container spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
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
              id: 'User/(esm/_V523gFuWEe6T042_LMmSdQ)/TimestampTypeDateTimeInput',
              required: true,
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
              const copy = new Map<keyof ServiceRatingVoteEntry, string>(prevValidation);
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
          label={t('service.RatingVoteEntry.RatingVoteEntry_View_Edit.created', { defaultValue: 'Created' }) as string}
          value={serviceDateToUiDate(data.created ?? null)}
          readOnly={false || !isFormUpdateable()}
          disabled={isLoading}
          onChange={(newValue: Date) => {
            storeDiff('created', newValue);
          }}
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <NumericInput
          required={true}
          name="value"
          id="User/(esm/_V53ekVuWEe6T042_LMmSdQ)/NumericTypeVisualInput"
          label={t('service.RatingVoteEntry.RatingVoteEntry_View_Edit.value', { defaultValue: 'Value' }) as string}
          customInput={TextField}
          value={data.value ?? ''}
          className={clsx({
            'JUDO-viewMode': !editMode,
            'JUDO-required': true,
          })}
          disabled={isLoading}
          error={!!validation.get('value')}
          helperText={validation.get('value')}
          onValueChange={(values, sourceInfo) => {
            const newValue = values.floatValue === undefined ? null : values.floatValue;
            if (data.value !== newValue) {
              storeDiff('value', newValue);
            }
          }}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            readOnly: false || !isFormUpdateable(),
            startAdornment: (
              <InputAdornment position="start">
                <MdiIcon path="numeric" />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerComponent
          disabled={false || !isFormUpdateable()}
          ownerData={data}
          editMode={editMode}
          storeDiff={storeDiff}
          validationError={validation.get('owner')}
          actions={actions}
        />
      </Grid>
    </Grid>
  );
}
