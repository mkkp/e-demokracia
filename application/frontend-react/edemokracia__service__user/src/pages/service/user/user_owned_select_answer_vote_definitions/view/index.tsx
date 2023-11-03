//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::service::User.userOwnedSelectAnswerVoteDefinitions#View
// Page owner name: edemokracia::service::User
// Page DataElement name: userOwnedSelectAnswerVoteDefinitions
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
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteEntryStored,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
} from '~/generated/data-api';
import {
  serviceUserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl,
  serviceSelectAnswerVoteDefinitionServiceForClassImpl,
} from '~/generated/data-axios';
import {
  useServiceSelectAnswerVoteDefinitionTakeBackVoteAction,
  useServiceSelectAnswerVoteDefinitionVoteAction,
  useButtonNavigateIssueAction,
} from './actions';

import { PageActions } from './components/PageActions';
import { UserVoteEntryLink } from './components/UserVoteEntryLink';
import { VoteSelectionsTable } from './components/VoteSelectionsTable';
import { VoteEntriesTable } from './components/VoteEntriesTable';

export type ServiceUserUserOwnedSelectAnswerVoteDefinitionsViewPostRefreshAction = (
  data: ServiceSelectAnswerVoteDefinitionStored,
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteDefinitionStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceSelectAnswerVoteDefinition, string>>>,
) => Promise<void>;

export const SERVICE_USER_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY =
  'ServiceUserUserOwnedSelectAnswerVoteDefinitionsViewPostRefreshHook';
export type ServiceUserUserOwnedSelectAnswerVoteDefinitionsViewPostRefreshHook =
  () => ServiceUserUserOwnedSelectAnswerVoteDefinitionsViewPostRefreshAction;

/**
 * Name: edemokracia::service::User.userOwnedSelectAnswerVoteDefinitions#View
 * Is Access: true
 * Is Dashboard: false
 * Type: View
 * Edit Mode Available: true
 **/
