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
import {} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceCreateIssueInput,
  ServiceCreateIssueInputQueryCustomizer,
  ServiceCreateIssueInputStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
} from '~/services/data-api';
import type { ServiceCreateIssueInputCreateIssueInput_FormCityComponentActionDefinitions } from './components/ServiceCreateIssueInputCreateIssueInput_FormCityComponent';
import { ServiceCreateIssueInputCreateIssueInput_FormCityComponent } from './components/ServiceCreateIssueInputCreateIssueInput_FormCityComponent';
import type { ServiceCreateIssueInputCreateIssueInput_FormCountyComponentActionDefinitions } from './components/ServiceCreateIssueInputCreateIssueInput_FormCountyComponent';
import { ServiceCreateIssueInputCreateIssueInput_FormCountyComponent } from './components/ServiceCreateIssueInputCreateIssueInput_FormCountyComponent';
import type { ServiceCreateIssueInputCreateIssueInput_FormDistrictComponentActionDefinitions } from './components/ServiceCreateIssueInputCreateIssueInput_FormDistrictComponent';
import { ServiceCreateIssueInputCreateIssueInput_FormDistrictComponent } from './components/ServiceCreateIssueInputCreateIssueInput_FormDistrictComponent';
import type { ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponentActionDefinitions } from './components/ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponent';
import { ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponent } from './components/ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponent';

export interface ServiceCreateIssueInputCreateIssueInput_FormActionDefinitions
  extends ServiceCreateIssueInputCreateIssueInput_FormCityComponentActionDefinitions,
    ServiceCreateIssueInputCreateIssueInput_FormCountyComponentActionDefinitions,
    ServiceCreateIssueInputCreateIssueInput_FormDistrictComponentActionDefinitions,
    ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponentActionDefinitions {}

export interface ServiceCreateIssueInputCreateIssueInput_FormProps {
  refreshCounter: number;
  actions: ServiceCreateIssueInputCreateIssueInput_FormActionDefinitions;

  data: ServiceCreateIssueInputStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCreateIssueInput, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceCreateIssueInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCreateIssueInput, string>>>;
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_oCqSgIeIEe2kLcMqsIbMgQ)/TransferObjectFormPageContainer
// Name: service::CreateIssueInput::CreateIssueInput_Form
export default function ServiceCreateIssueInputCreateIssueInput_Form(
  props: ServiceCreateIssueInputCreateIssueInput_FormProps,
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
          id="User/(esm/_oCqSgIeIEe2kLcMqsIbMgQ)/TransferObjectFormVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_RqJLwI1DEe2VSOmaAz6G9Q)/GroupVisualElement"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
                <ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponent
                  disabled={false || !isFormUpdateable()}
                  ownerData={data}
                  editMode={editMode}
                  storeDiff={storeDiff}
                  validationError={validation.get('issueType')}
                  actions={actions}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4.0}>
                <TextField
                  required={true}
                  name="title"
                  id="User/(esm/_DenhMI1DEe2VSOmaAz6G9Q)/StringTypeTextInput"
                  autoFocus
                  label={t('service.CreateIssueInput.CreateIssueInput_Form.title', { defaultValue: 'Title' }) as string}
                  value={data.title ?? ''}
                  className={clsx({
                    'JUDO-viewMode': !editMode,
                    'JUDO-required': true,
                  })}
                  disabled={isLoading}
                  error={!!validation.get('title')}
                  helperText={validation.get('title')}
                  onChange={(event) => {
                    const realValue = event.target.value?.length === 0 ? null : event.target.value;
                    storeDiff('title', realValue);
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
                <DateTimePicker
                  ampm={false}
                  ampmInClock={false}
                  className={clsx({
                    'JUDO-viewMode': !editMode,
                    'JUDO-required': true,
                  })}
                  slotProps={{
                    textField: {
                      id: 'User/(esm/_kPIZMOMfEe2Bgcx6em3jZg)/TimestampTypeDateTimeInput',
                      required: true,
                      helperText: validation.get('debateCloseAt'),
                      error: !!validation.get('debateCloseAt'),
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
                      const copy = new Map<keyof ServiceCreateIssueInput, string>(prevValidation);
                      copy.set(
                        'debateCloseAt',
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
                    t('service.CreateIssueInput.CreateIssueInput_Form.debateCloseAt', {
                      defaultValue: 'Debate close at',
                    }) as string
                  }
                  value={serviceDateToUiDate(data.debateCloseAt ?? null)}
                  readOnly={false || !isFormUpdateable()}
                  disabled={isLoading}
                  onChange={(newValue: Date) => {
                    storeDiff('debateCloseAt', newValue);
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required={true}
                  name="description"
                  id="User/(esm/_Dekd4I1DEe2VSOmaAz6G9Q)/StringTypeTextArea"
                  label={
                    t('service.CreateIssueInput.CreateIssueInput_Form.description', {
                      defaultValue: 'Description',
                    }) as string
                  }
                  value={data.description ?? ''}
                  className={clsx({
                    'JUDO-viewMode': !editMode,
                    'JUDO-required': true,
                  })}
                  disabled={isLoading}
                  multiline
                  minRows={4.0}
                  error={!!validation.get('description')}
                  helperText={validation.get('description')}
                  onChange={(event) => {
                    const realValue = event.target.value?.length === 0 ? null : event.target.value;
                    storeDiff('description', realValue);
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
                <ServiceCreateIssueInputCreateIssueInput_FormCountyComponent
                  disabled={false || !isFormUpdateable()}
                  ownerData={data}
                  editMode={editMode}
                  storeDiff={storeDiff}
                  validationError={validation.get('county')}
                  actions={actions}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4.0}>
                <ServiceCreateIssueInputCreateIssueInput_FormCityComponent
                  disabled={false || !isFormUpdateable()}
                  ownerData={data}
                  editMode={editMode}
                  storeDiff={storeDiff}
                  validationError={validation.get('city')}
                  actions={actions}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4.0}>
                <ServiceCreateIssueInputCreateIssueInput_FormDistrictComponent
                  disabled={false || !isFormUpdateable()}
                  ownerData={data}
                  editMode={editMode}
                  storeDiff={storeDiff}
                  validationError={validation.get('district')}
                  actions={actions}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
