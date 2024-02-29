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
import type { BaseDateValidationProps } from '~/utilities';
import { isErrorOperationFault, serviceDateToUiDate, uiDateToServiceDate, useErrorHandler } from '~/utilities';

import { DateTimePicker } from '@mui/x-date-pickers';
import type { DateTimeValidationError } from '@mui/x-date-pickers';
import { AssociationButton, NumericInput } from '~/components/widgets';
import { autoFocusRefDelay } from '~/config';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceCon,
  ServiceConQueryCustomizer,
  ServiceConStored,
  ServicePro,
  ServiceProQueryCustomizer,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteStored,
} from '~/services/data-api';
import type { ServiceConCon_FormConsComponentActionDefinitions } from './components/ServiceConCon_FormConsComponent';
import { ServiceConCon_FormConsComponent } from './components/ServiceConCon_FormConsComponent';
import type { ServiceConCon_FormCreatedByComponentActionDefinitions } from './components/ServiceConCon_FormCreatedByComponent';
import { ServiceConCon_FormCreatedByComponent } from './components/ServiceConCon_FormCreatedByComponent';
import type { ServiceConCon_FormProsComponentActionDefinitions } from './components/ServiceConCon_FormProsComponent';
import { ServiceConCon_FormProsComponent } from './components/ServiceConCon_FormProsComponent';

export const SERVICE_CON_CON_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY = 'SERVICE_CON_CON_FORM_CONTAINER_ACTIONS_HOOK';
export type ServiceConCon_FormContainerHook = (
  data: ServiceConStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCon, value: any) => void,
) => ServiceConCon_FormActionDefinitions;

export interface ServiceConCon_FormActionDefinitions
  extends ServiceConCon_FormConsComponentActionDefinitions,
    ServiceConCon_FormCreatedByComponentActionDefinitions,
    ServiceConCon_FormProsComponentActionDefinitions {
  getPageTitle?: (data: ServiceCon) => string;
  votesOpenPageAction?: (target: ServiceSimpleVoteStored, isDraft?: boolean) => Promise<void>;
  isCreatedRequired?: (data: ServiceCon | ServiceConStored, editMode?: boolean) => boolean;
  isCreatedDisabled?: (data: ServiceCon | ServiceConStored, editMode?: boolean, isLoading?: boolean) => boolean;
  isCreatedByNameRequired?: (data: ServiceCon | ServiceConStored, editMode?: boolean) => boolean;
  isCreatedByNameDisabled?: (data: ServiceCon | ServiceConStored, editMode?: boolean, isLoading?: boolean) => boolean;
  isDescriptionRequired?: (data: ServiceCon | ServiceConStored, editMode?: boolean) => boolean;
  isDescriptionDisabled?: (data: ServiceCon | ServiceConStored, editMode?: boolean, isLoading?: boolean) => boolean;
  isDownVotesRequired?: (data: ServiceCon | ServiceConStored, editMode?: boolean) => boolean;
  isDownVotesDisabled?: (data: ServiceCon | ServiceConStored, editMode?: boolean, isLoading?: boolean) => boolean;
  isTitleRequired?: (data: ServiceCon | ServiceConStored, editMode?: boolean) => boolean;
  isTitleDisabled?: (data: ServiceCon | ServiceConStored, editMode?: boolean, isLoading?: boolean) => boolean;
  isUpVotesRequired?: (data: ServiceCon | ServiceConStored, editMode?: boolean) => boolean;
  isUpVotesDisabled?: (data: ServiceCon | ServiceConStored, editMode?: boolean, isLoading?: boolean) => boolean;
  getCreatedValidationProps?: (data: ServiceCon) => BaseDateValidationProps;
}

export interface ServiceConCon_FormProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceConCon_FormActionDefinitions;

  data: ServiceConStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCon, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceCon, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCon, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_qAjNIGksEe25ONJ3V89cVA)/TransferObjectFormPageContainer
