//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::service::Pro.comments#View
// Page owner name: edemokracia::service::User
// Page DataElement name: comments
// Page DataElement owner name: edemokracia::service::Pro

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
import { toastConfig, DIVIDER_HEIGHT } from '~/config';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, CustomFormVisualElementProps } from '~/custom';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { mainContainerPadding } from '~/theme';
import { PageContainerTransition } from '~/theme/animations';
import { clsx } from 'clsx';

import {
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceCommentStored,
  ServicePro,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/generated/data-api';
import { serviceProServiceForClassImpl, serviceCommentServiceForClassImpl } from '~/generated/data-axios';
import {
  useServiceCommentVoteUpAction,
  useServiceCommentVoteDownAction,
  useButtonNavigateVotesAction,
} from './actions';

import { PageActions } from './components/PageActions';
import { CreatedByLink } from './components/CreatedByLink';

export type ServiceProCommentsViewPostRefreshAction = (
  data: ServiceCommentStored,
  storeDiff: (attributeName: keyof ServiceCommentStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceComment, string>>>,
) => Promise<void>;

export const SERVICE_PRO_COMMENTS_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY = 'ServiceProCommentsViewPostRefreshHook';
export type ServiceProCommentsViewPostRefreshHook = () => ServiceProCommentsViewPostRefreshAction;

/**
 * Name: edemokracia::service::Pro.comments#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function ServiceProCommentsView() {
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
  const [data, setData] = useState<ServiceCommentStored>({} as unknown as ServiceCommentStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof ServiceCommentStored, any>>(
    {} as unknown as Record<keyof ServiceCommentStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof ServiceCommentStored, value: any) => void = useCallback(
    (attributeName: keyof ServiceCommentStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof ServiceComment, string>>(
    new Map<keyof ServiceComment, string>(),
  );

  const queryCustomizer: ServiceCommentQueryCustomizer = {
    _mask: '{created,comment,upVotes,downVotes,createdBy{representation}}',
  };

  const { service: postRefreshHook } = useTrackService<ServiceProCommentsViewPostRefreshHook>(
    `(${OBJECTCLASS}=${SERVICE_PRO_COMMENTS_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: ServiceProCommentsViewPostRefreshAction | undefined = postRefreshHook && postRefreshHook();

  const serviceCommentVoteUpAction = useServiceCommentVoteUpAction();
  const serviceCommentVoteDownAction = useServiceCommentVoteDownAction();
  const buttonNavigateVotesAction = useButtonNavigateVotesAction();

  const title: string = t('service.CommentView', { defaultValue: 'Comment View / Edit' });

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
      const res = await serviceCommentServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<ServiceComment>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof ServiceCommentStored, any>);
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
              <Card id="FlexedemokraciaServiceUserEdemokraciaServiceProCommentsViewDefaultCommentViewEditGroupLabelWrapper">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                        <MdiIcon path="comment-text-multiple" sx={{ marginRight: 1 }} />
                        <Typography
                          id="LabeledemokraciaServiceUserEdemokraciaServiceProCommentsViewDefaultCommentViewEditGroupLabelWrapperGroupLabel"
                          variant="h5"
                          component="h1"
                        >
                          {t('service.CommentView.group.Label', { defaultValue: 'Comment' })}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaServiceUserEdemokraciaServiceProCommentsViewDefaultCommentViewEditGroupLabelWrapperGroup"
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
                                id: 'DateTimeInputedemokraciaServiceUserEdemokraciaServiceProCommentsViewDefaultCommentViewEditGroupLabelWrapperGroupCreated',
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
                            label={t('service.CommentView.created', { defaultValue: 'Created' }) as string}
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
                            onChange={(value: ServiceServiceUser | ServiceServiceUserStored | null) => {
                              storeDiff('createdBy', value);
                            }}
                            validation={validation}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <TextField
                            required={true}
                            name="comment"
                            id="TextAreaedemokraciaServiceUserEdemokraciaServiceProCommentsViewDefaultCommentViewEditGroupLabelWrapperGroupComment"
                            label={t('service.CommentView.comment', { defaultValue: 'Comment' }) as string}
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
                            id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceProCommentsViewEdemokraciaServiceUserEdemokraciaServiceCommentVoteUpButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="thumb-up" />}
                            loadingPosition="start"
                            onClick={async () => {
                              try {
                                setIsLoading(true);
                                await serviceCommentVoteUpAction(data, () => fetchData());
                              } finally {
                                setIsLoading(false);
                              }
                            }}
                            disabled={editMode}
                          >
                            <span>{t('service.CommentView.voteUp.ButtonCallOperation', { defaultValue: '' })}</span>
                          </LoadingButton>
                        </Grid>

                        <Grid item xs={12} sm={12} md={1.0}>
                          <NumericInput
                            required={false}
                            name="upVotes"
                            id="NumericInputedemokraciaServiceUserEdemokraciaServiceProCommentsViewDefaultCommentViewEditGroupLabelWrapperGroupUpVotes"
                            label={t('service.CommentView.upVotes', { defaultValue: '' }) as string}
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
                          <Grid container sx={{ height: DIVIDER_HEIGHT }}></Grid>
                        </Grid>

                        <Grid item xs={12} sm={12} md={1.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceProCommentsViewEdemokraciaServiceUserEdemokraciaServiceCommentVoteDownButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="thumb-down" />}
                            loadingPosition="start"
                            onClick={async () => {
                              try {
                                setIsLoading(true);
                                await serviceCommentVoteDownAction(data, () => fetchData());
                              } finally {
                                setIsLoading(false);
                              }
                            }}
                            disabled={editMode}
                          >
                            <span>{t('service.CommentView.voteDown.ButtonCallOperation', { defaultValue: '' })}</span>
                          </LoadingButton>
                        </Grid>

                        <Grid item xs={12} sm={12} md={1.0}>
                          <NumericInput
                            required={false}
                            name="downVotes"
                            id="NumericInputedemokraciaServiceUserEdemokraciaServiceProCommentsViewDefaultCommentViewEditGroupLabelWrapperGroupDownVotes"
                            label={t('service.CommentView.downVotes', { defaultValue: '' }) as string}
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
                          <Grid container sx={{ height: DIVIDER_HEIGHT }}></Grid>
                        </Grid>

                        <Grid item xs={12} sm={12} md={2.0}>
                          <CollectionAssociationButton
                            id="NavigationToPageActionedemokraciaServiceUserEdemokraciaServiceProCommentsViewEdemokraciaServiceUserEdemokraciaServiceCommentVotesButtonNavigate"
                            variant={undefined}
                            editMode={editMode}
                            navigateAction={() => buttonNavigateVotesAction(data)}
                          >
                            {t('service.CommentView.votes.ButtonNavigate', { defaultValue: 'Votes' })}
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
    </>
  );
}
