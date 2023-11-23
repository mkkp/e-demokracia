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
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
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
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteEntryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerComponentActionDefinitions } from './components/ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerComponent';
import { ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerComponent } from './components/ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerComponent';

export interface ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditActionDefinitions
  extends ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerComponentActionDefinitions {}

export interface ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditProps {
  refreshCounter: number;
  actions: ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditActionDefinitions;

  data: ServiceSelectAnswerVoteEntry;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteEntry, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceSelectAnswerVoteEntry, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceSelectAnswerVoteEntry, string>>>;
}

// XMIID: User/(esm/_mtFdkFtpEe6Mx9dH3yj5gQ)/TransferObjectViewPageContainer
// Name: service::SelectAnswerVoteEntry::SelectAnswerVoteEntry_View_Edit
export default function ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_Edit(
  props: ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditProps,
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
              id: 'User/(esm/_Kg6pUFuWEe6T042_LMmSdQ)/TimestampTypeDateTimeInput',
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
          disabled={isLoading}
          onChange={(newValue: Date) => {
            storeDiff('created', newValue);
          }}
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <TextField
          required={false}
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
          disabled={isLoading}
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
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <ServiceSelectAnswerVoteEntrySelectAnswerVoteEntry_View_EditOwnerComponent
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
