//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::service::UserIssues.activeIssuesInResidentDistrict#View
// Page owner name: edemokracia::service::User
// Page DataElement name: activeIssuesInResidentDistrict
// Page DataElement owner name: edemokracia::service::UserIssues

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
  EdemokraciaIssueScope,
  EdemokraciaIssueStatus,
  EdemokraciaVoteType,
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceCommentStored,
  ServiceCon,
  ServiceConQueryCustomizer,
  ServiceConStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  ServicePro,
  ServiceProQueryCustomizer,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserIssues,
  ServiceUserIssuesStored,
} from '~/generated/data-api';
import { serviceUserIssuesServiceForClassImpl, serviceIssueServiceForClassImpl } from '~/generated/data-axios';
import {
  useServiceIssueAddToFavoritesAction,
  useServiceIssueRemoveFromFavoritesAction,
  useServiceIssueCloseDebateAction,
  useServiceIssueCloseVoteAction,
  useServiceIssueActivateAction,
  useServiceIssueDeleteOrArchiveAction,
  useServiceIssueCreateConArgumentAction,
  useServiceIssueCreateProArgumentAction,
  useServiceIssueCreateCommentAction,
} from './actions';

import { PageActions } from './components/PageActions';
import { IssueTypeLink } from './components/IssueTypeLink';
import { OwnerLink } from './components/OwnerLink';
import { CityLink } from './components/CityLink';
import { CountyLink } from './components/CountyLink';
import { DistrictLink } from './components/DistrictLink';
import { ConsTable } from './components/ConsTable';
import { ProsTable } from './components/ProsTable';
import { AttachmentsTable } from './components/AttachmentsTable';
import { CategoriesTable } from './components/CategoriesTable';
import { CommentsTable } from './components/CommentsTable';