export default function ServiceUserUserOwnedSelectAnswerVoteDefinitionsView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleUpdateError = useErrorHandler<ServiceSelectAnswerVoteDefinition>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Update)(component=ServiceUserUserOwnedSelectAnswerVoteDefinitionsView))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceSelectAnswerVoteDefinitionStored>(
    {} as unknown as ServiceSelectAnswerVoteDefinitionStored,
  );
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof ServiceSelectAnswerVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof ServiceSelectAnswerVoteDefinitionStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof ServiceSelectAnswerVoteDefinitionStored, value: any) => void = useCallback(
    (attributeName: keyof ServiceSelectAnswerVoteDefinitionStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof ServiceSelectAnswerVoteDefinition, string>>(
    new Map<keyof ServiceSelectAnswerVoteDefinition, string>(),
  );

  const queryCustomizer: ServiceSelectAnswerVoteDefinitionQueryCustomizer = {
    _mask:
      '{userHasNoVoteEntry,userHasVoteEntry,title,closeAt,status,created,description,userVoteEntry{valueRepresentation,created},voteSelections{description,title},voteEntries{created,createdBy,valueRepresentation}}',
  };

  const { service: postRefreshHook } =
    useTrackService<ServiceUserUserOwnedSelectAnswerVoteDefinitionsViewPostRefreshHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
    );
  const postRefreshAction: ServiceUserUserOwnedSelectAnswerVoteDefinitionsViewPostRefreshAction | undefined =
    postRefreshHook && postRefreshHook();

  const serviceSelectAnswerVoteDefinitionTakeBackVoteAction = useServiceSelectAnswerVoteDefinitionTakeBackVoteAction();
  const serviceSelectAnswerVoteDefinitionVoteAction = useServiceSelectAnswerVoteDefinitionVoteAction();
  const buttonNavigateIssueAction = useButtonNavigateIssueAction();

  const title: string = t('service.SelectAnswerVoteDefinitionView', {
    defaultValue: 'SelectAnswerVoteDefinition View / Edit',
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
      const res = await serviceSelectAnswerVoteDefinitionServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as ServiceSelectAnswerVoteDefinitionStored,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof ServiceSelectAnswerVoteDefinitionStored, any>);
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
      const res = await serviceSelectAnswerVoteDefinitionServiceForClassImpl.update(payloadDiff);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceSelectAnswerVoteDefinition, string>());
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
              <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditUserVoteEntryGroupLabelWrapper">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                        <Typography
                          id="LabeledemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupLabel"
                          variant="h5"
                          component="h1"
                        >
                          {t('service.SelectAnswerVoteDefinitionView.userVoteEntryGroup.Label', {
                            defaultValue: 'My vote entry',
                          })}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroup"
                        container
                        direction="row"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        {!data.userHasNoVoteEntry && (
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupUserVote"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupUserVoteVirtualForUserVote"
                                  container
                                  direction="row"
                                  alignItems="flex-start"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12} md={4.0}>
                                    <LoadingButton
                                      id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewEdemokraciaServiceUserEdemokraciaServiceSelectAnswerVoteDefinitionTakeBackVoteButtonCallOperation"
                                      loading={isLoading}
                                      variant={undefined}
                                      startIcon={<MdiIcon path="delete" />}
                                      loadingPosition="start"
                                      onClick={async () => {
                                        try {
                                          setIsLoading(true);
                                          await serviceSelectAnswerVoteDefinitionTakeBackVoteAction(data, () =>
                                            fetchData(),
                                          );
                                        } finally {
                                          setIsLoading(false);
                                        }
                                      }}
                                      disabled={!data.userHasVoteEntry || editMode}
                                    >
                                      <span>
                                        {t('service.SelectAnswerVoteDefinitionView.takeBackVote.ButtonCallOperation', {
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
                                        value: ServiceSelectAnswerVoteEntry | ServiceSelectAnswerVoteEntryStored | null,
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
                              id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupTakeVote"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <LoadingButton
                                  id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewEdemokraciaServiceUserEdemokraciaServiceSelectAnswerVoteDefinitionVoteButtonCallOperation"
                                  loading={isLoading}
                                  variant={undefined}
                                  startIcon={<MdiIcon path="vote" />}
                                  loadingPosition="start"
                                  onClick={async () => {
                                    try {
                                      setIsLoading(true);
                                      await serviceSelectAnswerVoteDefinitionVoteAction(data, () => fetchData());
                                    } finally {
                                      setIsLoading(false);
                                    }
                                  }}
                                  disabled={!data.userHasNoVoteEntry || editMode}
                                >
                                  <span>
                                    {t('service.SelectAnswerVoteDefinitionView.vote.ButtonCallOperation', {
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
              <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBase">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBaseVirtual"
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
                            id="TextInputedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBaseVirtualTitle"
                            label={
                              t('service.SelectAnswerVoteDefinitionView.title', { defaultValue: 'Title' }) as string
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
                                id: 'DateTimeInputedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBaseVirtualCloseAt',
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
                                const copy = new Map<keyof ServiceSelectAnswerVoteDefinition, string>(prevValidation);
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
                              t('service.SelectAnswerVoteDefinitionView.closeAt', { defaultValue: 'CloseAt' }) as string
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
                            id="EnumerationComboedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBaseVirtualStatus"
                            label={
                              t('service.SelectAnswerVoteDefinitionView.status', { defaultValue: 'Status' }) as string
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

                        <Grid item xs={12} sm={12} md={6.0}>
                          <AssociationButton
                            id="NavigationToPageActionedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewEdemokraciaServiceUserEdemokraciaServiceSelectAnswerVoteDefinitionIssueButtonNavigate"
                            variant={undefined}
                            editMode={editMode}
                            navigateAction={(target) => buttonNavigateIssueAction(data, target)}
                            owner={data}
                            fetchCall={async (owner: JudoIdentifiable<any>) =>
                              serviceSelectAnswerVoteDefinitionServiceForClassImpl.getIssue(owner, {
                                _mask: '{}',
                              })
                            }
                          >
                            {t('service.SelectAnswerVoteDefinitionView.issue.ButtonNavigate', {
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
                                id: 'DateTimeInputedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBaseVirtualCreated',
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
                                const copy = new Map<keyof ServiceSelectAnswerVoteDefinition, string>(prevValidation);
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
                              t('service.SelectAnswerVoteDefinitionView.created', { defaultValue: 'Created' }) as string
                            }
                            value={serviceDateToUiDate(data.created ?? null)}
                            readOnly={false || !isFormUpdateable()}
                            disabled={isLoading}
                            onChange={(newValue: Date) => {
                              storeDiff('created', newValue);
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <TextField
                            required={true}
                            name="description"
                            id="TextAreaedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBaseVirtualDescription"
                            label={
                              t('service.SelectAnswerVoteDefinitionView.description', {
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

                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBaseVirtualVoteSelectionsLabelWrapper"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                                <MdiIcon path="table_rows" sx={{ marginRight: 1 }} />
                                <Typography
                                  id="LabeledemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBaseVirtualVoteSelectionsLabelWrapperVoteSelectionsLabel"
                                  variant="h5"
                                  component="h1"
                                >
                                  {t('service.SelectAnswerVoteDefinitionView.voteSelections.Label', {
                                    defaultValue: 'VoteSelections',
                                  })}
                                </Typography>
                              </Grid>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="TableedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditVoteEntryBaseVirtualVoteSelectionsLabelWrapperVoteSelections"
                                container
                                direction="column"
                                alignItems="stretch"
                                justifyContent="flex-start"
                              >
                                <VoteSelectionsTable
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
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Grid
                id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditEntriesLabelWrapper"
                container
                direction="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                spacing={2}
              >
                <Grid item xs={12} sm={12}>
                  <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                    <Typography
                      id="LabeledemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditEntriesLabelWrapperEntriesLabel"
                      variant="h5"
                      component="h1"
                    >
                      {t('service.SelectAnswerVoteDefinitionView.entries.Label', { defaultValue: 'Entries' })}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Grid
                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditEntriesLabelWrapperEntries"
                    container
                    direction="row"
                    alignItems="stretch"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditEntriesLabelWrapperEntriesVoteEntriesLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaServiceUserEdemokraciaServiceUserUserOwnedSelectAnswerVoteDefinitionsViewDefaultSelectAnswerVoteDefinitionViewEditEntriesLabelWrapperEntriesVoteEntriesLabelWrapperVoteEntries"
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
