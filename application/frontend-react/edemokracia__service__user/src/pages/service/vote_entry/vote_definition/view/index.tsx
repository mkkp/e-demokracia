//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::service::VoteEntry.voteDefinition#View
// Page owner name: edemokracia::service::User
// Page DataElement name: voteDefinition
// Page DataElement owner name: edemokracia::service::VoteEntry

import type { FC, Dispatch, SetStateAction } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent, InputAdornment, MenuItem, TextField } from '@mui/material';
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
  EdemokraciaIssueScope,
  EdemokraciaVoteStatus,
  EdemokraciaVoteType,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
  ServiceVoteEntry,
  ServiceVoteEntryStored,
} from '~/generated/data-api';
import { serviceVoteEntryServiceForClassImpl, serviceVoteDefinitionServiceForClassImpl } from '~/generated/data-axios';
import {
  useButtonNavigateIssueAction,
  useServiceVoteDefinitionVoteYesNoAction,
  useServiceVoteDefinitionVoteYesNoAbstainAction,
  useServiceVoteDefinitionVoteSelectAnswerAction,
  useServiceVoteDefinitionVoteRatingAction,
} from './actions';

import { PageActions } from './components/PageActions';

export type ServiceVoteEntryVoteDefinitionViewPostRefreshAction = (
  data: ServiceVoteDefinitionStored,
  storeDiff: (attributeName: keyof ServiceVoteDefinitionStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceVoteDefinition, string>>>,
) => Promise<void>;

export const SERVICE_VOTE_ENTRY_VOTE_DEFINITION_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY =
  'ServiceVoteEntryVoteDefinitionViewPostRefreshHook';
export type ServiceVoteEntryVoteDefinitionViewPostRefreshHook =
  () => ServiceVoteEntryVoteDefinitionViewPostRefreshAction;

/**
 * Name: edemokracia::service::VoteEntry.voteDefinition#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function ServiceVoteEntryVoteDefinitionView() {
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
  const [data, setData] = useState<ServiceVoteDefinitionStored>({} as unknown as ServiceVoteDefinitionStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof ServiceVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof ServiceVoteDefinitionStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof ServiceVoteDefinitionStored, value: any) => void = useCallback(
    (attributeName: keyof ServiceVoteDefinitionStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof ServiceVoteDefinition, string>>(
    new Map<keyof ServiceVoteDefinition, string>(),
  );

  const queryCustomizer: ServiceVoteDefinitionQueryCustomizer = {
    _mask:
      '{title,closeAt,status,created,description,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType}',
  };

  const { service: postRefreshHook } = useTrackService<ServiceVoteEntryVoteDefinitionViewPostRefreshHook>(
    `(${OBJECTCLASS}=${SERVICE_VOTE_ENTRY_VOTE_DEFINITION_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: ServiceVoteEntryVoteDefinitionViewPostRefreshAction | undefined =
    postRefreshHook && postRefreshHook();

  const buttonNavigateIssueAction = useButtonNavigateIssueAction();
  const serviceVoteDefinitionVoteYesNoAction = useServiceVoteDefinitionVoteYesNoAction();
  const serviceVoteDefinitionVoteYesNoAbstainAction = useServiceVoteDefinitionVoteYesNoAbstainAction();
  const serviceVoteDefinitionVoteSelectAnswerAction = useServiceVoteDefinitionVoteSelectAnswerAction();
  const serviceVoteDefinitionVoteRatingAction = useServiceVoteDefinitionVoteRatingAction();

  const title: string = t('service.VoteDefinitionView', { defaultValue: 'VoteDefinition View / Edit' });

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
      const res = await serviceVoteDefinitionServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<ServiceVoteDefinition>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof ServiceVoteDefinitionStored, any>);
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
              <Card id="FlexedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewDefaultVoteDefinitionViewEditGroup">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required={true}
                        name="title"
                        id="TextInputedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewDefaultVoteDefinitionViewEditGroupTitle"
                        label={t('service.VoteDefinitionView.title', { defaultValue: 'Title' }) as string}
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

                    <Grid item xs={12} sm={12}>
                      <DateTimePicker
                        ampm={false}
                        ampmInClock={false}
                        className={clsx({
                          'JUDO-viewMode': !editMode,
                          'JUDO-required': true,
                        })}
                        slotProps={{
                          textField: {
                            id: 'DateTimeInputedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewDefaultVoteDefinitionViewEditGroupCloseAt',
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
                            const copy = new Map<keyof ServiceVoteDefinition, string>(prevValidation);
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
                        label={t('service.VoteDefinitionView.closeAt', { defaultValue: 'CloseAt' }) as string}
                        value={serviceDateToUiDate(data.closeAt ?? null)}
                        readOnly={false || !isFormUpdateable()}
                        disabled={isLoading}
                        onChange={(newValue: Date) => {
                          storeDiff('closeAt', newValue);
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <TextField
                        required={true}
                        name="status"
                        id="EnumerationComboedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewDefaultVoteDefinitionViewEditGroupStatus"
                        label={t('service.VoteDefinitionView.status', { defaultValue: 'Status' }) as string}
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

                    <Grid item xs={12} sm={12}>
                      <AssociationButton
                        id="NavigationToPageActionedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewEdemokraciaServiceUserEdemokraciaServiceVoteDefinitionIssueButtonNavigate"
                        variant={undefined}
                        editMode={editMode}
                        navigateAction={(target) => buttonNavigateIssueAction(data, target)}
                        owner={data}
                        fetchCall={async (owner: JudoIdentifiable<any>) =>
                          serviceVoteDefinitionServiceForClassImpl.getIssue(owner, {
                            _mask: '{}',
                          })
                        }
                      >
                        {t('service.VoteDefinitionView.issue.ButtonNavigate', { defaultValue: 'Issue' })}
                        <MdiIcon path="arrow-right" />
                      </AssociationButton>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <DateTimePicker
                        ampm={false}
                        ampmInClock={false}
                        className={clsx({
                          'JUDO-viewMode': !editMode,
                          'JUDO-required': true,
                        })}
                        slotProps={{
                          textField: {
                            id: 'DateTimeInputedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewDefaultVoteDefinitionViewEditGroupCreated',
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
                            const copy = new Map<keyof ServiceVoteDefinition, string>(prevValidation);
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
                        label={t('service.VoteDefinitionView.created', { defaultValue: 'Created' }) as string}
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
                        id="TextAreaedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewDefaultVoteDefinitionViewEditGroupDescription"
                        label={t('service.VoteDefinitionView.description', { defaultValue: 'Description' }) as string}
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
                </CardContent>
              </Card>
            </Grid>

            <Grid container item xs={12} sm={12}>
              <ModeledTabs
                id="TabControlleredemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewDefaultVoteDefinitionViewEditTabBar"
                ownerData={data}
                validation={validation}
                orientation='horizontal'
                childTabs={[
                  {
                    id: 'TabedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewDefaultVoteDefinitionViewEditTabBarYesnovote',
                    name: 'service.VoteDefinitionView.yesnovote',
                    label: t('service.VoteDefinitionView.yesnovote', { defaultValue: 'Yes / No vote' }) as string,
                    disabled: !data.isYesNoType || isLoading,
                    hidden: data.isNotYesNoType,
                    nestedDataKeys: [],
                  },
                  {
                    id: 'TabedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewDefaultVoteDefinitionViewEditTabBarYesnoabstainvote',
                    name: 'service.VoteDefinitionView.yesnoabstainvote',
                    label: t('service.VoteDefinitionView.yesnoabstainvote', {
                      defaultValue: 'Yes / No / Abstain vote',
                    }) as string,
                    disabled: !data.isYesNoAbstainType || isLoading,
                    hidden: data.isNotYesNoAbstainType,
                    nestedDataKeys: [],
                  },
                  {
                    id: 'TabedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewDefaultVoteDefinitionViewEditTabBarSelectanswervote',
                    name: 'service.VoteDefinitionView.selectanswervote',
                    label: t('service.VoteDefinitionView.selectanswervote', {
                      defaultValue: 'Select answer vote',
                    }) as string,
                    disabled: !data.isSelectAnswerType || isLoading,
                    hidden: data.isNotSelectAnswerType,
                    nestedDataKeys: [],
                  },
                  {
                    id: 'TabedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewDefaultVoteDefinitionViewEditTabBarRatingvote',
                    name: 'service.VoteDefinitionView.ratingvote',
                    label: t('service.VoteDefinitionView.ratingvote', { defaultValue: 'Rating vote' }) as string,
                    disabled: !data.isRatingType || isLoading,
                    hidden: data.isNotRatingType,
                    nestedDataKeys: [],
                  },
                ]}
              >
                {!data.isNotYesNoType && (
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewDefaultVoteDefinitionViewEditTabBarYesnovoteYesnovote"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      {!data.isNotYesNoType && (
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewEdemokraciaServiceUserEdemokraciaServiceVoteDefinitionVoteYesNoButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="vote" />}
                            loadingPosition="start"
                            onClick={async () => {
                              try {
                                setIsLoading(true);
                                await serviceVoteDefinitionVoteYesNoAction(data, () => fetchData());
                              } finally {
                                setIsLoading(false);
                              }
                            }}
                            disabled={!data.isYesNoType || editMode}
                          >
                            <span>
                              {t('service.VoteDefinitionView.voteYesNo.ButtonCallOperation', {
                                defaultValue: 'Take a vote',
                              })}
                            </span>
                          </LoadingButton>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                )}

                {!data.isNotYesNoAbstainType && (
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewDefaultVoteDefinitionViewEditTabBarYesnoabstainvoteYesnoabstainvote"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      {!data.isNotYesNoAbstainType && (
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewEdemokraciaServiceUserEdemokraciaServiceVoteDefinitionVoteYesNoAbstainButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="vote" />}
                            loadingPosition="start"
                            onClick={async () => {
                              try {
                                setIsLoading(true);
                                await serviceVoteDefinitionVoteYesNoAbstainAction(data, () => fetchData());
                              } finally {
                                setIsLoading(false);
                              }
                            }}
                            disabled={!data.isYesNoAbstainType || editMode}
                          >
                            <span>
                              {t('service.VoteDefinitionView.voteYesNoAbstain.ButtonCallOperation', {
                                defaultValue: 'Take a vote',
                              })}
                            </span>
                          </LoadingButton>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                )}

                {!data.isNotSelectAnswerType && (
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewDefaultVoteDefinitionViewEditTabBarSelectanswervoteSelectanswervote"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      {!data.isNotSelectAnswerType && (
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewEdemokraciaServiceUserEdemokraciaServiceVoteDefinitionVoteSelectAnswerButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="vote" />}
                            loadingPosition="start"
                            onClick={async () => {
                              try {
                                setIsLoading(true);
                                await serviceVoteDefinitionVoteSelectAnswerAction(data, () => fetchData());
                              } finally {
                                setIsLoading(false);
                              }
                            }}
                            disabled={!data.isSelectAnswerType || editMode}
                          >
                            <span>
                              {t('service.VoteDefinitionView.voteSelectAnswer.ButtonCallOperation', {
                                defaultValue: 'Take a vote',
                              })}
                            </span>
                          </LoadingButton>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                )}

                {!data.isNotRatingType && (
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewDefaultVoteDefinitionViewEditTabBarRatingvoteRatingvote"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      {!data.isNotRatingType && (
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceVoteEntryVoteDefinitionViewEdemokraciaServiceUserEdemokraciaServiceVoteDefinitionVoteRatingButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="vote" />}
                            loadingPosition="start"
                            onClick={async () => {
                              try {
                                setIsLoading(true);
                                await serviceVoteDefinitionVoteRatingAction(data, () => fetchData());
                              } finally {
                                setIsLoading(false);
                              }
                            }}
                            disabled={!data.isRatingType || editMode}
                          >
                            <span>
                              {t('service.VoteDefinitionView.voteRating.ButtonCallOperation', {
                                defaultValue: 'Take a vote',
                              })}
                            </span>
                          </LoadingButton>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                )}
              </ModeledTabs>
            </Grid>
          </Grid>
        </Box>
      </PageContainerTransition>
    </>
  );
}
