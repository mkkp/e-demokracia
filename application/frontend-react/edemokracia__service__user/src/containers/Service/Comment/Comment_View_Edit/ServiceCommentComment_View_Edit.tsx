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
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useL10N } from '~/l10n/l10n-context';
import { DIVIDER_HEIGHT } from '~/config';
import { MdiIcon, DropdownButton, useJudoNavigation } from '~/components';
import { isErrorOperationFault, useErrorHandler, uiDateToServiceDate, serviceDateToUiDate } from '~/utilities';

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

export interface ServiceCommentComment_View_EditActionDefinitions
  extends ServiceCommentComment_View_EditCreatedByComponentActionDefinitions {
  voteDownForCommentAction?: () => Promise<void>;
  voteUpForCommentAction?: () => Promise<void>;
  votesOpenPageAction?: (target?: ServiceSimpleVoteStored) => Promise<void>;
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
}

// XMIID: User/(esm/_p_AVAGksEe25ONJ3V89cVA)/TransferObjectViewPageContainer
// Name: service::Comment::Comment_View_Edit
export default function ServiceCommentComment_View_Edit(props: ServiceCommentComment_View_EditProps) {
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
        <Card id="_GueZ4YujEe6laYH8Xw7WEw)/LabelWrapper">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <MdiIcon path="group::Icon" sx={{ marginRight: 1 }} />
                  <Typography id="_GueZ4YujEe6laYH8Xw7WEw)/Label" variant="h5" component="h1">
                    {t('service.Comment.Comment_View_Edit.group.Icon', { defaultValue: 'Comment' })}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Card id="User/(esm/_eX7kkG5YEe2wNaja8kBvcQ)/GroupVisualElement">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
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
                          label={t('service.Comment.Comment_View_Edit.created', { defaultValue: 'Created' }) as string}
                          value={serviceDateToUiDate(data.created ?? null)}
                          readOnly={true || !isFormUpdateable()}
                          disabled={isLoading}
                          onChange={(newValue: Date) => {
                            storeDiff('created', newValue);
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <ServiceCommentComment_View_EditCreatedByComponent
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
                          id="User/(esm/_BYJGYG5WEe2wNaja8kBvcQ)/StringTypeTextArea"
                          autoFocus
                          label={t('service.Comment.Comment_View_Edit.comment', { defaultValue: 'Comment' }) as string}
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

                      <Grid item xs={12} sm={12}>
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
                          <span>{t('service.Comment.Comment_View_Edit.voteUp', { defaultValue: '' })}</span>
                        </LoadingButton>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <NumericInput
                          required={false}
                          name="upVotes"
                          id="User/(esm/_3kpuMH4bEe2j59SYy0JH0Q)/NumericTypeVisualInput"
                          label={t('service.Comment.Comment_View_Edit.upVotes', { defaultValue: '' }) as string}
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
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid container sx={{ height: DIVIDER_HEIGHT }}></Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
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
                          <span>{t('service.Comment.Comment_View_Edit.voteDown', { defaultValue: '' })}</span>
                        </LoadingButton>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <NumericInput
                          required={false}
                          name="downVotes"
                          id="User/(esm/_3k2igH4bEe2j59SYy0JH0Q)/NumericTypeVisualInput"
                          label={t('service.Comment.Comment_View_Edit.downVotes', { defaultValue: '' }) as string}
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
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid container sx={{ height: DIVIDER_HEIGHT }}></Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
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
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
