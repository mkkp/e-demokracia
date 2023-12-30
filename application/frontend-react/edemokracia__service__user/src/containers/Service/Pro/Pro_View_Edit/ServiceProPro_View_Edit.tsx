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
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { DIVIDER_HEIGHT } from '~/config';
import { useL10N } from '~/l10n/l10n-context';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, serviceDateToUiDate, uiDateToServiceDate, useErrorHandler } from '~/utilities';

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
import type { ServiceProPro_View_EditConsComponentActionDefinitions } from './components/ServiceProPro_View_EditConsComponent';
import { ServiceProPro_View_EditConsComponent } from './components/ServiceProPro_View_EditConsComponent';
import type { ServiceProPro_View_EditCreatedByComponentActionDefinitions } from './components/ServiceProPro_View_EditCreatedByComponent';
import { ServiceProPro_View_EditCreatedByComponent } from './components/ServiceProPro_View_EditCreatedByComponent';
import type { ServiceProPro_View_EditProsComponentActionDefinitions } from './components/ServiceProPro_View_EditProsComponent';
import { ServiceProPro_View_EditProsComponent } from './components/ServiceProPro_View_EditProsComponent';

export const SERVICE_PRO_PRO_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY = 'ServiceProPro_View_EditContainerHook';
export type ServiceProPro_View_EditContainerHook = (
  data: ServiceProStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServicePro, value: any) => void,
) => ServiceProPro_View_EditActionDefinitions;

