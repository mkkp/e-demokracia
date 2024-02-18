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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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
import { isErrorOperationFault, serviceDateToUiDate, uiDateToServiceDate, useErrorHandler } from '~/utilities';

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
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditOwnerComponentActionDefinitions } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditOwnerComponent';
import { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditOwnerComponent } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditOwnerComponent';
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponent';
import { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponent } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponent';
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponentActionDefinitions } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponent';
import { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponent } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponent';

export const SERVICE_YES_NO_VOTE_DEFINITION_YES_NO_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_YES_NO_VOTE_DEFINITION_YES_NO_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditContainerHook = (
  data: ServiceYesNoVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceYesNoVoteDefinition, value: any) => void,
) => ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionDefinitions;

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionDefinitions
  extends ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditOwnerComponentActionDefinitions,
    ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions,
    ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponentActionDefinitions {
  getPageTitle?: (data: ServiceYesNoVoteDefinition) => string;
  issueOpenPageAction?: (target: ServiceIssueStored, isDraft?: boolean) => Promise<void>;
  issuePreFetchAction?: (target?: ServiceIssueStored) => Promise<JudoRestResponse<ServiceIssueStored>>;
  voteAction?: () => Promise<void>;
  takeBackVoteForYesNoVoteDefinitionAction?: () => Promise<void>;
  activateForYesNoVoteDefinitionAction?: () => Promise<void>;
  addToFavoritesForYesNoVoteDefinitionAction?: () => Promise<void>;
  closeVoteForYesNoVoteDefinitionAction?: () => Promise<void>;
  deleteOrArchiveForYesNoVoteDefinitionAction?: () => Promise<void>;
  removeFromFavoritesForYesNoVoteDefinitionAction?: () => Promise<void>;
  isCloseAtRequired?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isCloseAtDisabled?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isCreatedRequired?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isCreatedDisabled?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isDescriptionRequired?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isDescriptionDisabled?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isStatusRequired?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isStatusDisabled?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isTitleRequired?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isTitleDisabled?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isTakeVoteHidden?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isUserVoteHidden?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isActivateHidden?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isAddToFavoritesHidden?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isCloseVoteHidden?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isDeleteOrArchiveHidden?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isRemoveFromFavoritesHidden?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  getMask?: () => string;
}

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionDefinitions;

  data: ServiceYesNoVoteDefinitionStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceYesNoVoteDefinition, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceYesNoVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceYesNoVoteDefinition, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_-ZmwoH4XEe2cB7_PsKXsHQ)/TransferObjectViewPageContainer
// Name: service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit
export default function ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_Edit(
  props: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditProps,
) {
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
  const { service: customContainerHook } =
    useTrackService<ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_YES_NO_VOTE_DEFINITION_YES_NO_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="YesNoVoteDefinition_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_-ZmwoH4XEe2cB7_PsKXsHQ)/TransferObjectViewVisualElement"
          data-name="YesNoVoteDefinition_View_Edit"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item data-name="userVoteEntryGroup" xs={12} sm={12}>
            <Card
              id="User/(esm/_dZi8oFscEe6Mx9dH3yj5gQ)/GroupVisualElement"
              data-name="userVoteEntryGroup"
              sx={{ height: '100%' }}
            >
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
                      <Typography
                        id="User/(esm/_dZi8oFscEe6Mx9dH3yj5gQ)/GroupVisualElement"
                        variant="h5"
                        component="h1"
                      >
                        {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.userVoteEntryGroup', {
                          defaultValue: 'My vote entry',
                        })}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                  {(actions?.isUserVoteHidden
                    ? !actions?.isUserVoteHidden(data, editMode)
                    : !data.userHasNoVoteEntry) && (
                    <Grid item data-name="userVote" xs={12} sm={12}>
                      <Grid
                        id="User/(esm/_K-cscFouEe6_67aMO2jOsw)/GroupVisualElement"
                        data-name="userVote"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item data-name="VirtualForUserVote" xs={12} sm={12}>
                          <Grid
                            id="User/(esm/_8uozYFsgEe6Mx9dH3yj5gQ)/GroupVisualElement"
                            data-name="VirtualForUserVote"
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
                                {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.takeBackVote', {
                                  defaultValue: 'TakeBackVote',
                                })}
                              </LoadingButton>
                            </Grid>

                            <Grid item xs={12} sm={12} md={4.0}>
                              <ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponent
                                disabled={false}
                                readOnly={true || !isFormUpdateable()}
                                ownerData={data}
                                editMode={editMode}
                                isLoading={isLoading}
                                isDraft={isDraft}
                                storeDiff={storeDiff}
                                validationError={validation.get('userVoteEntry')}
                                actions={actions}
                                submit={submit}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}

                  {(actions?.isTakeVoteHidden
                    ? !actions?.isTakeVoteHidden(data, editMode)
                    : !data.userHasVoteEntry) && (
                    <Grid item data-name="TakeVote" xs={12} sm={12}>
                      <Grid
                        id="User/(esm/_Ud1NcFotEe6_67aMO2jOsw)/GroupVisualElement"
                        data-name="TakeVote"
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
                            {t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.vote', {
                              defaultValue: 'Take a vote',
                            })}
                          </LoadingButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item data-name="VoteEntryBase" xs={12} sm={12}>
            <Card
              id="User/(esm/_ULRSEFoSEe6_67aMO2jOsw)/GroupVisualElement"
              data-name="VoteEntryBase"
              sx={{ height: '100%' }}
            >
              <CardContent>
                <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                  <Grid item data-name="virtual" xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_X8gKkFprEe6_67aMO2jOsw)/GroupVisualElement"
                      data-name="virtual"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <TextField
                          required={actions?.isTitleRequired ? actions.isTitleRequired(data, editMode) : true}
                          name="title"
                          id="User/(esm/_ULRSEVoSEe6_67aMO2jOsw)/StringTypeTextInput"
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
                          disabled={
                            actions?.isCloseAtDisabled
                              ? actions.isCloseAtDisabled(data, editMode, isLoading)
                              : isLoading
                          }
                          onChange={(newValue: Date) => {
                            storeDiff('closeAt', newValue);
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={4.0}>
                        <TextField
                          required={actions?.isStatusRequired ? actions.isStatusRequired(data, editMode) : true}
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
                          disabled={
                            actions?.isStatusDisabled ? actions.isStatusDisabled(data, editMode, isLoading) : isLoading
                          }
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
                          {t('judo.action.open-page', { defaultValue: 'Issue' })}
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
                              required: actions?.isCreatedRequired ? actions.isCreatedRequired(data, editMode) : true,
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
                          disabled={
                            actions?.isCreatedDisabled
                              ? actions.isCreatedDisabled(data, editMode, isLoading)
                              : isLoading
                          }
                          onChange={(newValue: Date) => {
                            storeDiff('created', newValue);
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={4.0}>
                        <ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditOwnerComponent
                          disabled={false}
                          readOnly={false || !isFormUpdateable()}
                          ownerData={data}
                          editMode={editMode}
                          isLoading={isLoading}
                          isDraft={isDraft}
                          storeDiff={storeDiff}
                          validationError={validation.get('owner')}
                          actions={actions}
                          submit={submit}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <TextField
                          required={
                            actions?.isDescriptionRequired ? actions.isDescriptionRequired(data, editMode) : true
                          }
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
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item data-name="entries" xs={12} sm={12}>
            <Grid
              id="User/(esm/_a8b9sFovEe6_67aMO2jOsw)/GroupVisualElement"
              data-name="entries"
              container
              direction="row"
              alignItems="flex-start"
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
                    isOwnerLoading={isLoading}
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
