//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::UserVoteDefinition.activeVoteDefinitionsInActivityCounties#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: activeVoteDefinitionsInActivityCounties
// Page DataElement owner name: edemokracia::admin::UserVoteDefinition

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
  AdminUserVoteDefinition,
  AdminUserVoteDefinitionStored,
  AdminVoteDefinition,
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
  EdemokraciaIssueScope,
  EdemokraciaVoteStatus,
  EdemokraciaVoteType,
} from '~/generated/data-api';
import {
  adminUserVoteDefinitionServiceForClassImpl,
  adminVoteDefinitionServiceForClassImpl,
} from '~/generated/data-axios';
import {
  useButtonNavigateDebateAction,
  useButtonNavigateIssueAction,
  useAdminVoteDefinitionVoteYesNoAction,
  useAdminVoteDefinitionVoteYesNoAbstainAction,
  useAdminVoteDefinitionVoteSelectAnswerAction,
  useAdminVoteDefinitionVoteRatingAction,
} from './actions';

import { PageActions } from './components/PageActions';

export type AdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewPostRefreshAction = (
  data: AdminVoteDefinitionStored,
  storeDiff: (attributeName: keyof AdminVoteDefinitionStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof AdminVoteDefinition, string>>>,
) => Promise<void>;

export const ADMIN_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_COUNTIES_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY =
  'AdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewPostRefreshHook';
export type AdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewPostRefreshHook =
  () => AdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewPostRefreshAction;

/**
 * Name: edemokracia::admin::UserVoteDefinition.activeVoteDefinitionsInActivityCounties#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesView() {
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
  const [data, setData] = useState<AdminVoteDefinitionStored>({} as unknown as AdminVoteDefinitionStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof AdminVoteDefinitionStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminVoteDefinitionStored, value: any) => void = useCallback(
    (attributeName: keyof AdminVoteDefinitionStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof AdminVoteDefinition, string>>(
    new Map<keyof AdminVoteDefinition, string>(),
  );

  const queryCustomizer: AdminVoteDefinitionQueryCustomizer = {
    _mask:
      '{title,closeAt,status,created,description,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType}',
  };

  const { service: postRefreshHook } =
    useTrackService<AdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewPostRefreshHook>(
      `(${OBJECTCLASS}=${ADMIN_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_COUNTIES_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
    );
  const postRefreshAction:
    | AdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewPostRefreshAction
    | undefined = postRefreshHook && postRefreshHook();

  const buttonNavigateDebateAction = useButtonNavigateDebateAction();
  const buttonNavigateIssueAction = useButtonNavigateIssueAction();
  const adminVoteDefinitionVoteYesNoAction = useAdminVoteDefinitionVoteYesNoAction();
  const adminVoteDefinitionVoteYesNoAbstainAction = useAdminVoteDefinitionVoteYesNoAbstainAction();
  const adminVoteDefinitionVoteSelectAnswerAction = useAdminVoteDefinitionVoteSelectAnswerAction();
  const adminVoteDefinitionVoteRatingAction = useAdminVoteDefinitionVoteRatingAction();

  const title: string = t('admin.VoteDefinitionView', { defaultValue: 'VoteDefinition View / Edit' });

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
      const res = await adminVoteDefinitionServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<AdminVoteDefinition>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminVoteDefinitionStored, any>);
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
              <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewDefaultVoteDefinitionViewEditGroup">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required={true}
                        name="title"
                        id="TextInputedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewDefaultVoteDefinitionViewEditGroupTitle"
                        label={t('admin.VoteDefinitionView.title', { defaultValue: 'Title' }) as string}
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
                            id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewDefaultVoteDefinitionViewEditGroupCloseAt',
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
                            const copy = new Map<keyof AdminVoteDefinition, string>(prevValidation);
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
                        label={t('admin.VoteDefinitionView.closeAt', { defaultValue: 'CloseAt' }) as string}
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
                        id="EnumerationComboedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewDefaultVoteDefinitionViewEditGroupStatus"
                        label={t('admin.VoteDefinitionView.status', { defaultValue: 'Status' }) as string}
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
                          id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteStatusCREATED"
                          value={'CREATED'}
                        >
                          {t('enumerations.EdemokraciaVoteStatus.CREATED', { defaultValue: 'CREATED' })}
                        </MenuItem>
                        <MenuItem
                          id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteStatusPENDING"
                          value={'PENDING'}
                        >
                          {t('enumerations.EdemokraciaVoteStatus.PENDING', { defaultValue: 'PENDING' })}
                        </MenuItem>
                        <MenuItem
                          id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteStatusACTIVE"
                          value={'ACTIVE'}
                        >
                          {t('enumerations.EdemokraciaVoteStatus.ACTIVE', { defaultValue: 'ACTIVE' })}
                        </MenuItem>
                        <MenuItem
                          id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteStatusCLOSED"
                          value={'CLOSED'}
                        >
                          {t('enumerations.EdemokraciaVoteStatus.CLOSED', { defaultValue: 'CLOSED' })}
                        </MenuItem>
                        <MenuItem
                          id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteStatusARCHIVED"
                          value={'ARCHIVED'}
                        >
                          {t('enumerations.EdemokraciaVoteStatus.ARCHIVED', { defaultValue: 'ARCHIVED' })}
                        </MenuItem>
                      </TextField>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <AssociationButton
                        id="NavigationToPageActionedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionDebateButtonNavigate"
                        variant={undefined}
                        editMode={editMode}
                        navigateAction={(target) => buttonNavigateDebateAction(data, target)}
                        owner={data}
                        fetchCall={async (owner: JudoIdentifiable<any>) =>
                          adminVoteDefinitionServiceForClassImpl.getDebate(owner, {
                            _mask: '{}',
                          })
                        }
                      >
                        {t('admin.VoteDefinitionView.debate.ButtonNavigate', { defaultValue: 'Debate' })}
                        <MdiIcon path="arrow-right" />
                      </AssociationButton>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <AssociationButton
                        id="NavigationToPageActionedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionIssueButtonNavigate"
                        variant={undefined}
                        editMode={editMode}
                        navigateAction={(target) => buttonNavigateIssueAction(data, target)}
                        owner={data}
                        fetchCall={async (owner: JudoIdentifiable<any>) =>
                          adminVoteDefinitionServiceForClassImpl.getIssue(owner, {
                            _mask: '{}',
                          })
                        }
                      >
                        {t('admin.VoteDefinitionView.issue.ButtonNavigate', { defaultValue: 'Issue' })}
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
                            id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewDefaultVoteDefinitionViewEditGroupCreated',
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
                            const copy = new Map<keyof AdminVoteDefinition, string>(prevValidation);
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
                        label={t('admin.VoteDefinitionView.created', { defaultValue: 'Created' }) as string}
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
                        id="TextAreaedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewDefaultVoteDefinitionViewEditGroupDescription"
                        label={t('admin.VoteDefinitionView.description', { defaultValue: 'Description' }) as string}
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
                id="TabControlleredemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewDefaultVoteDefinitionViewEditTabBar"
                ownerData={data}
                validation={validation}
                orientation='horizontal'
                childTabs={[
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewDefaultVoteDefinitionViewEditTabBarYesnovote',
                    name: 'admin.VoteDefinitionView.yesnovote',
                    label: t('admin.VoteDefinitionView.yesnovote', { defaultValue: 'Yes / No vote' }) as string,
                    disabled: !data.isYesNoType || isLoading,
                    hidden: data.isNotYesNoType,
                    nestedDataKeys: [],
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewDefaultVoteDefinitionViewEditTabBarYesnoabstainvote',
                    name: 'admin.VoteDefinitionView.yesnoabstainvote',
                    label: t('admin.VoteDefinitionView.yesnoabstainvote', {
                      defaultValue: 'Yes / No / Abstain vote',
                    }) as string,
                    disabled: !data.isYesNoAbstainType || isLoading,
                    hidden: data.isNotYesNoAbstainType,
                    nestedDataKeys: [],
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewDefaultVoteDefinitionViewEditTabBarSelectanswervote',
                    name: 'admin.VoteDefinitionView.selectanswervote',
                    label: t('admin.VoteDefinitionView.selectanswervote', {
                      defaultValue: 'Select answer vote',
                    }) as string,
                    disabled: !data.isSelectAnswerType || isLoading,
                    hidden: data.isNotSelectAnswerType,
                    nestedDataKeys: [],
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewDefaultVoteDefinitionViewEditTabBarRatingvote',
                    name: 'admin.VoteDefinitionView.ratingvote',
                    label: t('admin.VoteDefinitionView.ratingvote', { defaultValue: 'Rating vote' }) as string,
                    disabled: !data.isRatingType || isLoading,
                    hidden: data.isNotRatingType,
                    nestedDataKeys: [],
                  },
                ]}
              >
                {!data.isNotYesNoType && (
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewDefaultVoteDefinitionViewEditTabBarYesnovoteYesnovote"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      {!data.isNotYesNoType && (
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionVoteYesNoButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="vote" />}
                            loadingPosition="start"
                            onClick={async () => {
                              try {
                                setIsLoading(true);
                                await adminVoteDefinitionVoteYesNoAction(data, () => fetchData());
                              } finally {
                                setIsLoading(false);
                              }
                            }}
                            disabled={!data.isYesNoType || editMode}
                          >
                            <span>
                              {t('admin.VoteDefinitionView.voteYesNo.ButtonCallOperation', {
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
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewDefaultVoteDefinitionViewEditTabBarYesnoabstainvoteYesnoabstainvote"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      {!data.isNotYesNoAbstainType && (
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionVoteYesNoAbstainButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="vote" />}
                            loadingPosition="start"
                            onClick={async () => {
                              try {
                                setIsLoading(true);
                                await adminVoteDefinitionVoteYesNoAbstainAction(data, () => fetchData());
                              } finally {
                                setIsLoading(false);
                              }
                            }}
                            disabled={!data.isYesNoAbstainType || editMode}
                          >
                            <span>
                              {t('admin.VoteDefinitionView.voteYesNoAbstain.ButtonCallOperation', {
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
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewDefaultVoteDefinitionViewEditTabBarSelectanswervoteSelectanswervote"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      {!data.isNotSelectAnswerType && (
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionVoteSelectAnswerButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="vote" />}
                            loadingPosition="start"
                            onClick={async () => {
                              try {
                                setIsLoading(true);
                                await adminVoteDefinitionVoteSelectAnswerAction(data, () => fetchData());
                              } finally {
                                setIsLoading(false);
                              }
                            }}
                            disabled={!data.isSelectAnswerType || editMode}
                          >
                            <span>
                              {t('admin.VoteDefinitionView.voteSelectAnswer.ButtonCallOperation', {
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
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewDefaultVoteDefinitionViewEditTabBarRatingvoteRatingvote"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      {!data.isNotRatingType && (
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionVoteRatingButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="vote" />}
                            loadingPosition="start"
                            onClick={async () => {
                              try {
                                setIsLoading(true);
                                await adminVoteDefinitionVoteRatingAction(data, () => fetchData());
                              } finally {
                                setIsLoading(false);
                              }
                            }}
                            disabled={!data.isRatingType || editMode}
                          >
                            <span>
                              {t('admin.VoteDefinitionView.voteRating.ButtonCallOperation', {
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