export type ServiceUserIssuesActiveIssuesInResidentDistrictViewPostRefreshAction = (
  data: ServiceIssueStored,
  storeDiff: (attributeName: keyof ServiceIssueStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssue, string>>>,
) => Promise<void>;

export const SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_DISTRICT_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInResidentDistrictViewPostRefreshHook';
export type ServiceUserIssuesActiveIssuesInResidentDistrictViewPostRefreshHook =
  () => ServiceUserIssuesActiveIssuesInResidentDistrictViewPostRefreshAction;

/**
 * Name: edemokracia::service::UserIssues.activeIssuesInResidentDistrict#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: true
 **/
export default function ServiceUserIssuesActiveIssuesInResidentDistrictView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleUpdateError = useErrorHandler<ServiceIssue>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Update)(component=ServiceUserIssuesActiveIssuesInResidentDistrictView))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceIssueStored>({} as unknown as ServiceIssueStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof ServiceIssueStored, any>>(
    {} as unknown as Record<keyof ServiceIssueStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof ServiceIssueStored, value: any) => void = useCallback(
    (attributeName: keyof ServiceIssueStored, value: any) => {
      const dateTypes: string[] = [];
      const dateTimeTypes: string[] = ['debateCloseAt'];
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
  const [validation, setValidation] = useState<Map<keyof ServiceIssue, string>>(new Map<keyof ServiceIssue, string>());

  const queryCustomizer: ServiceIssueQueryCustomizer = {
    _mask:
      '{isFavorite,isNotFavorite,isIssueActive,isIssueNotActive,isVoteClosable,isVoteNotClosable,isIssueDraft,isIssueNotDraft,isIssueDeletable,isIssueNotDeletable,defaultVoteType,title,status,created,description,issueType{title,description},owner{representation},cons{title,upVotes,downVotes},pros{title,upVotes,downVotes},county{representation},city{representation},district{representation},attachments{link,file,type},categories{title,description},comments{comment,created,createdByName,upVotes,downVotes}}',
  };

  const { service: postRefreshHook } =
    useTrackService<ServiceUserIssuesActiveIssuesInResidentDistrictViewPostRefreshHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_DISTRICT_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
    );
  const postRefreshAction: ServiceUserIssuesActiveIssuesInResidentDistrictViewPostRefreshAction | undefined =
    postRefreshHook && postRefreshHook();

  const serviceIssueAddToFavoritesAction = useServiceIssueAddToFavoritesAction();
  const serviceIssueRemoveFromFavoritesAction = useServiceIssueRemoveFromFavoritesAction();
  const serviceIssueCloseDebateAction = useServiceIssueCloseDebateAction();
  const serviceIssueCloseVoteAction = useServiceIssueCloseVoteAction();
  const serviceIssueActivateAction = useServiceIssueActivateAction();
  const serviceIssueDeleteOrArchiveAction = useServiceIssueDeleteOrArchiveAction();
  const serviceIssueCreateConArgumentAction = useServiceIssueCreateConArgumentAction();
  const serviceIssueCreateProArgumentAction = useServiceIssueCreateProArgumentAction();
  const serviceIssueCreateCommentAction = useServiceIssueCreateCommentAction();

  const title: string = t('service.IssueView', { defaultValue: 'Issue View / Edit' });

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
      const res = await serviceIssueServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<ServiceIssue>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof ServiceIssueStored, any>);
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
      const res = await serviceIssueServiceForClassImpl.update(payloadDiff);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceIssue, string>());
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
            className="relation-page-data"
            container
            spacing={2}
            direction="column"
            alignItems="stretch"
            justifyContent="flex-start"
          >
            <Grid item xs={12} sm={12}>
              <Grid
                id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditActions"
                container
                direction="row"
                alignItems="flex-start"
                justifyContent="flex-start"
                spacing={2}
              >
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    {!data.isFavorite && (
                      <Grid item>
                        <LoadingButton
                          id="ButtonedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditActionsPageActionButtonsAddToFavorites"
                          loading={isLoading}
                          startIcon={<MdiIcon path="star-plus" />}
                          loadingPosition="start"
                          onClick={async () => {
                            try {
                              setIsLoading(true);
                              await serviceIssueAddToFavoritesAction(data, () => fetchData());
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={editMode}
                        >
                          <span>
                            {t('service.IssueView.PageActionButtons.addToFavorites', {
                              defaultValue: 'Add to favorites',
                            })}
                          </span>
                        </LoadingButton>
                      </Grid>
                    )}
                    {!data.isNotFavorite && (
                      <Grid item>
                        <LoadingButton
                          id="ButtonedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditActionsPageActionButtonsRemoveFromFavorites"
                          loading={isLoading}
                          startIcon={<MdiIcon path="star-minus" />}
                          loadingPosition="start"
                          onClick={async () => {
                            try {
                              setIsLoading(true);
                              await serviceIssueRemoveFromFavoritesAction(data, () => fetchData());
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={editMode}
                        >
                          <span>
                            {t('service.IssueView.PageActionButtons.removeFromFavorites', {
                              defaultValue: 'Remove from favorites',
                            })}
                          </span>
                        </LoadingButton>
                      </Grid>
                    )}
                    {!data.isIssueNotActive && (
                      <Grid item>
                        <LoadingButton
                          id="ButtonedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditActionsPageActionButtonsCloseDebate"
                          loading={isLoading}
                          startIcon={<MdiIcon path="vote" />}
                          loadingPosition="start"
                          onClick={async () => {
                            try {
                              setIsLoading(true);
                              await serviceIssueCloseDebateAction(data, () => fetchData());
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={editMode}
                        >
                          <span>
                            {t('service.IssueView.PageActionButtons.closeDebate', {
                              defaultValue: 'Close debate and start vote',
                            })}
                          </span>
                        </LoadingButton>
                      </Grid>
                    )}
                    {!data.isVoteNotClosable && (
                      <Grid item>
                        <LoadingButton
                          id="ButtonedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditActionsPageActionButtonsCloseVote"
                          loading={isLoading}
                          startIcon={<MdiIcon path="lock-check" />}
                          loadingPosition="start"
                          onClick={async () => {
                            try {
                              setIsLoading(true);
                              await serviceIssueCloseVoteAction(data, () => fetchData());
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={editMode}
                        >
                          <span>
                            {t('service.IssueView.PageActionButtons.closeVote', { defaultValue: 'Close Vote' })}
                          </span>
                        </LoadingButton>
                      </Grid>
                    )}
                    {!data.isIssueNotDraft && (
                      <Grid item>
                        <LoadingButton
                          id="ButtonedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditActionsPageActionButtonsActivate"
                          loading={isLoading}
                          startIcon={<MdiIcon path="lock-open" />}
                          loadingPosition="start"
                          onClick={async () => {
                            try {
                              setIsLoading(true);
                              await serviceIssueActivateAction(data, () => fetchData());
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={editMode}
                        >
                          <span>{t('service.IssueView.PageActionButtons.activate', { defaultValue: 'Activate' })}</span>
                        </LoadingButton>
                      </Grid>
                    )}
                    {!data.isIssueNotDeletable && (
                      <Grid item>
                        <LoadingButton
                          id="ButtonedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditActionsPageActionButtonsDeleteOrArchive"
                          loading={isLoading}
                          startIcon={<MdiIcon path="delete" />}
                          loadingPosition="start"
                          onClick={async () => {
                            try {
                              setIsLoading(true);
                              await serviceIssueDeleteOrArchiveAction(data, () => fetchData());
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={editMode}
                        >
                          <span>
                            {t('service.IssueView.PageActionButtons.deleteOrArchive', { defaultValue: 'Delete' })}
                          </span>
                        </LoadingButton>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditIssueLabelWrapper">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                        <MdiIcon path="clipboard" sx={{ marginRight: 1 }} />
                        <Typography
                          id="LabeledemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditIssueLabelWrapperIssueLabel"
                          variant="h5"
                          component="h1"
                        >
                          {t('service.IssueView.issue.Label', { defaultValue: 'Issue' })}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditIssueLabelWrapperIssue"
                        container
                        direction="row"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12} md={8.0}>
                          <IssueTypeLink
                            ownerData={data}
                            readOnly={false || !isFormUpdateable()}
                            disabled={isLoading}
                            editMode={editMode}
                            fetchOwnerData={fetchData}
                            onChange={(value: ServiceIssueType | ServiceIssueTypeStored | null) => {
                              storeDiff('issueType', value);
                            }}
                            validation={validation}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12} md={4.0}>
                          <TextField
                            required={false}
                            name="defaultVoteType"
                            id="EnumerationComboedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditIssueLabelWrapperIssueDefaultVoteType"
                            label={
                              t('service.IssueView.defaultVoteType', { defaultValue: 'Default Vote Type' }) as string
                            }
                            value={data.defaultVoteType || ''}
                            className={clsx({
                              'JUDO-viewMode': !editMode,
                              'JUDO-required': false,
                            })}
                            disabled={isLoading}
                            error={!!validation.get('defaultVoteType')}
                            helperText={validation.get('defaultVoteType')}
                            onChange={(event) => {
                              storeDiff('defaultVoteType', event.target.value);
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
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteTypeYESNO"
                              value={'YES_NO'}
                            >
                              {t('enumerations.EdemokraciaVoteType.YES_NO', { defaultValue: 'YES_NO' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteTypeYESNOABSTAIN"
                              value={'YES_NO_ABSTAIN'}
                            >
                              {t('enumerations.EdemokraciaVoteType.YES_NO_ABSTAIN', { defaultValue: 'YES_NO_ABSTAIN' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteTypeSELECTANSWER"
                              value={'SELECT_ANSWER'}
                            >
                              {t('enumerations.EdemokraciaVoteType.SELECT_ANSWER', { defaultValue: 'SELECT_ANSWER' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteTypeRATE"
                              value={'RATE'}
                            >
                              {t('enumerations.EdemokraciaVoteType.RATE', { defaultValue: 'RATE' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteTypeNOVOTE"
                              value={'NO_VOTE'}
                            >
                              {t('enumerations.EdemokraciaVoteType.NO_VOTE', { defaultValue: 'NO_VOTE' })}
                            </MenuItem>
                          </TextField>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4.0}>
                          <TextField
                            required={true}
                            name="title"
                            id="TextInputedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditIssueLabelWrapperIssueTitle"
                            label={t('service.IssueView.title', { defaultValue: 'Title' }) as string}
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
                          <TextField
                            required={true}
                            name="status"
                            id="EnumerationComboedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditIssueLabelWrapperIssueStatus"
                            label={t('service.IssueView.status', { defaultValue: 'Status' }) as string}
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
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaIssueStatusCREATED"
                              value={'CREATED'}
                            >
                              {t('enumerations.EdemokraciaIssueStatus.CREATED', { defaultValue: 'CREATED' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaIssueStatusPENDING"
                              value={'PENDING'}
                            >
                              {t('enumerations.EdemokraciaIssueStatus.PENDING', { defaultValue: 'PENDING' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaIssueStatusACTIVE"
                              value={'ACTIVE'}
                            >
                              {t('enumerations.EdemokraciaIssueStatus.ACTIVE', { defaultValue: 'ACTIVE' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaIssueStatusCLOSED"
                              value={'CLOSED'}
                            >
                              {t('enumerations.EdemokraciaIssueStatus.CLOSED', { defaultValue: 'CLOSED' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaIssueStatusARCHIVED"
                              value={'ARCHIVED'}
                            >
                              {t('enumerations.EdemokraciaIssueStatus.ARCHIVED', { defaultValue: 'ARCHIVED' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaServiceUserEdemokraciaIssueStatusVOTING"
                              value={'VOTING'}
                            >
                              {t('enumerations.EdemokraciaIssueStatus.VOTING', { defaultValue: 'VOTING' })}
                            </MenuItem>
                          </TextField>
                        </Grid>

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
                                id: 'DateTimeInputedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditIssueLabelWrapperIssueCreated',
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
                                const copy = new Map<keyof ServiceIssue, string>(prevValidation);
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
                            label={t('service.IssueView.created', { defaultValue: 'Created' }) as string}
                            value={serviceDateToUiDate(data.created ?? null)}
                            readOnly={true || !isFormUpdateable()}
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
                            id="TextAreaedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditIssueLabelWrapperIssueDescription"
                            label={t('service.IssueView.description', { defaultValue: 'Description' }) as string}
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
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid container item xs={12} sm={12}>
              <ModeledTabs
                id="TabControlleredemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOther"
                ownerData={data}
                validation={validation}
                orientation='horizontal'
                childTabs={[
                  {
                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherArguments',
                    name: 'service.IssueView.arguments',
                    label: t('service.IssueView.arguments', { defaultValue: 'Arguments' }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'wechat',
                    nestedDataKeys: ['cons', 'pros'],
                  },
                  {
                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherArea',
                    name: 'service.IssueView.area',
                    label: t('service.IssueView.area', { defaultValue: 'Area' }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'map',
                    nestedDataKeys: ['city', 'county', 'district'],
                  },
                  {
                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherAttachments',
                    name: 'service.IssueView.attachments',
                    label: t('service.IssueView.attachments', { defaultValue: 'Attachments' }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'paperclip',
                    nestedDataKeys: ['attachments'],
                  },
                  {
                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherCategories',
                    name: 'service.IssueView.categories',
                    label: t('service.IssueView.categories', { defaultValue: 'Categories' }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'file-tree',
                    nestedDataKeys: ['categories'],
                  },
                  {
                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherComments',
                    name: 'service.IssueView.comments',
                    label: t('service.IssueView.comments', { defaultValue: 'Comments' }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'comment-text-multiple',
                    nestedDataKeys: ['comments'],
                  },
                ]}
              >
                <Grid item xs={12} sm={12}>
                  <Grid
                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherArgumentsArguments"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12} md={6.0}>
                      <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherArgumentsArgumentsConsLabelWrapper">
                        <CardContent>
                          <Grid
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
                                  id="LabeledemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherArgumentsArgumentsConsLabelWrapperConsLabel"
                                  variant="h5"
                                  component="h1"
                                >
                                  {t('service.IssueView.cons.Label', { defaultValue: 'Cons' })}
                                </Typography>
                              </Grid>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherArgumentsArgumentsConsLabelWrapperCons"
                                container
                                direction="row"
                                alignItems="stretch"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherArgumentsArgumentsConsLabelWrapperConsActions"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <LoadingButton
                                        id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewEdemokraciaServiceUserEdemokraciaServiceIssueCreateConArgumentButtonCallOperation"
                                        loading={isLoading}
                                        variant={undefined}
                                        startIcon={<MdiIcon path="chat-minus" />}
                                        loadingPosition="start"
                                        onClick={async () => {
                                          try {
                                            setIsLoading(true);
                                            await serviceIssueCreateConArgumentAction(data, () => fetchData());
                                          } finally {
                                            setIsLoading(false);
                                          }
                                        }}
                                        disabled={editMode}
                                      >
                                        <span>
                                          {t('service.IssueView.createConArgument.ButtonCallOperation', {
                                            defaultValue: 'Add Con Argument',
                                          })}
                                        </span>
                                      </LoadingButton>
                                    </Grid>
                                  </Grid>
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherArgumentsArgumentsConsLabelWrapperConsTable"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherArgumentsArgumentsConsLabelWrapperConsTableConsLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherArgumentsArgumentsConsLabelWrapperConsTableConsLabelWrapperCons"
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
                              </Grid>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6.0}>
                      <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherArgumentsArgumentsProsLabelWrapper">
                        <CardContent>
                          <Grid
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
                                  id="LabeledemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherArgumentsArgumentsProsLabelWrapperProsLabel"
                                  variant="h5"
                                  component="h1"
                                >
                                  {t('service.IssueView.pros.Label', { defaultValue: 'Pros' })}
                                </Typography>
                              </Grid>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherArgumentsArgumentsProsLabelWrapperPros"
                                container
                                direction="row"
                                alignItems="stretch"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherArgumentsArgumentsProsLabelWrapperProsActions"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <LoadingButton
                                        id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewEdemokraciaServiceUserEdemokraciaServiceIssueCreateProArgumentButtonCallOperation"
                                        loading={isLoading}
                                        variant={undefined}
                                        startIcon={<MdiIcon path="chat-plus" />}
                                        loadingPosition="start"
                                        onClick={async () => {
                                          try {
                                            setIsLoading(true);
                                            await serviceIssueCreateProArgumentAction(data, () => fetchData());
                                          } finally {
                                            setIsLoading(false);
                                          }
                                        }}
                                        disabled={editMode}
                                      >
                                        <span>
                                          {t('service.IssueView.createProArgument.ButtonCallOperation', {
                                            defaultValue: 'Add Pro Argument',
                                          })}
                                        </span>
                                      </LoadingButton>
                                    </Grid>
                                  </Grid>
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherArgumentsArgumentsProsLabelWrapperProsTable"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherArgumentsArgumentsProsLabelWrapperProsTableProsLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherArgumentsArgumentsProsLabelWrapperProsTableProsLabelWrapperPros"
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
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Grid
                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherAreaArea"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12} md={4.0}>
                      <CountyLink
                        ownerData={data}
                        readOnly={false || !isFormUpdateable()}
                        disabled={isLoading}
                        editMode={editMode}
                        fetchOwnerData={fetchData}
                        onChange={(value: ServiceCounty | ServiceCountyStored | null) => {
                          storeDiff('county', value);
                        }}
                        validation={validation}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4.0}>
                      <CityLink
                        ownerData={data}
                        readOnly={false || !isFormUpdateable()}
                        disabled={isLoading}
                        editMode={editMode}
                        fetchOwnerData={fetchData}
                        onChange={(value: ServiceCity | ServiceCityStored | null) => {
                          storeDiff('city', value);
                        }}
                        validation={validation}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4.0}>
                      <DistrictLink
                        ownerData={data}
                        readOnly={false || !isFormUpdateable()}
                        disabled={isLoading}
                        editMode={editMode}
                        fetchOwnerData={fetchData}
                        onChange={(value: ServiceDistrict | ServiceDistrictStored | null) => {
                          storeDiff('district', value);
                        }}
                        validation={validation}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Grid
                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherAttachmentsAttachments"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherAttachmentsAttachmentsAttachmentsLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherAttachmentsAttachmentsAttachmentsLabelWrapperAttachments"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                          >
                            <AttachmentsTable
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
                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherCategoriesCategories"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherCategoriesCategoriesCategoriesLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherCategoriesCategoriesCategoriesLabelWrapperCategories"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                          >
                            <CategoriesTable
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
                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherCommentsComments"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherCommentsCommentsActions"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewEdemokraciaServiceUserEdemokraciaServiceIssueCreateCommentButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="comment-text-multiple" />}
                            loadingPosition="start"
                            onClick={async () => {
                              try {
                                setIsLoading(true);
                                await serviceIssueCreateCommentAction(data, () => fetchData());
                              } finally {
                                setIsLoading(false);
                              }
                            }}
                            disabled={editMode}
                          >
                            <span>
                              {t('service.IssueView.createComment.ButtonCallOperation', {
                                defaultValue: 'Add comment',
                              })}
                            </span>
                          </LoadingButton>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="FlexedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapper"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="TableedemokraciaServiceUserEdemokraciaServiceUserIssuesActiveIssuesInResidentDistrictViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapperComments"
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
