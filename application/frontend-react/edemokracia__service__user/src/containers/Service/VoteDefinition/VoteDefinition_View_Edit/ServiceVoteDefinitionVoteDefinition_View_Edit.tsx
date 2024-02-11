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
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, ModeledTabs, useJudoNavigation } from '~/components';
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
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/services/data-api';

export const SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type ServiceVoteDefinitionVoteDefinition_View_EditContainerHook = (
  data: ServiceVoteDefinitionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceVoteDefinition, value: any) => void,
) => ServiceVoteDefinitionVoteDefinition_View_EditActionDefinitions;

export interface ServiceVoteDefinitionVoteDefinition_View_EditActionDefinitions {
  getPageTitle?: (data: ServiceVoteDefinition) => string;
  issueOpenPageAction?: (target: ServiceIssueStored, isDraft?: boolean) => Promise<void>;
  issuePreFetchAction?: (target?: ServiceIssueStored) => Promise<JudoRestResponse<ServiceIssueStored>>;
  voteRatingAction?: () => Promise<void>;
  voteSelectAnswerAction?: () => Promise<void>;
  voteYesNoAbstainAction?: () => Promise<void>;
  voteYesNoAction?: () => Promise<void>;
  isCloseAtRequired?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isCloseAtDisabled?: (
    data: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isCreatedRequired?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isCreatedDisabled?: (
    data: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isDescriptionRequired?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isDescriptionDisabled?: (
    data: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isStatusRequired?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isStatusDisabled?: (
    data: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isTitleRequired?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isTitleDisabled?: (
    data: ServiceVoteDefinition | ServiceVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isRatingvoteHidden?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isVoteRatingHidden?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isSelectanswervoteHidden?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isVoteSelectAnswerHidden?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isYesnoabstainvoteHidden?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isVoteYesNoAbstainHidden?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isYesnovoteHidden?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  isVoteYesNoHidden?: (data: ServiceVoteDefinition | ServiceVoteDefinitionStored, editMode?: boolean) => boolean;
  getMask?: () => string;
}

export interface ServiceVoteDefinitionVoteDefinition_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceVoteDefinitionVoteDefinition_View_EditActionDefinitions;

  data: ServiceVoteDefinitionStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceVoteDefinition, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceVoteDefinition, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_-gFzIH4XEe2cB7_PsKXsHQ)/TransferObjectViewPageContainer
// Name: service::VoteDefinition::VoteDefinition_View_Edit
export default function ServiceVoteDefinitionVoteDefinition_View_Edit(
  props: ServiceVoteDefinitionVoteDefinition_View_EditProps,
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
  const { service: customContainerHook } = useTrackService<ServiceVoteDefinitionVoteDefinition_View_EditContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceVoteDefinitionVoteDefinition_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="VoteDefinition_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_-gFzIH4XEe2cB7_PsKXsHQ)/TransferObjectViewVisualElement"
          data-name="VoteDefinition_View_Edit"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item data-name="group" xs={12} sm={12}>
            <Card id="User/(esm/_3IYooI4kEe29qs15q2b6yw)/GroupVisualElement" data-name="group">
              <CardContent>
                <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required={actions?.isTitleRequired ? actions.isTitleRequired(data, editMode) : true}
                      name="title"
                      id="User/(esm/_T5STEI4jEe29qs15q2b6yw)/StringTypeTextInput"
                      label={
                        t('service.VoteDefinition.VoteDefinition_View_Edit.title', { defaultValue: 'Title' }) as string
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
                          id: 'User/(esm/_T5260I4jEe29qs15q2b6yw)/TimestampTypeDateTimeInput',
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
                          const copy = new Map<keyof ServiceVoteDefinition, string>(prevValidation);
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
                        t('service.VoteDefinition.VoteDefinition_View_Edit.closeAt', {
                          defaultValue: 'CloseAt',
                        }) as string
                      }
                      value={serviceDateToUiDate(data.closeAt ?? null)}
                      readOnly={false || !isFormUpdateable()}
                      disabled={
                        actions?.isCloseAtDisabled ? actions.isCloseAtDisabled(data, editMode, isLoading) : isLoading
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
                      id="User/(esm/_T5rUoI4jEe29qs15q2b6yw)/EnumerationTypeCombo"
                      label={
                        t('service.VoteDefinition.VoteDefinition_View_Edit.status', {
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

                  <Grid item xs={12} sm={12} md={3.0}>
                    <AssociationButton
                      id="User/(esm/_mQ0lYFoWEe6_67aMO2jOsw)/TabularReferenceFieldButton"
                      variant={undefined}
                      editMode={editMode}
                      navigateAction={actions.issueOpenPageAction}
                      refreshCounter={refreshCounter}
                      fetchCall={actions.issuePreFetchAction}
                    >
                      {t('service.VoteDefinition.VoteDefinition_View_Edit.issue', { defaultValue: 'Issue' })}
                      <MdiIcon path="arrow-right" />
                    </AssociationButton>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4.0}>
                    <DateTimePicker
                      ampm={false}
                      ampmInClock={false}
                      className={clsx({
                        'JUDO-viewMode': !editMode,
                        'JUDO-required': false,
                      })}
                      slotProps={{
                        textField: {
                          id: 'User/(esm/_T5a18I4jEe29qs15q2b6yw)/TimestampTypeDateTimeInput',
                          required: actions?.isCreatedRequired ? actions.isCreatedRequired(data, editMode) : false,
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
                          const copy = new Map<keyof ServiceVoteDefinition, string>(prevValidation);
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
                        t('service.VoteDefinition.VoteDefinition_View_Edit.created', {
                          defaultValue: 'Created',
                        }) as string
                      }
                      value={serviceDateToUiDate(data.created ?? null)}
                      readOnly={true || !isFormUpdateable()}
                      disabled={
                        actions?.isCreatedDisabled ? actions.isCreatedDisabled(data, editMode, isLoading) : isLoading
                      }
                      onChange={(newValue: Date) => {
                        storeDiff('created', newValue);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      required={actions?.isDescriptionRequired ? actions.isDescriptionRequired(data, editMode) : true}
                      name="description"
                      id="User/(esm/_T5jY0I4jEe29qs15q2b6yw)/StringTypeTextArea"
                      label={
                        t('service.VoteDefinition.VoteDefinition_View_Edit.description', {
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
              </CardContent>
            </Card>
          </Grid>

          <Grid container item xs={12} sm={12}>
            <ModeledTabs
              id="User/(esm/_i6xVQI4jEe29qs15q2b6yw)/TabBarVisualElement"
              ownerData={data}
              validation={validation}
              orientation="horizontal"
              childTabs={[
                {
                  id: 'User/(esm/_kxgNYI4jEe29qs15q2b6yw)/GroupTab',
                  name: 'service.VoteDefinition.VoteDefinition_View_Edit.yesnovote',
                  label: t('service.VoteDefinition.VoteDefinition_View_Edit.yesnovote', {
                    defaultValue: 'Yes / No vote',
                  }) as string,
                  disabled: !data.isYesNoType || isLoading,
                  hidden: actions?.isYesnovoteHidden ? actions?.isYesnovoteHidden(data, editMode) : data.isNotYesNoType,
                  nestedDataKeys: [],
                },
                {
                  id: 'User/(esm/_z_MfkI4jEe29qs15q2b6yw)/GroupTab',
                  name: 'service.VoteDefinition.VoteDefinition_View_Edit.yesnoabstainvote',
                  label: t('service.VoteDefinition.VoteDefinition_View_Edit.yesnoabstainvote', {
                    defaultValue: 'Yes / No / Abstain vote',
                  }) as string,
                  disabled: !data.isYesNoAbstainType || isLoading,
                  hidden: actions?.isYesnoabstainvoteHidden
                    ? actions?.isYesnoabstainvoteHidden(data, editMode)
                    : data.isNotYesNoAbstainType,
                  nestedDataKeys: [],
                },
                {
                  id: 'User/(esm/_1tyvYI4jEe29qs15q2b6yw)/GroupTab',
                  name: 'service.VoteDefinition.VoteDefinition_View_Edit.selectanswervote',
                  label: t('service.VoteDefinition.VoteDefinition_View_Edit.selectanswervote', {
                    defaultValue: 'Select answer vote',
                  }) as string,
                  disabled: !data.isSelectAnswerType || isLoading,
                  hidden: actions?.isSelectanswervoteHidden
                    ? actions?.isSelectanswervoteHidden(data, editMode)
                    : data.isNotSelectAnswerType,
                  nestedDataKeys: [],
                },
                {
                  id: 'User/(esm/_31NH0I4jEe29qs15q2b6yw)/GroupTab',
                  name: 'service.VoteDefinition.VoteDefinition_View_Edit.ratingvote',
                  label: t('service.VoteDefinition.VoteDefinition_View_Edit.ratingvote', {
                    defaultValue: 'Rating vote',
                  }) as string,
                  disabled: !data.isRatingType || isLoading,
                  hidden: actions?.isRatingvoteHidden
                    ? actions?.isRatingvoteHidden(data, editMode)
                    : data.isNotRatingType,
                  nestedDataKeys: [],
                },
              ]}
            >
              {(actions?.isYesnovoteHidden ? !actions?.isYesnovoteHidden(data, editMode) : !data.isNotYesNoType) && (
                <Grid item data-name="yesnovote" xs={12} sm={12}>
                  <Grid
                    id="User/(esm/_kxgNYI4jEe29qs15q2b6yw)/GroupVisualElement"
                    data-name="yesnovote"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    {(actions?.isVoteYesNoHidden
                      ? !actions?.isVoteYesNoHidden(data, editMode)
                      : !data.isNotYesNoType) && (
                      <Grid item xs={12} sm={12} md={4.0}>
                        <LoadingButton
                          id="User/(esm/_T6ChAI4jEe29qs15q2b6yw)/OperationFormVisualElement"
                          loading={isLoading}
                          variant={undefined}
                          startIcon={<MdiIcon path="vote" />}
                          loadingPosition="start"
                          onClick={async () => {
                            if (actions.voteYesNoAction) {
                              await actions.voteYesNoAction!();
                            }
                          }}
                          disabled={!actions.voteYesNoAction || !data.isYesNoType || editMode}
                        >
                          {t('service.VoteDefinition.VoteDefinition_View_Edit.voteYesNo', {
                            defaultValue: 'Take a vote',
                          })}
                        </LoadingButton>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              )}

              {(actions?.isYesnoabstainvoteHidden
                ? !actions?.isYesnoabstainvoteHidden(data, editMode)
                : !data.isNotYesNoAbstainType) && (
                <Grid item data-name="yesnoabstainvote" xs={12} sm={12}>
                  <Grid
                    id="User/(esm/_z_MfkI4jEe29qs15q2b6yw)/GroupVisualElement"
                    data-name="yesnoabstainvote"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    {(actions?.isVoteYesNoAbstainHidden
                      ? !actions?.isVoteYesNoAbstainHidden(data, editMode)
                      : !data.isNotYesNoAbstainType) && (
                      <Grid item xs={12} sm={12} md={4.0}>
                        <LoadingButton
                          id="User/(esm/_T6DvII4jEe29qs15q2b6yw)/OperationFormVisualElement"
                          loading={isLoading}
                          variant={undefined}
                          startIcon={<MdiIcon path="vote" />}
                          loadingPosition="start"
                          onClick={async () => {
                            if (actions.voteYesNoAbstainAction) {
                              await actions.voteYesNoAbstainAction!();
                            }
                          }}
                          disabled={!actions.voteYesNoAbstainAction || !data.isYesNoAbstainType || editMode}
                        >
                          {t('service.VoteDefinition.VoteDefinition_View_Edit.voteYesNoAbstain', {
                            defaultValue: 'Take a vote',
                          })}
                        </LoadingButton>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              )}

              {(actions?.isSelectanswervoteHidden
                ? !actions?.isSelectanswervoteHidden(data, editMode)
                : !data.isNotSelectAnswerType) && (
                <Grid item data-name="selectanswervote" xs={12} sm={12}>
                  <Grid
                    id="User/(esm/_1tyvYI4jEe29qs15q2b6yw)/GroupVisualElement"
                    data-name="selectanswervote"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    {(actions?.isVoteSelectAnswerHidden
                      ? !actions?.isVoteSelectAnswerHidden(data, editMode)
                      : !data.isNotSelectAnswerType) && (
                      <Grid item xs={12} sm={12} md={4.0}>
                        <LoadingButton
                          id="User/(esm/_T6Ar0I4jEe29qs15q2b6yw)/OperationFormVisualElement"
                          loading={isLoading}
                          variant={undefined}
                          startIcon={<MdiIcon path="vote" />}
                          loadingPosition="start"
                          onClick={async () => {
                            if (actions.voteSelectAnswerAction) {
                              await actions.voteSelectAnswerAction!();
                            }
                          }}
                          disabled={!actions.voteSelectAnswerAction || !data.isSelectAnswerType || editMode}
                        >
                          {t('service.VoteDefinition.VoteDefinition_View_Edit.voteSelectAnswer', {
                            defaultValue: 'Take a vote',
                          })}
                        </LoadingButton>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              )}

              {(actions?.isRatingvoteHidden ? !actions?.isRatingvoteHidden(data, editMode) : !data.isNotRatingType) && (
                <Grid item data-name="ratingvote" xs={12} sm={12}>
                  <Grid
                    id="User/(esm/_31NH0I4jEe29qs15q2b6yw)/GroupVisualElement"
                    data-name="ratingvote"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    {(actions?.isVoteRatingHidden
                      ? !actions?.isVoteRatingHidden(data, editMode)
                      : !data.isNotRatingType) && (
                      <Grid item xs={12} sm={12} md={4.0}>
                        <LoadingButton
                          id="User/(esm/_T5_dsI4jEe29qs15q2b6yw)/OperationFormVisualElement"
                          loading={isLoading}
                          variant={undefined}
                          startIcon={<MdiIcon path="vote" />}
                          loadingPosition="start"
                          onClick={async () => {
                            if (actions.voteRatingAction) {
                              await actions.voteRatingAction!();
                            }
                          }}
                          disabled={!actions.voteRatingAction || !data.isRatingType || editMode}
                        >
                          {t('service.VoteDefinition.VoteDefinition_View_Edit.voteRating', {
                            defaultValue: 'Take a vote',
                          })}
                        </LoadingButton>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              )}
            </ModeledTabs>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