// Name: service::Con::Con_Form
export default function ServiceConCon_Form(props: ServiceConCon_FormProps) {
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
  const { service: customContainerHook } = useTrackService<ServiceConCon_FormContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_CON_CON_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceConCon_FormActionDefinitions = customContainerHook?.(data, editMode, storeDiff) || {};
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
      <Grid item data-name="Con_Form" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_qAjNIGksEe25ONJ3V89cVA)/TransferObjectFormVisualElement"
          data-name="Con_Form"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={4.0}>
            <TextField
              required={actions?.isCreatedByNameRequired ? actions.isCreatedByNameRequired(data, editMode) : false}
              name="createdByName"
              id="User/(esm/_EuIKwG5WEe2wNaja8kBvcQ)/StringTypeTextInput"
              label={t('service.Con.Con_Form.createdByName', { defaultValue: 'CreatedByName' }) as string}
              value={data.createdByName ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': false,
              })}
              disabled={
                actions?.isCreatedByNameDisabled
                  ? actions.isCreatedByNameDisabled(data, editMode, isLoading)
                  : isLoading
              }
              error={!!validation.get('createdByName')}
              helperText={validation.get('createdByName')}
              onChange={(event) => {
                const realValue = event.target.value?.length === 0 ? null : event.target.value;
                storeDiff('createdByName', realValue);
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                readOnly: true || !isFormUpdateable(),
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
              inputRef={autoFocusInputRef}
              slotProps={{
                textField: {
                  id: 'User/(esm/_3nMr4H4bEe2j59SYy0JH0Q)/TimestampTypeDateTimeInput',
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
                  const copy = new Map<keyof ServiceCon, string>(prevValidation);
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
              label={t('service.Con.Con_Form.created', { defaultValue: 'Created' }) as string}
              value={serviceDateToUiDate(data.created ?? null)}
              readOnly={false || !isFormUpdateable()}
              disabled={actions?.isCreatedDisabled ? actions.isCreatedDisabled(data, editMode, isLoading) : isLoading}
              onChange={(newValue: Date) => {
                storeDiff('created', newValue);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4.0}>
            <TextField
              required={actions?.isDescriptionRequired ? actions.isDescriptionRequired(data, editMode) : true}
              name="description"
              id="User/(esm/_3nWc4H4bEe2j59SYy0JH0Q)/StringTypeTextInput"
              label={t('service.Con.Con_Form.description', { defaultValue: 'Description' }) as string}
              value={data.description ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={
                actions?.isDescriptionDisabled ? actions.isDescriptionDisabled(data, editMode, isLoading) : isLoading
              }
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
            <TextField
              required={actions?.isTitleRequired ? actions.isTitleRequired(data, editMode) : true}
              name="title"
              id="User/(esm/_3ng08H4bEe2j59SYy0JH0Q)/StringTypeTextInput"
              label={t('service.Con.Con_Form.title', { defaultValue: 'Title' }) as string}
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
            <NumericInput
              required={actions?.isUpVotesRequired ? actions.isUpVotesRequired(data, editMode) : false}
              name="upVotes"
              id="User/(esm/_cIeKEIfYEe2u0fVmwtP5bA)/NumericTypeVisualInput"
              label={t('service.Con.Con_Form.upVotes', { defaultValue: 'UpVotes' }) as string}
              customInput={TextField}
              value={data.upVotes ?? ''}
              formatValue={true}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': false,
              })}
              disabled={actions?.isUpVotesDisabled ? actions.isUpVotesDisabled(data, editMode, isLoading) : isLoading}
              error={!!validation.get('upVotes')}
              helperText={validation.get('upVotes')}
              onValueChange={(values, sourceInfo) => {
                const newValue = values.floatValue === undefined ? null : values.floatValue;
                if (data.upVotes !== newValue) {
                  storeDiff('upVotes', newValue);
                }
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                readOnly: true || !isFormUpdateable(),
                startAdornment: (
                  <InputAdornment position="start">
                    <MdiIcon path="calculator" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4.0}>
            <NumericInput
              required={actions?.isDownVotesRequired ? actions.isDownVotesRequired(data, editMode) : false}
              name="downVotes"
              id="User/(esm/_cIh0cIfYEe2u0fVmwtP5bA)/NumericTypeVisualInput"
              label={t('service.Con.Con_Form.downVotes', { defaultValue: 'DownVotes' }) as string}
              customInput={TextField}
              value={data.downVotes ?? ''}
              formatValue={true}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': false,
              })}
              disabled={
                actions?.isDownVotesDisabled ? actions.isDownVotesDisabled(data, editMode, isLoading) : isLoading
              }
              error={!!validation.get('downVotes')}
              helperText={validation.get('downVotes')}
              onValueChange={(values, sourceInfo) => {
                const newValue = values.floatValue === undefined ? null : values.floatValue;
                if (data.downVotes !== newValue) {
                  storeDiff('downVotes', newValue);
                }
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                readOnly: true || !isFormUpdateable(),
                startAdornment: (
                  <InputAdornment position="start">
                    <MdiIcon path="calculator" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <AssociationButton
              id="User/(esm/_cImF4IfYEe2u0fVmwtP5bA)/TabularReferenceFieldButton"
              variant={undefined}
              editMode={editMode}
              navigateAction={actions.votesOpenPageAction}
              refreshCounter={refreshCounter}
            >
              {t('judo.action.open-page', { defaultValue: 'Votes' })}
              <MdiIcon path="arrow-right" />
            </AssociationButton>
          </Grid>

          <Grid item xs={12} sm={12}>
            <ServiceConCon_FormCreatedByComponent
              disabled={false}
              readOnly={true || !isFormUpdateable()}
              ownerData={data}
              editMode={editMode}
              isLoading={isLoading}
              isDraft={isDraft}
              storeDiff={storeDiff}
              validationError={validation.get('createdBy')}
              actions={actions}
              submit={submit}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_cI62AIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable"
              container
              direction="column"
              alignItems="stretch"
              justifyContent="flex-start"
            >
              <ServiceConCon_FormConsComponent
                uniqueId={'User/(esm/_cI62AIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable'}
                actions={actions}
                ownerData={data}
                editMode={editMode}
                isFormUpdateable={isFormUpdateable}
                validationError={validation.get('cons')}
                refreshCounter={refreshCounter}
                isOwnerLoading={isLoading}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable"
              container
              direction="column"
              alignItems="stretch"
              justifyContent="flex-start"
            >
              <ServiceConCon_FormProsComponent
                uniqueId={'User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable'}
                actions={actions}
                ownerData={data}
                editMode={editMode}
                isFormUpdateable={isFormUpdateable}
                validationError={validation.get('pros')}
                refreshCounter={refreshCounter}
                isOwnerLoading={isLoading}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
