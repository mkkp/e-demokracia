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
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useL10N } from '~/l10n/l10n-context';
import { MdiIcon, DropdownButton, useJudoNavigation } from '~/components';
import { isErrorOperationFault, useErrorHandler, uiDateToServiceDate, serviceDateToUiDate } from '~/utilities';

import { DateTimePicker } from '@mui/x-date-pickers';
import type { DateTimeValidationError } from '@mui/x-date-pickers';
import { AssociationButton } from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceIssue,
  ServiceIssueStored,
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteEntryStored,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponentActionDefinitions } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponent';
import { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponent } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponent';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponentActionDefinitions } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponent';
import { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponent } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponent';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditOwnerComponentActionDefinitions } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditOwnerComponent';
import { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditOwnerComponent } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditOwnerComponent';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponent';
import { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponent } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponent';

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionDefinitions
  extends ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditOwnerComponentActionDefinitions,
    ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions,
    ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponentActionDefinitions,
    ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponentActionDefinitions {
  issueOpenPageAction?: (target?: ServiceIssueStored) => Promise<void>;
  issuePreFetchAction?: (target?: ServiceIssueStored) => Promise<ServiceIssueStored>;
  activateForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
  addToFavoritesForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
  closeVoteForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
  deleteOrArchiveForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
  removeFromFavoritesForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
  voteAction?: () => Promise<void>;
  takeBackVoteForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
}

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditProps {
  refreshCounter: number;
  actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionDefinitions;

  data: ServiceSelectAnswerVoteDefinitionStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteDefinition, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceSelectAnswerVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceSelectAnswerVoteDefinition, string>>>;
}

