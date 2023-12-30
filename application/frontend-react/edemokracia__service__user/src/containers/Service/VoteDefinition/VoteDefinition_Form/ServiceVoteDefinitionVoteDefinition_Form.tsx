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
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
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
import {
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/services/data-api';

export const SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceVoteDefinitionVoteDefinition_FormContainerHook';
export type ServiceVoteDefinitionVoteDefinition_FormContainerHook = (
  data: ServiceVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceVoteDefinition, value: any) => void,
) => ServiceVoteDefinitionVoteDefinition_FormActionDefinitions;

export interface ServiceVoteDefinitionVoteDefinition_FormActionDefinitions {
  isCloseAtRequired?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isCloseAtDisabled?: (
    data: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isCreatedRequired?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isCreatedDisabled?: (
    data: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isDescriptionRequired?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isDescriptionDisabled?: (
    data: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isIsRatingTypeRequired?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isIsRatingTypeDisabled?: (
    data: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isIsSelectAnswerTypeRequired?: (
    data: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isIsSelectAnswerTypeDisabled?: (
    data: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isIsYesNoAbstainTypeRequired?: (
    data: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isIsYesNoAbstainTypeDisabled?: (
    data: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isIsYesNoTypeRequired?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isIsYesNoTypeDisabled?: (
    data: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isStatusRequired?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isStatusDisabled?: (
    data: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isTitleRequired?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isTitleDisabled?: (
    data: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface ServiceVoteDefinitionVoteDefinition_FormProps {
  refreshCounter: number;
  actions: ServiceVoteDefinitionVoteDefinition_FormActionDefinitions;

  data: ServiceVoteDefinitionStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceVoteDefinition, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceVoteDefinition, string>>>;
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_-gL5wH4XEe2cB7_PsKXsHQ)/TransferObjectFormPageContainer
// Name: service::VoteDefinition::VoteDefinition_Form
export default function ServiceVoteDefinitionVoteDefinition_Form(props: ServiceVoteDefinitionVoteDefinition_FormProps) {
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
  const { service: customContainerHook } = useTrackService<ServiceVoteDefinitionVoteDefinition_FormContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceVoteDefinitionVoteDefinition_FormActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_-gL5wH4XEe2cB7_PsKXsHQ)/TransferObjectFormVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <TextField
              required={actions?.isTitleRequired ? actions.isTitleRequired(data, editMode) : true}
              name="title"
              id="User/(esm/_T5VWYI4jEe29qs15q2b6yw)/StringTypeTextInput"
              autoFocus
              label={t('service.VoteDefinition.VoteDefinition_Form.title', { defaultValue: 'Title' }) as string}
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
                maxlength: 255,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <DateTimePicker
              ampm={false}
              ampmInClock={false}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': false,
              })}
              slotProps={{
                textField: {
                  id: 'User/(esm/_T5dSMI4jEe29qs15q2b6yw)/TimestampTypeDateTimeInput',
                  required: actions?.isCreatedRequired ? actions.isCreatedRequired(data, editMode) : false,
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
                  const copy = new Map<keyof ServiceVoteDefinition, string>(prevValidation);
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
              label={t('service.VoteDefinition.VoteDefinition_Form.created', { defaultValue: 'Created' }) as string}
              value={serviceDateToUiDate(data.created ?? null)}
              readOnly={true || !isFormUpdateable()}
              disabled={actions?.isCreatedDisabled ? actions.isCreatedDisabled(data, editMode, isLoading) : isLoading}
              onChange={(newValue: Date) => {
                storeDiff('created', newValue);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              required={actions?.isDescriptionRequired ? actions.isDescriptionRequired(data, editMode) : true}
              name="description"
              id="User/(esm/_T5l1EI4jEe29qs15q2b6yw)/StringTypeTextInput"
              label={
                t('service.VoteDefinition.VoteDefinition_Form.description', { defaultValue: 'Description' }) as string
              }
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
                maxlength: 16384,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              required={actions?.isStatusRequired ? actions.isStatusRequired(data, editMode) : true}
              name="status"
              id="User/(esm/_T5tw4I4jEe29qs15q2b6yw)/EnumerationTypeCombo"
              label={t('service.VoteDefinition.VoteDefinition_Form.status', { defaultValue: 'Status' }) as string}
              value={data.status || ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={actions?.isStatusDisabled ? actions.isStatusDisabled(data, editMode, isLoading) : isLoading}
              error={!!validation.get('status')}
              helperText={validation.get('status')}
              onChange={(event) => {
                storeDiff('status', event.target.value);
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
              <MenuItem id="User/(esm/_oDqCMW6IEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'CREATED'}>
                {t('enumerations.VoteStatus.CREATED', { defaultValue: 'CREATED' })}
              </MenuItem>
              <MenuItem id="User/(esm/_oDqCMm6IEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'PENDING'}>
                {t('enumerations.VoteStatus.PENDING', { defaultValue: 'PENDING' })}
              </MenuItem>
              <MenuItem id="User/(esm/_oDqCM26IEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'ACTIVE'}>
                {t('enumerations.VoteStatus.ACTIVE', { defaultValue: 'ACTIVE' })}
              </MenuItem>
              <MenuItem id="User/(esm/_oDqCNG6IEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'CLOSED'}>
                {t('enumerations.VoteStatus.CLOSED', { defaultValue: 'CLOSED' })}
              </MenuItem>
              <MenuItem id="User/(esm/_6lZ38F4_Ee6vsex_cZNQbQ)/EnumerationTypeMember" value={'ARCHIVED'}>
                {t('enumerations.VoteStatus.ARCHIVED', { defaultValue: 'ARCHIVED' })}
              </MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={12}>
            <DateTimePicker
              ampm={false}
              ampmInClock={false}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              slotProps={{
                textField: {
                  id: 'User/(esm/_T55XEI4jEe29qs15q2b6yw)/TimestampTypeDateTimeInput',
                  required: actions?.isCloseAtRequired ? actions.isCloseAtRequired(data, editMode) : true,
                  helperText: validation.get('closeAt'),
                  error: !!validation.get('closeAt'),
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
                  const copy = new Map<keyof ServiceVoteDefinition, string>(prevValidation);
                  copy.set(
                    'closeAt',
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
              label={t('service.VoteDefinition.VoteDefinition_Form.closeAt', { defaultValue: 'CloseAt' }) as string}
              value={serviceDateToUiDate(data.closeAt ?? null)}
              readOnly={false || !isFormUpdateable()}
              disabled={actions?.isCloseAtDisabled ? actions.isCloseAtDisabled(data, editMode, isLoading) : isLoading}
              onChange={(newValue: Date) => {
                storeDiff('closeAt', newValue);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormControl error={!!validation.get('isRatingType')}>
              <FormGroup>
                <FormControlLabel
                  className="checkbox"
                  sx={{
                    marginTop: '6px',
                    color: (theme) => (validation.has('isRatingType') ? theme.palette.error.main : 'primary'),
                  }}
                  disabled={
                    actions?.isIsRatingTypeDisabled
                      ? actions.isIsRatingTypeDisabled(data, editMode, isLoading)
                      : true || !isFormUpdateable() || isLoading
                  }
                  control={
                    <Checkbox
                      checked={data.isRatingType || false}
                      sx={{ color: (theme) => (validation.has('isRatingType') ? theme.palette.error.main : 'primary') }}
                      onChange={(event) => {
                        storeDiff('isRatingType', event.target.checked);
                      }}
                    />
                  }
                  label={
                    t('service.VoteDefinition.VoteDefinition_Form.isRatingType', {
                      defaultValue: 'IsRatingType',
                    }) as string
                  }
                />
              </FormGroup>
              {validation.has('isRatingType') && <FormHelperText>{validation.get('isRatingType')}</FormHelperText>}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormControl error={!!validation.get('isSelectAnswerType')}>
              <FormGroup>
                <FormControlLabel
                  className="checkbox"
                  sx={{
                    marginTop: '6px',
                    color: (theme) => (validation.has('isSelectAnswerType') ? theme.palette.error.main : 'primary'),
                  }}
                  disabled={
                    actions?.isIsSelectAnswerTypeDisabled
                      ? actions.isIsSelectAnswerTypeDisabled(data, editMode, isLoading)
                      : true || !isFormUpdateable() || isLoading
                  }
                  control={
                    <Checkbox
                      checked={data.isSelectAnswerType || false}
                      sx={{
                        color: (theme) => (validation.has('isSelectAnswerType') ? theme.palette.error.main : 'primary'),
                      }}
                      onChange={(event) => {
                        storeDiff('isSelectAnswerType', event.target.checked);
                      }}
                    />
                  }
                  label={
                    t('service.VoteDefinition.VoteDefinition_Form.isSelectAnswerType', {
                      defaultValue: 'IsSelectAnswerType',
                    }) as string
                  }
                />
              </FormGroup>
              {validation.has('isSelectAnswerType') && (
                <FormHelperText>{validation.get('isSelectAnswerType')}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormControl error={!!validation.get('isYesNoAbstainType')}>
              <FormGroup>
                <FormControlLabel
                  className="checkbox"
                  sx={{
                    marginTop: '6px',
                    color: (theme) => (validation.has('isYesNoAbstainType') ? theme.palette.error.main : 'primary'),
                  }}
                  disabled={
                    actions?.isIsYesNoAbstainTypeDisabled
                      ? actions.isIsYesNoAbstainTypeDisabled(data, editMode, isLoading)
                      : true || !isFormUpdateable() || isLoading
                  }
                  control={
                    <Checkbox
                      checked={data.isYesNoAbstainType || false}
                      sx={{
                        color: (theme) => (validation.has('isYesNoAbstainType') ? theme.palette.error.main : 'primary'),
                      }}
                      onChange={(event) => {
                        storeDiff('isYesNoAbstainType', event.target.checked);
                      }}
                    />
                  }
                  label={
                    t('service.VoteDefinition.VoteDefinition_Form.isYesNoAbstainType', {
                      defaultValue: 'IsYesNoAbstainType',
                    }) as string
                  }
                />
              </FormGroup>
              {validation.has('isYesNoAbstainType') && (
                <FormHelperText>{validation.get('isYesNoAbstainType')}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormControl error={!!validation.get('isYesNoType')}>
              <FormGroup>
                <FormControlLabel
                  className="checkbox"
                  sx={{
                    marginTop: '6px',
                    color: (theme) => (validation.has('isYesNoType') ? theme.palette.error.main : 'primary'),
                  }}
                  disabled={
                    actions?.isIsYesNoTypeDisabled
                      ? actions.isIsYesNoTypeDisabled(data, editMode, isLoading)
                      : true || !isFormUpdateable() || isLoading
                  }
                  control={
                    <Checkbox
                      checked={data.isYesNoType || false}
                      sx={{ color: (theme) => (validation.has('isYesNoType') ? theme.palette.error.main : 'primary') }}
                      onChange={(event) => {
                        storeDiff('isYesNoType', event.target.checked);
                      }}
                    />
                  }
                  label={
                    t('service.VoteDefinition.VoteDefinition_Form.isYesNoType', {
                      defaultValue: 'IsYesNoType',
                    }) as string
                  }
                />
              </FormGroup>
              {validation.has('isYesNoType') && <FormHelperText>{validation.get('isYesNoType')}</FormHelperText>}
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
