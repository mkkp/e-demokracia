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
import { NumericFormat } from 'react-number-format';
import { LoadingButton } from '@mui/lab';
import { OBJECTCLASS } from '@pandino/pandino-api';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { ComponentProxy } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import { Box, Container, Grid, Button, Card, CardContent, InputAdornment, TextField } from '@mui/material';
import type { GridFilterModel } from '@mui/x-data-grid';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { mainContainerPadding } from '~/theme';
import { DIVIDER_HEIGHT } from '~/config';
import type { Filter } from '~/components-api';
import { MdiIcon, ModeledTabs, DropdownButton, useJudoNavigation } from '~/components';
import {
  isErrorOperationFault,
  useErrorHandler,
  fileHandling,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '~/utilities';

import { DatePicker, DateTimePicker, TimePicker } from '@mui/x-date-pickers';
import type { DateValidationError, DateTimeValidationError, TimeValidationError } from '@mui/x-date-pickers';
import { AssociationButton, BinaryInput, CollectionAssociationButton, NumericInput } from '~/components/widgets';
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

export interface ServiceCommentComment_FormActionDefinitions
  extends ServiceCommentComment_FormCreatedByComponentActionDefinitions {
  serviceCommentComment_FormGroupVotesOpenPage?: (target?: ServiceSimpleVoteStored) => Promise<void>;
}

export interface ServiceCommentComment_FormProps {
  refreshCounter: number;
  actions: ServiceCommentComment_FormActionDefinitions;

  data: ServiceComment;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceComment, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceComment, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceComment, string>>>;
}

// XMIID: User/(esm/_p_Je8GksEe25ONJ3V89cVA)/TransferObjectFormPageContainer
// Name: service::Comment::Comment_Form
export default function ServiceCommentComment_Form(props: ServiceCommentComment_FormProps) {
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
                  required: false,
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
              label={
                t('service.Comment.Comment.Form.created.group.Comment_Form.service::Comment::Comment_Form', {
                  defaultValue: 'Created',
                }) as string
              }
              value={serviceDateToUiDate(data.created ?? null)}
              readOnly={true || !isFormUpdateable()}
              disabled={isLoading}
              onChange={(newValue: Date) => {
                storeDiff('created', newValue);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <ServiceCommentComment_FormCreatedByComponent
              disabled={true || !isFormUpdateable()}
              ownerData={data}
              editMode={editMode}
              storeDiff={storeDiff}
              validationError={validation.get('createdBy')}
              actions={actions}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              required={true}
              name="comment"
              id="User/(esm/_BYLioG5WEe2wNaja8kBvcQ)/StringTypeTextArea"
              autoFocus
              label={
                t('service.Comment.Comment.Form.comment.group.Comment_Form.service::Comment::Comment_Form', {
                  defaultValue: 'Comment',
                }) as string
              }
              value={data.comment ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={isLoading}
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
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4.0}>
            <NumericInput
              required={false}
              name="upVotes"
              id="User/(esm/_3kt_oH4bEe2j59SYy0JH0Q)/NumericTypeVisualInput"
              label={
                t('service.Comment.Comment.Form.upVotes.group.Comment_Form.service::Comment::Comment_Form', {
                  defaultValue: 'UpVotes',
                }) as string
              }
              customInput={TextField}
              value={data.upVotes ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': false,
              })}
              disabled={isLoading}
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
                    <MdiIcon path="dialpad" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4.0}>
            <NumericInput
              required={false}
              name="downVotes"
              id="User/(esm/_3k6z8H4bEe2j59SYy0JH0Q)/NumericTypeVisualInput"
              label={
                t('service.Comment.Comment.Form.downVotes.group.Comment_Form.service::Comment::Comment_Form', {
                  defaultValue: 'DownVotes',
                }) as string
              }
              customInput={TextField}
              value={data.downVotes ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': false,
              })}
              disabled={isLoading}
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
                    <MdiIcon path="dialpad" />
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
              navigateAction={actions.serviceCommentComment_FormGroupVotesOpenPage}
              refreshCounter={refreshCounter}
            >
              {t('service.Comment.Comment.Form.votes.group.Comment_Form.service::Comment::Comment_Form', {
                defaultValue: 'Votes',
              })}
              <MdiIcon path="arrow-right" />
            </AssociationButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
