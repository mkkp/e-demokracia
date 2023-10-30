//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::service::RatingVoteDefinition.debate#View
// Page owner name: edemokracia::service::User
// Page DataElement name: debate
// Page DataElement owner name: edemokracia::service::RatingVoteDefinition

import type { FC, Dispatch, SetStateAction } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
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
  EdemokraciaDebateStatus,
  EdemokraciaIssueScope,
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceCommentStored,
  ServiceCon,
  ServiceConQueryCustomizer,
  ServiceConStored,
  ServiceDebate,
  ServiceDebateQueryCustomizer,
  ServiceDebateStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServicePro,
  ServiceProQueryCustomizer,
  ServiceProStored,
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/generated/data-api';
import {
  serviceRatingVoteDefinitionServiceForClassImpl,
  serviceDebateServiceForClassImpl,
} from '~/generated/data-axios';
import {
  useServiceDebateCloseDebateAction,
  useServiceDebateAddToFavoritesAction,
  useServiceDebateRemoveFromFavoritesAction,
  useServiceDebateCreateArgumentAction,
  useServiceDebateCreateCommentAction,
} from './actions';

import { PageActions } from './components/PageActions';
import { CreatedByLink } from './components/CreatedByLink';
import { IssueLink } from './components/IssueLink';
import { VoteDefinitionLink } from './components/VoteDefinitionLink';
import { ConsTable } from './components/ConsTable';
import { ProsTable } from './components/ProsTable';
import { CommentsTable } from './components/CommentsTable';

