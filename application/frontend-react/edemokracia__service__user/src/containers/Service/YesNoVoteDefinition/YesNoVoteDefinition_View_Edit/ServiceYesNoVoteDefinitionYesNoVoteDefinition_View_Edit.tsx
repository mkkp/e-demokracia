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
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceYesNoVoteDefinitionStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryQueryCustomizer,
  ServiceYesNoVoteEntryStored,
} from '~/services/data-api';
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponentActionDefinitions } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponent';
import { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponent } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponent';
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditOwnerComponentActionDefinitions } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditOwnerComponent';
import { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditOwnerComponent } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditOwnerComponent';
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponent';
import { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponent } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponent';

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionDefinitions
  extends ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditOwnerComponentActionDefinitions,
    ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions,
    ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponentActionDefinitions {
  issueOpenPageAction?: (target?: ServiceIssueStored) => Promise<void>;
  issuePreFetchAction?: (target?: ServiceIssueStored) => Promise<ServiceIssueStored>;
  activateForYesNoVoteDefinitionAction?: () => Promise<void>;
  addToFavoritesForYesNoVoteDefinitionAction?: () => Promise<void>;
  closeVoteForYesNoVoteDefinitionAction?: () => Promise<void>;
  deleteOrArchiveForYesNoVoteDefinitionAction?: () => Promise<void>;
  removeFromFavoritesForYesNoVoteDefinitionAction?: () => Promise<void>;
  voteAction?: () => Promise<void>;
  takeBackVoteForYesNoVoteDefinitionAction?: () => Promise<void>;
}

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditProps {
  refreshCounter: number;
  actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionDefinitions;

  data: ServiceYesNoVoteDefinitionStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceYesNoVoteDefinition, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceYesNoVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceYesNoVoteDefinition, string>>>;
}

