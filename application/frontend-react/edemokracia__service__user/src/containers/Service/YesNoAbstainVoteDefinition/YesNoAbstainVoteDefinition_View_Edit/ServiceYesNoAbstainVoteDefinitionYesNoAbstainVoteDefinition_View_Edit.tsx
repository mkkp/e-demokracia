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
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
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
import type { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditOwnerComponentActionDefinitions } from './components/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditOwnerComponent';
import { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditOwnerComponent } from './components/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditOwnerComponent';
import type { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions } from './components/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryComponent';
import { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryComponent } from './components/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryComponent';
import type { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntriesComponentActionDefinitions } from './components/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntriesComponent';
import { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntriesComponent } from './components/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntriesComponent';

export const SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_YES_NO_ABSTAIN_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_YES_NO_ABSTAIN_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditContainerHook = (
  data: ServiceYesNoAbstainVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceYesNoAbstainVoteDefinition, value: any) => void,
) => ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditActionDefinitions;

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditActionDefinitions
  extends ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditOwnerComponentActionDefinitions,
    ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions,
    ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntriesComponentActionDefinitions {
  getPageTitle?: (data: ServiceYesNoAbstainVoteDefinition) => string;
  issueOpenPageAction?: (target: ServiceIssueStored, isDraft?: boolean) => Promise<void>;
  issuePreFetchAction?: (target?: ServiceIssueStored) => Promise<JudoRestResponse<ServiceIssueStored>>;
  voteAction?: () => Promise<void>;
  takeBackVoteForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  activateForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  addToFavoritesForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  closeVoteForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  deleteOrArchiveForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  removeFromFavoritesForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  isCloseAtRequired?: (
    data: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isCloseAtDisabled?: (
    data: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isCreatedRequired?: (
    data: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isCreatedDisabled?: (
    data: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isDescriptionRequired?: (
    data: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isDescriptionDisabled?: (
    data: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isStatusRequired?: (
    data: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isStatusDisabled?: (
    data: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isTitleRequired?: (
    data: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isTitleDisabled?: (
    data: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isTakeVoteHidden?: (
    data: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isUserVoteHidden?: (
    data: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isActivateHidden?: (
    data: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isAddToFavoritesHidden?: (
    data: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isCloseVoteHidden?: (
    data: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isDeleteOrArchiveHidden?: (
    data: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isRemoveFromFavoritesHidden?: (
    data: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  getCloseAtValidationProps?: (data: ServiceYesNoAbstainVoteDefinition) => BaseDateValidationProps;
  getCreatedValidationProps?: (data: ServiceYesNoAbstainVoteDefinition) => BaseDateValidationProps;
  getMask?: () => string;
}

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditActionDefinitions;

  data: ServiceYesNoAbstainVoteDefinitionStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceYesNoAbstainVoteDefinition, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceYesNoAbstainVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceYesNoAbstainVoteDefinition, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_-awAIH4XEe2cB7_PsKXsHQ)/TransferObjectViewPageContainer
// Name: service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_View_Edit
export default function ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_Edit(
  props: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditProps,
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
    useTrackService<ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_YES_NO_ABSTAIN_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="YesNoAbstainVoteDefinition_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_-awAIH4XEe2cB7_PsKXsHQ)/TransferObjectViewVisualElement"
          data-name="YesNoAbstainVoteDefinition_View_Edit"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item data-name="userVoteEntryGroup" xs={12} sm={12}>
            <Card
              id="User/(esm/_7M-INFsnEe6Mx9dH3yj5gQ)/GroupVisualElement"
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
                        id="User/(esm/_7M-INFsnEe6Mx9dH3yj5gQ)/GroupVisualElement"
                        variant="h5"
                        component="h1"
                      >
                        {t(
                          'service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.userVoteEntryGroup',
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
                        id="User/(esm/_7M-INVsnEe6Mx9dH3yj5gQ)/GroupVisualElement"
                        data-name="userVote"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item data-name="VirtualForUserVote" xs={12} sm={12}>
                          <Grid
                            id="User/(esm/_7M-INlsnEe6Mx9dH3yj5gQ)/GroupVisualElement"
                            data-name="VirtualForUserVote"
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
                                {t(
                                  'service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.takeBackVote',
                                  { defaultValue: 'TakeBackVote' },
                                )}
                              </LoadingButton>
                            </Grid>

                            <Grid item xs={12} sm={12} md={4.0}>
                              <ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryComponent
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
                        id="User/(esm/_7M-IO1snEe6Mx9dH3yj5gQ)/GroupVisualElement"
                        data-name="TakeVote"
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
                            {t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.vote', {
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
              id="User/(esm/_7M-IIFsnEe6Mx9dH3yj5gQ)/GroupVisualElement"
              data-name="VoteEntryBase"
              sx={{ height: '100%' }}
            >
              <CardContent>
                <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
                  <Grid item data-name="virtual" xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_7M-IIVsnEe6Mx9dH3yj5gQ)/GroupVisualElement"
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
                          id="User/(esm/_7M-IIlsnEe6Mx9dH3yj5gQ)/StringTypeTextInput"
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
                              id: 'User/(esm/_7M-II1snEe6Mx9dH3yj5gQ)/TimestampTypeDateTimeInput',
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
                          id="User/(esm/_7M-IKlsnEe6Mx9dH3yj5gQ)/TabularReferenceFieldButton"
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
                              id: 'User/(esm/_7M-IMlsnEe6Mx9dH3yj5gQ)/TimestampTypeDateTimeInput',
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
                        <ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditOwnerComponent
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
              id="User/(esm/_7M-IPVsnEe6Mx9dH3yj5gQ)/GroupVisualElement"
              data-name="entries"
              container
              direction="row"
              alignItems="flex-start"
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