export type ServiceRatingVoteDefinitionDebateViewPostRefreshAction = (
  data: ServiceDebateStored,
  storeDiff: (attributeName: keyof ServiceDebateStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceDebate, string>>>,
) => Promise<void>;

export const SERVICE_RATING_VOTE_DEFINITION_DEBATE_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY =
  'ServiceRatingVoteDefinitionDebateViewPostRefreshHook';
export type ServiceRatingVoteDefinitionDebateViewPostRefreshHook =
  () => ServiceRatingVoteDefinitionDebateViewPostRefreshAction;

/**
 * Name: edemokracia::service::RatingVoteDefinition.debate#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function ServiceRatingVoteDefinitionDebateView() {
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
  const [data, setData] = useState<ServiceDebateStored>({} as unknown as ServiceDebateStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof ServiceDebateStored, any>>(
    {} as unknown as Record<keyof ServiceDebateStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof ServiceDebateStored, value: any) => void = useCallback(
    (attributeName: keyof ServiceDebateStored, value: any) => {
      const dateTypes: string[] = [];
      const dateTimeTypes: string[] = ['closeAt'];
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
  const [validation, setValidation] = useState<Map<keyof ServiceDebate, string>>(
    new Map<keyof ServiceDebate, string>(),
  );

  const queryCustomizer: ServiceDebateQueryCustomizer = {
    _mask:
      '{isNotClosed,isFavorite,isNotFavorite,title,status,closeAt,description,issue{representation},createdBy{representation},voteDefinition{title,created,status,closeAt},pros{title,upVotes,downVotes},cons{title,upVotes,downVotes},comments{created,comment,createdByName,upVotes,downVotes}}',
  };

  const { service: postRefreshHook } = useTrackService<ServiceRatingVoteDefinitionDebateViewPostRefreshHook>(
    `(${OBJECTCLASS}=${SERVICE_RATING_VOTE_DEFINITION_DEBATE_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: ServiceRatingVoteDefinitionDebateViewPostRefreshAction | undefined =
    postRefreshHook && postRefreshHook();

  const serviceDebateCloseDebateAction = useServiceDebateCloseDebateAction();
  const serviceDebateAddToFavoritesAction = useServiceDebateAddToFavoritesAction();
  const serviceDebateRemoveFromFavoritesAction = useServiceDebateRemoveFromFavoritesAction();
  const serviceDebateCreateArgumentAction = useServiceDebateCreateArgumentAction();
  const serviceDebateCreateCommentAction = useServiceDebateCreateCommentAction();

  const title: string = t('service.DebateView', { defaultValue: 'Debate View / Edit' });

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
      const res = await serviceDebateServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<ServiceDebate>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof ServiceDebateStored, any>);
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
              <Grid
                id="FlexedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditActions"
                container
                direction="row"
                alignItems="flex-start"
                justifyContent="flex-start"
                spacing={2}
              >
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <LoadingButton
                        id="ButtonedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditActionsPageActionButtonsCloseDebate"
                        loading={isLoading}
                        startIcon={<MdiIcon path="wechat" />}
                        loadingPosition="start"
                        onClick={async () => {
                          try {
                            setIsLoading(true);
                            await serviceDebateCloseDebateAction(data, () => fetchData());
                          } finally {
                            setIsLoading(false);
                          }
                        }}
                        disabled={editMode}
                      >
                        <span>
                          {t('service.DebateView.PageActionButtons.closeDebate', { defaultValue: 'Close debate' })}
                        </span>
                      </LoadingButton>
                    </Grid>

                    {!data.isFavorite && (
                      <Grid item>
                        <LoadingButton
                          id="ButtonedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditActionsPageActionButtonsAddToFavorites"
                          loading={isLoading}
                          startIcon={<MdiIcon path="star-plus" />}
                          loadingPosition="start"
                          onClick={async () => {
                            try {
                              setIsLoading(true);
                              await serviceDebateAddToFavoritesAction(data, () => fetchData());
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={editMode}
                        >
                          <span>
                            {t('service.DebateView.PageActionButtons.addToFavorites', {
                              defaultValue: 'Add to favorites',
                            })}
                          </span>
                        </LoadingButton>
                      </Grid>
                    )}
                    {!data.isNotFavorite && (
                      <Grid item>
                        <LoadingButton
                          id="ButtonedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditActionsPageActionButtonsRemoveFromFavorites"
                          loading={isLoading}
                          startIcon={<MdiIcon path="star-minus" />}
                          loadingPosition="start"
                          onClick={async () => {
                            try {
                              setIsLoading(true);
                              await serviceDebateRemoveFromFavoritesAction(data, () => fetchData());
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={editMode}
                        >
                          <span>
                            {t('service.DebateView.PageActionButtons.removeFromFavorites', {
                              defaultValue: 'Remove from favorites',
                            })}
                          </span>
                        </LoadingButton>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Card id="FlexedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditDebateLabelWrapper">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                        <MdiIcon path="wechat" sx={{ marginRight: 1 }} />
                        <Typography
                          id="LabeledemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditDebateLabelWrapperDebateLabel"
                          variant="h5"
                          component="h1"
                        >
                          {t('service.DebateView.debate.Label', { defaultValue: 'Debate' })}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditDebateLabelWrapperDebate"
                        container
                        direction="row"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12} md={8.0}>
                          <TextField
                            required={true}
                            name="title"
                            id="TextInputedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditDebateLabelWrapperDebateTitle"
                            label={t('service.DebateView.title', { defaultValue: 'Title' }) as string}
                            value={data.title ?? ''}
                            className={clsx({
                              'JUDO-viewMode': !editMode,
                              'JUDO-required': true,
                            })}
                            disabled={isLoading}
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
                          />
                        </Grid>

                        <Grid item xs={12} sm={12} md={2.0}>
                          <TextField
                            required={true}
                            name="status"
                            id="EnumerationComboedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditDebateLabelWrapperDebateStatus"
                            label={t('service.DebateView.status', { defaultValue: 'Status' }) as string}
                            value={data.status || ''}
                            className={clsx({
                              'JUDO-viewMode': !editMode,
                              'JUDO-required': true,
                            })}
                            disabled={isLoading}
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
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaDebateStatusCREATED"
                              value={'CREATED'}
                            >
                              {t('enumerations.EdemokraciaDebateStatus.CREATED', { defaultValue: 'CREATED' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaDebateStatusPENDING"
                              value={'PENDING'}
                            >
                              {t('enumerations.EdemokraciaDebateStatus.PENDING', { defaultValue: 'PENDING' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaDebateStatusACTIVE"
                              value={'ACTIVE'}
                            >
                              {t('enumerations.EdemokraciaDebateStatus.ACTIVE', { defaultValue: 'ACTIVE' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaDebateStatusCLOSED"
                              value={'CLOSED'}
                            >
                              {t('enumerations.EdemokraciaDebateStatus.CLOSED', { defaultValue: 'CLOSED' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaDebateStatusARCHIVED"
                              value={'ARCHIVED'}
                            >
                              {t('enumerations.EdemokraciaDebateStatus.ARCHIVED', { defaultValue: 'ARCHIVED' })}
                            </MenuItem>
                          </TextField>
                        </Grid>

                        <Grid item xs={12} sm={12} md={2.0}>
                          <DateTimePicker
                            ampm={false}
                            ampmInClock={false}
                            className={clsx({
                              'JUDO-viewMode': !editMode,
                              'JUDO-required': true,
                            })}
                            slotProps={{
                              textField: {
                                id: 'DateTimeInputedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditDebateLabelWrapperDebateCloseAt',
                                required: true,
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
                                const copy = new Map<keyof ServiceDebate, string>(prevValidation);
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
                            label={t('service.DebateView.closeAt', { defaultValue: 'Close at' }) as string}
                            value={serviceDateToUiDate(data.closeAt ?? null)}
                            readOnly={false || !isFormUpdateable()}
                            disabled={isLoading}
                            onChange={(newValue: Date) => {
                              storeDiff('closeAt', newValue);
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12} md={8.0}>
                          <IssueLink
                            ownerData={data}
                            readOnly={true || !isFormUpdateable()}
                            disabled={isLoading}
                            editMode={editMode}
                            fetchOwnerData={fetchData}
                            onChange={(value: ServiceIssue | ServiceIssueStored | null) => {
                              storeDiff('issue', value);
                            }}
                            validation={validation}
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
                            name="description"
                            id="TextAreaedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditDebateLabelWrapperDebateDescription"
                            label={t('service.DebateView.description', { defaultValue: 'Description' }) as string}
                            value={data.description ?? ''}
                            className={clsx({
                              'JUDO-viewMode': !editMode,
                              'JUDO-required': true,
                            })}
                            disabled={isLoading}
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
                          />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <VoteDefinitionLink
                            ownerData={data}
                            readOnly={true || !isFormUpdateable()}
                            disabled={isLoading}
                            editMode={editMode}
                            fetchOwnerData={fetchData}
                            onChange={(value: ServiceVoteDefinition | ServiceVoteDefinitionStored | null) => {
                              storeDiff('voteDefinition', value);
                            }}
                            validation={validation}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid container item xs={12} sm={12}>
              <ModeledTabs
                id="TabControlleredemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditTabBar"
                ownerData={data}
                validation={validation}
                orientation='horizontal'
                childTabs={[
                  {
                    id: 'TabedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditTabBarArguments',
                    name: 'service.DebateView.arguments',
                    label: t('service.DebateView.arguments', { defaultValue: 'Arguments' }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'account-voice',
                    nestedDataKeys: ['cons', 'pros'],
                  },
                  {
                    id: 'TabedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditTabBarComments',
                    name: 'service.DebateView.comments',
                    label: t('service.DebateView.comments', { defaultValue: 'Comments' }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'comment-text-multiple',
                    nestedDataKeys: ['comments'],
                  },
                ]}
              >
                <Grid item xs={12} sm={12}>
                  <Grid
                    id="FlexedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditTabBarArgumentsArguments"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditTabBarArgumentsArgumentsActions"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewEdemokraciaServiceUserEdemokraciaServiceDebateCreateArgumentButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="account-voice" />}
                            loadingPosition="start"
                            onClick={async () => {
                              try {
                                setIsLoading(true);
                                await serviceDebateCreateArgumentAction(data, () => fetchData());
                              } finally {
                                setIsLoading(false);
                              }
                            }}
                            disabled={!data.isNotClosed || editMode}
                          >
                            <span>
                              {t('service.DebateView.createArgument.ButtonCallOperation', {
                                defaultValue: 'Add argument',
                              })}
                            </span>
                          </LoadingButton>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6.0}>
                      <Grid
                        id="FlexedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditTabBarArgumentsArgumentsProsLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                            <MdiIcon path="chat-plus" sx={{ marginRight: 1 }} />
                            <Typography
                              id="LabeledemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditTabBarArgumentsArgumentsProsLabelWrapperProsLabel"
                              variant="h5"
                              component="h1"
                            >
                              {t('service.DebateView.pros.Label', { defaultValue: 'Pro' })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditTabBarArgumentsArgumentsProsLabelWrapperPros"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                          >
                            <ProsTable
                              isOwnerLoading={isLoading}
                              validation={validation}
                              fetchOwnerData={fetchData}
                              ownerData={data}
                              editMode={editMode}
                              isFormUpdateable={isFormUpdateable}
                              storeDiff={storeDiff}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6.0}>
                      <Grid
                        id="FlexedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditTabBarArgumentsArgumentsConsLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                            <MdiIcon path="chat-minus" sx={{ marginRight: 1 }} />
                            <Typography
                              id="LabeledemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditTabBarArgumentsArgumentsConsLabelWrapperConsLabel"
                              variant="h5"
                              component="h1"
                            >
                              {t('service.DebateView.cons.Label', { defaultValue: 'Contra' })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditTabBarArgumentsArgumentsConsLabelWrapperCons"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                          >
                            <ConsTable
                              isOwnerLoading={isLoading}
                              validation={validation}
                              fetchOwnerData={fetchData}
                              ownerData={data}
                              editMode={editMode}
                              isFormUpdateable={isFormUpdateable}
                              storeDiff={storeDiff}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Grid
                    id="FlexedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditTabBarCommentsComments"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditTabBarCommentsCommentsActions"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewEdemokraciaServiceUserEdemokraciaServiceDebateCreateCommentButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="comment-text-multiple" />}
                            loadingPosition="start"
                            onClick={async () => {
                              try {
                                setIsLoading(true);
                                await serviceDebateCreateCommentAction(data, () => fetchData());
                              } finally {
                                setIsLoading(false);
                              }
                            }}
                            disabled={!data.isNotClosed || editMode}
                          >
                            <span>
                              {t('service.DebateView.createComment.ButtonCallOperation', {
                                defaultValue: 'Add comment',
                              })}
                            </span>
                          </LoadingButton>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditTabBarCommentsCommentsCommentsLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaServiceUserEdemokraciaServiceRatingVoteDefinitionDebateViewDefaultDebateViewEditTabBarCommentsCommentsCommentsLabelWrapperComments"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                          >
                            <CommentsTable
                              isOwnerLoading={isLoading}
                              validation={validation}
                              fetchOwnerData={fetchData}
                              ownerData={data}
                              editMode={editMode}
                              isFormUpdateable={isFormUpdateable}
                              storeDiff={storeDiff}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </ModeledTabs>
            </Grid>
          </Grid>
        </Box>
      </PageContainerTransition>
    </>
  );
}
