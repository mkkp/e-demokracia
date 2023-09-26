//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Admin.userOwnedActiveIssues#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: userOwnedActiveIssues
// Page DataElement owner name: edemokracia::admin::Admin

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
  AdminCity,
  AdminCityQueryCustomizer,
  AdminCityStored,
  AdminComment,
  AdminCommentQueryCustomizer,
  AdminCommentStored,
  AdminCounty,
  AdminCountyQueryCustomizer,
  AdminCountyStored,
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminIssue,
  AdminIssueAttachment,
  AdminIssueAttachmentQueryCustomizer,
  AdminIssueAttachmentStored,
  AdminIssueCategory,
  AdminIssueCategoryQueryCustomizer,
  AdminIssueCategoryStored,
  AdminIssueDebate,
  AdminIssueDebateQueryCustomizer,
  AdminIssueDebateStored,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminIssueType,
  AdminIssueTypeQueryCustomizer,
  AdminIssueTypeStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
  EdemokraciaIssueScope,
  EdemokraciaIssueStatus,
  EdemokraciaVoteType,
} from '~/generated/data-api';
import { adminAdminServiceForUserOwnedActiveIssuesImpl, adminIssueServiceForClassImpl } from '~/generated/data-axios';
import {
  useAdminIssueCreateDebateAction,
  useAdminIssueAddToFavoritesAction,
  useAdminIssueRemoveFromFavoritesAction,
  useAdminIssueCreateCommentAction,
} from './actions';

import { PageActions } from './components/PageActions';
import { IssueTypeLink } from './components/IssueTypeLink';
import { OwnerLink } from './components/OwnerLink';
import { CityLink } from './components/CityLink';
import { CountyLink } from './components/CountyLink';
import { DistrictLink } from './components/DistrictLink';
import { AttachmentsTable } from './components/AttachmentsTable';
import { CategoriesTable } from './components/CategoriesTable';
import { CommentsTable } from './components/CommentsTable';
import { DebatesTable } from './components/DebatesTable';

