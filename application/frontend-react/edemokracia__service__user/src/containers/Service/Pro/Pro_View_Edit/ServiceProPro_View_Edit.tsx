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
import type { CustomFormVisualElementProps } from '~/custom';
import { ComponentProxy } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
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
import {
  AssociationButton,
  BinaryInput,
  CollectionAssociationButton,
  NumericInput,
  TrinaryLogicCombobox,
} from '~/components/widgets';
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
import type { ServiceProPro_View_EditConsComponentActionDefinitions } from './components/ServiceProPro_View_EditConsComponent';
import { ServiceProPro_View_EditConsComponent } from './components/ServiceProPro_View_EditConsComponent';
import type { ServiceProPro_View_EditProsComponentActionDefinitions } from './components/ServiceProPro_View_EditProsComponent';
import { ServiceProPro_View_EditProsComponent } from './components/ServiceProPro_View_EditProsComponent';
import type { ServiceProPro_View_EditCreatedByComponentActionDefinitions } from './components/ServiceProPro_View_EditCreatedByComponent';
import { ServiceProPro_View_EditCreatedByComponent } from './components/ServiceProPro_View_EditCreatedByComponent';

export interface ServiceProPro_View_EditActionDefinitions
  extends ServiceProPro_View_EditConsComponentActionDefinitions,
    ServiceProPro_View_EditCreatedByComponentActionDefinitions,
    ServiceProPro_View_EditProsComponentActionDefinitions {
  createConArgumentAction?: () => Promise<void>;
  createProArgumentAction?: () => Promise<void>;
  voteDownForProAction?: () => Promise<void>;
  voteUpForProAction?: () => Promise<void>;
  votesOpenPageAction?: (target?: ServiceSimpleVoteStored) => Promise<void>;
}

export interface ServiceProPro_View_EditProps {
  refreshCounter: number;
  actions: ServiceProPro_View_EditActionDefinitions;

  data: ServiceProStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServicePro, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServicePro, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServicePro, string>>>;
}

