//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Admin.issues#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: issues
// Page DataElement owner name: edemokracia::admin::Admin

import { useEffect, useState, useCallback, FC } from 'react';
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
  EdemokraciaIssueStatus,
  EdemokraciaVoteType,
} from '~/generated/data-api';
import { adminAdminServiceForIssuesImpl, adminIssueServiceImpl } from '~/generated/data-axios';

import { useAdminIssueCreateDebateAction, useAdminIssueCreateCommentAction } from './actions';

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

/**
 * Name: edemokracia::admin::Admin.issues#View
 * Is Access: true
 * Is Dashboard: false
 * Type: View
 * Edit Mode Available: true
 **/
export default function AdminAdminIssuesView() {
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
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Update)(component=AdminAdminIssuesView))`,
  );
  const handleDeleteError = useErrorHandler<AdminIssue>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Delete)(component=AdminAdminIssuesView))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
      setData({ ...data, [attributeName]: value });
      if (!editMode) {
        setEditMode(true);
      }
    },
    [data],
  );
  const [validation, setValidation] = useState<Map<keyof AdminIssue, string>>(new Map<keyof AdminIssue, string>());

  const queryCustomizer: AdminIssueQueryCustomizer = {
    _mask:
      '{defaultVoteType,title,status,created,description,issueType{title,description},owner{representation},county{representation},city{representation},district{representation},attachments{link,file,type},categories{title,description},debates{status,title,closeAt,description},comments{comment,created,createdByName,upVotes,downVotes}}',
  };

  const adminIssueCreateDebateAction = useAdminIssueCreateDebateAction();
  const adminIssueCreateCommentAction = useAdminIssueCreateCommentAction();

  const title: string = t('admin.IssueView', { defaultValue: 'View / Edit Issue' });

  const isFormUpdateable = useCallback(() => {
    return true && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return true && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
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
      const res = await adminIssueServiceImpl.refresh(
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
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function saveData() {
    setIsLoading(true);

    try {
      const res = await adminIssueServiceImpl.update(payloadDiff);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        await fetchData();
        setEditMode(false);
      }
    } catch (error) {
      handleUpdateError(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteData() {
    setIsLoading(true);

    try {
      await adminIssueServiceImpl.delete(data as AdminIssueStored);

      back();
    } catch (error) {
      handleDeleteError(error, undefined, data);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setValidation(new Map<keyof AdminIssue, string>());
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
          saveData={saveData}
          deleteData={deleteData}
        />
      </PageHeader>
      <Container component="main" maxWidth="xl">
        <Box sx={mainContainerPadding}>
          <Grid
            className="access-page-data"
            container
            xs={12}
            sm={12}
            spacing={2}
            direction="column"
            alignItems="stretch"
            justifyContent="flex-start"
          >
            <Grid item xs={12} sm={12}>
              <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewIssueLabelWrapper">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                        <MdiIcon path="clipboard" sx={{ marginRight: 1 }} />
                        <Typography
                          id="LabeledemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewIssueLabelWrapperIssueLabel"
                          variant="h6"
                          component="h1"
                        >
                          {t('admin.IssueView.issue.Label', { defaultValue: 'Issue' })}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewIssueLabelWrapperIssue"
                        container
                        direction="row"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12} md={8.0}>
                          <IssueTypeLink
                            ownerData={data}
                            disabled={false || !isFormUpdateable()}
                            editMode={editMode}
                            fetchOwnerData={fetchData}
                            storeDiff={storeDiff}
                            validation={validation}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12} md={4.0}>
                          <TextField
                            name="defaultVoteType"
                            id="EnumerationComboedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewIssueLabelWrapperIssueDefaultVoteType"
                            label={
                              t('admin.IssueView.defaultVoteType', { defaultValue: 'Default Vote Type' }) as string
                            }
                            value={data.defaultVoteType || ''}
                            className={!editMode ? 'JUDO-viewMode' : undefined}
                            disabled={false || !isFormUpdateable()}
                            error={!!validation.get('defaultVoteType')}
                            helperText={validation.get('defaultVoteType')}
                            onChange={(event) => {
                              storeDiff('defaultVoteType', event.target.value);
                            }}
                            InputLabelProps={{ shrink: true }}
                            InputProps={{
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
                            required
                            name="title"
                            id="TextInputedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewIssueLabelWrapperIssueTitle"
                            label={t('admin.IssueView.title', { defaultValue: 'Title' }) as string}
                            value={data.title}
                            className={!editMode ? 'JUDO-viewMode' : undefined}
                            disabled={false || !isFormUpdateable()}
                            error={!!validation.get('title')}
                            helperText={validation.get('title')}
                            onChange={(event) => {
                              storeDiff('title', event.target.value);
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

                        <Grid item xs={12} sm={12} md={4.0}>
                          <TextField
                            required
                            name="status"
                            id="EnumerationComboedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewIssueLabelWrapperIssueStatus"
                            label={t('admin.IssueView.status', { defaultValue: 'Status' }) as string}
                            value={data.status || ''}
                            className={!editMode ? 'JUDO-viewMode' : undefined}
                            disabled={false || !isFormUpdateable()}
                            error={!!validation.get('status')}
                            helperText={validation.get('status')}
                            onChange={(event) => {
                              storeDiff('status', event.target.value);
                            }}
                            InputLabelProps={{ shrink: true }}
                            InputProps={{
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
                            className={!editMode ? 'JUDO-viewMode' : undefined}
                            slotProps={{
                              textField: {
                                id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewIssueLabelWrapperIssueCreated',
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
                            disabled={true || !isFormUpdateable()}
                            onChange={(newValue: Date) => {
                              storeDiff('created', newValue);
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <TextField
                            required
                            name="description"
                            id="TextAreaedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewIssueLabelWrapperIssueDescription"
                            label={t('admin.IssueView.description', { defaultValue: 'Description' }) as string}
                            value={data.description}
                            className={!editMode ? 'JUDO-viewMode' : undefined}
                            disabled={false || !isFormUpdateable()}
                            multiline
                            minRows={4.0}
                            error={!!validation.get('description')}
                            helperText={validation.get('description')}
                            onChange={(event) => {
                              storeDiff('description', event.target.value);
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

                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewEdemokraciaAdminAdminEdemokraciaAdminIssueCreateDebateButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="wechat" />}
                            loadingPosition="start"
                            onClick={() => adminIssueCreateDebateAction(data, () => fetchData())}
                            disabled={editMode}
                          >
                            <span>
                              {t('admin.IssueView.createDebate.ButtonCallOperation', { defaultValue: 'Create debate' })}
                            </span>
                          </LoadingButton>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <OwnerLink
                            ownerData={data}
                            disabled={false || !isFormUpdateable()}
                            editMode={editMode}
                            fetchOwnerData={fetchData}
                            storeDiff={storeDiff}
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
                id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOther"
                activeIndex={0}
                childTabs={[
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherArea',
                    name: 'admin.IssueView.area',
                    label: t('admin.IssueView.area', { defaultValue: 'Area' }) as string,
                    icon: 'map',
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherAttachments',
                    name: 'admin.IssueView.attachments',
                    label: t('admin.IssueView.attachments', { defaultValue: 'Attachments' }) as string,
                    icon: 'paperclip',
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherCategories',
                    name: 'admin.IssueView.categories',
                    label: t('admin.IssueView.categories', { defaultValue: 'Categories' }) as string,
                    icon: 'file-tree',
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherDebates',
                    name: 'admin.IssueView.debates',
                    label: t('admin.IssueView.debates', { defaultValue: 'Debates' }) as string,
                    icon: 'wechat',
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherComments',
                    name: 'admin.IssueView.comments',
                    label: t('admin.IssueView.comments', { defaultValue: 'Comments' }) as string,
                    icon: 'comment-text-multiple',
                  },
                ]}
              >
                <Grid item xs={12} sm={12}>
                  <Grid
                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherAreaArea"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12} md={4.0}>
                      <CountyLink
                        ownerData={data}
                        disabled={false || !isFormUpdateable()}
                        editMode={editMode}
                        fetchOwnerData={fetchData}
                        storeDiff={storeDiff}
                        validation={validation}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4.0}>
                      <CityLink
                        ownerData={data}
                        disabled={false || !isFormUpdateable()}
                        editMode={editMode}
                        fetchOwnerData={fetchData}
                        storeDiff={storeDiff}
                        validation={validation}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4.0}>
                      <DistrictLink
                        ownerData={data}
                        disabled={false || !isFormUpdateable()}
                        editMode={editMode}
                        fetchOwnerData={fetchData}
                        storeDiff={storeDiff}
                        validation={validation}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Grid
                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherAttachmentsAttachments"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherAttachmentsAttachmentsAttachmentsLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherAttachmentsAttachmentsAttachmentsLabelWrapperAttachments"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                          >
                            <AttachmentsTable
                              isOwnerLoading={isLoading}
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
                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherCategoriesCategories"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherCategoriesCategoriesCategoriesLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherCategoriesCategoriesCategoriesLabelWrapperCategories"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                          >
                            <CategoriesTable
                              isOwnerLoading={isLoading}
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
                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherDebatesDebates"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherDebatesDebatesDebatesLabelWrapper"
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
                              id="LabeledemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherDebatesDebatesDebatesLabelWrapperDebatesLabel"
                              variant="h6"
                              component="h1"
                            >
                              {t('admin.IssueView.debates.Label', { defaultValue: 'Debates' })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherDebatesDebatesDebatesLabelWrapperDebates"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                          >
                            <DebatesTable
                              isOwnerLoading={isLoading}
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
                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherCommentsComments"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherCommentsCommentsActions"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewEdemokraciaAdminAdminEdemokraciaAdminIssueCreateCommentButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="comment-text-multiple" />}
                            loadingPosition="start"
                            onClick={() => adminIssueCreateCommentAction(data, () => fetchData())}
                            disabled={editMode}
                          >
                            <span>
                              {t('admin.IssueView.createComment.ButtonCallOperation', { defaultValue: 'Add comment' })}
                            </span>
                          </LoadingButton>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherCommentsCommentsActionsCommentsLabelWrapper"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="TableedemokraciaAdminAdminEdemokraciaAdminAdminIssuesViewDefaultIssueViewOtherCommentsCommentsActionsCommentsLabelWrapperComments"
                                container
                                direction="column"
                                alignItems="stretch"
                                justifyContent="flex-start"
                              >
                                <CommentsTable
                                  isOwnerLoading={isLoading}
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
      </Container>
    </>
  );
}
