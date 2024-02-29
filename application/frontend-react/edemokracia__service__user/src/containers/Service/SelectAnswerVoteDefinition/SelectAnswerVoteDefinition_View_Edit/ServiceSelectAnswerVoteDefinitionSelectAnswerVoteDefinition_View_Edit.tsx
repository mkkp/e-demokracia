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
import type { BaseDateValidationProps } from '~/utilities';
import { isErrorOperationFault, serviceDateToUiDate, uiDateToServiceDate, useErrorHandler } from '~/utilities';

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
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditOwnerComponentActionDefinitions } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditOwnerComponent';
import { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditOwnerComponent } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditOwnerComponent';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponent';
import { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponent } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponent';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponentActionDefinitions } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponent';
import { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponent } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponent';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponentActionDefinitions } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponent';
import { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponent } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponent';

export const SERVICE_SELECT_ANSWER_VOTE_DEFINITION_SELECT_ANSWER_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_SELECT_ANSWER_VOTE_DEFINITION_SELECT_ANSWER_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditContainerHook = (
  data: ServiceSelectAnswerVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteDefinition, value: any) => void,
) => ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionDefinitions;

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionDefinitions
  extends ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditOwnerComponentActionDefinitions,
    ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions,
    ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponentActionDefinitions,
    ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponentActionDefinitions {
  getPageTitle?: (data: ServiceSelectAnswerVoteDefinition) => string;
  issueOpenPageAction?: (target: ServiceIssueStored, isDraft?: boolean) => Promise<void>;
  issuePreFetchAction?: (target?: ServiceIssueStored) => Promise<JudoRestResponse<ServiceIssueStored>>;
  voteAction?: () => Promise<void>;
  takeBackVoteForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
  activateForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
  addToFavoritesForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
  closeVoteForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
  deleteOrArchiveForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
  removeFromFavoritesForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
  isCloseAtRequired?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isCloseAtDisabled?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isCreatedRequired?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isCreatedDisabled?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isDescriptionRequired?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isDescriptionDisabled?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isStatusRequired?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isStatusDisabled?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isTitleRequired?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isTitleDisabled?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isUserVoteEntryGroupHidden?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isTakeVoteHidden?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isUserVoteHidden?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isActivateHidden?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isAddToFavoritesHidden?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isCloseVoteHidden?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isDeleteOrArchiveHidden?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isRemoveFromFavoritesHidden?: (
    data: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  getCloseAtValidationProps?: (data: ServiceSelectAnswerVoteDefinition) => BaseDateValidationProps;
  getCreatedValidationProps?: (data: ServiceSelectAnswerVoteDefinition) => BaseDateValidationProps;
  getMask?: () => string;
}

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionDefinitions;

  data: ServiceSelectAnswerVoteDefinitionStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteDefinition, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceSelectAnswerVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceSelectAnswerVoteDefinition, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_-cGrAH4XEe2cB7_PsKXsHQ)/TransferObjectViewPageContainer
// Name: service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit
export default function ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_Edit(
  props: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditProps,
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
    useTrackService<ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_SELECT_ANSWER_VOTE_DEFINITION_SELECT_ANSWER_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="SelectAnswerVoteDefinition_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_-cGrAH4XEe2cB7_PsKXsHQ)/TransferObjectViewVisualElement"
          data-name="SelectAnswerVoteDefinition_View_Edit"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          {(actions?.isUserVoteEntryGroupHidden
            ? !actions?.isUserVoteEntryGroupHidden(data, editMode)
            : !data.isVoteNotOpen) && (
            <Grid item data-name="userVoteEntryGroup" xs={12} sm={12}>
              <Card
                id="User/(esm/_0SJy0FtuEe6Mx9dH3yj5gQ)/GroupVisualElement"
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
                          id="User/(esm/_0SJy0FtuEe6Mx9dH3yj5gQ)/GroupVisualElement"
                          variant="h5"
                          component="h1"
                        >
                          {t(
                            'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.userVoteEntryGroup',
                            { defaultValue: 'My vote entry' },
                          )}
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
                          id="User/(esm/_0SJy0VtuEe6Mx9dH3yj5gQ)/GroupVisualElement"
                          data-name="userVote"
                          container
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item data-name="VirtualForUserVote" xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_0SJy0ltuEe6Mx9dH3yj5gQ)/GroupVisualElement"
                              data-name="VirtualForUserVote"
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
                                  {t(
                                    'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.takeBackVote',
                                    { defaultValue: 'TakeBackVote' },
                                  )}
                                </LoadingButton>
                              </Grid>

                              <Grid item xs={12} sm={12} md={4.0}>
                                <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponent
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
                          id="User/(esm/_0SJy1ltuEe6Mx9dH3yj5gQ)/GroupVisualElement"
                          data-name="TakeVote"
                          container
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <LoadingButton
                              id="User/(esm/_0SJy11tuEe6Mx9dH3yj5gQ)/OperationFormVisualElement"
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
                              {t('service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.vote', {
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
          )}

          <Grid item data-name="VoteEntryBase" xs={12} sm={12}>
            <Card
              id="User/(esm/_0SJLwFtuEe6Mx9dH3yj5gQ)/GroupVisualElement"
              data-name="VoteEntryBase"
              sx={{ height: '100%' }}
            >
              <CardContent>
                <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                  <Grid item data-name="virtual" xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_0SJLwVtuEe6Mx9dH3yj5gQ)/GroupVisualElement"
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
                          id="User/(esm/_0SJLwltuEe6Mx9dH3yj5gQ)/StringTypeTextInput"
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
                              id: 'User/(esm/_0SJLw1tuEe6Mx9dH3yj5gQ)/TimestampTypeDateTimeInput',
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
                          id="User/(esm/_0SJLyltuEe6Mx9dH3yj5gQ)/TabularReferenceFieldButton"
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
                              id: 'User/(esm/_0SJL0ltuEe6Mx9dH3yj5gQ)/TimestampTypeDateTimeInput',
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
                        <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditOwnerComponent
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
                            isOwnerLoading={isLoading}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item data-name="entries" xs={12} sm={12}>
            <Grid
              id="User/(esm/_0SJy2FtuEe6Mx9dH3yj5gQ)/GroupVisualElement"
              data-name="entries"
              container
              direction="row"
              alignItems="flex-start"
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
