//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Pro.comments#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: comments
// Page DataElement owner name: edemokracia::admin::Pro

import type { FC, Dispatch, SetStateAction } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent, InputAdornment, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import type { DateValidationError, DateTimeValidationError, TimeValidationError } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { ComponentProxy, useTrackService } from '@pandino/react-hooks';
import { useParams } from 'react-router-dom';
import { MdiIcon, ModeledTabs, PageHeader, DropdownButton, CustomBreadcrumb, useJudoNavigation } from '~/components';
import { useRangeDialog } from '~/components/dialog';
import { AssociationButton, BinaryInput, CollectionAssociationButton, NumericInput } from '~/components/widgets';
import {
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  fileHandling,
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '~/utilities';
import { useConfirmationBeforeChange } from '~/hooks';
import { toastConfig, dividerHeight } from '~/config';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, CustomFormVisualElementProps } from '~/custom';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { mainContainerPadding } from '~/theme';
import { PageContainerTransition } from '~/theme/animations';
import { clsx } from 'clsx';

import {
  AdminComment,
  AdminCommentQueryCustomizer,
  AdminCommentStored,
  AdminPro,
  AdminProStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminProServiceForClassImpl, adminCommentServiceForClassImpl } from '~/generated/data-axios';
import { useAdminCommentVoteUpAction, useAdminCommentVoteDownAction, useButtonNavigateVotesAction } from './actions';

import { PageActions } from './components/PageActions';
import { CreatedByLink } from './components/CreatedByLink';

