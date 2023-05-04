//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Dashboard.debates#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: debates
// Page DataElement owner name: edemokracia::admin::Dashboard

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
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowId,
  GridRowParams,
  GridRowSelectionModel,
  GridSortItem,
  GridSortModel,
  GridToolbarContainer,
  GridValueFormatterParams,
} from '@mui/x-data-grid';
import { DateTimePicker, DateTimeValidationError } from '@mui/x-date-pickers';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { ComponentProxy } from '@pandino/react-hooks';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import {
  MdiIcon,
  ModeledTabs,
  PageHeader,
  DropdownButton,
  CustomBreadcrumb,
  useJudoNavigation,
} from '../../../../../components';
import { useConfirmationBeforeChange } from '../../../../../hooks';
import { columnsActionCalculator } from '../../../../../components/table';
import { useRangeDialog } from '../../../../../components/dialog';
import {
  AggregationInput,
  AssociationButton,
  BinaryInput,
  CollectionAssociationButton,
  TrinaryLogicCombobox,
} from '../../../../../components/widgets';
import {
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  fileHandling,
  processQueryCustomizer,
  TableRowAction,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '../../../../../utilities';
import { baseTableConfig, toastConfig, dividerHeight } from '../../../../../config';
import { useL10N } from '../../../../../l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, CustomFormVisualElementProps } from '../../../../../custom';
import {
  AdminCon,
  AdminIssueStored,
  AdminCommentQueryCustomizer,
  AdminUserMaskBuilder,
  AdminIssueQueryCustomizer,
  AdminProQueryCustomizer,
  AdminCommentMaskBuilder,
  AdminVoteDefinitionMaskBuilder,
  AdminComment,
  AdminDebateStored,
  AdminUser,
  AdminDashboardStored,
  AdminDashboard,
  AdminDebateQueryCustomizer,
  AdminIssueMaskBuilder,
  AdminVoteDefinitionQueryCustomizer,
  AdminProMaskBuilder,
  AdminConStored,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminConMaskBuilder,
  AdminPro,
  EdemokraciaDebateStatus,
  AdminVoteDefinitionStored,
  AdminProStored,
  AdminDebate,
  AdminIssue,
  AdminConQueryCustomizer,
  AdminVoteDefinition,
  AdminCommentStored,
} from '../../../../../generated/data-api';
import { adminDashboardServiceImpl, adminDebateServiceImpl } from '../../../../../generated/data-axios';
import { JudoIdentifiable } from '@judo/data-api-common';
import { mainContainerPadding } from '../../../../../theme';
import { useAdminDashboardDebatesView } from './hooks/useAdminDashboardDebatesView';
import {
  useAdminConCreateSubArgumentAction,
  useAdminDebateCreateCommentAction,
  useLinkViewVoteDefinitionAction,
  useRowViewProsAction,
  usePageDeleteDebatesAction,
  useRowDeleteCommentsAction,
  useRowDeleteConsAction,
  useAdminProCreateSubArgumentAction,
  usePageEditDebatesAction,
  useLinkViewCreatedByAction,
  usePageRefreshDebatesAction,
  useAdminConCreateCommentAction,
  useRowEditConsAction,
  useAdminProVoteUpAction,
  useLinkViewIssueAction,
  useAdminCommentVoteDownAction,
  useAdminConVoteDownAction,
  useAdminProCreateCommentAction,
  useRowDeleteProsAction,
  useRowEditProsAction,
  useAdminCommentVoteUpAction,
  useRowViewConsAction,
  useAdminDebateCreateArgumentAction,
  useAdminConVoteUpAction,
  useAdminProVoteDownAction,
  useRowEditCommentsAction,
  useRowViewCommentsAction,
  useAdminDebateCloseDebateAction,
} from './actions';

/**
 * Name: edemokracia::admin::Dashboard.debates#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: true
 **/
export default function AdminDashboardDebatesView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();
  const AdminConCreateSubArgumentAction = useAdminConCreateSubArgumentAction();
  const AdminDebateCreateCommentAction = useAdminDebateCreateCommentAction();
  const linkViewVoteDefinitionAction = useLinkViewVoteDefinitionAction();
  const rowViewProsAction = useRowViewProsAction();
  const pageDeleteDebatesAction = usePageDeleteDebatesAction();
  const rowDeleteCommentsAction = useRowDeleteCommentsAction();
  const rowDeleteConsAction = useRowDeleteConsAction();
  const AdminProCreateSubArgumentAction = useAdminProCreateSubArgumentAction();
  const pageEditDebatesAction = usePageEditDebatesAction();
  const linkViewCreatedByAction = useLinkViewCreatedByAction();
  const pageRefreshDebatesAction = usePageRefreshDebatesAction();
  const AdminConCreateCommentAction = useAdminConCreateCommentAction();
  const rowEditConsAction = useRowEditConsAction();
  const AdminProVoteUpAction = useAdminProVoteUpAction();
  const linkViewIssueAction = useLinkViewIssueAction();
  const AdminCommentVoteDownAction = useAdminCommentVoteDownAction();
  const AdminConVoteDownAction = useAdminConVoteDownAction();
  const AdminProCreateCommentAction = useAdminProCreateCommentAction();
  const rowDeleteProsAction = useRowDeleteProsAction();
  const rowEditProsAction = useRowEditProsAction();
  const AdminCommentVoteUpAction = useAdminCommentVoteUpAction();
  const rowViewConsAction = useRowViewConsAction();
  const AdminDebateCreateArgumentAction = useAdminDebateCreateArgumentAction();
  const AdminConVoteUpAction = useAdminConVoteUpAction();
  const AdminProVoteDownAction = useAdminProVoteDownAction();
  const rowEditCommentsAction = useRowEditCommentsAction();
  const rowViewCommentsAction = useRowViewCommentsAction();
  const AdminDebateCloseDebateAction = useAdminDebateCloseDebateAction();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const {
    queryCustomizer,
    consColumns,
    consRangeFilterOptions,
    consInitialQueryCustomizer,
    prosColumns,
    prosRangeFilterOptions,
    prosInitialQueryCustomizer,
    commentsColumns,
    commentsRangeFilterOptions,
    commentsInitialQueryCustomizer,
  } = useAdminDashboardDebatesView();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleUpdateError = useErrorHandler<AdminDebate>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Update)(component=AdminDashboardDebatesView))`,
  );
  const handleDeleteError = useErrorHandler<AdminDebate>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Delete)(component=AdminDashboardDebatesView))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<AdminDebateStored>({} as unknown as AdminDebateStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminDebateStored, any>>(
    {} as unknown as Record<keyof AdminDebateStored, any>,
  );
  const storeDiff: (attributeName: keyof AdminDebateStored, value: any) => void = useCallback(
    (attributeName: keyof AdminDebateStored, value: any) => {
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
      setData({ ...data, [attributeName]: value });
    },
    [data],
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const [validation, setValidation] = useState<Map<keyof AdminDebate, string>>(new Map<keyof AdminDebate, string>());

  const [consSortModel, setConsSortModel] = useState<GridSortModel>([{ field: 'title', sort: 'asc' }]);

  const [prosSortModel, setProsSortModel] = useState<GridSortModel>([{ field: 'title', sort: 'asc' }]);

  const [commentsSortModel, setCommentsSortModel] = useState<GridSortModel>([{ field: 'created', sort: 'asc' }]);

  const consRowActions: TableRowAction<AdminConStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminDebateConsRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminConStored) => rowDeleteConsAction(data, row, () => fetchData()),
      disabled: (row: AdminConStored) => editMode || !row.__deleteable,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminConVoteUpButtonCallOperation',
      label: t('edemokracia.admin.Dashboard.debates.View.edemokracia.admin.Con.voteUp', { defaultValue: '' }) as string,
      icon: <MdiIcon path="thumb-up" />,
      action: async (row: AdminConStored) => AdminConVoteUpAction(row, () => fetchData()),
      disabled: (row: AdminConStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminConVoteDownButtonCallOperation',
      label: t('edemokracia.admin.Dashboard.debates.View.edemokracia.admin.Con.voteDown', {
        defaultValue: '',
      }) as string,
      icon: <MdiIcon path="thumb-down" />,
      action: async (row: AdminConStored) => AdminConVoteDownAction(row, () => fetchData()),
      disabled: (row: AdminConStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminConCreateSubArgumentButtonCallOperation',
      label: t('edemokracia.admin.Dashboard.debates.View.edemokracia.admin.Con.createSubArgument', {
        defaultValue: 'Add argument',
      }) as string,
      icon: <MdiIcon path="account-voice" />,
      action: async (row: AdminConStored) => AdminConCreateSubArgumentAction(row, () => fetchData()),
      disabled: (row: AdminConStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminConCreateCommentButtonCallOperation',
      label: t('edemokracia.admin.Dashboard.debates.View.edemokracia.admin.Con.createComment', {
        defaultValue: 'Add comment',
      }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      action: async (row: AdminConStored) => AdminConCreateCommentAction(row, () => fetchData()),
      disabled: (row: AdminConStored) => editMode,
    },
  ];
  const prosRowActions: TableRowAction<AdminProStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminDebateProsRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminProStored) => rowDeleteProsAction(data, row, () => fetchData()),
      disabled: (row: AdminProStored) => editMode || !row.__deleteable,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminProVoteUpButtonCallOperation',
      label: t('edemokracia.admin.Dashboard.debates.View.edemokracia.admin.Pro.voteUp', { defaultValue: '' }) as string,
      icon: <MdiIcon path="thumb-up" />,
      action: async (row: AdminProStored) => AdminProVoteUpAction(row, () => fetchData()),
      disabled: (row: AdminProStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminProVoteDownButtonCallOperation',
      label: t('edemokracia.admin.Dashboard.debates.View.edemokracia.admin.Pro.voteDown', {
        defaultValue: '',
      }) as string,
      icon: <MdiIcon path="thumb-down" />,
      action: async (row: AdminProStored) => AdminProVoteDownAction(row, () => fetchData()),
      disabled: (row: AdminProStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminProCreateSubArgumentButtonCallOperation',
      label: t('edemokracia.admin.Dashboard.debates.View.edemokracia.admin.Pro.createSubArgument', {
        defaultValue: 'Add argument',
      }) as string,
      icon: <MdiIcon path="account-voice" />,
      action: async (row: AdminProStored) => AdminProCreateSubArgumentAction(row, () => fetchData()),
      disabled: (row: AdminProStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminProCreateCommentButtonCallOperation',
      label: t('edemokracia.admin.Dashboard.debates.View.edemokracia.admin.Pro.createComment', {
        defaultValue: 'Add comment',
      }) as string,
      icon: <MdiIcon path="comment-text-multiple" />,
      action: async (row: AdminProStored) => AdminProCreateCommentAction(row, () => fetchData()),
      disabled: (row: AdminProStored) => editMode,
    },
  ];
  const commentsRowActions: TableRowAction<AdminCommentStored>[] = [
    {
      id: 'DeleteActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminDebateCommentsRowDelete',
      label: t('judo.pages.table.delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      action: async (row: AdminCommentStored) => rowDeleteCommentsAction(data, row, () => fetchData()),
      disabled: (row: AdminCommentStored) => editMode || !row.__deleteable,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminCommentVoteUpButtonCallOperation',
      label: t('edemokracia.admin.Dashboard.debates.View.edemokracia.admin.Comment.voteUp', {
        defaultValue: '',
      }) as string,
      icon: <MdiIcon path="thumb-up" />,
      action: async (row: AdminCommentStored) => AdminCommentVoteUpAction(row, () => fetchData()),
      disabled: (row: AdminCommentStored) => editMode,
    },
    {
      id: 'CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminCommentVoteDownButtonCallOperation',
      label: t('edemokracia.admin.Dashboard.debates.View.edemokracia.admin.Comment.voteDown', {
        defaultValue: '',
      }) as string,
      icon: <MdiIcon path="thumb-down" />,
      action: async (row: AdminCommentStored) => AdminCommentVoteDownAction(row, () => fetchData()),
      disabled: (row: AdminCommentStored) => editMode,
    },
  ];
  const title: string = t('edemokracia.admin.Dashboard.debates.View', { defaultValue: 'View / Edit Debate' });

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

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await adminDebateServiceImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<AdminDebate>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminDebateStored, any>);
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveData = async () => {
    setIsLoading(true);

    try {
      const res = await adminDebateServiceImpl.update(payloadDiff);

      if (res) {
        await fetchData();
        setEditMode(false);
      }
    } catch (error) {
      handleUpdateError(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteData = async () => {
    setIsLoading(true);

    try {
      await adminDebateServiceImpl.delete(data);

      back();
    } catch (error) {
      handleDeleteError(error, undefined, data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setValidation(new Map<keyof AdminDebate, string>());
  }, [editMode]);

  return (
    <>
      <PageHeader title={title}>
        {editMode && isFormUpdateable() && (
          <Grid className="page-action" item>
            <Button
              id="page-action-edit-cancel"
              variant="outlined"
              onClick={() => {
                setEditMode(false);
                fetchData();
              }}
              disabled={isLoading}
            >
              <MdiIcon path="cancel" />
              {t('judo.pages.cancel', { defaultValue: 'Cancel' })}
            </Button>
          </Grid>
        )}
        {editMode && isFormUpdateable() && (
          <Grid className="page-action" item>
            <LoadingButton
              loading={isLoading}
              loadingPosition="start"
              id="page-action-edit-save"
              startIcon={<MdiIcon path="content-save" />}
              onClick={() => saveData()}
            >
              <span>{t('judo.pages.save', { defaultValue: 'Save' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && (
          <Grid className="page-action" item>
            <LoadingButton
              loading={isLoading}
              loadingPosition="start"
              id="page-action-refresh"
              startIcon={<MdiIcon path="refresh" />}
              onClick={() => fetchData()}
            >
              <span>{t('judo.pages.refresh', { defaultValue: 'Refresh' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && isFormDeleteable() && (
          <Grid className="page-action" item>
            <LoadingButton
              id="page-action-delete"
              loading={isLoading}
              loadingPosition="start"
              startIcon={<MdiIcon path="delete" />}
              onClick={() =>
                pageDeleteDebatesAction(
                  { __signedIdentifier: signedIdentifier } as JudoIdentifiable<AdminDashboard>,
                  data,
                  () => {
                    back();
                  },
                )
              }
              disabled={!data.__deleteable}
            >
              <span>{t('judo.pages.delete', { defaultValue: 'Delete' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </PageHeader>
      <Container component="main" maxWidth="xl">
        <Box sx={mainContainerPadding}>
          <Grid
            className="relation-page-data"
            container
            xs={12}
            sm={12}
            spacing={2}
            direction="column"
            alignItems="stretch"
            justifyContent="flex-start"
          >
            <Grid item xs={12} sm={12}>
              <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewDebateLabelWrapper">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                        <MdiIcon path="wechat" />
                        <Typography
                          id="LabeledemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewDebateLabelWrapperDebateLabel"
                          variant="h6"
                          component="h1"
                        >
                          {t('edemokracia.admin.Dashboard.debates.Debate.View.debate.debate.Label', {
                            defaultValue: 'Debate',
                          })}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewDebateLabelWrapperDebate"
                        container
                        direction="row"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12} md={8.0}>
                          <TextField
                            required
                            name="title"
                            id="TextInputedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewDebateLabelWrapperDebateTitle"
                            label={
                              t('edemokracia.admin.Dashboard.debates.Debate.View.debate.debate.title', {
                                defaultValue: 'Title',
                              }) as string
                            }
                            value={data.title}
                            className={!editMode ? 'JUDO-viewMode' : undefined}
                            disabled={false || !isFormUpdateable()}
                            error={!!validation.get('title')}
                            helperText={validation.get('title')}
                            onChange={(event) => {
                              setEditMode(true);
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

                        <Grid item xs={12} sm={12} md={2.0}>
                          <TextField
                            required
                            name="status"
                            id="EnumerationComboedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewDebateLabelWrapperDebateStatus"
                            label={
                              t('edemokracia.admin.Dashboard.debates.Debate.View.debate.debate.status', {
                                defaultValue: 'Status',
                              }) as string
                            }
                            value={data.status || ''}
                            className={!editMode ? 'JUDO-viewMode' : undefined}
                            disabled={false || !isFormUpdateable()}
                            error={!!validation.get('status')}
                            helperText={validation.get('status')}
                            onChange={(event) => {
                              setEditMode(true);
                              storeDiff('status', event.target.value as EdemokraciaDebateStatus);
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
                              id="EnumerationMemberedemokraciaAdminAdminEdemokraciaDebateStatusCREATED"
                              value={'CREATED'}
                            >
                              {t('enumerations.EdemokraciaDebateStatus.CREATED', { defaultValue: 'CREATED' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaAdminAdminEdemokraciaDebateStatusPENDING"
                              value={'PENDING'}
                            >
                              {t('enumerations.EdemokraciaDebateStatus.PENDING', { defaultValue: 'PENDING' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaAdminAdminEdemokraciaDebateStatusACTIVE"
                              value={'ACTIVE'}
                            >
                              {t('enumerations.EdemokraciaDebateStatus.ACTIVE', { defaultValue: 'ACTIVE' })}
                            </MenuItem>
                            <MenuItem
                              id="EnumerationMemberedemokraciaAdminAdminEdemokraciaDebateStatusCLOSED"
                              value={'CLOSED'}
                            >
                              {t('enumerations.EdemokraciaDebateStatus.CLOSED', { defaultValue: 'CLOSED' })}
                            </MenuItem>
                          </TextField>
                        </Grid>

                        <Grid item xs={12} sm={12} md={2.0}>
                          <DateTimePicker
                            ampm={false}
                            ampmInClock={false}
                            className={!editMode ? 'JUDO-viewMode' : undefined}
                            slotProps={{
                              textField: {
                                id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewDebateLabelWrapperDebateCloseAt',
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
                                const copy = new Map<keyof AdminDebate, string>(prevValidation);
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
                              t('edemokracia.admin.Dashboard.debates.Debate.View.debate.debate.closeAt', {
                                defaultValue: 'Close at',
                              }) as string
                            }
                            value={serviceDateToUiDate(data.closeAt ?? null)}
                            disabled={false || !isFormUpdateable()}
                            onChange={(newValue: Date) => {
                              setEditMode(true);
                              storeDiff('closeAt', newValue);
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12} md={8.0}>
                          <AggregationInput
                            name="issue"
                            id="LinkedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewDebateLabelWrapperDebateIssue"
                            label={
                              t('edemokracia.admin.Dashboard.debates.Debate.View.debate.debate.issue', {
                                defaultValue: 'Issue',
                              }) as string
                            }
                            labelList={[data.issue?.representation?.toString() ?? '']}
                            value={data.issue}
                            error={!!validation.get('issue')}
                            helperText={validation.get('issue')}
                            icon={<MdiIcon path="file-document" />}
                            disabled={true || !isFormUpdateable()}
                            editMode={editMode}
                            onView={async () => linkViewIssueAction(data, data?.issue!)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12} md={4.0}>
                          <AggregationInput
                            name="createdBy"
                            id="LinkedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewDebateLabelWrapperDebateCreatedBy"
                            label={
                              t('edemokracia.admin.Dashboard.debates.Debate.View.debate.debate.createdBy', {
                                defaultValue: 'Created by',
                              }) as string
                            }
                            labelList={[data.createdBy?.representation?.toString() ?? '']}
                            value={data.createdBy}
                            error={!!validation.get('createdBy')}
                            helperText={validation.get('createdBy')}
                            icon={<MdiIcon path="account" />}
                            disabled={true || !isFormUpdateable()}
                            editMode={editMode}
                            onView={async () => linkViewCreatedByAction(data, data?.createdBy!)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <TextField
                            required
                            name="description"
                            id="TextAreaedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewDebateLabelWrapperDebateDescription"
                            label={
                              t('edemokracia.admin.Dashboard.debates.Debate.View.debate.debate.description', {
                                defaultValue: 'Description',
                              }) as string
                            }
                            value={data.description}
                            className={!editMode ? 'JUDO-viewMode' : undefined}
                            disabled={false || !isFormUpdateable()}
                            multiline
                            minRows={4.0}
                            error={!!validation.get('description')}
                            helperText={validation.get('description')}
                            onChange={(event) => {
                              setEditMode(true);
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

                        <Grid item xs={12} sm={12}>
                          <AggregationInput
                            name="voteDefinition"
                            id="LinkedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewDebateLabelWrapperDebateVoteDefinition"
                            label={
                              t('edemokracia.admin.Dashboard.debates.Debate.View.debate.debate.voteDefinition', {
                                defaultValue: 'VoteDefinition',
                              }) as string
                            }
                            labelList={[
                              data.voteDefinition?.title?.toString() ?? '',
                              data.voteDefinition?.created?.toString() ?? '',
                              data.voteDefinition?.status?.toString() ?? '',
                              data.voteDefinition?.closeAt?.toString() ?? '',
                            ]}
                            value={data.voteDefinition}
                            error={!!validation.get('voteDefinition')}
                            helperText={validation.get('voteDefinition')}
                            icon={<MdiIcon path="table_rows" />}
                            disabled={true || !isFormUpdateable()}
                            editMode={editMode}
                            onView={async () => linkViewVoteDefinitionAction(data, data?.voteDefinition!)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminDebateCloseDebateButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="wechat" />}
                            loadingPosition="start"
                            onClick={() => AdminDebateCloseDebateAction(data, () => fetchData())}
                            disabled={editMode}
                          >
                            <span>
                              {t('edemokracia.admin.Dashboard.debates.Debate.View.debate.debate.closeDebate', {
                                defaultValue: 'Close debate',
                              })}
                            </span>
                          </LoadingButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid container item xs={12} sm={12}>
              <ModeledTabs
                id="TabControlleredemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBar"
                activeIndex={0}
                childTabs={[
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarArguments',
                    name: 'arguments',
                    label: 'Arguments',
                    icon: 'account-voice',
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarComments',
                    name: 'comments',
                    label: 'Comments',
                    icon: 'comment-text-multiple',
                  },
                ]}
              >
                <Grid item xs={12} sm={12}>
                  <Grid
                    id="FlexedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarArgumentsArguments"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarArgumentsArgumentsActions"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminDebateCreateArgumentButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="account-voice" />}
                            loadingPosition="start"
                            onClick={() => AdminDebateCreateArgumentAction(data, () => fetchData())}
                            disabled={editMode}
                          >
                            <span>
                              {t(
                                'edemokracia.admin.Dashboard.debates.Debate.View.tabBar.arguments.arguments.actions.createArgument',
                                { defaultValue: 'Add argument' },
                              )}
                            </span>
                          </LoadingButton>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6.0}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarArgumentsArgumentsProsLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                            <MdiIcon path="chat-plus" />
                            <Typography
                              id="LabeledemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarArgumentsArgumentsProsLabelWrapperProsLabel"
                              variant="h6"
                              component="h1"
                            >
                              {t(
                                'edemokracia.admin.Dashboard.debates.Debate.View.tabBar.arguments.arguments.pros.pros.Label',
                                { defaultValue: 'Pro' },
                              )}
                            </Typography>
                          </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarArgumentsArgumentsProsLabelWrapperPros"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                          >
                            <DataGrid
                              {...baseTableConfig}
                              sx={{
                                // overflow: 'hidden',
                                display: 'grid',
                              }}
                              getRowId={(row: { __identifier: string }) => row.__identifier}
                              loading={isLoading}
                              rows={data?.pros ?? []}
                              getRowClassName={() => 'data-grid-row'}
                              getCellClassName={() => 'data-grid-cell'}
                              columns={[
                                ...prosColumns,
                                ...columnsActionCalculator(
                                  'RelationTypeedemokraciaAdminAdminEdemokraciaAdminDebatePros',
                                  prosRowActions,
                                  { shownActions: 2 },
                                ),
                              ]}
                              disableRowSelectionOnClick
                              onRowClick={(params: GridRowParams<AdminProStored>) => {
                                if (!editMode) {
                                  rowViewProsAction(data, params.row);
                                }
                              }}
                              sortModel={prosSortModel}
                              onSortModelChange={(newModel: GridSortModel) => {
                                setProsSortModel(newModel);
                              }}
                              components={{
                                Toolbar: () => (
                                  <GridToolbarContainer>
                                    <div>{/* Placeholder */}</div>
                                  </GridToolbarContainer>
                                ),
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6.0}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarArgumentsArgumentsConsLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                            <MdiIcon path="chat-minus" />
                            <Typography
                              id="LabeledemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarArgumentsArgumentsConsLabelWrapperConsLabel"
                              variant="h6"
                              component="h1"
                            >
                              {t(
                                'edemokracia.admin.Dashboard.debates.Debate.View.tabBar.arguments.arguments.cons.cons.Label',
                                { defaultValue: 'Contra' },
                              )}
                            </Typography>
                          </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarArgumentsArgumentsConsLabelWrapperCons"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                          >
                            <DataGrid
                              {...baseTableConfig}
                              sx={{
                                // overflow: 'hidden',
                                display: 'grid',
                              }}
                              getRowId={(row: { __identifier: string }) => row.__identifier}
                              loading={isLoading}
                              rows={data?.cons ?? []}
                              getRowClassName={() => 'data-grid-row'}
                              getCellClassName={() => 'data-grid-cell'}
                              columns={[
                                ...consColumns,
                                ...columnsActionCalculator(
                                  'RelationTypeedemokraciaAdminAdminEdemokraciaAdminDebateCons',
                                  consRowActions,
                                  { shownActions: 2 },
                                ),
                              ]}
                              disableRowSelectionOnClick
                              onRowClick={(params: GridRowParams<AdminConStored>) => {
                                if (!editMode) {
                                  rowViewConsAction(data, params.row);
                                }
                              }}
                              sortModel={consSortModel}
                              onSortModelChange={(newModel: GridSortModel) => {
                                setConsSortModel(newModel);
                              }}
                              components={{
                                Toolbar: () => (
                                  <GridToolbarContainer>
                                    <div>{/* Placeholder */}</div>
                                  </GridToolbarContainer>
                                ),
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Grid
                    id="FlexedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarCommentsComments"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarCommentsCommentsActions"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewEdemokraciaAdminAdminEdemokraciaAdminDebateCreateCommentButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="comment-text-multiple" />}
                            loadingPosition="start"
                            onClick={() => AdminDebateCreateCommentAction(data, () => fetchData())}
                            disabled={editMode}
                          >
                            <span>
                              {t(
                                'edemokracia.admin.Dashboard.debates.Debate.View.tabBar.comments.comments.actions.createComment',
                                { defaultValue: 'Add comment' },
                              )}
                            </span>
                          </LoadingButton>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarCommentsCommentsCommentsLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaAdminAdminEdemokraciaAdminDashboardDebatesViewDefaultDebateViewTabBarCommentsCommentsCommentsLabelWrapperComments"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                          >
                            <DataGrid
                              {...baseTableConfig}
                              sx={{
                                // overflow: 'hidden',
                                display: 'grid',
                              }}
                              getRowId={(row: { __identifier: string }) => row.__identifier}
                              loading={isLoading}
                              rows={data?.comments ?? []}
                              getRowClassName={() => 'data-grid-row'}
                              getCellClassName={() => 'data-grid-cell'}
                              columns={[
                                ...commentsColumns,
                                ...columnsActionCalculator(
                                  'RelationTypeedemokraciaAdminAdminEdemokraciaAdminDebateComments',
                                  commentsRowActions,
                                  { shownActions: 2 },
                                ),
                              ]}
                              disableRowSelectionOnClick
                              onRowClick={(params: GridRowParams<AdminCommentStored>) => {
                                if (!editMode) {
                                  rowViewCommentsAction(data, params.row);
                                }
                              }}
                              sortModel={commentsSortModel}
                              onSortModelChange={(newModel: GridSortModel) => {
                                setCommentsSortModel(newModel);
                              }}
                              components={{
                                Toolbar: () => (
                                  <GridToolbarContainer>
                                    <div>{/* Placeholder */}</div>
                                  </GridToolbarContainer>
                                ),
                              }}
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
      </Container>
    </>
  );
}
