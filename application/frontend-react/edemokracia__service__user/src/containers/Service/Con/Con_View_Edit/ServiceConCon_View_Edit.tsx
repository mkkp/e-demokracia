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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useL10N } from '~/l10n/l10n-context';
import { DIVIDER_HEIGHT } from '~/config';
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
import type { ServiceConCon_View_EditConsComponentActionDefinitions } from './components/ServiceConCon_View_EditConsComponent';
import { ServiceConCon_View_EditConsComponent } from './components/ServiceConCon_View_EditConsComponent';
import type { ServiceConCon_View_EditProsComponentActionDefinitions } from './components/ServiceConCon_View_EditProsComponent';
import { ServiceConCon_View_EditProsComponent } from './components/ServiceConCon_View_EditProsComponent';
import type { ServiceConCon_View_EditCreatedByComponentActionDefinitions } from './components/ServiceConCon_View_EditCreatedByComponent';
import { ServiceConCon_View_EditCreatedByComponent } from './components/ServiceConCon_View_EditCreatedByComponent';

export interface ServiceConCon_View_EditActionDefinitions
  extends ServiceConCon_View_EditConsComponentActionDefinitions,
    ServiceConCon_View_EditCreatedByComponentActionDefinitions,
    ServiceConCon_View_EditProsComponentActionDefinitions {
  createConArgumentAction?: () => Promise<void>;
  createProArgumentAction?: () => Promise<void>;
  voteDownForConAction?: () => Promise<void>;
  voteUpForConAction?: () => Promise<void>;
  votesOpenPageAction?: (target?: ServiceSimpleVoteStored) => Promise<void>;
}

export interface ServiceConCon_View_EditProps {
  refreshCounter: number;
  actions: ServiceConCon_View_EditActionDefinitions;

  data: ServiceConStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCon, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceCon, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCon, string>>>;
}