// XMIID: User/(esm/_-cGrAH4XEe2cB7_PsKXsHQ)/TransferObjectViewPageContainer
// Name: service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit
export default function ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_Edit(
  props: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditProps,
) {
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
          id="User/(esm/_JTH2kHr9Ee6bP4FWw7fjQA)/GroupVisualElement"
          container
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {!data.isNotFavorite && (
                <Grid item>
                  <LoadingButton
                    id="User/(esm/_JTH2knr9Ee6bP4FWw7fjQA)/OperationFormVisualElement"
                    loading={isLoading}
                    startIcon={<MdiIcon path="star-plus" />}
                    loadingPosition="start"
                    onClick={
                      actions.addToFavoritesForSelectAnswerVoteDefinitionAction
                        ? async () => {
                            await actions.addToFavoritesForSelectAnswerVoteDefinitionAction!();
                          }
                        : undefined
                    }
                    disabled={editMode}
                  >
                    <span>
                      {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.addToFavorites', {
                        defaultValue: 'Add to favorites',
                      })}
                    </span>
                  </LoadingButton>
                </Grid>
              )}
              {!data.isFavorite && (
                <Grid item>
                  <LoadingButton
                    id="User/(esm/_JTH2k3r9Ee6bP4FWw7fjQA)/OperationFormVisualElement"
                    loading={isLoading}
                    startIcon={<MdiIcon path="star-minus" />}
                    loadingPosition="start"
                    onClick={
                      actions.removeFromFavoritesForSelectAnswerVoteDefinitionAction
                        ? async () => {
                            await actions.removeFromFavoritesForSelectAnswerVoteDefinitionAction!();
                          }
                        : undefined
                    }
                    disabled={editMode}
                  >
                    <span>
                      {t(
                        'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.removeFromFavorites',
                        { defaultValue: 'Remove from favorites' },
                      )}
                    </span>
                  </LoadingButton>
                </Grid>
              )}
              {!data.isVoteNotOpen && (
                <Grid item>
                  <LoadingButton
                    id="User/(esm/_JTH2lXr9Ee6bP4FWw7fjQA)/OperationFormVisualElement"
                    loading={isLoading}
                    startIcon={<MdiIcon path="lock-check" />}
                    loadingPosition="start"
                    onClick={
                      actions.closeVoteForSelectAnswerVoteDefinitionAction
                        ? async () => {
                            await actions.closeVoteForSelectAnswerVoteDefinitionAction!();
                          }
                        : undefined
                    }
                    disabled={editMode}
                  >
                    <span>
                      {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.closeVote', {
                        defaultValue: 'Close Vote',
                      })}
                    </span>
                  </LoadingButton>
                </Grid>
              )}
              {!data.isVoteNotEditable && (
                <Grid item>
                  <LoadingButton
                    id="User/(esm/_JTH2lnr9Ee6bP4FWw7fjQA)/OperationFormVisualElement"
                    loading={isLoading}
                    startIcon={<MdiIcon path="lock-open" />}
                    loadingPosition="start"
                    onClick={
                      actions.activateForSelectAnswerVoteDefinitionAction
                        ? async () => {
                            await actions.activateForSelectAnswerVoteDefinitionAction!();
                          }
                        : undefined
                    }
                    disabled={editMode}
                  >
                    <span>
                      {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.activate', {
                        defaultValue: 'Activate',
                      })}
                    </span>
                  </LoadingButton>
                </Grid>
              )}
              {!data.isVoteNotDeletable && (
                <Grid item>
                  <LoadingButton
                    id="User/(esm/_JTH2l3r9Ee6bP4FWw7fjQA)/OperationFormVisualElement"
                    loading={isLoading}
                    startIcon={<MdiIcon path="delete" />}
                    loadingPosition="start"
                    onClick={
                      actions.deleteOrArchiveForSelectAnswerVoteDefinitionAction
                        ? async () => {
                            await actions.deleteOrArchiveForSelectAnswerVoteDefinitionAction!();
                          }
                        : undefined
                    }
                    disabled={editMode}
                  >
                    <span>
                      {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.deleteOrArchive', {
                        defaultValue: 'Delete',
                      })}
                    </span>
                  </LoadingButton>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Card id="_twg50I1KEe6sgdrBpAinBQ)/LabelWrapper">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <Typography id="_twg50I1KEe6sgdrBpAinBQ)/Label" variant="h5" component="h1">
                    {t(
                      'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.userVoteEntryGroup.Label',
                      { defaultValue: 'My vote entry' },
                    )}
                  </Typography>
                </Grid>
              </Grid>

              {!data.isVoteNotOpen && (
                <Grid item xs={12} sm={12}>
                  <Grid
                    id="User/(esm/_0SJy0FtuEe6Mx9dH3yj5gQ)/GroupVisualElement"
                    container
                    direction="row"
                    alignItems="stretch"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    {!data.userHasNoVoteEntry && (
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_0SJy0VtuEe6Mx9dH3yj5gQ)/GroupVisualElement"
                          container
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_0SJy0ltuEe6Mx9dH3yj5gQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12} md={4.0}>
                                <LoadingButton
                                  id="User/(esm/_0SJy01tuEe6Mx9dH3yj5gQ)/OperationFormVisualElement"
                                  loading={isLoading}
                                  variant={undefined}
                                  startIcon={<MdiIcon path="delete" />}
                                  loadingPosition="start"
                                  onClick={async () => {
                                    if (actions.takeBackVoteForSelectAnswerVoteDefinitionAction) {
                                      await actions.takeBackVoteForSelectAnswerVoteDefinitionAction!();
                                    }
                                  }}
                                  disabled={
                                    !actions.takeBackVoteForSelectAnswerVoteDefinitionAction ||
                                    !data.userHasVoteEntry ||
                                    editMode
                                  }
                                >
                                  <span>
                                    {t(
                                      'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.takeBackVote',
                                      { defaultValue: 'TakeBackVote' },
                                    )}
                                  </span>
                                </LoadingButton>
                              </Grid>

                              <Grid item xs={12} sm={12} md={4.0}>
                                <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponent
                                  disabled={true || !isFormUpdateable()}
                                  ownerData={data}
                                  editMode={editMode}
                                  storeDiff={storeDiff}
                                  validationError={validation.get('userVoteEntry')}
                                  actions={actions}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}

                    {!data.userHasVoteEntry && (
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_0SJy1ltuEe6Mx9dH3yj5gQ)/GroupVisualElement"
                          container
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}></Grid>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Card id="User/(esm/_0SJLwFtuEe6Mx9dH3yj5gQ)/GroupVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_0SJLwVtuEe6Mx9dH3yj5gQ)/GroupVisualElement"
                  container
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  spacing={2}
                >
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required={true}
                      name="title"
                      id="User/(esm/_0SJLwltuEe6Mx9dH3yj5gQ)/StringTypeTextInput"
                      autoFocus
                      label={
                        t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.title', {
                          defaultValue: 'Title',
                        }) as string
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
                          id: 'User/(esm/_0SJLw1tuEe6Mx9dH3yj5gQ)/TimestampTypeDateTimeInput',
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
                          const copy = new Map<keyof ServiceSelectAnswerVoteDefinition, string>(prevValidation);
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
                        t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.closeAt', {
                          defaultValue: 'CloseAt',
                        }) as string
                      }
                      value={serviceDateToUiDate(data.closeAt ?? null)}
                      readOnly={false || !isFormUpdateable()}
                      disabled={isLoading}
                      onChange={(newValue: Date) => {
                        storeDiff('closeAt', newValue);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={4.0}>
                    <TextField
                      required={true}
                      name="status"
                      id="User/(esm/_0SJLxFtuEe6Mx9dH3yj5gQ)/EnumerationTypeCombo"
                      label={
                        t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.status', {
                          defaultValue: 'Status',
                        }) as string
                      }
                      value={data.status || ''}
                      className={clsx({
                        'JUDO-viewMode': !editMode,
                        'JUDO-required': true,
                      })}
                      disabled={isLoading}
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

                  <Grid item xs={12} sm={12} md={4.0}>
                    <AssociationButton
                      id="User/(esm/_0SJLyltuEe6Mx9dH3yj5gQ)/TabularReferenceFieldButton"
                      variant={undefined}
                      editMode={editMode}
                      navigateAction={actions.issueOpenPageAction}
                      refreshCounter={refreshCounter}
                      fetchCall={actions.issuePreFetchAction}
                    >
                      {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.issue', {
                        defaultValue: 'Issue',
                      })}
                      <MdiIcon path="arrow-right" />
                    </AssociationButton>
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
                          id: 'User/(esm/_0SJL0ltuEe6Mx9dH3yj5gQ)/TimestampTypeDateTimeInput',
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
                          const copy = new Map<keyof ServiceSelectAnswerVoteDefinition, string>(prevValidation);
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
                        t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.created', {
                          defaultValue: 'Created',
                        }) as string
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
                    <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditOwnerComponent
                      disabled={false || !isFormUpdateable()}
                      ownerData={data}
                      editMode={editMode}
                      storeDiff={storeDiff}
                      validationError={validation.get('owner')}
                      actions={actions}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      required={true}
                      name="description"
                      id="User/(esm/_0SJL01tuEe6Mx9dH3yj5gQ)/StringTypeTextArea"
                      label={
                        t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.description', {
                          defaultValue: 'Description',
                        }) as string
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

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="_t6_EcY1KEe6sgdrBpAinBQ)/LabelWrapper"
                      container
                      direction="column"
                      alignItems="center"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                          <MdiIcon path="table_rows" sx={{ marginRight: 1 }} />
                          <Typography id="_t6_EcY1KEe6sgdrBpAinBQ)/Label" variant="h5" component="h1">
                            {t(
                              'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.voteSelections.Icon',
                              { defaultValue: 'VoteSelections' },
                            )}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable"
                          container
                          direction="column"
                          alignItems="stretch"
                          justifyContent="flex-start"
                        >
                          <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponent
                            uniqueId={'User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable'}
                            actions={actions}
                            ownerData={data}
                            editMode={editMode}
                            isFormUpdateable={isFormUpdateable}
                            validationError={validation.get('voteSelections')}
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

      <Grid item xs={12} sm={12}>
        <Grid
          id="_twlLQY1KEe6sgdrBpAinBQ)/LabelWrapper"
          container
          direction="column"
          alignItems="center"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Grid container direction="row" alignItems="center" justifyContent="flex-start">
              <Typography id="_twlLQY1KEe6sgdrBpAinBQ)/Label" variant="h5" component="h1">
                {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.entries.Label', {
                  defaultValue: 'Entries',
                })}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_0SJy2FtuEe6Mx9dH3yj5gQ)/GroupVisualElement"
              container
              direction="row"
              alignItems="stretch"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_0SJy2VtuEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponent
                    uniqueId={'User/(esm/_0SJy2VtuEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable'}
                    actions={actions}
                    ownerData={data}
                    editMode={editMode}
                    isFormUpdateable={isFormUpdateable}
                    validationError={validation.get('voteEntries')}
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
