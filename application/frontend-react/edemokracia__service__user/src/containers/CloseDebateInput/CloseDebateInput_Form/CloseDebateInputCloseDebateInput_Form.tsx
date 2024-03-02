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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
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
import {} from '~/components/widgets';
import { autoFocusRefDelay } from '~/config';
import { useConfirmationBeforeChange } from '~/hooks';
import { CloseDebateInput, CloseDebateInputQueryCustomizer, CloseDebateInputStored } from '~/services/data-api';

export const CLOSE_DEBATE_INPUT_CLOSE_DEBATE_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'CLOSE_DEBATE_INPUT_CLOSE_DEBATE_INPUT_FORM_CONTAINER_ACTIONS_HOOK';
export type CloseDebateInputCloseDebateInput_FormContainerHook = (
  data: CloseDebateInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof CloseDebateInput, value: any) => void,
) => CloseDebateInputCloseDebateInput_FormActionDefinitions;

export interface CloseDebateInputCloseDebateInput_FormActionDefinitions {
  getPageTitle?: (data: CloseDebateInput) => string;
  closeDebateForIssueAction?: () => Promise<void>;
  isCloseAtRequired?: (data: CloseDebateInput | CloseDebateInputStored, editMode?: boolean) => boolean;
  isCloseAtDisabled?: (
    data: CloseDebateInput | CloseDebateInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isDescriptionRequired?: (data: CloseDebateInput | CloseDebateInputStored, editMode?: boolean) => boolean;
  isDescriptionDisabled?: (
    data: CloseDebateInput | CloseDebateInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isTitleRequired?: (data: CloseDebateInput | CloseDebateInputStored, editMode?: boolean) => boolean;
  isTitleDisabled?: (
    data: CloseDebateInput | CloseDebateInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isVoteTypeRequired?: (data: CloseDebateInput | CloseDebateInputStored, editMode?: boolean) => boolean;
  isVoteTypeDisabled?: (
    data: CloseDebateInput | CloseDebateInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  getCloseAtValidationProps?: (data: CloseDebateInput) => BaseDateValidationProps;
}

export interface CloseDebateInputCloseDebateInput_FormProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: CloseDebateInputCloseDebateInput_FormActionDefinitions;

  data: CloseDebateInputStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CloseDebateInput, value: any) => void;
  editMode: boolean;
  validation: Map<keyof CloseDebateInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CloseDebateInput, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_NG8HoG6JEe2wNaja8kBvcQ)/TransferObjectFormPageContainer
// Name: CloseDebateInput::CloseDebateInput_Form
export default function CloseDebateInputCloseDebateInput_Form(props: CloseDebateInputCloseDebateInput_FormProps) {
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
  const { service: customContainerHook } = useTrackService<CloseDebateInputCloseDebateInput_FormContainerHook>(
    `(${OBJECTCLASS}=${CLOSE_DEBATE_INPUT_CLOSE_DEBATE_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: CloseDebateInputCloseDebateInput_FormActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
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
      <Grid item data-name="CloseDebateInput_Form" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_NG8HoG6JEe2wNaja8kBvcQ)/TransferObjectFormVisualElement"
          data-name="CloseDebateInput_Form"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item data-name="debate" xs={12} sm={12}>
            <Card id="User/(esm/_-U_QAIfTEe2u0fVmwtP5bA)/GroupVisualElement" data-name="debate" sx={{ height: '100%' }}>
              <CardContent>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={2}
                  sx={{ mb: 2 }}
                >
                  <Grid item>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="wechat" sx={{ marginRight: 1 }} />
                      <Typography
                        id="User/(esm/_-U_QAIfTEe2u0fVmwtP5bA)/GroupVisualElement"
                        variant="h5"
                        component="h1"
                      >
                        {t('CloseDebateInput.CloseDebateInput_Form.debate', { defaultValue: 'Close debate' })}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12} md={4.0}>
                    <TextField
                      required={actions?.isVoteTypeRequired ? actions.isVoteTypeRequired(data, editMode) : true}
                      name="voteType"
                      id="User/(esm/_yfDhAH5VEe2kLcMqsIbMgQ)/EnumerationTypeCombo"
                      inputRef={autoFocusInputRef}
                      label={
                        t('CloseDebateInput.CloseDebateInput_Form.voteType', { defaultValue: 'VoteType' }) as string
                      }
                      value={data.voteType || ''}
                      className={clsx({
                        'JUDO-viewMode': !editMode,
                        'JUDO-required': true,
                      })}
                      disabled={
                        actions?.isVoteTypeDisabled ? actions.isVoteTypeDisabled(data, editMode, isLoading) : isLoading
                      }
                      error={!!validation.get('voteType')}
                      helperText={validation.get('voteType')}
                      onChange={(event) => {
                        storeDiff('voteType', event.target.value);
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
                      <MenuItem id="User/(esm/_6eNosXMMEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'YES_NO'}>
                        {t('enumerations.VoteTypeOnCloseDebate.YES_NO', { defaultValue: 'YES_NO' })}
                      </MenuItem>
                      <MenuItem id="User/(esm/_6eNosnMMEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'YES_NO_ABSTAIN'}>
                        {t('enumerations.VoteTypeOnCloseDebate.YES_NO_ABSTAIN', { defaultValue: 'YES_NO_ABSTAIN' })}
                      </MenuItem>
                      <MenuItem id="User/(esm/_6eNos3MMEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'SELECT_ANSWER'}>
                        {t('enumerations.VoteTypeOnCloseDebate.SELECT_ANSWER', { defaultValue: 'SELECT_ANSWER' })}
                      </MenuItem>
                      <MenuItem id="User/(esm/_6eNotHMMEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'RATE'}>
                        {t('enumerations.VoteTypeOnCloseDebate.RATE', { defaultValue: 'RATE' })}
                      </MenuItem>
                      <MenuItem id="User/(esm/_XjfVwHMNEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'NO_VOTE'}>
                        {t('enumerations.VoteTypeOnCloseDebate.NO_VOTE', { defaultValue: 'NO_VOTE' })}
                      </MenuItem>
                    </TextField>
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
                          id: 'User/(esm/_uZqe8IfXEe2u0fVmwtP5bA)/TimestampTypeDateTimeInput',
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
                          const copy = new Map<keyof CloseDebateInput, string>(prevValidation);
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
                      label={
                        t('CloseDebateInput.CloseDebateInput_Form.closeAt', { defaultValue: 'Vote close at' }) as string
                      }
                      value={serviceDateToUiDate(data.closeAt ?? null)}
                      readOnly={false || !isFormUpdateable()}
                      disabled={
                        actions?.isCloseAtDisabled ? actions.isCloseAtDisabled(data, editMode, isLoading) : isLoading
                      }
                      onChange={(newValue: Date) => {
                        storeDiff('closeAt', newValue);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      required={actions?.isTitleRequired ? actions.isTitleRequired(data, editMode) : true}
                      name="title"
                      id="User/(esm/_uZrGAYfXEe2u0fVmwtP5bA)/StringTypeTextInput"
                      label={
                        t('CloseDebateInput.CloseDebateInput_Form.title', { defaultValue: 'Vote title' }) as string
                      }
                      value={data.title ?? ''}
                      className={clsx({
                        'JUDO-viewMode': !editMode,
                        'JUDO-required': true,
                      })}
                      disabled={
                        actions?.isTitleDisabled ? actions.isTitleDisabled(data, editMode, isLoading) : isLoading
                      }
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

                  <Grid item xs={12} sm={12}>
                    <TextField
                      required={actions?.isDescriptionRequired ? actions.isDescriptionRequired(data, editMode) : true}
                      name="description"
                      id="User/(esm/_uZrGAIfXEe2u0fVmwtP5bA)/StringTypeTextArea"
                      label={
                        t('CloseDebateInput.CloseDebateInput_Form.description', {
                          defaultValue: 'Vote description',
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
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
