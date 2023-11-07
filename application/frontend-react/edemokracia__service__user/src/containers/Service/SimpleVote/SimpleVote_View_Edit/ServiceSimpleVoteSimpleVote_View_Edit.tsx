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
import { ServiceSimpleVote, ServiceSimpleVoteQueryCustomizer, ServiceSimpleVoteStored } from '~/services/data-api';

export interface ServiceSimpleVoteSimpleVote_View_EditActionDefinitions {}

export interface ServiceSimpleVoteSimpleVote_View_EditProps {
  refreshCounter: number;
  actions: ServiceSimpleVoteSimpleVote_View_EditActionDefinitions;

  data: ServiceSimpleVote;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceSimpleVote, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceSimpleVote, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceSimpleVote, string>>>;
}

// XMIID: User/(esm/_p81x0GksEe25ONJ3V89cVA)/TransferObjectViewPageContainer
// Name: service::SimpleVote::SimpleVote_View_Edit
export default function ServiceSimpleVoteSimpleVote_View_Edit(props: ServiceSimpleVoteSimpleVote_View_EditProps) {
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
        <Grid
          id="User/(esm/_GLaiwG5DEe2Q6M99rsfqSQ)/GroupVisualElement"
          container
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={4.0}>
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
                  id: 'User/(esm/_VQQiIGk5Ee25ONJ3V89cVA)/TimestampTypeDateTimeInput',
                  required: true,
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
                  const copy = new Map<keyof ServiceSimpleVote, string>(prevValidation);
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
                t(
                  'service.SimpleVote.SimpleVote.View.Edit.created.group.SimpleVote_View_Edit.service::SimpleVote::SimpleVote_View_Edit',
                  { defaultValue: 'Created' },
                ) as string
              }
              value={serviceDateToUiDate(data.created ?? null)}
              readOnly={false || !isFormUpdateable()}
              disabled={isLoading}
              onChange={(newValue: Date) => {
                storeDiff('created', newValue);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4.0}>
            <Grid
              id="_fouSs32GEe6V8KKnnZfChA)/LabelWrapper"
              container
              direction="column"
              alignItems="center"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <MdiIcon path="list" sx={{ marginRight: 1 }} />
                  <Typography id="_fouSs32GEe6V8KKnnZfChA)/Label" variant="h5" component="h1">
                    {t(
                      'service.SimpleVote.SimpleVote.View.Edit.type::Label.type::LabelWrapper.group.SimpleVote_View_Edit.service::SimpleVote::SimpleVote_View_Edit',
                      { defaultValue: 'Type' },
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
                  error={validation.has('type')}
                >
                  <InputLabel id="User/(esm/_VQWBsGk5Ee25ONJ3V89cVA)/EnumerationTypeRadio" shrink={true} size={'small'}>
                    {t(
                      'service.SimpleVote.SimpleVote.View.Edit.type.type::LabelWrapper.group.SimpleVote_View_Edit.service::SimpleVote::SimpleVote_View_Edit',
                      { defaultValue: 'Type' },
                    )}{' '}
                    *
                  </InputLabel>
                  <RadioGroup
                    sx={{ justifyContent: 'space-between', pl: '12px', pt: '6px' }}
                    name="type"
                    id="User/(esm/_VQWBsGk5Ee25ONJ3V89cVA)/EnumerationTypeRadio"
                    value={data.type || ''}
                    onChange={(event) => {
                      storeDiff('type', event.target.value);
                    }}
                  >
                    <FormControlLabel
                      id="User/(esm/_W1kWEGkYEe25ONJ3V89cVA)/EnumerationTypeMember"
                      value={'UP'}
                      control={<Radio size='small' />}
                      label={t('enumerations.SimpleVoteType.UP', { defaultValue: 'UP' })}
                      disabled={false || !isFormUpdateable()}
                    />
                    <FormControlLabel
                      id="User/(esm/_YoByMGkYEe25ONJ3V89cVA)/EnumerationTypeMember"
                      value={'DOWN'}
                      control={<Radio size='small' />}
                      label={t('enumerations.SimpleVoteType.DOWN', { defaultValue: 'DOWN' })}
                      disabled={false || !isFormUpdateable()}
                    />
                  </RadioGroup>
                  {validation.has('type') && !data.type && <FormHelperText>{validation.get('type')}</FormHelperText>}
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={4.0}>
            <TextField
              required={true}
              name="type"
              id="User/(esm/_VQWBsGk5Ee25ONJ3V89cVA)/EnumerationTypeCombo"
              label={
                t(
                  'service.SimpleVote.SimpleVote.View.Edit.type.group.SimpleVote_View_Edit.service::SimpleVote::SimpleVote_View_Edit',
                  { defaultValue: 'Type' },
                ) as string
              }
              value={data.type || ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={isLoading}
              error={!!validation.get('type')}
              helperText={validation.get('type')}
              onChange={(event) => {
                storeDiff('type', event.target.value);
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
              <MenuItem id="User/(esm/_W1kWEGkYEe25ONJ3V89cVA)/EnumerationTypeMember" value={'UP'}>
                {t('enumerations.SimpleVoteType.UP', { defaultValue: 'UP' })}
              </MenuItem>
              <MenuItem id="User/(esm/_YoByMGkYEe25ONJ3V89cVA)/EnumerationTypeMember" value={'DOWN'}>
                {t('enumerations.SimpleVoteType.DOWN', { defaultValue: 'DOWN' })}
              </MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_QqUxoG5DEe2Q6M99rsfqSQ)/GroupVisualElement"
          container
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          spacing={2}
        ></Grid>
      </Grid>
    </Grid>
  );
}
