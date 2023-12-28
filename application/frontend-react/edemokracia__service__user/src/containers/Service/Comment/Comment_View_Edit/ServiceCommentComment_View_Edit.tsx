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
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceCommentStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteStored,
} from '~/services/data-api';
import type { ServiceCommentComment_View_EditCreatedByComponentActionDefinitions } from './components/ServiceCommentComment_View_EditCreatedByComponent';
import { ServiceCommentComment_View_EditCreatedByComponent } from './components/ServiceCommentComment_View_EditCreatedByComponent';

export const SERVICE_COMMENT_COMMENT_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceCommentComment_View_EditContainerHook';
export type ServiceCommentComment_View_EditContainerHook = (
  data: ServiceCommentStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceComment, value: any) => void,
) => ServiceCommentComment_View_EditActionDefinitions;

export interface ServiceCommentComment_View_EditActionDefinitions
  extends ServiceCommentComment_View_EditCreatedByComponentActionDefinitions {
  voteDownForCommentAction?: () => Promise<void>;
  voteUpForCommentAction?: () => Promise<void>;
  votesOpenPageAction?: (target?: ServiceSimpleVoteStored) => Promise<void>;
  isCommentRequired?: (data: ServiceComment | ServiceCommentStored, editMode?: boolean) => boolean;
  isCommentDisabled?: (data: ServiceComment | ServiceCommentStored, editMode?: boolean, isLoading?: boolean) => boolean;
  isCreatedRequired?: (data: ServiceComment | ServiceCommentStored, editMode?: boolean) => boolean;
  isCreatedDisabled?: (data: ServiceComment | ServiceCommentStored, editMode?: boolean, isLoading?: boolean) => boolean;
  isDownVotesRequired?: (data: ServiceComment | ServiceCommentStored, editMode?: boolean) => boolean;
  isDownVotesDisabled?: (
    data: ServiceComment | ServiceCommentStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isUpVotesRequired?: (data: ServiceComment | ServiceCommentStored, editMode?: boolean) => boolean;
  isUpVotesDisabled?: (data: ServiceComment | ServiceCommentStored, editMode?: boolean, isLoading?: boolean) => boolean;
}

export interface ServiceCommentComment_View_EditProps {
  refreshCounter: number;
  actions: ServiceCommentComment_View_EditActionDefinitions;

  data: ServiceCommentStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceComment, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceComment, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceComment, string>>>;
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_p_AVAGksEe25ONJ3V89cVA)/TransferObjectViewPageContainer
// Name: service::Comment::Comment_View_Edit
export default function ServiceCommentComment_View_Edit(props: ServiceCommentComment_View_EditProps) {
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
  const { service: customContainerHook } = useTrackService<ServiceCommentComment_View_EditContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_COMMENT_COMMENT_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceCommentComment_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_p_AVAGksEe25ONJ3V89cVA)/TransferObjectViewVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Card id="(User/(esm/_eX7kkG5YEe2wNaja8kBvcQ)/WrapAndLabelVisualElement)/LabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="comment-text-multiple" sx={{ marginRight: 1 }} />
                      <Typography
                        id="User/(esm/_eX7kkG5YEe2wNaja8kBvcQ)/WrapAndLabelVisualElement)/Label"
                        variant="h5"
                        component="h1"
                      >
                        {t('service.Comment.Comment_View_Edit.group.Label', { defaultValue: 'Comment' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_eX7kkG5YEe2wNaja8kBvcQ)/GroupVisualElement"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    >
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
                              id: 'User/(esm/_BYP0EG5WEe2wNaja8kBvcQ)/TimestampTypeDateTimeInput',
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
                              const copy = new Map<keyof ServiceComment, string>(prevValidation);
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
                          label={t('service.Comment.Comment_View_Edit.created', { defaultValue: 'Created' }) as string}
                          value={serviceDateToUiDate(data.created ?? null)}
                          readOnly={true || !isFormUpdateable()}
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
                        <ServiceCommentComment_View_EditCreatedByComponent
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
                          required={actions?.isCommentRequired ? actions.isCommentRequired(data, editMode) : true}
                          name="comment"
                          id="User/(esm/_BYJGYG5WEe2wNaja8kBvcQ)/StringTypeTextArea"
                          autoFocus
                          label={t('service.Comment.Comment_View_Edit.comment', { defaultValue: 'Comment' }) as string}
                          value={data.comment ?? ''}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': true,
                          })}
                          disabled={
                            actions?.isCommentDisabled
                              ? actions.isCommentDisabled(data, editMode, isLoading)
                              : isLoading
                          }
                          multiline
                          minRows={4.0}
                          error={!!validation.get('comment')}
                          helperText={validation.get('comment')}
                          onChange={(event) => {
                            const realValue = event.target.value?.length === 0 ? null : event.target.value;
                            storeDiff('comment', realValue);
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
                          id="User/(esm/_3lCIsH4bEe2j59SYy0JH0Q)/OperationFormVisualElement"
                          loading={isLoading}
                          variant={undefined}
                          startIcon={<MdiIcon path="thumb-up" />}
                          loadingPosition="start"
                          onClick={async () => {
                            if (actions.voteUpForCommentAction) {
                              await actions.voteUpForCommentAction!();
                            }
                          }}
                          disabled={!actions.voteUpForCommentAction || editMode}
                        >
                          <span>{t('service.Comment.Comment_View_Edit.voteUp', { defaultValue: 'Vote Up' })}</span>
                        </LoadingButton>
                      </Grid>

                      <Grid item xs={12} sm={12} md={1.0}>
                        <NumericInput
                          required={actions?.isUpVotesRequired ? actions.isUpVotesRequired(data, editMode) : false}
                          name="upVotes"
                          id="User/(esm/_3kpuMH4bEe2j59SYy0JH0Q)/NumericTypeVisualInput"
                          label={t('service.Comment.Comment_View_Edit.upVotes', { defaultValue: '' }) as string}
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
                          id="User/(esm/_iiiWkIfwEe2u0fVmwtP5bA)/PlaceholderVisualElement"
                        ></Grid>
                      </Grid>

                      <Grid item xs={12} sm={12} md={1.0}>
                        <LoadingButton
                          id="User/(esm/_3lHoQH4bEe2j59SYy0JH0Q)/OperationFormVisualElement"
                          loading={isLoading}
                          variant={undefined}
                          startIcon={<MdiIcon path="thumb-down" />}
                          loadingPosition="start"
                          onClick={async () => {
                            if (actions.voteDownForCommentAction) {
                              await actions.voteDownForCommentAction!();
                            }
                          }}
                          disabled={!actions.voteDownForCommentAction || editMode}
                        >
                          <span>{t('service.Comment.Comment_View_Edit.voteDown', { defaultValue: 'Vote Down' })}</span>
                        </LoadingButton>
                      </Grid>

                      <Grid item xs={12} sm={12} md={1.0}>
                        <NumericInput
                          required={actions?.isDownVotesRequired ? actions.isDownVotesRequired(data, editMode) : false}
                          name="downVotes"
                          id="User/(esm/_3k2igH4bEe2j59SYy0JH0Q)/NumericTypeVisualInput"
                          label={t('service.Comment.Comment_View_Edit.downVotes', { defaultValue: '' }) as string}
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
                          id="User/(esm/_jPMBMIfwEe2u0fVmwtP5bA)/PlaceholderVisualElement"
                        ></Grid>
                      </Grid>

                      <Grid item xs={12} sm={12} md={2.0}>
                        <AssociationButton
                          id="User/(esm/_IgLS0IfuEe2u0fVmwtP5bA)/TabularReferenceFieldButton"
                          variant={undefined}
                          editMode={editMode}
                          navigateAction={actions.votesOpenPageAction}
                          refreshCounter={refreshCounter}
                        >
                          {t('service.Comment.Comment_View_Edit.votes', { defaultValue: 'Votes' })}
                          <MdiIcon path="arrow-right" />
                        </AssociationButton>
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
  );
}
