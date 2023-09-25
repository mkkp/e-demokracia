//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Debate.ratingVoteDefinition#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: ratingVoteDefinition
// Page DataElement owner name: edemokracia::admin::Debate

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
  AdminDebate,
  AdminDebateStored,
  AdminRatingVoteDefinition,
  AdminRatingVoteDefinitionQueryCustomizer,
  AdminRatingVoteDefinitionStored,
  AdminRatingVoteEntry,
  AdminRatingVoteEntryQueryCustomizer,
  AdminRatingVoteEntryStored,
  EdemokraciaVoteStatus,
} from '~/generated/data-api';
import { adminDebateServiceForClassImpl, adminRatingVoteDefinitionServiceForClassImpl } from '~/generated/data-axios';
import {
  useButtonNavigateDebateAction,
  useButtonNavigateIssueAction,
  useAdminRatingVoteDefinitionTakeBackVoteAction,
  useAdminRatingVoteDefinitionVoteAction,
} from './actions';

import { PageActions } from './components/PageActions';
import { UserVoteEntryLink } from './components/UserVoteEntryLink';
import { VoteEntriesTable } from './components/VoteEntriesTable';

export type AdminDebateRatingVoteDefinitionViewPostRefreshAction = (
  data: AdminRatingVoteDefinitionStored,
  storeDiff: (attributeName: keyof AdminRatingVoteDefinitionStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof AdminRatingVoteDefinition, string>>>,
) => Promise<void>;

export const ADMIN_DEBATE_RATING_VOTE_DEFINITION_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY =
  'AdminDebateRatingVoteDefinitionViewPostRefreshHook';
export type AdminDebateRatingVoteDefinitionViewPostRefreshHook =
  () => AdminDebateRatingVoteDefinitionViewPostRefreshAction;

/**
 * Name: edemokracia::admin::Debate.ratingVoteDefinition#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminDebateRatingVoteDefinitionView() {
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
  const [data, setData] = useState<AdminRatingVoteDefinitionStored>({} as unknown as AdminRatingVoteDefinitionStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminRatingVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof AdminRatingVoteDefinitionStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminRatingVoteDefinitionStored, value: any) => void = useCallback(
    (attributeName: keyof AdminRatingVoteDefinitionStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof AdminRatingVoteDefinition, string>>(
    new Map<keyof AdminRatingVoteDefinition, string>(),
  );

  const queryCustomizer: AdminRatingVoteDefinitionQueryCustomizer = {
    _mask:
      '{title,closeAt,status,created,description,userHasNoVoteEntry,userHasVoteEntry,maxRateValue,minRateValue,userVoteEntry{created,value},voteEntries{created,createdBy,value}}',
  };

  const { service: postRefreshHook } = useTrackService<AdminDebateRatingVoteDefinitionViewPostRefreshHook>(
    `(${OBJECTCLASS}=${ADMIN_DEBATE_RATING_VOTE_DEFINITION_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: AdminDebateRatingVoteDefinitionViewPostRefreshAction | undefined =
    postRefreshHook && postRefreshHook();

  const buttonNavigateDebateAction = useButtonNavigateDebateAction();
  const buttonNavigateIssueAction = useButtonNavigateIssueAction();
  const adminRatingVoteDefinitionTakeBackVoteAction = useAdminRatingVoteDefinitionTakeBackVoteAction();
  const adminRatingVoteDefinitionVoteAction = useAdminRatingVoteDefinitionVoteAction();

  const title: string = t('admin.RatingVoteDefinitionView', { defaultValue: 'RatingVoteDefinition View / Edit' });

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
      const res = await adminRatingVoteDefinitionServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<AdminRatingVoteDefinition>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminRatingVoteDefinitionStored, any>);
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
              <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditVoteEntryBase">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditVoteEntryBaseVirtual"
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
                            id="TextInputedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditVoteEntryBaseVirtualTitle"
                            label={t('admin.RatingVoteDefinitionView.title', { defaultValue: 'Title' }) as string}
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
                                id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditVoteEntryBaseVirtualCloseAt',
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
                                const copy = new Map<keyof AdminRatingVoteDefinition, string>(prevValidation);
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
                            label={t('admin.RatingVoteDefinitionView.closeAt', { defaultValue: 'CloseAt' }) as string}
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
                            id="EnumerationComboedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditVoteEntryBaseVirtualStatus"
                            label={t('admin.RatingVoteDefinitionView.status', { defaultValue: 'Status' }) as string}
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
                          </TextField>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6.0}>
                          <AssociationButton
                            id="NavigationToPageActionedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewEdemokraciaAdminAdminEdemokraciaAdminRatingVoteDefinitionDebateButtonNavigate"
                            variant={undefined}
                            editMode={editMode}
                            navigateAction={(target) => buttonNavigateDebateAction(data, target)}
                            owner={data}
                            fetchCall={async (owner: JudoIdentifiable<any>) =>
                              adminRatingVoteDefinitionServiceForClassImpl.getDebate(owner, {
                                _mask: '{}',
                              })
                            }
                          >
                            {t('admin.RatingVoteDefinitionView.debate.ButtonNavigate', { defaultValue: 'Debate' })}
                            <MdiIcon path="arrow-right" />
                          </AssociationButton>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6.0}>
                          <AssociationButton
                            id="NavigationToPageActionedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewEdemokraciaAdminAdminEdemokraciaAdminRatingVoteDefinitionIssueButtonNavigate"
                            variant={undefined}
                            editMode={editMode}
                            navigateAction={(target) => buttonNavigateIssueAction(data, target)}
                            owner={data}
                            fetchCall={async (owner: JudoIdentifiable<any>) =>
                              adminRatingVoteDefinitionServiceForClassImpl.getIssue(owner, {
                                _mask: '{}',
                              })
                            }
                          >
                            {t('admin.RatingVoteDefinitionView.issue.ButtonNavigate', { defaultValue: 'Issue' })}
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
                                id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditVoteEntryBaseVirtualCreated',
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
                                const copy = new Map<keyof AdminRatingVoteDefinition, string>(prevValidation);
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
                            label={t('admin.RatingVoteDefinitionView.created', { defaultValue: 'Created' }) as string}
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
                            id="TextAreaedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditVoteEntryBaseVirtualDescription"
                            label={
                              t('admin.RatingVoteDefinitionView.description', { defaultValue: 'Description' }) as string
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
              <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditUserVoteEntryGroupLabelWrapper">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                        <Typography
                          id="LabeledemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupLabel"
                          variant="h5"
                          component="h1"
                        >
                          {t('admin.RatingVoteDefinitionView.userVoteEntryGroup.Label', {
                            defaultValue: 'My vote entry',
                          })}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroup"
                        container
                        direction="row"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        {!data.userHasNoVoteEntry && (
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="FlexedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupUserVote"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="FlexedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupUserVoteVirtualForUserVote"
                                  container
                                  direction="row"
                                  alignItems="flex-start"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12} md={2.0}>
                                    <LoadingButton
                                      id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewEdemokraciaAdminAdminEdemokraciaAdminRatingVoteDefinitionTakeBackVoteButtonCallOperation"
                                      loading={isLoading}
                                      variant={undefined}
                                      startIcon={<MdiIcon path="delete" />}
                                      loadingPosition="start"
                                      onClick={async () => {
                                        try {
                                          setIsLoading(true);
                                          await adminRatingVoteDefinitionTakeBackVoteAction(data, () => fetchData());
                                        } finally {
                                          setIsLoading(false);
                                        }
                                      }}
                                      disabled={!data.userHasVoteEntry || editMode}
                                    >
                                      <span>
                                        {t('admin.RatingVoteDefinitionView.takeBackVote.ButtonCallOperation', {
                                          defaultValue: 'TakeBackVote',
                                        })}
                                      </span>
                                    </LoadingButton>
                                  </Grid>

                                  <Grid item xs={12} sm={12} md={2.0}>
                                    <NumericInput
                                      required={false}
                                      name="maxRateValue"
                                      id="NumericInputedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupUserVoteVirtualForUserVoteMaxRateValue"
                                      label={
                                        t('admin.RatingVoteDefinitionView.maxRateValue', {
                                          defaultValue: 'MaxRateValue',
                                        }) as string
                                      }
                                      customInput={TextField}
                                      value={data.maxRateValue ?? ''}
                                      className={clsx({
                                        'JUDO-viewMode': !editMode,
                                        'JUDO-required': false,
                                      })}
                                      disabled={isLoading}
                                      error={!!validation.get('maxRateValue')}
                                      helperText={validation.get('maxRateValue')}
                                      onValueChange={(values, sourceInfo) => {
                                        storeDiff(
                                          'maxRateValue',
                                          values.floatValue === undefined ? null : values.floatValue,
                                        );
                                      }}
                                      InputLabelProps={{ shrink: true }}
                                      InputProps={{
                                        readOnly: false || !isFormUpdateable(),
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            <MdiIcon path="numeric" />
                                          </InputAdornment>
                                        ),
                                      }}
                                    />
                                  </Grid>

                                  <Grid item xs={12} sm={12} md={2.0}>
                                    <NumericInput
                                      required={false}
                                      name="minRateValue"
                                      id="NumericInputedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupUserVoteVirtualForUserVoteMinRateValue"
                                      label={
                                        t('admin.RatingVoteDefinitionView.minRateValue', {
                                          defaultValue: 'MinRateValue',
                                        }) as string
                                      }
                                      customInput={TextField}
                                      value={data.minRateValue ?? ''}
                                      className={clsx({
                                        'JUDO-viewMode': !editMode,
                                        'JUDO-required': false,
                                      })}
                                      disabled={isLoading}
                                      error={!!validation.get('minRateValue')}
                                      helperText={validation.get('minRateValue')}
                                      onValueChange={(values, sourceInfo) => {
                                        storeDiff(
                                          'minRateValue',
                                          values.floatValue === undefined ? null : values.floatValue,
                                        );
                                      }}
                                      InputLabelProps={{ shrink: true }}
                                      InputProps={{
                                        readOnly: false || !isFormUpdateable(),
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            <MdiIcon path="numeric" />
                                          </InputAdornment>
                                        ),
                                      }}
                                    />
                                  </Grid>

                                  <Grid item xs={12} sm={12} md={2.0}>
                                    <UserVoteEntryLink
                                      ownerData={data}
                                      readOnly={true || !isFormUpdateable()}
                                      disabled={isLoading}
                                      editMode={editMode}
                                      fetchOwnerData={fetchData}
                                      onChange={(value: AdminRatingVoteEntry | AdminRatingVoteEntryStored | null) => {
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
                              id="FlexedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupTakeVote"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12} md={2.0}>
                                <LoadingButton
                                  id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewEdemokraciaAdminAdminEdemokraciaAdminRatingVoteDefinitionVoteButtonCallOperation"
                                  loading={isLoading}
                                  variant={undefined}
                                  startIcon={<MdiIcon path="vote" />}
                                  loadingPosition="start"
                                  onClick={async () => {
                                    try {
                                      setIsLoading(true);
                                      await adminRatingVoteDefinitionVoteAction(data, () => fetchData());
                                    } finally {
                                      setIsLoading(false);
                                    }
                                  }}
                                  disabled={!data.userHasNoVoteEntry || editMode}
                                >
                                  <span>
                                    {t('admin.RatingVoteDefinitionView.vote.ButtonCallOperation', {
                                      defaultValue: 'Take a vote',
                                    })}
                                  </span>
                                </LoadingButton>
                              </Grid>

                              <Grid item xs={12} sm={12} md={2.0}>
                                <NumericInput
                                  required={false}
                                  name="minRateValue"
                                  id="NumericInputedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupTakeVoteMinRateValueForVote"
                                  label={
                                    t('admin.RatingVoteDefinitionView.minRateValueForVote', {
                                      defaultValue: 'MinRateValueForVote',
                                    }) as string
                                  }
                                  customInput={TextField}
                                  value={data.minRateValue ?? ''}
                                  className={clsx({
                                    'JUDO-viewMode': !editMode,
                                    'JUDO-required': false,
                                  })}
                                  disabled={isLoading}
                                  error={!!validation.get('minRateValue')}
                                  helperText={validation.get('minRateValue')}
                                  onValueChange={(values, sourceInfo) => {
                                    storeDiff(
                                      'minRateValue',
                                      values.floatValue === undefined ? null : values.floatValue,
                                    );
                                  }}
                                  InputLabelProps={{ shrink: true }}
                                  InputProps={{
                                    readOnly: false || !isFormUpdateable(),
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <MdiIcon path="numeric" />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </Grid>

                              <Grid item xs={12} sm={12} md={2.0}>
                                <NumericInput
                                  required={false}
                                  name="maxRateValue"
                                  id="NumericInputedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditUserVoteEntryGroupLabelWrapperUserVoteEntryGroupTakeVoteMaxRateValueForVote"
                                  label={
                                    t('admin.RatingVoteDefinitionView.maxRateValueForVote', {
                                      defaultValue: 'MaxRateValueForVote',
                                    }) as string
                                  }
                                  customInput={TextField}
                                  value={data.maxRateValue ?? ''}
                                  className={clsx({
                                    'JUDO-viewMode': !editMode,
                                    'JUDO-required': false,
                                  })}
                                  disabled={isLoading}
                                  error={!!validation.get('maxRateValue')}
                                  helperText={validation.get('maxRateValue')}
                                  onValueChange={(values, sourceInfo) => {
                                    storeDiff(
                                      'maxRateValue',
                                      values.floatValue === undefined ? null : values.floatValue,
                                    );
                                  }}
                                  InputLabelProps={{ shrink: true }}
                                  InputProps={{
                                    readOnly: false || !isFormUpdateable(),
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <MdiIcon path="numeric" />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
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
              <Grid
                id="FlexedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditEntriesLabelWrapper"
                container
                direction="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                spacing={2}
              >
                <Grid item xs={12} sm={12}>
                  <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                    <Typography
                      id="LabeledemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditEntriesLabelWrapperEntriesLabel"
                      variant="h5"
                      component="h1"
                    >
                      {t('admin.RatingVoteDefinitionView.entries.Label', { defaultValue: 'Entries' })}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Grid
                    id="FlexedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditEntriesLabelWrapperEntries"
                    container
                    direction="row"
                    alignItems="stretch"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditEntriesLabelWrapperEntriesVoteEntriesLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaAdminAdminEdemokraciaAdminDebateRatingVoteDefinitionViewDefaultRatingVoteDefinitionViewEditEntriesLabelWrapperEntriesVoteEntriesLabelWrapperVoteEntries"
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