export type AdminAdminUserOwnedActiveIssuesViewPostRefreshAction = (
  data: AdminIssueStored,
  storeDiff: (attributeName: keyof AdminIssueStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof AdminIssue, string>>>,
) => Promise<void>;

export const ADMIN_ADMIN_USER_OWNED_ACTIVE_ISSUES_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY =
  'AdminAdminUserOwnedActiveIssuesViewPostRefreshHook';
export type AdminAdminUserOwnedActiveIssuesViewPostRefreshHook =
  () => AdminAdminUserOwnedActiveIssuesViewPostRefreshAction;

/**
 * Name: edemokracia::admin::Admin.userOwnedActiveIssues#View
 * Is Access: true
 * Is Dashboard: false
 * Type: View
 * Edit Mode Available: true
 **/
export default function AdminAdminUserOwnedActiveIssuesView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleUpdateError = useErrorHandler<AdminIssue>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Update)(component=AdminAdminUserOwnedActiveIssuesView))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<AdminIssueStored>({} as unknown as AdminIssueStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminIssueStored, any>>(
    {} as unknown as Record<keyof AdminIssueStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminIssueStored, value: any) => void = useCallback(
    (attributeName: keyof AdminIssueStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof AdminIssue, string>>(new Map<keyof AdminIssue, string>());

  const queryCustomizer: AdminIssueQueryCustomizer = {
    _mask:
      '{isFavorite,isNotFavorite,defaultVoteType,title,status,created,description,issueType{title,description},owner{representation},county{representation},city{representation},district{representation},attachments{link,file,type},categories{title,description},debates{status,title,closeAt,description},comments{comment,created,createdByName,upVotes,downVotes}}',
  };

  const { service: postRefreshHook } = useTrackService<AdminAdminUserOwnedActiveIssuesViewPostRefreshHook>(
    `(${OBJECTCLASS}=${ADMIN_ADMIN_USER_OWNED_ACTIVE_ISSUES_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: AdminAdminUserOwnedActiveIssuesViewPostRefreshAction | undefined =
    postRefreshHook && postRefreshHook();

  const adminIssueCreateDebateAction = useAdminIssueCreateDebateAction();
  const adminIssueAddToFavoritesAction = useAdminIssueAddToFavoritesAction();
  const adminIssueRemoveFromFavoritesAction = useAdminIssueRemoveFromFavoritesAction();
  const adminIssueCreateCommentAction = useAdminIssueCreateCommentAction();

  const title: string = t('admin.IssueView', { defaultValue: 'Issue View / Edit' });

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
      const res = await adminIssueServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as AdminIssueStored,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminIssueStored, any>);
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
      const res = await adminIssueServiceForClassImpl.update(payloadDiff);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof AdminIssue, string>());
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
                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditActions"
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
                        id="ButtonedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditActionsPageActionButtonsCreateDebate"
                        loading={isLoading}
                        startIcon={<MdiIcon path="wechat" />}
                        loadingPosition="start"
                        onClick={async () => {
                          try {
                            setIsLoading(true);
                            await adminIssueCreateDebateAction(data, () => fetchData());
                          } finally {
                            setIsLoading(false);
                          }
                        }}
                        disabled={editMode}
                      >
                        <span>
                          {t('admin.IssueView.PageActionButtons.createDebate', { defaultValue: 'Create debate' })}
                        </span>
                      </LoadingButton>
                    </Grid>

                    {!data.isFavorite && (
                      <Grid item>
                        <LoadingButton
                          id="ButtonedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditActionsPageActionButtonsAddToFavorites"
                          loading={isLoading}
                          startIcon={<MdiIcon path="star-plus" />}
                          loadingPosition="start"
                          onClick={async () => {
                            try {
                              setIsLoading(true);
                              await adminIssueAddToFavoritesAction(data, () => fetchData());
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={editMode}
                        >
                          <span>
                            {t('admin.IssueView.PageActionButtons.addToFavorites', {
                              defaultValue: 'Add to favorites',
                            })}
                          </span>
                        </LoadingButton>
                      </Grid>
                    )}
                    {!data.isNotFavorite && (
                      <Grid item>
                        <LoadingButton
                          id="ButtonedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditActionsPageActionButtonsRemoveFromFavorites"
                          loading={isLoading}
                          startIcon={<MdiIcon path="star-minus" />}
                          loadingPosition="start"
                          onClick={async () => {
                            try {
                              setIsLoading(true);
                              await adminIssueRemoveFromFavoritesAction(data, () => fetchData());
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={editMode}
                        >
                          <span>
                            {t('admin.IssueView.PageActionButtons.removeFromFavorites', {
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
              <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditIssueLabelWrapper">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                        <MdiIcon path="clipboard" sx={{ marginRight: 1 }} />
                        <Typography
                          id="LabeledemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditIssueLabelWrapperIssueLabel"
                          variant="h5"
                          component="h1"
                        >
                          {t('admin.IssueView.issue.Label', { defaultValue: 'Issue' })}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditIssueLabelWrapperIssue"
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
                            onChange={(value: AdminIssueType | AdminIssueTypeStored | null) => {
                              storeDiff('issueType', value);
                            }}
                            validation={validation}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12} md={4.0}>
                          <TextField
                            required={false}
                            name="defaultVoteType"
                            id="EnumerationComboedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditIssueLabelWrapperIssueDefaultVoteType"
                            label={
                              t('admin.IssueView.defaultVoteType', { defaultValue: 'Default Vote Type' }) as string
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
                              id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteTypeYESNO"
                              value={'YES_NO'}
                            >
                              {t('enumerations.EdemokraciaVoteType.YES_NO', { defaultValue: 'YES_NO' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteTypeYESNOABSTAIN"
                              value={'YES_NO_ABSTAIN'}
                            >
                              {t('enumerations.EdemokraciaVoteType.YES_NO_ABSTAIN', { defaultValue: 'YES_NO_ABSTAIN' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteTypeSELECTANSWER"
                              value={'SELECT_ANSWER'}
                            >
                              {t('enumerations.EdemokraciaVoteType.SELECT_ANSWER', { defaultValue: 'SELECT_ANSWER' })}
                            </MenuItem>
                            <MenuItem id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteTypeRATE" value={'RATE'}>
                              {t('enumerations.EdemokraciaVoteType.RATE', { defaultValue: 'RATE' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteTypeNOVOTE"
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
                            id="TextInputedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditIssueLabelWrapperIssueTitle"
                            label={t('admin.IssueView.title', { defaultValue: 'Title' }) as string}
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
                            id="EnumerationComboedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditIssueLabelWrapperIssueStatus"
                            label={t('admin.IssueView.status', { defaultValue: 'Status' }) as string}
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
                              id="EnumerationMemberedemokraciaAdminAdminEdemokraciaIssueStatusCREATED"
                              value={'CREATED'}
                            >
                              {t('enumerations.EdemokraciaIssueStatus.CREATED', { defaultValue: 'CREATED' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaAdminAdminEdemokraciaIssueStatusPENDING"
                              value={'PENDING'}
                            >
                              {t('enumerations.EdemokraciaIssueStatus.PENDING', { defaultValue: 'PENDING' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaAdminAdminEdemokraciaIssueStatusACTIVE"
                              value={'ACTIVE'}
                            >
                              {t('enumerations.EdemokraciaIssueStatus.ACTIVE', { defaultValue: 'ACTIVE' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaAdminAdminEdemokraciaIssueStatusCLOSED"
                              value={'CLOSED'}
                            >
                              {t('enumerations.EdemokraciaIssueStatus.CLOSED', { defaultValue: 'CLOSED' })}
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
                                id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditIssueLabelWrapperIssueCreated',
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
                                const copy = new Map<keyof AdminIssue, string>(prevValidation);
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
                            label={t('admin.IssueView.created', { defaultValue: 'Created' }) as string}
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
                            id="TextAreaedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditIssueLabelWrapperIssueDescription"
                            label={t('admin.IssueView.description', { defaultValue: 'Description' }) as string}
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
                            onChange={(value: AdminUser | AdminUserStored | null) => {
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
                id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOther"
                ownerData={data}
                validation={validation}
                orientation='horizontal'
                childTabs={[
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherArea',
                    name: 'admin.IssueView.area',
                    label: t('admin.IssueView.area', { defaultValue: 'Area' }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'map',
                    nestedDataKeys: ['city', 'county', 'district'],
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherAttachments',
                    name: 'admin.IssueView.attachments',
                    label: t('admin.IssueView.attachments', { defaultValue: 'Attachments' }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'paperclip',
                    nestedDataKeys: ['attachments'],
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherCategories',
                    name: 'admin.IssueView.categories',
                    label: t('admin.IssueView.categories', { defaultValue: 'Categories' }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'file-tree',
                    nestedDataKeys: ['categories'],
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherDebates',
                    name: 'admin.IssueView.debates',
                    label: t('admin.IssueView.debates', { defaultValue: 'Debates' }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'wechat',
                    nestedDataKeys: ['debates'],
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherComments',
                    name: 'admin.IssueView.comments',
                    label: t('admin.IssueView.comments', { defaultValue: 'Comments' }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'comment-text-multiple',
                    nestedDataKeys: ['comments'],
                  },
                ]}
              >
                <Grid item xs={12} sm={12}>
                  <Grid
                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherAreaArea"
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
                        onChange={(value: AdminCounty | AdminCountyStored | null) => {
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
                        onChange={(value: AdminCity | AdminCityStored | null) => {
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
                        onChange={(value: AdminDistrict | AdminDistrictStored | null) => {
                          storeDiff('district', value);
                        }}
                        validation={validation}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Grid
                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherAttachmentsAttachments"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherAttachmentsAttachmentsAttachmentsLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherAttachmentsAttachmentsAttachmentsLabelWrapperAttachments"
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
                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherCategoriesCategories"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherCategoriesCategoriesCategoriesLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherCategoriesCategoriesCategoriesLabelWrapperCategories"
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
                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherDebatesDebates"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherDebatesDebatesDebatesLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                            <MdiIcon path="wechat" sx={{ marginRight: 1 }} />
                            <Typography
                              id="LabeledemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherDebatesDebatesDebatesLabelWrapperDebatesLabel"
                              variant="h5"
                              component="h1"
                            >
                              {t('admin.IssueView.debates.Label', { defaultValue: 'Debates' })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherDebatesDebatesDebatesLabelWrapperDebates"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                          >
                            <DebatesTable
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
                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherCommentsComments"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherCommentsCommentsActions"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewEdemokraciaAdminAdminEdemokraciaAdminIssueCreateCommentButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="comment-text-multiple" />}
                            loadingPosition="start"
                            onClick={async () => {
                              try {
                                setIsLoading(true);
                                await adminIssueCreateCommentAction(data, () => fetchData());
                              } finally {
                                setIsLoading(false);
                              }
                            }}
                            disabled={editMode}
                          >
                            <span>
                              {t('admin.IssueView.createComment.ButtonCallOperation', { defaultValue: 'Add comment' })}
                            </span>
                          </LoadingButton>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapper"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserOwnedActiveIssuesViewDefaultIssueViewEditOtherCommentsCommentsActionsCommentsLabelWrapperComments"
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