export interface ServiceProPro_View_EditActionDefinitions
  extends ServiceProPro_View_EditConsComponentActionDefinitions,
    ServiceProPro_View_EditCreatedByComponentActionDefinitions,
    ServiceProPro_View_EditProsComponentActionDefinitions {
  createConArgumentAction?: () => Promise<void>;
  createProArgumentAction?: () => Promise<void>;
  voteDownForProAction?: () => Promise<void>;
  voteUpForProAction?: () => Promise<void>;
  votesOpenPageAction?: (target?: ServiceSimpleVoteStored) => Promise<void>;
  isCreatedRequired?: (data: ServicePro | ServiceProStored, editMode?: boolean) => boolean;
  isCreatedDisabled?: (data: ServicePro | ServiceProStored, editMode?: boolean, isLoading?: boolean) => boolean;
  isDescriptionRequired?: (data: ServicePro | ServiceProStored, editMode?: boolean) => boolean;
  isDescriptionDisabled?: (data: ServicePro | ServiceProStored, editMode?: boolean, isLoading?: boolean) => boolean;
  isDownVotesRequired?: (data: ServicePro | ServiceProStored, editMode?: boolean) => boolean;
  isDownVotesDisabled?: (data: ServicePro | ServiceProStored, editMode?: boolean, isLoading?: boolean) => boolean;
  isTitleRequired?: (data: ServicePro | ServiceProStored, editMode?: boolean) => boolean;
  isTitleDisabled?: (data: ServicePro | ServiceProStored, editMode?: boolean, isLoading?: boolean) => boolean;
  isUpVotesRequired?: (data: ServicePro | ServiceProStored, editMode?: boolean) => boolean;
  isUpVotesDisabled?: (data: ServicePro | ServiceProStored, editMode?: boolean, isLoading?: boolean) => boolean;
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
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_qLQBQGksEe25ONJ3V89cVA)/TransferObjectViewPageContainer
// Name: service::Pro::Pro_View_Edit
export default function ServiceProPro_View_Edit(props: ServiceProPro_View_EditProps) {
  // Container props
  const {
    refreshCounter,
    actions: pageActions,
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
  const { service: customContainerHook } = useTrackService<ServiceProPro_View_EditContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_PRO_PRO_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceProPro_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_qLQBQGksEe25ONJ3V89cVA)/TransferObjectViewVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Card id="(User/(esm/_OUB-QIfiEe2u0fVmwtP5bA)/WrapAndLabelVisualElement)/LabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="chat-plus" sx={{ marginRight: 1 }} />
                      <Typography
                        id="User/(esm/_OUB-QIfiEe2u0fVmwtP5bA)/WrapAndLabelVisualElement)/Label"
                        variant="h5"
                        component="h1"
                      >
                        {t('service.Pro.Pro_View_Edit.pro.Label', { defaultValue: 'Pro' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_OUB-QIfiEe2u0fVmwtP5bA)/GroupVisualElement"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12} md={6.0}>
                        <TextField
                          required={actions?.isTitleRequired ? actions.isTitleRequired(data, editMode) : true}
                          name="title"
                          id="User/(esm/_3oDAcH4bEe2j59SYy0JH0Q)/StringTypeTextInput"
                          autoFocus
                          label={t('service.Pro.Pro_View_Edit.title', { defaultValue: 'Title' }) as string}
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
                            maxlength: 255,
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
                              id: 'User/(esm/_3ntCMH4bEe2j59SYy0JH0Q)/TimestampTypeDateTimeInput',
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

                      <Grid item xs={12} sm={12} md={3.0}>
                        <ServiceProPro_View_EditCreatedByComponent
                          disabled={true}
                          readOnly={true || !isFormUpdateable()}
                          ownerData={data}
                          editMode={editMode}
                          isLoading={isLoading}
                          storeDiff={storeDiff}
                          validationError={validation.get('createdBy')}
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
                          id="User/(esm/_3n4oYH4bEe2j59SYy0JH0Q)/StringTypeTextArea"
                          label={t('service.Pro.Pro_View_Edit.description', { defaultValue: 'Description' }) as string}
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
                            maxlength: 16384,
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={1.0}>
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
                          <span>{t('service.Pro.Pro_View_Edit.voteUp', { defaultValue: 'Vote Up' })}</span>
                        </LoadingButton>
                      </Grid>

                      <Grid item xs={12} sm={12} md={1.0}>
                        <NumericInput
                          required={actions?.isUpVotesRequired ? actions.isUpVotesRequired(data, editMode) : false}
                          name="upVotes"
                          id="User/(esm/_eJYR4IfYEe2u0fVmwtP5bA)/NumericTypeVisualInput"
                          label={t('service.Pro.Pro_View_Edit.upVotes', { defaultValue: '' }) as string}
                          customInput={TextField}
                          value={data.upVotes ?? ''}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': false,
                          })}
                          disabled={
                            actions?.isUpVotesDisabled
                              ? actions.isUpVotesDisabled(data, editMode, isLoading)
                              : isLoading
                          }
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
                        <Grid
                          container
                          sx={{ height: DIVIDER_HEIGHT }}
                          id="User/(esm/_BHmjwIfjEe2u0fVmwtP5bA)/PlaceholderVisualElement"
                        ></Grid>
                      </Grid>

                      <Grid item xs={12} sm={12} md={1.0}>
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
                          <span>{t('service.Pro.Pro_View_Edit.voteDown', { defaultValue: 'Vote Down' })}</span>
                        </LoadingButton>
                      </Grid>

                      <Grid item xs={12} sm={12} md={1.0}>
                        <NumericInput
                          required={actions?.isDownVotesRequired ? actions.isDownVotesRequired(data, editMode) : false}
                          name="downVotes"
                          id="User/(esm/_eJdxcIfYEe2u0fVmwtP5bA)/NumericTypeVisualInput"
                          label={t('service.Pro.Pro_View_Edit.downVotes', { defaultValue: '' }) as string}
                          customInput={TextField}
                          value={data.downVotes ?? ''}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': false,
                          })}
                          disabled={
                            actions?.isDownVotesDisabled
                              ? actions.isDownVotesDisabled(data, editMode, isLoading)
                              : isLoading
                          }
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
                        <Grid
                          container
                          sx={{ height: DIVIDER_HEIGHT }}
                          id="User/(esm/_OGusoIfjEe2u0fVmwtP5bA)/PlaceholderVisualElement"
                        ></Grid>
                      </Grid>

                      <Grid item xs={12} sm={12} md={2.0}>
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
                <Card id="(User/(esm/_KRUbMXjvEe6cB8og8p0UuQ)/WrapAndLabelVisualElement)/LabelWrapper">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                          <MdiIcon path="chat-plus" sx={{ marginRight: 1 }} />
                          <Typography
                            id="User/(esm/_KRUbMXjvEe6cB8og8p0UuQ)/WrapAndLabelVisualElement)/Label"
                            variant="h5"
                            component="h1"
                          >
                            {t('service.Pro.Pro_View_Edit.pros.Label', { defaultValue: 'Pros' })}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_KRUbMXjvEe6cB8og8p0UuQ)/GroupVisualElement"
                          container
                          direction="row"
                          alignItems="stretch"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_KRUbMnjvEe6cB8og8p0UuQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <LoadingButton
                                  id="User/(esm/_KRUbM3jvEe6cB8og8p0UuQ)/OperationFormVisualElement"
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
                                    {t('service.Pro.Pro_View_Edit.createProArgument', {
                                      defaultValue: 'Add Pro Argument',
                                    })}
                                  </span>
                                </LoadingButton>
                              </Grid>
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
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={12} md={6.0}>
                <Card id="(User/(esm/_KRUbOXjvEe6cB8og8p0UuQ)/WrapAndLabelVisualElement)/LabelWrapper">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                          <MdiIcon path="chat-minus" sx={{ marginRight: 1 }} />
                          <Typography
                            id="User/(esm/_KRUbOXjvEe6cB8og8p0UuQ)/WrapAndLabelVisualElement)/Label"
                            variant="h5"
                            component="h1"
                          >
                            {t('service.Pro.Pro_View_Edit.cons.Label', { defaultValue: 'Cons' })}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_KRUbOXjvEe6cB8og8p0UuQ)/GroupVisualElement"
                          container
                          direction="row"
                          alignItems="stretch"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_KRUbOnjvEe6cB8og8p0UuQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <LoadingButton
                                  id="User/(esm/_KRUbO3jvEe6cB8og8p0UuQ)/OperationFormVisualElement"
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
                                    {t('service.Pro.Pro_View_Edit.createConArgument', {
                                      defaultValue: 'Add Con Argument',
                                    })}
                                  </span>
                                </LoadingButton>
                              </Grid>
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
