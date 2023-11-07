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
import { ComponentProxy } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import {
  Box,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
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
import { AssociationButton, BinaryInput, CollectionAssociationButton, NumericInput } from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import { CloseDebateInput, CloseDebateInputQueryCustomizer, CloseDebateInputStored } from '~/services/data-api';

export interface CloseDebateInputCloseDebateInput_FormActionDefinitions {}

export interface CloseDebateInputCloseDebateInput_FormProps {
  refreshCounter: number;
  actions: CloseDebateInputCloseDebateInput_FormActionDefinitions;

  data: CloseDebateInput;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CloseDebateInput, value: any) => void;
  editMode: boolean;
  validation: Map<keyof CloseDebateInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CloseDebateInput, string>>>;
}

// XMIID: User/(esm/_NG8HoG6JEe2wNaja8kBvcQ)/TransferObjectFormPageContainer
// Name: CloseDebateInput::CloseDebateInput_Form
export default function CloseDebateInputCloseDebateInput_Form(props: CloseDebateInputCloseDebateInput_FormProps) {
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
        <Card id="_fn9dsH2GEe6V8KKnnZfChA)/LabelWrapper">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <MdiIcon path="wechat" sx={{ marginRight: 1 }} />
                  <Typography id="_fn9dsH2GEe6V8KKnnZfChA)/Label" variant="h5" component="h1">
                    {t(
                      'CloseDebateInput.CloseDebateInput.Form.debate::Label.debate::LabelWrapper.CloseDebateInput_Form.CloseDebateInput::CloseDebateInput_Form',
                      { defaultValue: 'Close debate' },
                    )}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_-U_QAIfTEe2u0fVmwtP5bA)/GroupVisualElement"
                  container
                  direction="row"
                  alignItems="stretch"
                  justifyContent="flex-start"
                  spacing={2}
                >
                  <Grid item xs={12} sm={12} md={4.0}>
                    <Grid
                      id="_fo1AYH2GEe6V8KKnnZfChA)/LabelWrapper"
                      container
                      direction="column"
                      alignItems="center"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                          <MdiIcon path="list" sx={{ marginRight: 1 }} />
                          <Typography id="_fo1AYH2GEe6V8KKnnZfChA)/Label" variant="h5" component="h1">
                            {t(
                              'CloseDebateInput.CloseDebateInput.Form.voteType::Label.voteType::LabelWrapper.debate.debate::LabelWrapper.CloseDebateInput_Form.CloseDebateInput::CloseDebateInput_Form',
                              { defaultValue: 'VoteType' },
                            )}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <FormControl
                          fullWidth={true}
                          sx={{ mt: '10px' }}
                          className='MuiTextField-root'
                          disabled={false || !isFormUpdateable() || isLoading}
                          error={validation.has('voteType')}
                        >
                          <InputLabel
                            id="User/(esm/_yfDhAH5VEe2kLcMqsIbMgQ)/EnumerationTypeRadio"
                            shrink={true}
                            size={'small'}
                          >
                            {t(
                              'CloseDebateInput.CloseDebateInput.Form.voteType.voteType::LabelWrapper.debate.debate::LabelWrapper.CloseDebateInput_Form.CloseDebateInput::CloseDebateInput_Form',
                              { defaultValue: 'VoteType' },
                            )}{' '}
                            *
                          </InputLabel>
                          <RadioGroup
                            sx={{ justifyContent: 'space-between', pl: '12px', pt: '6px' }}
                            name="voteType"
                            id="User/(esm/_yfDhAH5VEe2kLcMqsIbMgQ)/EnumerationTypeRadio"
                            value={data.voteType || ''}
                            onChange={(event) => {
                              storeDiff('voteType', event.target.value);
                            }}
                          >
                            <FormControlLabel
                              id="User/(esm/_6eNosXMMEe2wNaja8kBvcQ)/EnumerationTypeMember"
                              value={'YES_NO'}
                              control={<Radio size='small' />}
                              label={t('enumerations.VoteTypeOnCloseDebate.YES_NO', { defaultValue: 'YES_NO' })}
                              disabled={false || !isFormUpdateable()}
                            />
                            <FormControlLabel
                              id="User/(esm/_6eNosnMMEe2wNaja8kBvcQ)/EnumerationTypeMember"
                              value={'YES_NO_ABSTAIN'}
                              control={<Radio size='small' />}
                              label={t('enumerations.VoteTypeOnCloseDebate.YES_NO_ABSTAIN', {
                                defaultValue: 'YES_NO_ABSTAIN',
                              })}
                              disabled={false || !isFormUpdateable()}
                            />
                            <FormControlLabel
                              id="User/(esm/_6eNos3MMEe2wNaja8kBvcQ)/EnumerationTypeMember"
                              value={'SELECT_ANSWER'}
                              control={<Radio size='small' />}
                              label={t('enumerations.VoteTypeOnCloseDebate.SELECT_ANSWER', {
                                defaultValue: 'SELECT_ANSWER',
                              })}
                              disabled={false || !isFormUpdateable()}
                            />
                            <FormControlLabel
                              id="User/(esm/_6eNotHMMEe2wNaja8kBvcQ)/EnumerationTypeMember"
                              value={'RATE'}
                              control={<Radio size='small' />}
                              label={t('enumerations.VoteTypeOnCloseDebate.RATE', { defaultValue: 'RATE' })}
                              disabled={false || !isFormUpdateable()}
                            />
                            <FormControlLabel
                              id="User/(esm/_XjfVwHMNEe2wNaja8kBvcQ)/EnumerationTypeMember"
                              value={'NO_VOTE'}
                              control={<Radio size='small' />}
                              label={t('enumerations.VoteTypeOnCloseDebate.NO_VOTE', { defaultValue: 'NO_VOTE' })}
                              disabled={false || !isFormUpdateable()}
                            />
                          </RadioGroup>
                          {validation.has('voteType') && !data.voteType && (
                            <FormHelperText>{validation.get('voteType')}</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4.0}>
                    <TextField
                      required={true}
                      name="voteType"
                      id="User/(esm/_yfDhAH5VEe2kLcMqsIbMgQ)/EnumerationTypeCombo"
                      label={
                        t(
                          'CloseDebateInput.CloseDebateInput.Form.voteType.debate.debate::LabelWrapper.CloseDebateInput_Form.CloseDebateInput::CloseDebateInput_Form',
                          { defaultValue: 'VoteType' },
                        ) as string
                      }
                      value={data.voteType || ''}
                      className={clsx({
                        'JUDO-viewMode': !editMode,
                        'JUDO-required': true,
                      })}
                      disabled={isLoading}
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
                          required: true,
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
                        t(
                          'CloseDebateInput.CloseDebateInput.Form.closeAt.debate.debate::LabelWrapper.CloseDebateInput_Form.CloseDebateInput::CloseDebateInput_Form',
                          { defaultValue: 'Vote close at' },
                        ) as string
                      }
                      value={serviceDateToUiDate(data.closeAt ?? null)}
                      readOnly={false || !isFormUpdateable()}
                      disabled={isLoading}
                      onChange={(newValue: Date) => {
                        storeDiff('closeAt', newValue);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      required={true}
                      name="title"
                      id="User/(esm/_uZrGAYfXEe2u0fVmwtP5bA)/StringTypeTextInput"
                      label={
                        t(
                          'CloseDebateInput.CloseDebateInput.Form.title.debate.debate::LabelWrapper.CloseDebateInput_Form.CloseDebateInput::CloseDebateInput_Form',
                          { defaultValue: 'Vote title' },
                        ) as string
                      }
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

                  <Grid item xs={12} sm={12}>
                    <TextField
                      required={true}
                      name="description"
                      id="User/(esm/_uZrGAIfXEe2u0fVmwtP5bA)/StringTypeTextArea"
                      label={
                        t(
                          'CloseDebateInput.CloseDebateInput.Form.description.debate.debate::LabelWrapper.CloseDebateInput_Form.CloseDebateInput::CloseDebateInput_Form',
                          { defaultValue: 'Vote description' },
                        ) as string
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
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
