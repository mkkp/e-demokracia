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
import Typography from '@mui/material/Typography';
import { useL10N } from '~/l10n/l10n-context';
import { MdiIcon, DropdownButton, useJudoNavigation } from '~/components';
import { isErrorOperationFault, useErrorHandler, uiDateToServiceDate, serviceDateToUiDate } from '~/utilities';

import { DateTimePicker } from '@mui/x-date-pickers';
import type { DateTimeValidationError } from '@mui/x-date-pickers';
import { AssociationButton, NumericInput } from '~/components/widgets';
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
import type { ServiceConCon_FormProsComponentActionDefinitions } from './components/ServiceConCon_FormProsComponent';
import { ServiceConCon_FormProsComponent } from './components/ServiceConCon_FormProsComponent';
import type { ServiceConCon_FormCreatedByComponentActionDefinitions } from './components/ServiceConCon_FormCreatedByComponent';
import { ServiceConCon_FormCreatedByComponent } from './components/ServiceConCon_FormCreatedByComponent';

export interface ServiceConCon_FormActionDefinitions
  extends ServiceConCon_FormConsComponentActionDefinitions,
    ServiceConCon_FormCreatedByComponentActionDefinitions,
    ServiceConCon_FormProsComponentActionDefinitions {
  votesOpenPageAction?: (target?: ServiceSimpleVoteStored) => Promise<void>;
}

export interface ServiceConCon_FormProps {
  refreshCounter: number;
  actions: ServiceConCon_FormActionDefinitions;

  data: ServiceConStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCon, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceCon, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCon, string>>>;
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_qAjNIGksEe25ONJ3V89cVA)/TransferObjectFormPageContainer
// Name: service::Con::Con_Form
export default function ServiceConCon_Form(props: ServiceConCon_FormProps) {
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
          id="User/(esm/_qAjNIGksEe25ONJ3V89cVA)/TransferObjectFormVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <TextField
              required={false}
              name="createdByName"
              id="User/(esm/_EuIKwG5WEe2wNaja8kBvcQ)/StringTypeTextInput"
              label={t('service.Con.Con_Form.createdByName', { defaultValue: 'CreatedByName' }) as string}
              value={data.createdByName ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': false,
              })}
              disabled={isLoading}
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
            />
          </Grid>

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
                  id: 'User/(esm/_3nMr4H4bEe2j59SYy0JH0Q)/TimestampTypeDateTimeInput',
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
              disabled={isLoading}
              onChange={(newValue: Date) => {
                storeDiff('created', newValue);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              required={true}
              name="description"
              id="User/(esm/_3nWc4H4bEe2j59SYy0JH0Q)/StringTypeTextInput"
              label={t('service.Con.Con_Form.description', { defaultValue: 'Description' }) as string}
              value={data.description ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={isLoading}
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

          <Grid item xs={12} sm={12}>
            <TextField
              required={true}
              name="title"
              id="User/(esm/_3ng08H4bEe2j59SYy0JH0Q)/StringTypeTextInput"
              label={t('service.Con.Con_Form.title', { defaultValue: 'Title' }) as string}
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
            <NumericInput
              required={false}
              name="upVotes"
              id="User/(esm/_cIeKEIfYEe2u0fVmwtP5bA)/NumericTypeVisualInput"
              label={t('service.Con.Con_Form.upVotes', { defaultValue: 'UpVotes' }) as string}
              customInput={TextField}
              value={data.upVotes ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': false,
              })}
              disabled={isLoading}
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

          <Grid item xs={12} sm={12}>
            <NumericInput
              required={false}
              name="downVotes"
              id="User/(esm/_cIh0cIfYEe2u0fVmwtP5bA)/NumericTypeVisualInput"
              label={t('service.Con.Con_Form.downVotes', { defaultValue: 'DownVotes' }) as string}
              customInput={TextField}
              value={data.downVotes ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': false,
              })}
              disabled={isLoading}
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
              {t('service.Con.Con_Form.votes', { defaultValue: 'Votes' })}
              <MdiIcon path="arrow-right" />
            </AssociationButton>
          </Grid>

          <Grid item xs={12} sm={12}>
            <ServiceConCon_FormCreatedByComponent
              disabled={true || !isFormUpdateable()}
              ownerData={data}
              editMode={editMode}
              storeDiff={storeDiff}
              validationError={validation.get('createdBy')}
              actions={actions}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid
              id="_WbeOQY7EEe6rlbj78nBB0Q)/LabelWrapper"
              container
              direction="column"
              alignItems="center"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <MdiIcon path="table_rows" sx={{ marginRight: 1 }} />
                  <Typography id="_WbeOQY7EEe6rlbj78nBB0Q)/Label" variant="h5" component="h1">
                    {t('service.Con.Con_Form.cons.Icon', { defaultValue: 'Cons' })}
                  </Typography>
                </Grid>
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
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid
              id="_Wb66MI7EEe6rlbj78nBB0Q)/LabelWrapper"
              container
              direction="column"
              alignItems="center"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <MdiIcon path="table_rows" sx={{ marginRight: 1 }} />
                  <Typography id="_Wb66MI7EEe6rlbj78nBB0Q)/Label" variant="h5" component="h1">
                    {t('service.Con.Con_Form.pros.Icon', { defaultValue: 'Pros' })}
                  </Typography>
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
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
