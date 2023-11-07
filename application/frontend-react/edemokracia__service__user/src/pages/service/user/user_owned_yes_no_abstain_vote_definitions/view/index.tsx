//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::service::User.userOwnedYesNoAbstainVoteDefinitions#View
// Page owner name: edemokracia::service::User
// Page DataElement name: userOwnedYesNoAbstainVoteDefinitions
// Page DataElement owner name: edemokracia::service::User

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
  EdemokraciaVoteStatus,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceYesNoAbstainVoteEntry,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceYesNoAbstainVoteEntryStored,
} from '~/generated/data-api';
import {
  serviceUserServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl,
  serviceYesNoAbstainVoteDefinitionServiceForClassImpl,
} from '~/generated/data-axios';
import {
  useServiceYesNoAbstainVoteDefinitionAddToFavoritesAction,
  useServiceYesNoAbstainVoteDefinitionRemoveFromFavoritesAction,
  useServiceYesNoAbstainVoteDefinitionCloseVoteAction,
  useServiceYesNoAbstainVoteDefinitionActivateAction,
  useServiceYesNoAbstainVoteDefinitionDeleteOrArchiveAction,
  useServiceYesNoAbstainVoteDefinitionTakeBackVoteAction,
  useServiceYesNoAbstainVoteDefinitionVoteAction,
  useButtonNavigateIssueAction,
} from './actions';

import { PageActions } from './components/PageActions';
import { OwnerLink } from './components/OwnerLink';
import { UserVoteEntryLink } from './components/UserVoteEntryLink';
import { VoteEntriesTable } from './components/VoteEntriesTable';

