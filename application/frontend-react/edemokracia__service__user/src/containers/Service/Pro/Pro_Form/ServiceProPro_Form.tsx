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
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
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
import type { ServiceProPro_FormConsComponentActionDefinitions } from './components/ServiceProPro_FormConsComponent';
import { ServiceProPro_FormConsComponent } from './components/ServiceProPro_FormConsComponent';
import type { ServiceProPro_FormCreatedByComponentActionDefinitions } from './components/ServiceProPro_FormCreatedByComponent';
import { ServiceProPro_FormCreatedByComponent } from './components/ServiceProPro_FormCreatedByComponent';
import type { ServiceProPro_FormProsComponentActionDefinitions } from './components/ServiceProPro_FormProsComponent';
import { ServiceProPro_FormProsComponent } from './components/ServiceProPro_FormProsComponent';

export const SERVICE_PRO_PRO_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY = 'SERVICE_PRO_PRO_FORM_CONTAINER_ACTIONS_HOOK';
export type ServiceProPro_FormContainerHook = (
  data: ServiceProStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServicePro, value: any) => void,
) => ServiceProPro_FormActionDefinitions;

export interface ServiceProPro_FormActionDefinitions
  extends ServiceProPro_FormConsComponentActionDefinitions,
    ServiceProPro_FormCreatedByComponentActionDefinitions,
    ServiceProPro_FormProsComponentActionDefinitions {
  getPageTitle?: (data: ServicePro) => string;
  votesOpenPageAction?: (target: ServiceSimpleVoteStored, isDraft?: boolean) => Promise<void>;
  isCreatedRequired?: (data: ServicePro | ServiceProStored, editMode?: boolean) => boolean;
  isCreatedDisabled?: (data: ServicePro | ServiceProStored, editMode?: boolean, isLoading?: boolean) => boolean;
  isCreatedByNameRequired?: (data: ServicePro | ServiceProStored, editMode?: boolean) => boolean;
  isCreatedByNameDisabled?: (data: ServicePro | ServiceProStored, editMode?: boolean, isLoading?: boolean) => boolean;
  isDescriptionRequired?: (data: ServicePro | ServiceProStored, editMode?: boolean) => boolean;
  isDescriptionDisabled?: (data: ServicePro | ServiceProStored, editMode?: boolean, isLoading?: boolean) => boolean;
  isDownVotesRequired?: (data: ServicePro | ServiceProStored, editMode?: boolean) => boolean;
  isDownVotesDisabled?: (data: ServicePro | ServiceProStored, editMode?: boolean, isLoading?: boolean) => boolean;
  isTitleRequired?: (data: ServicePro | ServiceProStored, editMode?: boolean) => boolean;
  isTitleDisabled?: (data: ServicePro | ServiceProStored, editMode?: boolean, isLoading?: boolean) => boolean;
  isUpVotesRequired?: (data: ServicePro | ServiceProStored, editMode?: boolean) => boolean;
  isUpVotesDisabled?: (data: ServicePro | ServiceProStored, editMode?: boolean, isLoading?: boolean) => boolean;
  getCreatedValidationProps?: (data: ServicePro) => BaseDateValidationProps;
}

export interface ServiceProPro_FormProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceProPro_FormActionDefinitions;

  data: ServiceProStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServicePro, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServicePro, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServicePro, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_qLaZUGksEe25ONJ3V89cVA)/TransferObjectFormPageContainer
// Name: service::Pro::Pro_Form
export default function ServiceProPro_Form(props: ServiceProPro_FormProps) {
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
  const { service: customContainerHook } = useTrackService<ServiceProPro_FormContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_PRO_PRO_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceProPro_FormActionDefinitions = customContainerHook?.(data, editMode, storeDiff) || {};
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
      <Grid item data-name="Pro_Form" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_qLaZUGksEe25ONJ3V89cVA)/TransferObjectFormVisualElement"
          data-name="Pro_Form"
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
              id="User/(esm/_C9esgG5WEe2wNaja8kBvcQ)/StringTypeTextInput"
              label={t('service.Pro.Pro_Form.createdByName', { defaultValue: 'CreatedByName' }) as string}
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
                  id: 'User/(esm/_3nwskH4bEe2j59SYy0JH0Q)/TimestampTypeDateTimeInput',
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
                  const copy = new Map<keyof ServicePro, string>(prevValidation);
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
              label={t('service.Pro.Pro_Form.created', { defaultValue: 'Created' }) as string}
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
              id="User/(esm/_3n7rsH4bEe2j59SYy0JH0Q)/StringTypeTextInput"
              label={t('service.Pro.Pro_Form.description', { defaultValue: 'Description' }) as string}
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
              id="User/(esm/_3oGq0H4bEe2j59SYy0JH0Q)/StringTypeTextInput"
              label={t('service.Pro.Pro_Form.title', { defaultValue: 'Title' }) as string}
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
              id="User/(esm/_eJaHEIfYEe2u0fVmwtP5bA)/NumericTypeVisualInput"
              label={t('service.Pro.Pro_Form.upVotes', { defaultValue: 'UpVotes' }) as string}
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
              id="User/(esm/_eJfmoIfYEe2u0fVmwtP5bA)/NumericTypeVisualInput"
              label={t('service.Pro.Pro_Form.downVotes', { defaultValue: 'DownVotes' }) as string}
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
              id="User/(esm/_eJnicIfYEe2u0fVmwtP5bA)/TabularReferenceFieldButton"
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
            <ServiceProPro_FormCreatedByComponent
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
              id="User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable"
              container
              direction="column"
              alignItems="stretch"
              justifyContent="flex-start"
            >
              <ServiceProPro_FormProsComponent
                uniqueId={'User/(esm/_eKTe8IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable'}
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

          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_eKoPEIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable"
              container
              direction="column"
              alignItems="stretch"
              justifyContent="flex-start"
            >
              <ServiceProPro_FormConsComponent
                uniqueId={'User/(esm/_eKoPEIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable'}
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
        </Grid>
      </Grid>
    </Grid>
  );
}