// XMIID: User/(esm/_qLQBQGksEe25ONJ3V89cVA)/TransferObjectViewPageContainer
// Name: service::Pro::Pro_View_Edit
export default function ServiceProPro_View_Edit(props: ServiceProPro_View_EditProps) {
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
        <Card id="_sO0I0YshEe6I4ZdrLoQBLA)/LabelWrapper">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <MdiIcon path="pro::Icon" sx={{ marginRight: 1 }} />
                  <Typography id="_sO0I0YshEe6I4ZdrLoQBLA)/Label" variant="h5" component="h1">
                    {t('service.Pro.Pro_View_Edit.pro.Icon', { defaultValue: 'Pro' })}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Card id="User/(esm/_OUB-QIfiEe2u0fVmwtP5bA)/GroupVisualElement">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          required={true}
                          name="title"
                          id="User/(esm/_3oDAcH4bEe2j59SYy0JH0Q)/StringTypeTextInput"
                          autoFocus
                          label={t('service.Pro.Pro_View_Edit.title', { defaultValue: 'Title' }) as string}
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
                        <DateTimePicker
                          ampm={false}
                          ampmInClock={false}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': true,
                          })}
                          slotProps={{
                            textField: {
                              id: 'User/(esm/_3ntCMH4bEe2j59SYy0JH0Q)/TimestampTypeDateTimeInput',
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
                          label={t('service.Pro.Pro_View_Edit.created', { defaultValue: 'Created' }) as string}
                          value={serviceDateToUiDate(data.created ?? null)}
                          readOnly={false || !isFormUpdateable()}
                          disabled={isLoading}
                          onChange={(newValue: Date) => {
                            storeDiff('created', newValue);
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <ServiceProPro_View_EditCreatedByComponent
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
                          id="User/(esm/_3n4oYH4bEe2j59SYy0JH0Q)/StringTypeTextArea"
                          label={t('service.Pro.Pro_View_Edit.description', { defaultValue: 'Description' }) as string}
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

                      <Grid item xs={12} sm={12}>
                        <LoadingButton
                          id="User/(esm/_ikPssIrjEe2VSOmaAz6G9Q)/OperationFormVisualElement"
                          loading={isLoading}
                          variant={undefined}
                          startIcon={<MdiIcon path="thumb-up" />}
                          loadingPosition="start"
                          onClick={async () => {
                            if (actions.voteUpForProAction) {
                              await actions.voteUpForProAction!();
                            }
                          }}
                          disabled={!actions.voteUpForProAction || editMode}
                        >
                          <span>{t('service.Pro.Pro_View_Edit.voteUp', { defaultValue: '' })}</span>
                        </LoadingButton>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <NumericInput
                          required={false}
                          name="upVotes"
                          id="User/(esm/_eJYR4IfYEe2u0fVmwtP5bA)/NumericTypeVisualInput"
                          label={t('service.Pro.Pro_View_Edit.upVotes', { defaultValue: '' }) as string}
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

                      <Grid item xs={12} sm={12}>
                        <Grid container sx={{ height: DIVIDER_HEIGHT }}></Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <LoadingButton
                          id="User/(esm/_ikQTwIrjEe2VSOmaAz6G9Q)/OperationFormVisualElement"
                          loading={isLoading}
                          variant={undefined}
                          startIcon={<MdiIcon path="thumb-down" />}
                          loadingPosition="start"
                          onClick={async () => {
                            if (actions.voteDownForProAction) {
                              await actions.voteDownForProAction!();
                            }
                          }}
                          disabled={!actions.voteDownForProAction || editMode}
                        >
                          <span>{t('service.Pro.Pro_View_Edit.voteDown', { defaultValue: '' })}</span>
                        </LoadingButton>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <NumericInput
                          required={false}
                          name="downVotes"
                          id="User/(esm/_eJdxcIfYEe2u0fVmwtP5bA)/NumericTypeVisualInput"
                          label={t('service.Pro.Pro_View_Edit.downVotes', { defaultValue: '' }) as string}
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

                      <Grid item xs={12} sm={12}>
                        <Grid container sx={{ height: DIVIDER_HEIGHT }}></Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <AssociationButton
                          id="User/(esm/_eJip8IfYEe2u0fVmwtP5bA)/TabularReferenceFieldButton"
                          variant={undefined}
                          editMode={editMode}
                          navigateAction={actions.votesOpenPageAction}
                          refreshCounter={refreshCounter}
                        >
                          {t('service.Pro.Pro_View_Edit.votes', { defaultValue: 'Votes' })}
                          <MdiIcon path="arrow-right" />
                        </AssociationButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_KRUbMHjvEe6cB8og8p0UuQ)/GroupVisualElement"
          container
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={6.0}>
            <Card id="_sPrEcIshEe6I4ZdrLoQBLA)/LabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="pros::Icon" sx={{ marginRight: 1 }} />
                      <Typography id="_sPrEcIshEe6I4ZdrLoQBLA)/Label" variant="h5" component="h1">
                        {t('service.Pro.Pro_View_Edit.pros.Icon', { defaultValue: 'Pros' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Card id="User/(esm/_KRUbMXjvEe6cB8og8p0UuQ)/GroupVisualElement">
                      <CardContent>
                        <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_KRUbMnjvEe6cB8og8p0UuQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}></Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_KRUbNHjvEe6cB8og8p0UuQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_KRUbNXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceProPro_View_EditProsComponent
                                    uniqueId={
                                      'User/(esm/_KRUbNXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable'
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
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={6.0}>
            <Card id="_sPs5oIshEe6I4ZdrLoQBLA)/LabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="cons::Icon" sx={{ marginRight: 1 }} />
                      <Typography id="_sPs5oIshEe6I4ZdrLoQBLA)/Label" variant="h5" component="h1">
                        {t('service.Pro.Pro_View_Edit.cons.Icon', { defaultValue: 'Cons' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Card id="User/(esm/_KRUbOXjvEe6cB8og8p0UuQ)/GroupVisualElement">
                      <CardContent>
                        <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_KRUbOnjvEe6cB8og8p0UuQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}></Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_KRUbPHjvEe6cB8og8p0UuQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_KRUbPXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceProPro_View_EditConsComponent
                                    uniqueId={
                                      'User/(esm/_KRUbPXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable'
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
                      </CardContent>
                    </Card>
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