export type ServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewPostRefreshAction = (
  data: ServiceYesNoAbstainVoteDefinitionStored,
  storeDiff: (attributeName: keyof ServiceYesNoAbstainVoteDefinitionStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceYesNoAbstainVoteDefinition, string>>>,
) => Promise<void>;

export const SERVICE_USER_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY =
  'ServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewPostRefreshHook';
export type ServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewPostRefreshHook =
  () => ServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewPostRefreshAction;

/**
 * Name: edemokracia::service::User.userOwnedYesNoAbstainVoteDefinitions#View
 * Is Access: true
 * Is Dashboard: false
 * Type: View
 * Edit Mode Available: true
 **/
export default function ServiceUserUserOwnedYesNoAbstainVoteDefinitionsView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleUpdateError = useErrorHandler<ServiceYesNoAbstainVoteDefinition>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Update)(component=ServiceUserUserOwnedYesNoAbstainVoteDefinitionsView))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceYesNoAbstainVoteDefinitionStored>(
    {} as unknown as ServiceYesNoAbstainVoteDefinitionStored,
  );
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof ServiceYesNoAbstainVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof ServiceYesNoAbstainVoteDefinitionStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof ServiceYesNoAbstainVoteDefinitionStored, value: any) => void = useCallback(
    (attributeName: keyof ServiceYesNoAbstainVoteDefinitionStored, value: any) => {
      const dateTypes: string[] = [];
      const dateTimeTypes: string[] = [
        'closeAt',

        'created',
      ];
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
  const [validation, setValidation] = useState<Map<keyof ServiceYesNoAbstainVoteDefinition, string>>(
    new Map<keyof ServiceYesNoAbstainVoteDefinition, string>(),
  );

  const queryCustomizer: ServiceYesNoAbstainVoteDefinitionQueryCustomizer = {
    _mask:
      '{isNotFavorite,isFavorite,isVoteNotOpen,isVoteNotEditable,isVoteNotDeletable,userHasNoVoteEntry,userHasVoteEntry,title,closeAt,status,created,description,userVoteEntry{value,created},owner{representation},voteEntries{value,created,createdBy}}',
  };

  const { service: postRefreshHook } =
    useTrackService<ServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewPostRefreshHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
    );
  const postRefreshAction: ServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewPostRefreshAction | undefined =
    postRefreshHook && postRefreshHook();

  const serviceYesNoAbstainVoteDefinitionAddToFavoritesAction =
    useServiceYesNoAbstainVoteDefinitionAddToFavoritesAction();
  const serviceYesNoAbstainVoteDefinitionRemoveFromFavoritesAction =
    useServiceYesNoAbstainVoteDefinitionRemoveFromFavoritesAction();
  const serviceYesNoAbstainVoteDefinitionCloseVoteAction = useServiceYesNoAbstainVoteDefinitionCloseVoteAction();
  const serviceYesNoAbstainVoteDefinitionActivateAction = useServiceYesNoAbstainVoteDefinitionActivateAction();
  const serviceYesNoAbstainVoteDefinitionDeleteOrArchiveAction =
    useServiceYesNoAbstainVoteDefinitionDeleteOrArchiveAction();
  const serviceYesNoAbstainVoteDefinitionTakeBackVoteAction = useServiceYesNoAbstainVoteDefinitionTakeBackVoteAction();
  const serviceYesNoAbstainVoteDefinitionVoteAction = useServiceYesNoAbstainVoteDefinitionVoteAction();
  const buttonNavigateIssueAction = useButtonNavigateIssueAction();

  const title: string = t('service.YesNoAbstainVoteDefinitionView', {
    defaultValue: 'YesNoAbstainVoteDefinition View / Edit',
  });

  const isFormUpdateable = useCallback(() => {
    return true && typeof data?.__updateable === 'boolean' && data?.__updateable;
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
      const res = await serviceYesNoAbstainVoteDefinitionServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as ServiceYesNoAbstainVoteDefinitionStored,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof ServiceYesNoAbstainVoteDefinitionStored, any>);
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

  async function submit() {
    setIsLoading(true);

    try {
      const res = await serviceYesNoAbstainVoteDefinitionServiceForClassImpl.update(payloadDiff);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceYesNoAbstainVoteDefinition, string>());
        await fetchData();
        setEditMode(false);
      }
    } catch (error) {
      handleUpdateError(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
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
          submit={submit}
        />
      </PageHeader>
      <PageContainerTransition>
        <Box sx={mainContainerPadding}>
          <Grid
            className="access-page-data"
            container
            spacing={2}
            direction="column"
            alignItems="stretch"
            justifyContent="flex-start"
          >
            <Grid item xs={12} sm={12}>
              <Grid
                id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditActions"
                container
                direction="row"
                alignItems="flex-start"
                justifyContent="flex-start"
                spacing={2}
              >
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    {!data.isNotFavorite && (
                      <Grid item>
                        <LoadingButton
                          id="ButtonedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditActionsPageActionButtonsAddToFavorites"
                          loading={isLoading}
                          startIcon={<MdiIcon path="star-plus" />}
                          loadingPosition="start"
                          onClick={async () => {
                            try {
                              setIsLoading(true);
                              await serviceYesNoAbstainVoteDefinitionAddToFavoritesAction(data, () => fetchData());
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={editMode}
                        >
                          <span>
                            {t('service.YesNoAbstainVoteDefinitionView.PageActionButtons.addToFavorites', {
                              defaultValue: 'Add to favorites',
                            })}
                          </span>
                        </LoadingButton>
                      </Grid>
                    )}
                    {!data.isFavorite && (
                      <Grid item>
                        <LoadingButton
                          id="ButtonedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditActionsPageActionButtonsRemoveFromFavorites"
                          loading={isLoading}
                          startIcon={<MdiIcon path="star-minus" />}
                          loadingPosition="start"
                          onClick={async () => {
                            try {
                              setIsLoading(true);
                              await serviceYesNoAbstainVoteDefinitionRemoveFromFavoritesAction(data, () => fetchData());
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={editMode}
                        >
                          <span>
                            {t('service.YesNoAbstainVoteDefinitionView.PageActionButtons.removeFromFavorites', {
                              defaultValue: 'Remove from favorites',
                            })}
                          </span>
                        </LoadingButton>
                      </Grid>
                    )}
                    {!data.isVoteNotOpen && (
                      <Grid item>
                        <LoadingButton
                          id="ButtonedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditActionsPageActionButtonsCloseVote"
                          loading={isLoading}
                          startIcon={<MdiIcon path="lock-check" />}
                          loadingPosition="start"
                          onClick={async () => {
                            try {
                              setIsLoading(true);
                              await serviceYesNoAbstainVoteDefinitionCloseVoteAction(data, () => fetchData());
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={editMode}
                        >
                          <span>
                            {t('service.YesNoAbstainVoteDefinitionView.PageActionButtons.closeVote', {
                              defaultValue: 'Close Vote',
                            })}
                          </span>
                        </LoadingButton>
                      </Grid>
                    )}
                    {!data.isVoteNotEditable && (
                      <Grid item>
                        <LoadingButton
                          id="ButtonedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditActionsPageActionButtonsActivate"
                          loading={isLoading}
                          startIcon={<MdiIcon path="lock-open" />}
                          loadingPosition="start"
                          onClick={async () => {
                            try {
                              setIsLoading(true);
                              await serviceYesNoAbstainVoteDefinitionActivateAction(data, () => fetchData());
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={editMode}
                        >
                          <span>
                            {t('service.YesNoAbstainVoteDefinitionView.PageActionButtons.activate', {
                              defaultValue: 'Activate',
                            })}
                          </span>
                        </LoadingButton>
                      </Grid>
                    )}
                    {!data.isVoteNotDeletable && (
                      <Grid item>
                        <LoadingButton
                          id="ButtonedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditActionsPageActionButtonsDeleteOrArchive"
                          loading={isLoading}
                          startIcon={<MdiIcon path="delete" />}
                          loadingPosition="start"
                          onClick={async () => {
                            try {
                              setIsLoading(true);
                              await serviceYesNoAbstainVoteDefinitionDeleteOrArchiveAction(data, () => fetchData());
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={editMode}
                        >
                          <span>
                            {t('service.YesNoAbstainVoteDefinitionView.PageActionButtons.deleteOrArchive', {
                              defaultValue: 'Delete',
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
              <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditUserVoteEntryGroupLabelWrapper">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                        <Typography
                          id="LabeledemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupLabel"
                          variant="h5"
                          component="h1"
                        >
                          {t('service.YesNoAbstainVoteDefinitionView.userVoteEntryGroup.Label', {
                            defaultValue: 'My vote entry',
                          })}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroup"
                        container
                        direction="row"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        {!data.userHasNoVoteEntry && (
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupUserVote"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupUserVoteVirtualForUserVote"
                                  container
                                  direction="row"
                                  alignItems="flex-start"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12} md={4.0}>
                                    <LoadingButton
                                      id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewEdemokraciaServiceUserEdemokraciaServiceYesNoAbstainVoteDefinitionTakeBackVoteButtonCallOperation"
                                      loading={isLoading}
                                      variant={undefined}
                                      startIcon={<MdiIcon path="delete" />}
                                      loadingPosition="start"
                                      onClick={async () => {
                                        try {
                                          setIsLoading(true);
                                          await serviceYesNoAbstainVoteDefinitionTakeBackVoteAction(data, () =>
                                            fetchData(),
                                          );
                                        } finally {
                                          setIsLoading(false);
                                        }
                                      }}
                                      disabled={!data.userHasVoteEntry || editMode}
                                    >
                                      <span>
                                        {t('service.YesNoAbstainVoteDefinitionView.takeBackVote.ButtonCallOperation', {
                                          defaultValue: 'TakeBackVote',
                                        })}
                                      </span>
                                    </LoadingButton>
                                  </Grid>

                                  <Grid item xs={12} sm={12} md={4.0}>
                                    <UserVoteEntryLink
                                      ownerData={data}
                                      readOnly={true || !isFormUpdateable()}
                                      disabled={isLoading}
                                      editMode={editMode}
                                      fetchOwnerData={fetchData}
                                      onChange={(
                                        value: ServiceYesNoAbstainVoteEntry | ServiceYesNoAbstainVoteEntryStored | null,
                                      ) => {
                                        storeDiff('userVoteEntry', value);
                                      }}
                                      validation={validation}
                                    />
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        )}

                        {!data.userHasVoteEntry && (
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupTakeVote"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <LoadingButton
                                  id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewEdemokraciaServiceUserEdemokraciaServiceYesNoAbstainVoteDefinitionVoteButtonCallOperation"
                                  loading={isLoading}
                                  variant={undefined}
                                  startIcon={<MdiIcon path="vote" />}
                                  loadingPosition="start"
                                  onClick={async () => {
                                    try {
                                      setIsLoading(true);
                                      await serviceYesNoAbstainVoteDefinitionVoteAction(data, () => fetchData());
                                    } finally {
                                      setIsLoading(false);
                                    }
                                  }}
                                  disabled={!data.userHasNoVoteEntry || editMode}
                                >
                                  <span>
                                    {t('service.YesNoAbstainVoteDefinitionView.vote.ButtonCallOperation', {
                                      defaultValue: 'Take a vote',
                                    })}
                                  </span>
                                </LoadingButton>
                              </Grid>
                            </Grid>
                          </Grid>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditVoteEntryBase">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditVoteEntryBaseVirtual"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <TextField
                            required={true}
                            name="title"
                            id="TextInputedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditVoteEntryBaseVirtualTitle"
                            label={
                              t('service.YesNoAbstainVoteDefinitionView.title', { defaultValue: 'Title' }) as string
                            }
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
                                id: 'DateTimeInputedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditVoteEntryBaseVirtualCloseAt',
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
                                const copy = new Map<keyof ServiceYesNoAbstainVoteDefinition, string>(prevValidation);
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
                              t('service.YesNoAbstainVoteDefinitionView.closeAt', { defaultValue: 'CloseAt' }) as string
                            }
                            value={serviceDateToUiDate(data.closeAt ?? null)}
                            readOnly={false || !isFormUpdateable()}
                            disabled={isLoading}
                            onChange={(newValue: Date) => {
                              storeDiff('closeAt', newValue);
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12} md={4.0}>
                          <TextField
                            required={true}
                            name="status"
                            id="EnumerationComboedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditVoteEntryBaseVirtualStatus"
                            label={
                              t('service.YesNoAbstainVoteDefinitionView.status', { defaultValue: 'Status' }) as string
                            }
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
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteStatusCREATED"
                              value={'CREATED'}
                            >
                              {t('enumerations.EdemokraciaVoteStatus.CREATED', { defaultValue: 'CREATED' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteStatusPENDING"
                              value={'PENDING'}
                            >
                              {t('enumerations.EdemokraciaVoteStatus.PENDING', { defaultValue: 'PENDING' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteStatusACTIVE"
                              value={'ACTIVE'}
                            >
                              {t('enumerations.EdemokraciaVoteStatus.ACTIVE', { defaultValue: 'ACTIVE' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteStatusCLOSED"
                              value={'CLOSED'}
                            >
                              {t('enumerations.EdemokraciaVoteStatus.CLOSED', { defaultValue: 'CLOSED' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteStatusARCHIVED"
                              value={'ARCHIVED'}
                            >
                              {t('enumerations.EdemokraciaVoteStatus.ARCHIVED', { defaultValue: 'ARCHIVED' })}
                            </MenuItem>
                          </TextField>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4.0}>
                          <AssociationButton
                            id="NavigationToPageActionedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewEdemokraciaServiceUserEdemokraciaServiceYesNoAbstainVoteDefinitionIssueButtonNavigate"
                            variant={undefined}
                            editMode={editMode}
                            navigateAction={(target) => buttonNavigateIssueAction(data, target)}
                            owner={data}
                            fetchCall={async (owner: JudoIdentifiable<any>) =>
                              serviceYesNoAbstainVoteDefinitionServiceForClassImpl.getIssue(owner, {
                                _mask: '{}',
                              })
                            }
                          >
                            {t('service.YesNoAbstainVoteDefinitionView.issue.ButtonNavigate', {
                              defaultValue: 'Issue',
                            })}
                            <MdiIcon path="arrow-right" />
                          </AssociationButton>
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
                                id: 'DateTimeInputedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditVoteEntryBaseVirtualCreated',
                                required: true,
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
                                const copy = new Map<keyof ServiceYesNoAbstainVoteDefinition, string>(prevValidation);
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
                              t('service.YesNoAbstainVoteDefinitionView.created', { defaultValue: 'Created' }) as string
                            }
                            value={serviceDateToUiDate(data.created ?? null)}
                            readOnly={false || !isFormUpdateable()}
                            disabled={isLoading}
                            onChange={(newValue: Date) => {
                              storeDiff('created', newValue);
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12} md={4.0}>
                          <OwnerLink
                            ownerData={data}
                            readOnly={false || !isFormUpdateable()}
                            disabled={isLoading}
                            editMode={editMode}
                            fetchOwnerData={fetchData}
                            onChange={(value: ServiceServiceUser | ServiceServiceUserStored | null) => {
                              storeDiff('owner', value);
                            }}
                            validation={validation}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <TextField
                            required={true}
                            name="description"
                            id="TextAreaedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditVoteEntryBaseVirtualDescription"
                            label={
                              t('service.YesNoAbstainVoteDefinitionView.description', {
                                defaultValue: 'Description',
                              }) as string
                            }
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
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Grid
                id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditEntriesLabelWrapper"
                container
                direction="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                spacing={2}
              >
                <Grid item xs={12} sm={12}>
                  <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                    <Typography
                      id="LabeledemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditEntriesLabelWrapperEntriesLabel"
                      variant="h5"
                      component="h1"
                    >
                      {t('service.YesNoAbstainVoteDefinitionView.entries.Label', { defaultValue: 'Entries' })}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Grid
                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditEntriesLabelWrapperEntries"
                    container
                    direction="row"
                    alignItems="stretch"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditEntriesLabelWrapperEntriesVoteEntriesLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaServiceUserEdemokraciaServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewDefaultYesNoAbstainVoteDefinitionViewEditEntriesLabelWrapperEntriesVoteEntriesLabelWrapperVoteEntries"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                          >
                            <VoteEntriesTable
                              isOwnerLoading={isLoading}
                              validation={validation}
                              fetchOwnerData={fetchData}
                              refreshCounter={refreshCounter}
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
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </PageContainerTransition>
    </>
  );
}