// XMIID: User/(esm/_-ZmwoH4XEe2cB7_PsKXsHQ)/TransferObjectViewPageContainer
// Name: service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit
export default function ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_Edit(
  props: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditProps,
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
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_-ZmwoH4XEe2cB7_PsKXsHQ)/TransferObjectViewVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_uXiyMHsCEe6bP4FWw7fjQA)/GroupVisualElement"
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
                        id="User/(esm/_uXiyMnsCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                        loading={isLoading}
                        startIcon={<MdiIcon path="star-plus" />}
                        loadingPosition="start"
                        onClick={
                          actions.addToFavoritesForYesNoVoteDefinitionAction
                            ? async () => {
                                await actions.addToFavoritesForYesNoVoteDefinitionAction!();
                              }
                            : undefined
                        }
                        disabled={editMode}
                      >
                        <span>
                          {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.addToFavorites', {
                            defaultValue: 'Add to favorites',
                          })}
                        </span>
                      </LoadingButton>
                    </Grid>
                  )}
                  {!data.isFavorite && (
                    <Grid item>
                      <LoadingButton
                        id="User/(esm/_uXiyM3sCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                        loading={isLoading}
                        startIcon={<MdiIcon path="star-minus" />}
                        loadingPosition="start"
                        onClick={
                          actions.removeFromFavoritesForYesNoVoteDefinitionAction
                            ? async () => {
                                await actions.removeFromFavoritesForYesNoVoteDefinitionAction!();
                              }
                            : undefined
                        }
                        disabled={editMode}
                      >
                        <span>
                          {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.removeFromFavorites', {
                            defaultValue: 'Remove from favorites',
                          })}
                        </span>
                      </LoadingButton>
                    </Grid>
                  )}
                  {!data.isVoteNotOpen && (
                    <Grid item>
                      <LoadingButton
                        id="User/(esm/_uXiyNHsCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                        loading={isLoading}
                        startIcon={<MdiIcon path="lock-check" />}
                        loadingPosition="start"
                        onClick={
                          actions.closeVoteForYesNoVoteDefinitionAction
                            ? async () => {
                                await actions.closeVoteForYesNoVoteDefinitionAction!();
                              }
                            : undefined
                        }
                        disabled={editMode}
                      >
                        <span>
                          {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.closeVote', {
                            defaultValue: 'Close Vote',
                          })}
                        </span>
                      </LoadingButton>
                    </Grid>
                  )}
                  {!data.isVoteNotEditable && (
                    <Grid item>
                      <LoadingButton
                        id="User/(esm/_uXiyNXsCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                        loading={isLoading}
                        startIcon={<MdiIcon path="lock-open" />}
                        loadingPosition="start"
                        onClick={
                          actions.activateForYesNoVoteDefinitionAction
                            ? async () => {
                                await actions.activateForYesNoVoteDefinitionAction!();
                              }
                            : undefined
                        }
                        disabled={editMode}
                      >
                        <span>
                          {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.activate', {
                            defaultValue: 'Activate',
                          })}
                        </span>
                      </LoadingButton>
                    </Grid>
                  )}
                  {!data.isVoteNotDeletable && (
                    <Grid item>
                      <LoadingButton
                        id="User/(esm/_uXiyNnsCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                        loading={isLoading}
                        startIcon={<MdiIcon path="delete" />}
                        loadingPosition="start"
                        onClick={
                          actions.deleteOrArchiveForYesNoVoteDefinitionAction
                            ? async () => {
                                await actions.deleteOrArchiveForYesNoVoteDefinitionAction!();
                              }
                            : undefined
                        }
                        disabled={editMode}
                      >
                        <span>
                          {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.deleteOrArchive', {
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
            <Card id="(_9SN-cI2dEe6GJNWtqQaZ_w)/LabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <Typography id="_9SN-cI2dEe6GJNWtqQaZ_w)/Label" variant="h5" component="h1">
                        {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.userVoteEntryGroup.Label', {
                          defaultValue: 'My vote entry',
                        })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_dZi8oFscEe6Mx9dH3yj5gQ)/GroupVisualElement"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      {!data.userHasNoVoteEntry && (
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="User/(esm/_K-cscFouEe6_67aMO2jOsw)/GroupVisualElement"
                            container
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="User/(esm/_8uozYFsgEe6Mx9dH3yj5gQ)/GroupVisualElement"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12} md={4.0}>
                                  <LoadingButton
                                    id="User/(esm/_--H4sFouEe6_67aMO2jOsw)/OperationFormVisualElement"
                                    loading={isLoading}
                                    variant={undefined}
                                    startIcon={<MdiIcon path="delete" />}
                                    loadingPosition="start"
                                    onClick={async () => {
                                      if (actions.takeBackVoteForYesNoVoteDefinitionAction) {
                                        await actions.takeBackVoteForYesNoVoteDefinitionAction!();
                                      }
                                    }}
                                    disabled={
                                      !actions.takeBackVoteForYesNoVoteDefinitionAction ||
                                      !data.userHasVoteEntry ||
                                      editMode
                                    }
                                  >
                                    <span>
                                      {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.takeBackVote', {
                                        defaultValue: 'TakeBackVote',
                                      })}
                                    </span>
                                  </LoadingButton>
                                </Grid>

                                <Grid item xs={12} sm={12} md={4.0}>
                                  <ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponent
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
                            id="User/(esm/_Ud1NcFotEe6_67aMO2jOsw)/GroupVisualElement"
                            container
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <LoadingButton
                                id="User/(esm/_eMuv8FoSEe6_67aMO2jOsw)/OperationFormVisualElement"
                                loading={isLoading}
                                variant={undefined}
                                startIcon={<MdiIcon path="vote" />}
                                loadingPosition="start"
                                onClick={async () => {
                                  if (actions.voteAction) {
                                    await actions.voteAction!();
                                  }
                                }}
                                disabled={!actions.voteAction || !data.userHasNoVoteEntry || editMode}
                              >
                                <span>
                                  {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.vote', {
                                    defaultValue: 'Take a vote',
                                  })}
                                </span>
                              </LoadingButton>
                            </Grid>
                          </Grid>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Card id="User/(esm/_ULRSEFoSEe6_67aMO2jOsw)/GroupVisualElement">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_X8gKkFprEe6_67aMO2jOsw)/GroupVisualElement"
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
                          id="User/(esm/_ULRSEVoSEe6_67aMO2jOsw)/StringTypeTextInput"
                          autoFocus
                          label={
                            t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.title', {
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
                              id: 'User/(esm/_ULRSEloSEe6_67aMO2jOsw)/TimestampTypeDateTimeInput',
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
                              const copy = new Map<keyof ServiceYesNoVoteDefinition, string>(prevValidation);
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
                            t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.closeAt', {
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
                          id="User/(esm/_ULRSE1oSEe6_67aMO2jOsw)/EnumerationTypeCombo"
                          label={
                            t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.status', {
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
                          id="User/(esm/_C5_asFoWEe6_67aMO2jOsw)/TabularReferenceFieldButton"
                          variant={undefined}
                          editMode={editMode}
                          navigateAction={actions.issueOpenPageAction}
                          refreshCounter={refreshCounter}
                          fetchCall={actions.issuePreFetchAction}
                        >
                          {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.issue', {
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
                              id: 'User/(esm/_ULRSGVoSEe6_67aMO2jOsw)/TimestampTypeDateTimeInput',
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
                              const copy = new Map<keyof ServiceYesNoVoteDefinition, string>(prevValidation);
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
                            t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.created', {
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
                        <ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditOwnerComponent
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
                          id="User/(esm/_ULRSGloSEe6_67aMO2jOsw)/StringTypeTextArea"
                          label={
                            t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.description', {
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
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid
              id="(_9SXIYI2dEe6GJNWtqQaZ_w)/LabelWrapper"
              container
              direction="column"
              alignItems="center"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <Typography id="_9SXIYI2dEe6GJNWtqQaZ_w)/Label" variant="h5" component="h1">
                    {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.entries.Label', {
                      defaultValue: 'Entries',
                    })}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_a8b9sFovEe6_67aMO2jOsw)/GroupVisualElement"
                  container
                  direction="row"
                  alignItems="stretch"
                  justifyContent="flex-start"
                  spacing={2}
                >
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_jimiQFovEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable"
                      container
                      direction="column"
                      alignItems="stretch"
                      justifyContent="flex-start"
                    >
                      <ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponent
                        uniqueId={'User/(esm/_jimiQFovEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable'}
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
      </Grid>
    </Grid>
  );
}
