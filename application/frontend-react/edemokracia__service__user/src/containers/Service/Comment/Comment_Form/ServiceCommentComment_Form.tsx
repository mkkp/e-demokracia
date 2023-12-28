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
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
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
import type { ServiceCommentComment_FormCreatedByComponentActionDefinitions } from './components/ServiceCommentComment_FormCreatedByComponent';
import { ServiceCommentComment_FormCreatedByComponent } from './components/ServiceCommentComment_FormCreatedByComponent';

export const SERVICE_COMMENT_COMMENT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceCommentComment_FormContainerHook';
export type ServiceCommentComment_FormContainerHook = (
  data: ServiceCommentStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceComment, value: any) => void,
) => ServiceCommentComment_FormActionDefinitions;

export interface ServiceCommentComment_FormActionDefinitions
  extends ServiceCommentComment_FormCreatedByComponentActionDefinitions {
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

export interface ServiceCommentComment_FormProps {
  refreshCounter: number;
  actions: ServiceCommentComment_FormActionDefinitions;

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

// XMIID: User/(esm/_p_Je8GksEe25ONJ3V89cVA)/TransferObjectFormPageContainer
// Name: service::Comment::Comment_Form
export default function ServiceCommentComment_Form(props: ServiceCommentComment_FormProps) {
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
  const { service: customContainerHook } = useTrackService<ServiceCommentComment_FormContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_COMMENT_COMMENT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceCommentComment_FormActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_p_Je8GksEe25ONJ3V89cVA)/TransferObjectFormVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_v1fnoG5YEe2wNaja8kBvcQ)/GroupVisualElement"
              container
              direction="row"
              alignItems="flex-start"
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
                      id: 'User/(esm/_BYSQUG5WEe2wNaja8kBvcQ)/TimestampTypeDateTimeInput',
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
                  label={t('service.Comment.Comment_Form.created', { defaultValue: 'Created' }) as string}
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
                <ServiceCommentComment_FormCreatedByComponent
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
                  id="User/(esm/_BYLioG5WEe2wNaja8kBvcQ)/StringTypeTextArea"
                  autoFocus
                  label={t('service.Comment.Comment_Form.comment', { defaultValue: 'Comment' }) as string}
                  value={data.comment ?? ''}
                  className={clsx({
                    'JUDO-viewMode': !editMode,
                    'JUDO-required': true,
                  })}
                  disabled={
                    actions?.isCommentDisabled ? actions.isCommentDisabled(data, editMode, isLoading) : isLoading
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

              <Grid item xs={12} sm={12} md={4.0}>
                <NumericInput
                  required={actions?.isUpVotesRequired ? actions.isUpVotesRequired(data, editMode) : false}
                  name="upVotes"
                  id="User/(esm/_3kt_oH4bEe2j59SYy0JH0Q)/NumericTypeVisualInput"
                  label={t('service.Comment.Comment_Form.upVotes', { defaultValue: 'UpVotes' }) as string}
                  customInput={TextField}
                  value={data.upVotes ?? ''}
                  className={clsx({
                    'JUDO-viewMode': !editMode,
                    'JUDO-required': false,
                  })}
                  disabled={
                    actions?.isUpVotesDisabled ? actions.isUpVotesDisabled(data, editMode, isLoading) : isLoading
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
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdiIcon path="calculator" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4.0}>
                <NumericInput
                  required={actions?.isDownVotesRequired ? actions.isDownVotesRequired(data, editMode) : false}
                  name="downVotes"
                  id="User/(esm/_3k6z8H4bEe2j59SYy0JH0Q)/NumericTypeVisualInput"
                  label={t('service.Comment.Comment_Form.downVotes', { defaultValue: 'DownVotes' }) as string}
                  customInput={TextField}
                  value={data.downVotes ?? ''}
                  className={clsx({
                    'JUDO-viewMode': !editMode,
                    'JUDO-required': false,
                  })}
                  disabled={
                    actions?.isDownVotesDisabled ? actions.isDownVotesDisabled(data, editMode, isLoading) : isLoading
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
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdiIcon path="calculator" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <AssociationButton
                  id="User/(esm/_IgOWIIfuEe2u0fVmwtP5bA)/TabularReferenceFieldButton"
                  variant={undefined}
                  editMode={editMode}
                  navigateAction={actions.votesOpenPageAction}
                  refreshCounter={refreshCounter}
                >
                  {t('service.Comment.Comment_Form.votes', { defaultValue: 'Votes' })}
                  <MdiIcon path="arrow-right" />
                </AssociationButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