export type AdminProCommentsViewPostRefreshAction = (
  data: AdminCommentStored,
  storeDiff: (attributeName: keyof AdminCommentStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof AdminComment, string>>>,
) => Promise<void>;

export const ADMIN_PRO_COMMENTS_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY = 'AdminProCommentsViewPostRefreshHook';
export type AdminProCommentsViewPostRefreshHook = () => AdminProCommentsViewPostRefreshAction;

/**
 * Name: edemokracia::admin::Pro.comments#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminProCommentsView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<AdminCommentStored>({} as unknown as AdminCommentStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminCommentStored, any>>(
    {} as unknown as Record<keyof AdminCommentStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminCommentStored, value: any) => void = useCallback(
    (attributeName: keyof AdminCommentStored, value: any) => {
      const dateTypes: string[] = [];
      const dateTimeTypes: string[] = [];
      const timeTypes: string[] = [];
      if (dateTypes.includes(attributeName as string)) {
        payloadDiff[attributeName] = uiDateToServiceDate(value);
      } else if (dateTimeTypes.includes(attributeName as string)) {
        payloadDiff[attributeName] = value;
      } else if (timeTypes.includes(attributeName as string)) {
        payloadDiff[attributeName] = uiTimeToServiceTime(value);
      } else {
        payloadDiff[attributeName] = value;
      }
      setData((prevData) => ({
        ...prevData,
        [attributeName]: value,
      }));
      if (!editMode) {
        setEditMode(true);
      }
    },
    [data],
  );
  const [validation, setValidation] = useState<Map<keyof AdminComment, string>>(new Map<keyof AdminComment, string>());

  const queryCustomizer: AdminCommentQueryCustomizer = {
    _mask: '{created,comment,upVotes,downVotes,createdBy{representation}}',
  };

  const { service: postRefreshHook } = useTrackService<AdminProCommentsViewPostRefreshHook>(
    `(${OBJECTCLASS}=${ADMIN_PRO_COMMENTS_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: AdminProCommentsViewPostRefreshAction | undefined = postRefreshHook && postRefreshHook();

  const adminCommentVoteUpAction = useAdminCommentVoteUpAction();
  const adminCommentVoteDownAction = useAdminCommentVoteDownAction();
  const buttonNavigateVotesAction = useButtonNavigateVotesAction();

  const title: string = t('admin.CommentView', { defaultValue: 'Comment View / Edit' });

  const isFormUpdateable = useCallback(() => {
    return false && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );

  async function fetchData() {
    setIsLoading(true);

    try {
      const res = await adminCommentServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<AdminComment>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminCommentStored, any>);
      if (postRefreshAction) {
        try {
          await postRefreshAction(res, storeDiff, setEditMode, setValidation);
        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PageHeader title={title}>
        <PageActions
          data={data}
          fetchData={fetchData}
          editMode={editMode}
          setEditMode={setEditMode}
          isLoading={isLoading}
        />
      </PageHeader>
      <Container component="main" maxWidth="xl">
        <PageContainerTransition>
          <Box sx={mainContainerPadding}>
            <Grid
              className="relation-page-data"
              container
              spacing={2}
              direction="column"
              alignItems="stretch"
              justifyContent="flex-start"
            >
              <Grid item xs={12} sm={12}>
                <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminProCommentsViewDefaultCommentViewEditGroupLabelWrapper">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                          <MdiIcon path="comment-text-multiple" sx={{ marginRight: 1 }} />
                          <Typography
                            id="LabeledemokraciaAdminAdminEdemokraciaAdminProCommentsViewDefaultCommentViewEditGroupLabelWrapperGroupLabel"
                            variant="h6"
                            component="h1"
                          >
                            {t('admin.CommentView.group.Label', { defaultValue: 'Comment' })}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminProCommentsViewDefaultCommentViewEditGroupLabelWrapperGroup"
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
                                  id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminProCommentsViewDefaultCommentViewEditGroupLabelWrapperGroupCreated',
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
                                  const copy = new Map<keyof AdminComment, string>(prevValidation);
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
                              label={t('admin.CommentView.created', { defaultValue: 'Created' }) as string}
                              value={serviceDateToUiDate(data.created ?? null)}
                              readOnly={true || !isFormUpdateable()}
                              disabled={isLoading}
                              onChange={(newValue: Date) => {
                                storeDiff('created', newValue);
                              }}
                            />
                          </Grid>

                          <Grid item xs={12} sm={12} md={4.0}>
                            <CreatedByLink
                              ownerData={data}
                              readOnly={true || !isFormUpdateable()}
                              disabled={isLoading}
                              editMode={editMode}
                              fetchOwnerData={fetchData}
                              onChange={(value: AdminUser | AdminUserStored | null) => {
                                storeDiff('createdBy', value);
                              }}
                              validation={validation}
                            />
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <TextField
                              required={true}
                              name="comment"
                              id="TextAreaedemokraciaAdminAdminEdemokraciaAdminProCommentsViewDefaultCommentViewEditGroupLabelWrapperGroupComment"
                              label={t('admin.CommentView.comment', { defaultValue: 'Comment' }) as string}
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

                          <Grid item xs={12} sm={12} md={1.0}>
                            <LoadingButton
                              id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminProCommentsViewEdemokraciaAdminAdminEdemokraciaAdminCommentVoteUpButtonCallOperation"
                              loading={isLoading}
                              variant={undefined}
                              startIcon={<MdiIcon path="thumb-up" />}
                              loadingPosition="start"
                              onClick={async () => {
                                try {
                                  setIsLoading(true);
                                  await adminCommentVoteUpAction(data, () => fetchData());
                                } finally {
                                  setIsLoading(false);
                                }
                              }}
                              disabled={editMode}
                            >
                              <span>{t('admin.CommentView.voteUp.ButtonCallOperation', { defaultValue: '' })}</span>
                            </LoadingButton>
                          </Grid>

                          <Grid item xs={12} sm={12} md={1.0}>
                            <NumericInput
                              required={false}
                              name="upVotes"
                              id="NumericInputedemokraciaAdminAdminEdemokraciaAdminProCommentsViewDefaultCommentViewEditGroupLabelWrapperGroupUpVotes"
                              label={t('admin.CommentView.upVotes', { defaultValue: '' }) as string}
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
                                storeDiff('upVotes', values.floatValue === undefined ? null : values.floatValue);
                              }}
                              InputLabelProps={{ shrink: true }}
                              InputProps={{
                                readOnly: true || !isFormUpdateable(),
                              }}
                            />
                          </Grid>

                          <Grid item xs={12} sm={12} md={1.0}>
                            <Grid container sx={{ height: dividerHeight }}></Grid>
                          </Grid>

                          <Grid item xs={12} sm={12} md={1.0}>
                            <LoadingButton
                              id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminProCommentsViewEdemokraciaAdminAdminEdemokraciaAdminCommentVoteDownButtonCallOperation"
                              loading={isLoading}
                              variant={undefined}
                              startIcon={<MdiIcon path="thumb-down" />}
                              loadingPosition="start"
                              onClick={async () => {
                                try {
                                  setIsLoading(true);
                                  await adminCommentVoteDownAction(data, () => fetchData());
                                } finally {
                                  setIsLoading(false);
                                }
                              }}
                              disabled={editMode}
                            >
                              <span>{t('admin.CommentView.voteDown.ButtonCallOperation', { defaultValue: '' })}</span>
                            </LoadingButton>
                          </Grid>

                          <Grid item xs={12} sm={12} md={1.0}>
                            <NumericInput
                              required={false}
                              name="downVotes"
                              id="NumericInputedemokraciaAdminAdminEdemokraciaAdminProCommentsViewDefaultCommentViewEditGroupLabelWrapperGroupDownVotes"
                              label={t('admin.CommentView.downVotes', { defaultValue: '' }) as string}
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
                                storeDiff('downVotes', values.floatValue === undefined ? null : values.floatValue);
                              }}
                              InputLabelProps={{ shrink: true }}
                              InputProps={{
                                readOnly: true || !isFormUpdateable(),
                              }}
                            />
                          </Grid>

                          <Grid item xs={12} sm={12} md={1.0}>
                            <Grid container sx={{ height: dividerHeight }}></Grid>
                          </Grid>

                          <Grid item xs={12} sm={12} md={2.0}>
                            <CollectionAssociationButton
                              id="NavigationToPageActionedemokraciaAdminAdminEdemokraciaAdminProCommentsViewEdemokraciaAdminAdminEdemokraciaAdminCommentVotesButtonNavigate"
                              variant={undefined}
                              editMode={editMode}
                              navigateAction={() => buttonNavigateVotesAction(data)}
                            >
                              {t('admin.CommentView.votes.ButtonNavigate', { defaultValue: 'Votes' })}
                              <MdiIcon path="arrow-right" />
                            </CollectionAssociationButton>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </PageContainerTransition>
      </Container>
    </>
  );
}
