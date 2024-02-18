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
import { isErrorOperationFault, serviceDateToUiDate, uiDateToServiceDate, useErrorHandler } from '~/utilities';

import { DateTimePicker } from '@mui/x-date-pickers';
import type { DateTimeValidationError } from '@mui/x-date-pickers';
import {} from '~/components/widgets';
import { autoFocusRefDelay } from '~/config';
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

export const SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_CONTAINER_ACTIONS_HOOK';
export type ServiceCreateIssueInputCreateIssueInput_FormContainerHook = (
  data: ServiceCreateIssueInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCreateIssueInput, value: any) => void,
) => ServiceCreateIssueInputCreateIssueInput_FormActionDefinitions;

export interface ServiceCreateIssueInputCreateIssueInput_FormActionDefinitions
  extends ServiceCreateIssueInputCreateIssueInput_FormCityComponentActionDefinitions,
    ServiceCreateIssueInputCreateIssueInput_FormCountyComponentActionDefinitions,
    ServiceCreateIssueInputCreateIssueInput_FormDistrictComponentActionDefinitions,
    ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponentActionDefinitions {
  getPageTitle?: (data: ServiceCreateIssueInput) => string;
  createIssueForUserIssuesAction?: () => Promise<void>;
  isDebateCloseAtRequired?: (
    data: ServiceCreateIssueInput | ServiceCreateIssueInputStored,
    editMode?: boolean,
  ) => boolean;
  isDebateCloseAtDisabled?: (
    data: ServiceCreateIssueInput | ServiceCreateIssueInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isDescriptionRequired?: (
    data: ServiceCreateIssueInput | ServiceCreateIssueInputStored,
    editMode?: boolean,
  ) => boolean;
  isDescriptionDisabled?: (
    data: ServiceCreateIssueInput | ServiceCreateIssueInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isTitleRequired?: (data: ServiceCreateIssueInput | ServiceCreateIssueInputStored, editMode?: boolean) => boolean;
  isTitleDisabled?: (
    data: ServiceCreateIssueInput | ServiceCreateIssueInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface ServiceCreateIssueInputCreateIssueInput_FormProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceCreateIssueInputCreateIssueInput_FormActionDefinitions;

  data: ServiceCreateIssueInputStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCreateIssueInput, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceCreateIssueInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCreateIssueInput, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_oCqSgIeIEe2kLcMqsIbMgQ)/TransferObjectFormPageContainer
// Name: service::CreateIssueInput::CreateIssueInput_Form
export default function ServiceCreateIssueInputCreateIssueInput_Form(
  props: ServiceCreateIssueInputCreateIssueInput_FormProps,
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
  const { service: customContainerHook } = useTrackService<ServiceCreateIssueInputCreateIssueInput_FormContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceCreateIssueInputCreateIssueInput_FormActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);
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
      <Grid item data-name="CreateIssueInput_Form" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_oCqSgIeIEe2kLcMqsIbMgQ)/TransferObjectFormVisualElement"
          data-name="CreateIssueInput_Form"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item data-name="issue" xs={12} sm={12}>
            <Grid
              id="User/(esm/_RqJLwI1DEe2VSOmaAz6G9Q)/GroupVisualElement"
              data-name="issue"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
                <ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponent
                  disabled={false}
                  readOnly={false || !isFormUpdateable()}
                  ownerData={data}
                  editMode={editMode}
                  isLoading={isLoading}
                  isDraft={isDraft}
                  storeDiff={storeDiff}
                  validationError={validation.get('issueType')}
                  actions={actions}
                  submit={submit}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4.0}>
                <TextField
                  required={actions?.isTitleRequired ? actions.isTitleRequired(data, editMode) : true}
                  name="title"
                  id="User/(esm/_DenhMI1DEe2VSOmaAz6G9Q)/StringTypeTextInput"
                  inputRef={autoFocusInputRef}
                  label={t('service.CreateIssueInput.CreateIssueInput_Form.title', { defaultValue: 'Title' }) as string}
                  value={data.title ?? ''}
                  className={clsx({
                    'JUDO-viewMode': !editMode,
                    'JUDO-required': true,
                  })}
                  disabled={actions?.isTitleDisabled ? actions.isTitleDisabled(data, editMode, isLoading) : isLoading}
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
                  inputProps={{
                    maxLength: 255,
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
                      required: actions?.isDebateCloseAtRequired
                        ? actions.isDebateCloseAtRequired(data, editMode)
                        : true,
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
                  disabled={
                    actions?.isDebateCloseAtDisabled
                      ? actions.isDebateCloseAtDisabled(data, editMode, isLoading)
                      : isLoading
                  }
                  onChange={(newValue: Date) => {
                    storeDiff('debateCloseAt', newValue);
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required={actions?.isDescriptionRequired ? actions.isDescriptionRequired(data, editMode) : true}
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
                  disabled={
                    actions?.isDescriptionDisabled
                      ? actions.isDescriptionDisabled(data, editMode, isLoading)
                      : isLoading
                  }
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
                  inputProps={{
                    maxLength: 16384,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4.0}>
                <ServiceCreateIssueInputCreateIssueInput_FormCountyComponent
                  disabled={false}
                  readOnly={false || !isFormUpdateable()}
                  ownerData={data}
                  editMode={editMode}
                  isLoading={isLoading}
                  isDraft={isDraft}
                  storeDiff={storeDiff}
                  validationError={validation.get('county')}
                  actions={actions}
                  submit={submit}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4.0}>
                <ServiceCreateIssueInputCreateIssueInput_FormCityComponent
                  disabled={false}
                  readOnly={false || !isFormUpdateable()}
                  ownerData={data}
                  editMode={editMode}
                  isLoading={isLoading}
                  isDraft={isDraft}
                  storeDiff={storeDiff}
                  validationError={validation.get('city')}
                  actions={actions}
                  submit={submit}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4.0}>
                <ServiceCreateIssueInputCreateIssueInput_FormDistrictComponent
                  disabled={false}
                  readOnly={false || !isFormUpdateable()}
                  ownerData={data}
                  editMode={editMode}
                  isLoading={isLoading}
                  isDraft={isDraft}
                  storeDiff={storeDiff}
                  validationError={validation.get('district')}
                  actions={actions}
                  submit={submit}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
