//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Con.comments#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: comments
// Page DataElement owner name: edemokracia::admin::Con

import { useEffect, useState, useCallback, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent, InputAdornment, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { DateTimePicker, DateTimeValidationError } from '@mui/x-date-pickers';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { ComponentProxy } from '@pandino/react-hooks';
import { useParams } from 'react-router-dom';
import { MdiIcon, ModeledTabs, PageHeader, DropdownButton, CustomBreadcrumb, useJudoNavigation } from '~/components';
import { useRangeDialog } from '~/components/dialog';
import { AssociationButton, BinaryInput, CollectionAssociationButton } from '~/components/widgets';
import {
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  fileHandling,
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
import { JudoIdentifiable } from '@judo/data-api-common';
import { mainContainerPadding } from '~/theme';

import {
  AdminComment,
  AdminCommentQueryCustomizer,
  AdminCommentStored,
  AdminCon,
  AdminConStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminConServiceImpl, adminCommentServiceImpl } from '~/generated/data-axios';

import { useAdminCommentVoteUpAction, useAdminCommentVoteDownAction, useButtonNavigateVotesAction } from './actions';

import { PageActions } from './components/PageActions';
import { CreatedByLink } from './components/CreatedByLink';

/**
 * Name: edemokracia::admin::Con.comments#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminConCommentsView() {
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
      setData({ ...data, [attributeName]: value });
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

  const adminCommentVoteUpAction = useAdminCommentVoteUpAction();
  const adminCommentVoteDownAction = useAdminCommentVoteDownAction();
  const buttonNavigateVotesAction = useButtonNavigateVotesAction();

  const title: string = t('admin.CommentView', { defaultValue: 'View / Edit Comment' });

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
      const res = await adminCommentServiceImpl.refresh(
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
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setValidation(new Map<keyof AdminComment, string>());
  }, [editMode]);

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
        <Box sx={mainContainerPadding}>
          <Grid
            className="relation-page-data"
            container
            xs={12}
            sm={12}
            spacing={2}
            direction="column"
            alignItems="stretch"
            justifyContent="flex-start"
          >
            <Grid item xs={12} sm={12}>
              <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminConCommentsViewDefaultCommentViewGroupLabelWrapper">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                        <MdiIcon path="comment-text-multiple" />
                        <Typography
                          id="LabeledemokraciaAdminAdminEdemokraciaAdminConCommentsViewDefaultCommentViewGroupLabelWrapperGroupLabel"
                          variant="h6"
                          component="h1"
                        >
                          {t('admin.CommentView.group.Label', { defaultValue: 'Comment' })}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminConCommentsViewDefaultCommentViewGroupLabelWrapperGroup"
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
                            className={!editMode ? 'JUDO-viewMode' : undefined}
                            slotProps={{
                              textField: {
                                id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminConCommentsViewDefaultCommentViewGroupLabelWrapperGroupCreated',
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
                            disabled={true || !isFormUpdateable()}
                            onChange={(newValue: Date) => {
                              storeDiff('created', newValue);
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12} md={4.0}>
                          <CreatedByLink
                            ownerData={data}
                            disabled={true || !isFormUpdateable()}
                            editMode={editMode}
                            fetchOwnerData={fetchData}
                            storeDiff={storeDiff}
                            validation={validation}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <TextField
                            required
                            name="comment"
                            id="TextAreaedemokraciaAdminAdminEdemokraciaAdminConCommentsViewDefaultCommentViewGroupLabelWrapperGroupComment"
                            label={t('admin.CommentView.comment', { defaultValue: 'Comment' }) as string}
                            value={data.comment}
                            className={!editMode ? 'JUDO-viewMode' : undefined}
                            disabled={false || !isFormUpdateable()}
                            multiline
                            minRows={4.0}
                            error={!!validation.get('comment')}
                            helperText={validation.get('comment')}
                            onChange={(event) => {
                              storeDiff('comment', event.target.value);
                            }}
                            InputLabelProps={{ shrink: true }}
                            InputProps={{
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
                            id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminConCommentsViewEdemokraciaAdminAdminEdemokraciaAdminCommentVoteUpButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="thumb-up" />}
                            loadingPosition="start"
                            onClick={() => adminCommentVoteUpAction(data, () => fetchData())}
                            disabled={editMode}
                          >
                            <span>{t('admin.CommentView.voteUp.ButtonCallOperation', { defaultValue: '' })}</span>
                          </LoadingButton>
                        </Grid>

                        <Grid item xs={12} sm={12} md={1.0}>
                          <TextField
                            name="upVotes"
                            id="NumericInputedemokraciaAdminAdminEdemokraciaAdminConCommentsViewDefaultCommentViewGroupLabelWrapperGroupUpVotes"
                            label={t('admin.CommentView.upVotes', { defaultValue: '' }) as string}
                            type="number"
                            value={data.upVotes}
                            className={!editMode ? 'JUDO-viewMode' : undefined}
                            disabled={true || !isFormUpdateable()}
                            error={!!validation.get('upVotes')}
                            helperText={validation.get('upVotes')}
                            onChange={(event) => {
                              storeDiff('upVotes', Number(event.target.value));
                            }}
                            InputLabelProps={{ shrink: true }}
                            InputProps={{}}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12} md={1.0}>
                          <Grid container sx={{ height: dividerHeight }}></Grid>
                        </Grid>

                        <Grid item xs={12} sm={12} md={1.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminConCommentsViewEdemokraciaAdminAdminEdemokraciaAdminCommentVoteDownButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="thumb-down" />}
                            loadingPosition="start"
                            onClick={() => adminCommentVoteDownAction(data, () => fetchData())}
                            disabled={editMode}
                          >
                            <span>{t('admin.CommentView.voteDown.ButtonCallOperation', { defaultValue: '' })}</span>
                          </LoadingButton>
                        </Grid>

                        <Grid item xs={12} sm={12} md={1.0}>
                          <TextField
                            name="downVotes"
                            id="NumericInputedemokraciaAdminAdminEdemokraciaAdminConCommentsViewDefaultCommentViewGroupLabelWrapperGroupDownVotes"
                            label={t('admin.CommentView.downVotes', { defaultValue: '' }) as string}
                            type="number"
                            value={data.downVotes}
                            className={!editMode ? 'JUDO-viewMode' : undefined}
                            disabled={true || !isFormUpdateable()}
                            error={!!validation.get('downVotes')}
                            helperText={validation.get('downVotes')}
                            onChange={(event) => {
                              storeDiff('downVotes', Number(event.target.value));
                            }}
                            InputLabelProps={{ shrink: true }}
                            InputProps={{}}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12} md={1.0}>
                          <Grid container sx={{ height: dividerHeight }}></Grid>
                        </Grid>

                        <Grid item xs={12} sm={12} md={2.0}>
                          <CollectionAssociationButton
                            id="NavigationToPageActionedemokraciaAdminAdminEdemokraciaAdminConCommentsViewEdemokraciaAdminAdminEdemokraciaAdminCommentVotesButtonNavigate"
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
      </Container>
    </>
  );
}
