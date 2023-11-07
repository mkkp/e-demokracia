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
import { ServiceIssueType, ServiceIssueTypeQueryCustomizer, ServiceIssueTypeStored } from '~/services/data-api';

export interface ServiceIssueTypeIssueType_FormActionDefinitions {}

export interface ServiceIssueTypeIssueType_FormProps {
  refreshCounter: number;
  actions: ServiceIssueTypeIssueType_FormActionDefinitions;

  data: ServiceIssueType;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceIssueType, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceIssueType, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssueType, string>>>;
}

// XMIID: User/(esm/_J4WCwNu4Ee2Bgcx6em3jZg)/TransferObjectFormPageContainer
// Name: service::IssueType::IssueType_Form
export default function ServiceIssueTypeIssueType_Form(props: ServiceIssueTypeIssueType_FormProps) {
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
        <Card id="User/(esm/_19au8NvDEe2Bgcx6em3jZg)/GroupVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required={true}
                  name="title"
                  id="User/(esm/_03iE8dvDEe2Bgcx6em3jZg)/StringTypeTextInput"
                  autoFocus
                  label={
                    t(
                      'service.IssueType.IssueType.Form.title.group.IssueType_Form.service::IssueType::IssueType_Form',
                      { defaultValue: 'Title' },
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
                <Grid
                  id="_fopaN32GEe6V8KKnnZfChA)/LabelWrapper"
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="flex-start"
                  spacing={2}
                >
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="list" sx={{ marginRight: 1 }} />
                      <Typography id="_fopaN32GEe6V8KKnnZfChA)/Label" variant="h5" component="h1">
                        {t(
                          'service.IssueType.IssueType.Form.voteType::Label.voteType::LabelWrapper.group.IssueType_Form.service::IssueType::IssueType_Form',
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
                        id="User/(esm/_xWzhcOMcEe2Bgcx6em3jZg)/EnumerationTypeRadio"
                        shrink={true}
                        size={'small'}
                      >
                        {t(
                          'service.IssueType.IssueType.Form.voteType.voteType::LabelWrapper.group.IssueType_Form.service::IssueType::IssueType_Form',
                          { defaultValue: 'VoteType' },
                        )}
                      </InputLabel>
                      <RadioGroup
                        sx={{ justifyContent: 'space-between', pl: '12px', pt: '6px' }}
                        name="voteType"
                        id="User/(esm/_xWzhcOMcEe2Bgcx6em3jZg)/EnumerationTypeRadio"
                        value={data.voteType || ''}
                        onChange={(event) => {
                          storeDiff('voteType', event.target.value);
                        }}
                      >
                        <FormControlLabel
                          id="User/(esm/_r9r9IeMbEe2Bgcx6em3jZg)/EnumerationTypeMember"
                          value={'YES_NO'}
                          control={<Radio size='small' />}
                          label={t('enumerations.VoteType.YES_NO', { defaultValue: 'YES_NO' })}
                          disabled={false || !isFormUpdateable()}
                        />
                        <FormControlLabel
                          id="User/(esm/_r9r9IuMbEe2Bgcx6em3jZg)/EnumerationTypeMember"
                          value={'YES_NO_ABSTAIN'}
                          control={<Radio size='small' />}
                          label={t('enumerations.VoteType.YES_NO_ABSTAIN', { defaultValue: 'YES_NO_ABSTAIN' })}
                          disabled={false || !isFormUpdateable()}
                        />
                        <FormControlLabel
                          id="User/(esm/_r9r9I-MbEe2Bgcx6em3jZg)/EnumerationTypeMember"
                          value={'SELECT_ANSWER'}
                          control={<Radio size='small' />}
                          label={t('enumerations.VoteType.SELECT_ANSWER', { defaultValue: 'SELECT_ANSWER' })}
                          disabled={false || !isFormUpdateable()}
                        />
                        <FormControlLabel
                          id="User/(esm/_r9r9JOMbEe2Bgcx6em3jZg)/EnumerationTypeMember"
                          value={'RATE'}
                          control={<Radio size='small' />}
                          label={t('enumerations.VoteType.RATE', { defaultValue: 'RATE' })}
                          disabled={false || !isFormUpdateable()}
                        />
                        <FormControlLabel
                          id="User/(esm/_r9r9JeMbEe2Bgcx6em3jZg)/EnumerationTypeMember"
                          value={'NO_VOTE'}
                          control={<Radio size='small' />}
                          label={t('enumerations.VoteType.NO_VOTE', { defaultValue: 'NO_VOTE' })}
                          disabled={false || !isFormUpdateable()}
                        />
                      </RadioGroup>
                      {validation.has('voteType') && <FormHelperText>{validation.get('voteType')}</FormHelperText>}
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required={false}
                  name="voteType"
                  id="User/(esm/_xWzhcOMcEe2Bgcx6em3jZg)/EnumerationTypeCombo"
                  label={
                    t(
                      'service.IssueType.IssueType.Form.voteType.group.IssueType_Form.service::IssueType::IssueType_Form',
                      { defaultValue: 'VoteType' },
                    ) as string
                  }
                  value={data.voteType || ''}
                  className={clsx({
                    'JUDO-viewMode': !editMode,
                    'JUDO-required': false,
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
                  <MenuItem id="User/(esm/_r9r9IeMbEe2Bgcx6em3jZg)/EnumerationTypeMember" value={'YES_NO'}>
                    {t('enumerations.VoteType.YES_NO', { defaultValue: 'YES_NO' })}
                  </MenuItem>
                  <MenuItem id="User/(esm/_r9r9IuMbEe2Bgcx6em3jZg)/EnumerationTypeMember" value={'YES_NO_ABSTAIN'}>
                    {t('enumerations.VoteType.YES_NO_ABSTAIN', { defaultValue: 'YES_NO_ABSTAIN' })}
                  </MenuItem>
                  <MenuItem id="User/(esm/_r9r9I-MbEe2Bgcx6em3jZg)/EnumerationTypeMember" value={'SELECT_ANSWER'}>
                    {t('enumerations.VoteType.SELECT_ANSWER', { defaultValue: 'SELECT_ANSWER' })}
                  </MenuItem>
                  <MenuItem id="User/(esm/_r9r9JOMbEe2Bgcx6em3jZg)/EnumerationTypeMember" value={'RATE'}>
                    {t('enumerations.VoteType.RATE', { defaultValue: 'RATE' })}
                  </MenuItem>
                  <MenuItem id="User/(esm/_r9r9JeMbEe2Bgcx6em3jZg)/EnumerationTypeMember" value={'NO_VOTE'}>
                    {t('enumerations.VoteType.NO_VOTE', { defaultValue: 'NO_VOTE' })}
                  </MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required={true}
                  name="description"
                  id="User/(esm/_03iE8NvDEe2Bgcx6em3jZg)/StringTypeTextArea"
                  label={
                    t(
                      'service.IssueType.IssueType.Form.description.group.IssueType_Form.service::IssueType::IssueType_Form',
                      { defaultValue: 'Description' },
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
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
