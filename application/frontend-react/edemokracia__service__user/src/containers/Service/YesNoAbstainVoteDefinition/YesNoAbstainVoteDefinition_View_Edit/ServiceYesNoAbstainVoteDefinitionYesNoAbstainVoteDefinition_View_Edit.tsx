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
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceYesNoAbstainVoteEntry,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceYesNoAbstainVoteEntryStored,
} from '~/services/data-api';
import type { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntriesComponentActionDefinitions } from './components/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntriesComponent';
import { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntriesComponent } from './components/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntriesComponent';
import type { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditOwnerComponentActionDefinitions } from './components/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditOwnerComponent';
import { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditOwnerComponent } from './components/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditOwnerComponent';
import type { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions } from './components/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryComponent';
import { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryComponent } from './components/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryComponent';

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditActionDefinitions
  extends ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditOwnerComponentActionDefinitions,
    ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions,
    ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntriesComponentActionDefinitions {
  issueOpenPageAction?: (target?: ServiceIssueStored) => Promise<void>;
  issuePreFetchAction?: (target?: ServiceIssueStored) => Promise<ServiceIssueStored>;
  activateForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  addToFavoritesForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  closeVoteForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  deleteOrArchiveForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  removeFromFavoritesForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  voteAction?: () => Promise<void>;
  takeBackVoteForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
}

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditProps {
  refreshCounter: number;
  actions: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditActionDefinitions;

  data: ServiceYesNoAbstainVoteDefinitionStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceYesNoAbstainVoteDefinition, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceYesNoAbstainVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceYesNoAbstainVoteDefinition, string>>>;
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_-awAIH4XEe2cB7_PsKXsHQ)/TransferObjectViewPageContainer
// Name: service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_View_Edit
export default function ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_Edit(
  props: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditProps,
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
          id="User/(esm/_-awAIH4XEe2cB7_PsKXsHQ)/TransferObjectViewVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_9jf_AHsCEe6bP4FWw7fjQA)/GroupVisualElement"
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
                        id="User/(esm/_9jf_AnsCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                        loading={isLoading}
                        startIcon={<MdiIcon path="star-plus" />}
                        loadingPosition="start"
                        onClick={
                          actions.addToFavoritesForYesNoAbstainVoteDefinitionAction
                            ? async () => {
                                await actions.addToFavoritesForYesNoAbstainVoteDefinitionAction!();
                              }
                            : undefined
                        }
                        disabled={editMode}
                      >
                        <span>
                          {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.addToFavorites', {
                            defaultValue: 'Add to favorites',
                          })}
                        </span>
                      </LoadingButton>
                    </Grid>
                  )}
                  {!data.isFavorite && (
                    <Grid item>
                      <LoadingButton
                        id="User/(esm/_9jf_A3sCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                        loading={isLoading}
                        startIcon={<MdiIcon path="star-minus" />}
                        loadingPosition="start"
                        onClick={
                          actions.removeFromFavoritesForYesNoAbstainVoteDefinitionAction
                            ? async () => {
                                await actions.removeFromFavoritesForYesNoAbstainVoteDefinitionAction!();
                              }
                            : undefined
                        }
                        disabled={editMode}
                      >
                        <span>
                          {t(
                            'service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.removeFromFavorites',
                            { defaultValue: 'Remove from favorites' },
                          )}
                        </span>
                      </LoadingButton>
                    </Grid>
                  )}
                  {!data.isVoteNotOpen && (
                    <Grid item>
                      <LoadingButton
                        id="User/(esm/_9jf_BHsCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                        loading={isLoading}
                        startIcon={<MdiIcon path="lock-check" />}
                        loadingPosition="start"
                        onClick={
                          actions.closeVoteForYesNoAbstainVoteDefinitionAction
                            ? async () => {
                                await actions.closeVoteForYesNoAbstainVoteDefinitionAction!();
                              }
                            : undefined
                        }
                        disabled={editMode}
                      >
                        <span>
                          {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.closeVote', {
                            defaultValue: 'Close Vote',
                          })}
                        </span>
                      </LoadingButton>
                    </Grid>
                  )}
                  {!data.isVoteNotEditable && (
                    <Grid item>
                      <LoadingButton
                        id="User/(esm/_9jf_BXsCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                        loading={isLoading}
                        startIcon={<MdiIcon path="lock-open" />}
                        loadingPosition="start"
                        onClick={
                          actions.activateForYesNoAbstainVoteDefinitionAction
                            ? async () => {
                                await actions.activateForYesNoAbstainVoteDefinitionAction!();
                              }
                            : undefined
                        }
                        disabled={editMode}
                      >
                        <span>
                          {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.activate', {
                            defaultValue: 'Activate',
                          })}
                        </span>
                      </LoadingButton>
                    </Grid>
                  )}
                  {!data.isVoteNotDeletable && (
                    <Grid item>
                      <LoadingButton
                        id="User/(esm/_9jf_BnsCEe6bP4FWw7fjQA)/OperationFormVisualElement"
                        loading={isLoading}
                        startIcon={<MdiIcon path="delete" />}
                        loadingPosition="start"
                        onClick={
                          actions.deleteOrArchiveForYesNoAbstainVoteDefinitionAction
                            ? async () => {
                                await actions.deleteOrArchiveForYesNoAbstainVoteDefinitionAction!();
                              }
                            : undefined
                        }
                        disabled={editMode}
                      >
                        <span>
                          {t(
                            'service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.deleteOrArchive',
                            { defaultValue: 'Delete' },
                          )}
                        </span>
                      </LoadingButton>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Card id="(User/(esm/_7M-INFsnEe6Mx9dH3yj5gQ)/WrapAndLabelVisualElement)/LabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <Typography
                        id="User/(esm/_7M-INFsnEe6Mx9dH3yj5gQ)/WrapAndLabelVisualElement)/Label"
                        variant="h5"
                        component="h1"
                      >
                        {t(
                          'service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.userVoteEntryGroup.Label',
                          { defaultValue: 'My vote entry' },
                        )}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_7M-INFsnEe6Mx9dH3yj5gQ)/GroupVisualElement"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      {!data.userHasNoVoteEntry && (
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="User/(esm/_7M-INVsnEe6Mx9dH3yj5gQ)/GroupVisualElement"
                            container
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="User/(esm/_7M-INlsnEe6Mx9dH3yj5gQ)/GroupVisualElement"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12} md={4.0}>
                                  <LoadingButton
                                    id="User/(esm/_7M-IN1snEe6Mx9dH3yj5gQ)/OperationFormVisualElement"
                                    loading={isLoading}
                                    variant={undefined}
                                    startIcon={<MdiIcon path="delete" />}
                                    loadingPosition="start"
                                    onClick={async () => {
                                      if (actions.takeBackVoteForYesNoAbstainVoteDefinitionAction) {
                                        await actions.takeBackVoteForYesNoAbstainVoteDefinitionAction!();
                                      }
                                    }}
                                    disabled={
                                      !actions.takeBackVoteForYesNoAbstainVoteDefinitionAction ||
                                      !data.userHasVoteEntry ||
                                      editMode
                                    }
                                  >
                                    <span>
                                      {t(
                                        'service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.takeBackVote',
                                        { defaultValue: 'TakeBackVote' },
                                      )}
                                    </span>
                                  </LoadingButton>
                                </Grid>

                                <Grid item xs={12} sm={12} md={4.0}>
                                  <ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryComponent
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
                            id="User/(esm/_7M-IO1snEe6Mx9dH3yj5gQ)/GroupVisualElement"
                            container
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <LoadingButton
                                id="User/(esm/_7M-IPFsnEe6Mx9dH3yj5gQ)/OperationFormVisualElement"
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
                                  {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.vote', {
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
            <Card id="User/(esm/_7M-IIFsnEe6Mx9dH3yj5gQ)/GroupVisualElement">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_7M-IIVsnEe6Mx9dH3yj5gQ)/GroupVisualElement"
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
                          id="User/(esm/_7M-IIlsnEe6Mx9dH3yj5gQ)/StringTypeTextInput"
                          autoFocus
                          label={
                            t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.title', {
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
                              id: 'User/(esm/_7M-II1snEe6Mx9dH3yj5gQ)/TimestampTypeDateTimeInput',
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
                              const copy = new Map<keyof ServiceYesNoAbstainVoteDefinition, string>(prevValidation);
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
                            t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.closeAt', {
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
                          id="User/(esm/_7M-IJFsnEe6Mx9dH3yj5gQ)/EnumerationTypeCombo"
                          label={
                            t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.status', {
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
                          id="User/(esm/_7M-IKlsnEe6Mx9dH3yj5gQ)/TabularReferenceFieldButton"
                          variant={undefined}
                          editMode={editMode}
                          navigateAction={actions.issueOpenPageAction}
                          refreshCounter={refreshCounter}
                          fetchCall={actions.issuePreFetchAction}
                        >
                          {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.issue', {
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
                              id: 'User/(esm/_7M-IMlsnEe6Mx9dH3yj5gQ)/TimestampTypeDateTimeInput',
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
                              const copy = new Map<keyof ServiceYesNoAbstainVoteDefinition, string>(prevValidation);
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
                            t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.created', {
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
                        <ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditOwnerComponent
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
                          id="User/(esm/_7M-IM1snEe6Mx9dH3yj5gQ)/StringTypeTextArea"
                          label={
                            t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.description', {
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
              id="(User/(esm/_7M-IPVsnEe6Mx9dH3yj5gQ)/WrapAndLabelVisualElement)/LabelWrapper"
              container
              direction="column"
              alignItems="center"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <Typography
                    id="User/(esm/_7M-IPVsnEe6Mx9dH3yj5gQ)/WrapAndLabelVisualElement)/Label"
                    variant="h5"
                    component="h1"
                  >
                    {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.entries.Label', {
                      defaultValue: 'Entries',
                    })}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_7M-IPVsnEe6Mx9dH3yj5gQ)/GroupVisualElement"
                  container
                  direction="row"
                  alignItems="stretch"
                  justifyContent="flex-start"
                  spacing={2}
                >
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_7M-IPlsnEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable"
                      container
                      direction="column"
                      alignItems="stretch"
                      justifyContent="flex-start"
                    >
                      <ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntriesComponent
                        uniqueId={'User/(esm/_7M-IPlsnEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable'}
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
