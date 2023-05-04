//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Admin.voteDefinitions#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: voteDefinitions
// Page DataElement owner name: edemokracia::admin::Admin

import { useEffect, useState, useCallback, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent, InputAdornment, MenuItem, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import {
  GridColDef,
  GridRenderCellParams,
  GridRowId,
  GridRowParams,
  GridRowSelectionModel,
  GridSortItem,
  GridSortModel,
  GridValueFormatterParams,
} from '@mui/x-data-grid';
import { DateTimePicker, DateTimeValidationError } from '@mui/x-date-pickers';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { ComponentProxy } from '@pandino/react-hooks';
import { useParams } from 'react-router-dom';
import {
  MdiIcon,
  ModeledTabs,
  PageHeader,
  DropdownButton,
  CustomBreadcrumb,
  useJudoNavigation,
} from '../../../../../components';
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
import { useConfirmationBeforeChange } from '../../../../../hooks';
import { baseTableConfig, toastConfig, dividerHeight } from '../../../../../config';
import { useL10N } from '../../../../../l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, CustomFormVisualElementProps } from '../../../../../custom';
import {
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
  EdemokraciaVoteType,
  AdminVoteDefinition,
  EdemokraciaVoteStatus,
} from '../../../../../generated/data-api';
import {
  adminAdminServiceForVoteDefinitionsImpl,
  adminVoteDefinitionServiceImpl,
} from '../../../../../generated/data-axios';
import { JudoIdentifiable } from '@judo/data-api-common';
import { mainContainerPadding } from '../../../../../theme';
import { useAdminAdminVoteDefinitionsView } from './hooks/useAdminAdminVoteDefinitionsView';
import {
  useAdminVoteDefinitionVoteYesNoAbstainAction,
  usePageRefreshVoteDefinitionsAction,
  usePageDeleteVoteDefinitionsAction,
  usePageEditVoteDefinitionsAction,
  useAdminVoteDefinitionVoteYesNoAction,
  useButtonNavigateDebateAction,
  useAdminVoteDefinitionVoteSelectAnswerAction,
  useAdminVoteDefinitionVoteRatingAction,
} from './actions';

/**
 * Name: edemokracia::admin::Admin.voteDefinitions#View
 * Is Access: true
 * Is Dashboard: false
 * Type: View
 * Edit Mode Available: true
 **/
export default function AdminAdminVoteDefinitionsView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();
  const AdminVoteDefinitionVoteYesNoAbstainAction = useAdminVoteDefinitionVoteYesNoAbstainAction();
  const pageRefreshVoteDefinitionsAction = usePageRefreshVoteDefinitionsAction();
  const pageDeleteVoteDefinitionsAction = usePageDeleteVoteDefinitionsAction();
  const pageEditVoteDefinitionsAction = usePageEditVoteDefinitionsAction();
  const AdminVoteDefinitionVoteYesNoAction = useAdminVoteDefinitionVoteYesNoAction();
  const buttonNavigateDebateAction = useButtonNavigateDebateAction();
  const AdminVoteDefinitionVoteSelectAnswerAction = useAdminVoteDefinitionVoteSelectAnswerAction();
  const AdminVoteDefinitionVoteRatingAction = useAdminVoteDefinitionVoteRatingAction();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const { queryCustomizer } = useAdminAdminVoteDefinitionsView();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleUpdateError = useErrorHandler<AdminVoteDefinition>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Update)(component=AdminAdminVoteDefinitionsView))`,
  );
  const handleDeleteError = useErrorHandler<AdminVoteDefinition>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Delete)(component=AdminAdminVoteDefinitionsView))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<AdminVoteDefinitionStored>({} as unknown as AdminVoteDefinitionStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof AdminVoteDefinitionStored, any>,
  );
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
      setData({ ...data, [attributeName]: value });
    },
    [data],
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const [validation, setValidation] = useState<Map<keyof AdminVoteDefinition, string>>(
    new Map<keyof AdminVoteDefinition, string>(),
  );

  const title: string = t('edemokracia.admin.Admin.voteDefinitions.View', {
    defaultValue: 'View / Edit Vote Definition',
  });

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
      const res = await adminVoteDefinitionServiceImpl.refresh(
        { __signedIdentifier: signedIdentifier } as AdminVoteDefinitionStored,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminVoteDefinitionStored, any>);
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveData = async () => {
    setIsLoading(true);

    try {
      const res = await adminVoteDefinitionServiceImpl.update(payloadDiff);

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
      await adminVoteDefinitionServiceImpl.delete(data as AdminVoteDefinitionStored);

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
    setValidation(new Map<keyof AdminVoteDefinition, string>());
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
                pageDeleteVoteDefinitionsAction(data, () => {
                  back();
                })
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
            container
            xs={12}
            sm={12}
            spacing={2}
            direction="column"
            alignItems="stretch"
            justifyContent="flex-start"
          >
            <Grid item xs={12} sm={12}>
              <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewDefaultVoteDefinitionViewGroup">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        name="title"
                        id="TextInputedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewDefaultVoteDefinitionViewGroupTitle"
                        label={
                          t('edemokracia.admin.Admin.voteDefinitions.VoteDefinition.View.group.title', {
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

                    <Grid item xs={12} sm={12}>
                      <DateTimePicker
                        ampm={false}
                        ampmInClock={false}
                        className={!editMode ? 'JUDO-viewMode' : undefined}
                        slotProps={{
                          textField: {
                            id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewDefaultVoteDefinitionViewGroupCloseAt',
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
                        label={
                          t('edemokracia.admin.Admin.voteDefinitions.VoteDefinition.View.group.closeAt', {
                            defaultValue: 'CloseAt',
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

                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        name="status"
                        id="EnumerationComboedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewDefaultVoteDefinitionViewGroupStatus"
                        label={
                          t('edemokracia.admin.Admin.voteDefinitions.VoteDefinition.View.group.status', {
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
                          storeDiff('status', event.target.value as EdemokraciaVoteStatus);
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

                    <Grid item xs={12} sm={12}>
                      <AssociationButton
                        id="NavigationToPageActionedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionDebateButtonNavigate"
                        variant={undefined}
                        editMode={editMode}
                        navigateAction={(target) => buttonNavigateDebateAction(data, target)}
                        owner={data}
                        fetchCall={async (owner: JudoIdentifiable<any>) =>
                          adminVoteDefinitionServiceImpl.getDebate(owner, {
                            _mask: '{}',
                          })
                        }
                      >
                        {t('edemokracia.admin.Admin.voteDefinitions.VoteDefinition.View.group.debate', {
                          defaultValue: 'Debate',
                        })}
                        <MdiIcon path="arrow-right" />
                      </AssociationButton>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <DateTimePicker
                        ampm={false}
                        ampmInClock={false}
                        className={!editMode ? 'JUDO-viewMode' : undefined}
                        slotProps={{
                          textField: {
                            id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewDefaultVoteDefinitionViewGroupCreated',
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
                        label={
                          t('edemokracia.admin.Admin.voteDefinitions.VoteDefinition.View.group.created', {
                            defaultValue: 'Created',
                          }) as string
                        }
                        value={serviceDateToUiDate(data.created ?? null)}
                        disabled={false || !isFormUpdateable()}
                        onChange={(newValue: Date) => {
                          setEditMode(true);
                          storeDiff('created', newValue);
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        name="description"
                        id="TextAreaedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewDefaultVoteDefinitionViewGroupDescription"
                        label={
                          t('edemokracia.admin.Admin.voteDefinitions.VoteDefinition.View.group.description', {
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
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid container item xs={12} sm={12}>
              <ModeledTabs
                id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewDefaultVoteDefinitionViewTabBar"
                activeIndex={0}
                childTabs={[
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewDefaultVoteDefinitionViewTabBarYesnovote',
                    name: 'yesnovote',
                    label: 'Yes / No vote',
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewDefaultVoteDefinitionViewTabBarYesnoabstainvote',
                    name: 'yesnoabstainvote',
                    label: 'Yes / No / Abstain vote',
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewDefaultVoteDefinitionViewTabBarSelectanswervote',
                    name: 'selectanswervote',
                    label: 'Select answer vote',
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewDefaultVoteDefinitionViewTabBarRatingvote',
                    name: 'ratingvote',
                    label: 'Rating vote',
                  },
                ]}
              >
                {!data.isNotYesNoType && (
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewDefaultVoteDefinitionViewTabBarYesnovoteYesnovote"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      {!data.isNotYesNoType && (
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionVoteYesNoButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="chevron_right" />}
                            loadingPosition="start"
                            onClick={() => AdminVoteDefinitionVoteYesNoAction(data, () => fetchData())}
                            disabled={!data.isYesNoType || editMode}
                          >
                            <span>
                              {t(
                                'edemokracia.admin.Admin.voteDefinitions.VoteDefinition.View.tabBar.yesnovote.yesnovote.voteYesNo',
                                { defaultValue: 'Vote' },
                              )}
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
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewDefaultVoteDefinitionViewTabBarYesnoabstainvoteYesnoabstainvote"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      {!data.isNotYesNoAbstainType && (
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionVoteYesNoAbstainButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="chevron_right" />}
                            loadingPosition="start"
                            onClick={() => AdminVoteDefinitionVoteYesNoAbstainAction(data, () => fetchData())}
                            disabled={!data.isYesNoAbstainType || editMode}
                          >
                            <span>
                              {t(
                                'edemokracia.admin.Admin.voteDefinitions.VoteDefinition.View.tabBar.yesnoabstainvote.yesnoabstainvote.voteYesNoAbstain',
                                { defaultValue: 'VoteYesNoAbstain' },
                              )}
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
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewDefaultVoteDefinitionViewTabBarSelectanswervoteSelectanswervote"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      {!data.isNotSelectAnswerType && (
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionVoteSelectAnswerButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="chevron_right" />}
                            loadingPosition="start"
                            onClick={() => AdminVoteDefinitionVoteSelectAnswerAction(data, () => fetchData())}
                            disabled={!data.isSelectAnswerType || editMode}
                          >
                            <span>
                              {t(
                                'edemokracia.admin.Admin.voteDefinitions.VoteDefinition.View.tabBar.selectanswervote.selectanswervote.voteSelectAnswer',
                                { defaultValue: 'VoteSelectAnswer' },
                              )}
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
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewDefaultVoteDefinitionViewTabBarRatingvoteRatingvote"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      {!data.isNotRatingType && (
                        <Grid item xs={12} sm={12} md={4.0}>
                          <LoadingButton
                            id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminVoteDefinitionsViewEdemokraciaAdminAdminEdemokraciaAdminVoteDefinitionVoteRatingButtonCallOperation"
                            loading={isLoading}
                            variant={undefined}
                            startIcon={<MdiIcon path="chevron_right" />}
                            loadingPosition="start"
                            onClick={() => AdminVoteDefinitionVoteRatingAction(data, () => fetchData())}
                            disabled={!data.isRatingType || editMode}
                          >
                            <span>
                              {t(
                                'edemokracia.admin.Admin.voteDefinitions.VoteDefinition.View.tabBar.ratingvote.ratingvote.voteRating',
                                { defaultValue: 'VoteRating' },
                              )}
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
      </Container>
    </>
  );
}
