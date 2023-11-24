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
import MenuItem from '@mui/material/MenuItem';
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
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryQueryCustomizer,
  ServiceYesNoVoteEntryStored,
} from '~/services/data-api';
import type { ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponentActionDefinitions } from './components/ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponent';
import { ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponent } from './components/ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponent';

export interface ServiceYesNoVoteEntryYesNoVoteEntry_View_EditActionDefinitions
  extends ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponentActionDefinitions {}

export interface ServiceYesNoVoteEntryYesNoVoteEntry_View_EditProps {
  refreshCounter: number;
  actions: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditActionDefinitions;

  data: ServiceYesNoVoteEntryStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceYesNoVoteEntry, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceYesNoVoteEntry, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceYesNoVoteEntry, string>>>;
}

// XMIID: User/(esm/_LNbaEFoiEe6_67aMO2jOsw)/TransferObjectViewPageContainer
// Name: service::YesNoVoteEntry::YesNoVoteEntry_View_Edit
export default function ServiceYesNoVoteEntryYesNoVoteEntry_View_Edit(
  props: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditProps,
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
              id: 'User/(esm/_88hicFowEe6_67aMO2jOsw)/TimestampTypeDateTimeInput',
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
              const copy = new Map<keyof ServiceYesNoVoteEntry, string>(prevValidation);
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
          label={t('service.YesNoVoteEntry.YesNoVoteEntry_View_Edit.created', { defaultValue: 'Created' }) as string}
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
          required={true}
          name="value"
          id="User/(esm/_88iJgFowEe6_67aMO2jOsw)/EnumerationTypeCombo"
          label={t('service.YesNoVoteEntry.YesNoVoteEntry_View_Edit.value', { defaultValue: 'Value' }) as string}
          value={data.value || ''}
          className={clsx({
            'JUDO-viewMode': !editMode,
            'JUDO-required': true,
          })}
          disabled={isLoading}
          error={!!validation.get('value')}
          helperText={validation.get('value')}
          onChange={(event) => {
            storeDiff('value', event.target.value);
          }}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            readOnly: false || !isFormUpdateable(),
            startAdornment: (
              <InputAdornment position="start">
                <MdiIcon path="format-list-numbered" />
              </InputAdornment>
            ),
          }}
          select
        >
          <MenuItem id="User/(esm/_2E9NMW6dEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'YES'}>
            {t('enumerations.YesNoVoteValue.YES', { defaultValue: 'YES' })}
          </MenuItem>
          <MenuItem id="User/(esm/_2E9NMm6dEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'NO'}>
            {t('enumerations.YesNoVoteValue.NO', { defaultValue: 'NO' })}
          </MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={12} sm={12}>
        <ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponent
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