// XMIID: User/(esm/_qAaDMGksEe25ONJ3V89cVA)/TransferObjectViewPageContainer
// Name: service::Con::Con_View_Edit
export default function ServiceConCon_View_Edit(props: ServiceConCon_View_EditProps) {
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
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_qAaDMGksEe25ONJ3V89cVA)/TransferObjectViewVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Card id="(_9OlboI2dEe6GJNWtqQaZ_w)/LabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="chat-minus" sx={{ marginRight: 1 }} />
                      <Typography id="_9OlboI2dEe6GJNWtqQaZ_w)/Label" variant="h5" component="h1">
                        {t('service.Con.Con_View_Edit.con.Icon', { defaultValue: 'Contra' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/__VtG0G5QEe2Q6M99rsfqSQ)/GroupVisualElement"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12} md={6.0}>
                        <TextField
                          required={true}
                          name="title"
                          id="User/(esm/_3ndKkH4bEe2j59SYy0JH0Q)/StringTypeTextInput"
                          autoFocus
                          label={t('service.Con.Con_View_Edit.title', { defaultValue: 'Title' }) as string}
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

                      <Grid item xs={12} sm={12} md={3.0}>
                        <DateTimePicker
                          ampm={false}
                          ampmInClock={false}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': true,
                          })}
                          slotProps={{
                            textField: {
                              id: 'User/(esm/_3nJokH4bEe2j59SYy0JH0Q)/TimestampTypeDateTimeInput',
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
                          label={t('service.Con.Con_View_Edit.created', { defaultValue: 'Created' }) as string}
                          value={serviceDateToUiDate(data.created ?? null)}
                          readOnly={false || !isFormUpdateable()}
                          disabled={isLoading}
                          onChange={(newValue: Date) => {
                            storeDiff('created', newValue);
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={3.0}>
                        <ServiceConCon_View_EditCreatedByComponent
                          disabled={true || !isFormUpdateable()}
                          ownerData={data}
                          editMode={editMode}
                          storeDiff={storeDiff}
                          validationError={validation.get('createdBy')}
                          actions={actions}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <TextField
                          required={true}
                          name="description"
                          id="User/(esm/_3nTZkH4bEe2j59SYy0JH0Q)/StringTypeTextArea"
                          label={t('service.Con.Con_View_Edit.description', { defaultValue: 'Description' }) as string}
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

                      <Grid item xs={12} sm={12} md={1.0}>
                        <LoadingButton
                          id="User/(esm/_3sNaYIriEe2VSOmaAz6G9Q)/OperationFormVisualElement"
                          loading={isLoading}
                          variant={undefined}
                          startIcon={<MdiIcon path="thumb-up" />}
                          loadingPosition="start"
                          onClick={async () => {
                            if (actions.voteUpForConAction) {
                              await actions.voteUpForConAction!();
                            }
                          }}
                          disabled={!actions.voteUpForConAction || editMode}
                        >
                          <span>{t('service.Con.Con_View_Edit.voteUp', { defaultValue: '' })}</span>
                        </LoadingButton>
                      </Grid>

                      <Grid item xs={12} sm={12} md={1.0}>
                        <NumericInput
                          required={false}
                          name="upVotes"
                          id="User/(esm/_Widj0IfYEe2u0fVmwtP5bA)/NumericTypeVisualInput"
                          label={t('service.Con.Con_View_Edit.upVotes', { defaultValue: '' }) as string}
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
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={1.0}>
                        <Grid container sx={{ height: DIVIDER_HEIGHT }}></Grid>
                      </Grid>

                      <Grid item xs={12} sm={12} md={1.0}>
                        <LoadingButton
                          id="User/(esm/_3sP2oIriEe2VSOmaAz6G9Q)/OperationFormVisualElement"
                          loading={isLoading}
                          variant={undefined}
                          startIcon={<MdiIcon path="thumb-down" />}
                          loadingPosition="start"
                          onClick={async () => {
                            if (actions.voteDownForConAction) {
                              await actions.voteDownForConAction!();
                            }
                          }}
                          disabled={!actions.voteDownForConAction || editMode}
                        >
                          <span>{t('service.Con.Con_View_Edit.voteDown', { defaultValue: '' })}</span>
                        </LoadingButton>
                      </Grid>

                      <Grid item xs={12} sm={12} md={1.0}>
                        <NumericInput
                          required={false}
                          name="downVotes"
                          id="User/(esm/_Wic8wIfYEe2u0fVmwtP5bA)/NumericTypeVisualInput"
                          label={t('service.Con.Con_View_Edit.downVotes', { defaultValue: '' }) as string}
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
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={1.0}>
                        <Grid container sx={{ height: DIVIDER_HEIGHT }}></Grid>
                      </Grid>

                      <Grid item xs={12} sm={12} md={2.0}>
                        <AssociationButton
                          id="User/(esm/_Wih1Q4fYEe2u0fVmwtP5bA)/TabularReferenceFieldButton"
                          variant={undefined}
                          editMode={editMode}
                          navigateAction={actions.votesOpenPageAction}
                          refreshCounter={refreshCounter}
                        >
                          {t('service.Con.Con_View_Edit.votes', { defaultValue: 'Votes' })}
                          <MdiIcon path="arrow-right" />
                        </AssociationButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_AnjwQG5REe2Q6M99rsfqSQ)/GroupVisualElement"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12} md={6.0}>
                <Card id="(_9Qcc0I2dEe6GJNWtqQaZ_w)/LabelWrapper">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                          <MdiIcon path="chat-plus" sx={{ marginRight: 1 }} />
                          <Typography id="_9Qcc0I2dEe6GJNWtqQaZ_w)/Label" variant="h5" component="h1">
                            {t('service.Con.Con_View_Edit.pros.Icon', { defaultValue: 'Pros' })}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_7cm_0HjlEe6cB8og8p0UuQ)/GroupVisualElement"
                          container
                          direction="row"
                          alignItems="stretch"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_PwgIEHjsEe6cB8og8p0UuQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <LoadingButton
                                  id="User/(esm/_DBZYMHjsEe6cB8og8p0UuQ)/OperationFormVisualElement"
                                  loading={isLoading}
                                  variant={undefined}
                                  startIcon={<MdiIcon path="chat-plus" />}
                                  loadingPosition="start"
                                  onClick={async () => {
                                    if (actions.createProArgumentAction) {
                                      await actions.createProArgumentAction!();
                                    }
                                  }}
                                  disabled={!actions.createProArgumentAction || editMode}
                                >
                                  <span>
                                    {t('service.Con.Con_View_Edit.createProArgument', {
                                      defaultValue: 'Add Pro Argument',
                                    })}
                                  </span>
                                </LoadingButton>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_UuxjcHjtEe6cB8og8p0UuQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_WihOMIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceConCon_View_EditProsComponent
                                    uniqueId={
                                      'User/(esm/_WihOMIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable'
                                    }
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
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={12} md={6.0}>
                <Card id="(_9QjKgI2dEe6GJNWtqQaZ_w)/LabelWrapper">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                          <MdiIcon path="chat-minus" sx={{ marginRight: 1 }} />
                          <Typography id="_9QjKgI2dEe6GJNWtqQaZ_w)/Label" variant="h5" component="h1">
                            {t('service.Con.Con_View_Edit.cons.Icon', { defaultValue: 'Cons' })}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_BJY8cHjmEe6cB8og8p0UuQ)/GroupVisualElement"
                          container
                          direction="row"
                          alignItems="stretch"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_DsGQIHjuEe6cB8og8p0UuQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <LoadingButton
                                  id="User/(esm/_DBYxIHjsEe6cB8og8p0UuQ)/OperationFormVisualElement"
                                  loading={isLoading}
                                  variant={undefined}
                                  startIcon={<MdiIcon path="chat-minus" />}
                                  loadingPosition="start"
                                  onClick={async () => {
                                    if (actions.createConArgumentAction) {
                                      await actions.createConArgumentAction!();
                                    }
                                  }}
                                  disabled={!actions.createConArgumentAction || editMode}
                                >
                                  <span>
                                    {t('service.Con.Con_View_Edit.createConArgument', {
                                      defaultValue: 'Add Con Argument',
                                    })}
                                  </span>
                                </LoadingButton>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_w-gIkHjtEe6cB8og8p0UuQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceConCon_View_EditConsComponent
                                    uniqueId={
                                      'User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable'
                                    }
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
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
