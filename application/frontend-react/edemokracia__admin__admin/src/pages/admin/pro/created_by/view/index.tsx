///////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// ------------------------------
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Pro.createdBy#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: createdBy
// Page DataElement owner name: edemokracia::admin::Pro

import { useEffect, useState, useCallback, FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Grid,
  CardContent,
  Button,
  FormGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  MenuItem,
  Card,
  InputAdornment,
  Typography,
} from '@mui/material';
import {
  GridRowId,
  DataGrid,
  GridToolbarContainer,
  GridRowParams,
  GridRenderCellParams,
  GridSelectionModel,
  GridSortItem,
  GridSortModel,
  GridColDef,
} from '@mui/x-data-grid';
import { DateTimePicker } from '@mui/x-date-pickers';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { ComponentProxy } from '@pandino/react-hooks';
import { useParams } from 'react-router-dom';
import type { Dayjs } from 'dayjs';
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
  stringToBooleanSelect,
  booleanToStringSelect,
} from '../../../../../utilities';
import { baseTableConfig, toastConfig, dividerHeight } from '../../../../../config';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, CustomFormVisualElementProps } from '../../../../../custom';
import {
  AdminCityQueryCustomizer,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminPro,
  AdminCountyQueryCustomizer,
  AdminDistrictStored,
  AdminCounty,
  AdminCity,
  AdminDistrictQueryCustomizer,
  AdminProStored,
  AdminCountyMaskBuilder,
  AdminCityMaskBuilder,
  AdminDistrict,
  AdminUser,
  AdminDistrictMaskBuilder,
  AdminCityStored,
  AdminCountyStored,
} from '../../../../../generated/data-api';
import { adminProServiceImpl, adminUserServiceImpl } from '../../../../../generated/data-axios';
import { JudoIdentifiable } from '@judo/data-api-common';
import { mainContainerPadding } from '../../../../../theme';
import { useAdminProCreatedByView } from './hooks/useAdminProCreatedByView';
import {
  useRowEditActivityCountiesAction,
  usePageRefreshCreatedByAction,
  useLinkEditResidentDistrictAction,
  useLinkEditResidentCityAction,
  useButtonNavigateVotesAction,
  useLinkEditResidentCountyAction,
  useRowEditActivityDistrictsAction,
  useLinkViewResidentCountyAction,
  useRowViewActivityCountiesAction,
  useLinkViewResidentDistrictAction,
  useRowViewActivityCitiesAction,
  useLinkViewResidentCityAction,
  useRowViewActivityDistrictsAction,
  useRowEditActivityCitiesAction,
} from './actions';

/**
 * Name: edemokracia::admin::Pro.createdBy#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminProCreatedByView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();
  const rowEditActivityCountiesAction = useRowEditActivityCountiesAction();
  const pageRefreshCreatedByAction = usePageRefreshCreatedByAction();
  const linkEditResidentDistrictAction = useLinkEditResidentDistrictAction();
  const linkEditResidentCityAction = useLinkEditResidentCityAction();
  const buttonNavigateVotesAction = useButtonNavigateVotesAction();
  const linkEditResidentCountyAction = useLinkEditResidentCountyAction();
  const rowEditActivityDistrictsAction = useRowEditActivityDistrictsAction();
  const linkViewResidentCountyAction = useLinkViewResidentCountyAction();
  const rowViewActivityCountiesAction = useRowViewActivityCountiesAction();
  const linkViewResidentDistrictAction = useLinkViewResidentDistrictAction();
  const rowViewActivityCitiesAction = useRowViewActivityCitiesAction();
  const linkViewResidentCityAction = useLinkViewResidentCityAction();
  const rowViewActivityDistrictsAction = useRowViewActivityDistrictsAction();
  const rowEditActivityCitiesAction = useRowEditActivityCitiesAction();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, uploadFile } = fileHandling();
  const {
    queryCustomizer,
    activityCitiesColumns,
    activityCitiesRangeFilterOptions,
    activityCitiesInitialQueryCustomizer,
    activityDistrictsColumns,
    activityDistrictsRangeFilterOptions,
    activityDistrictsInitialQueryCustomizer,
    activityCountiesColumns,
    activityCountiesRangeFilterOptions,
    activityCountiesInitialQueryCustomizer,
    residentCityColumns,
    residentCityRangeFilterOptions,
    residentCityInitialQueryCustomizer,
    residentCountyColumns,
    residentCountyRangeFilterOptions,
    residentCountyInitialQueryCustomizer,
    residentDistrictColumns,
    residentDistrictRangeFilterOptions,
    residentDistrictInitialQueryCustomizer,
  } = useAdminProCreatedByView();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<AdminUserStored>({} as unknown as AdminUserStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminUserStored, any>>(
    {} as unknown as Record<keyof AdminUserStored, any>,
  );
  const storeDiff: (attributeName: keyof AdminUserStored, value: any) => void = useCallback(
    (attributeName: keyof AdminUserStored, value: any) => {
      payloadDiff[attributeName] = value;
      setData({ ...data, [attributeName]: value });
    },
    [data],
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const [validation, setValidation] = useState<Map<keyof AdminUserStored, string>>(new Map());
  const [activityCitiesSortModel, setActivityCitiesSortModel] = useState<GridSortModel>([
    { field: 'representation', sort: 'asc' },
  ]);
  const activityCitiesRangeCall = async () =>
    openRangeDialog<AdminCityStored, AdminCityQueryCustomizer>({
      id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCities',
      columns: activityCitiesColumns,
      defaultSortField: activityCitiesSortModel[0],
      rangeCall: async (queryCustomizer) =>
        await adminUserServiceImpl.getRangeForActivityCities(undefined, processQueryCustomizer(queryCustomizer)),
      single: false,
      alreadySelectedItems: activityCitiesSelectionModel,
      filterOptions: activityCitiesRangeFilterOptions,
      initialQueryCustomizer: activityCitiesInitialQueryCustomizer,
    });
  const [activityCitiesSelectionModel, setActivityCitiesSelectionModel] = useState<GridSelectionModel>([]);
  const [activityDistrictsSortModel, setActivityDistrictsSortModel] = useState<GridSortModel>([
    { field: 'representation', sort: 'asc' },
  ]);
  const activityDistrictsRangeCall = async () =>
    openRangeDialog<AdminDistrictStored, AdminDistrictQueryCustomizer>({
      id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityDistricts',
      columns: activityDistrictsColumns,
      defaultSortField: activityDistrictsSortModel[0],
      rangeCall: async (queryCustomizer) =>
        await adminUserServiceImpl.getRangeForActivityDistricts(undefined, processQueryCustomizer(queryCustomizer)),
      single: false,
      alreadySelectedItems: activityDistrictsSelectionModel,
      filterOptions: activityDistrictsRangeFilterOptions,
      initialQueryCustomizer: activityDistrictsInitialQueryCustomizer,
    });
  const [activityDistrictsSelectionModel, setActivityDistrictsSelectionModel] = useState<GridSelectionModel>([]);
  const [activityCountiesSortModel, setActivityCountiesSortModel] = useState<GridSortModel>([
    { field: 'representation', sort: 'asc' },
  ]);
  const activityCountiesRangeCall = async () =>
    openRangeDialog<AdminCountyStored, AdminCountyQueryCustomizer>({
      id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCounties',
      columns: activityCountiesColumns,
      defaultSortField: activityCountiesSortModel[0],
      rangeCall: async (queryCustomizer) =>
        await adminUserServiceImpl.getRangeForActivityCounties(undefined, processQueryCustomizer(queryCustomizer)),
      single: false,
      alreadySelectedItems: activityCountiesSelectionModel,
      filterOptions: activityCountiesRangeFilterOptions,
      initialQueryCustomizer: activityCountiesInitialQueryCustomizer,
    });
  const [activityCountiesSelectionModel, setActivityCountiesSelectionModel] = useState<GridSelectionModel>([]);

  const activityCitiesRowActions: TableRowAction<AdminCityStored>[] = [
    {
      id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCities-remove',
      label: t('judo.pages.table.remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      action: async (row: AdminCityStored) => {
        setEditMode(true);
        storeDiff('activityCities', [
          ...(data.activityCities || []).filter(
            (e: AdminCityStored) => e.__signedIdentifier !== row.__signedIdentifier,
          ),
        ]);
      },
    },
  ];
  const activityDistrictsRowActions: TableRowAction<AdminDistrictStored>[] = [
    {
      id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityDistricts-remove',
      label: t('judo.pages.table.remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      action: async (row: AdminDistrictStored) => {
        setEditMode(true);
        storeDiff('activityDistricts', [
          ...(data.activityDistricts || []).filter(
            (e: AdminDistrictStored) => e.__signedIdentifier !== row.__signedIdentifier,
          ),
        ]);
      },
    },
  ];
  const activityCountiesRowActions: TableRowAction<AdminCountyStored>[] = [
    {
      id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCounties-remove',
      label: t('judo.pages.table.remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      action: async (row: AdminCountyStored) => {
        setEditMode(true);
        storeDiff('activityCounties', [
          ...(data.activityCounties || []).filter(
            (e: AdminCountyStored) => e.__signedIdentifier !== row.__signedIdentifier,
          ),
        ]);
      },
    },
  ];
  const title: string = t('edemokracia.admin.Pro.createdBy.View', { defaultValue: 'View / Edit User' });

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await adminUserServiceImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<AdminUser>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminUserStored, any>);
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setValidation(new Map<keyof AdminUserStored, string>());
  }, [editMode]);

  return (
    <>
      <PageHeader title={title}>
        {!editMode && (
          <Grid item>
            <Button id="page-action-refresh" onClick={() => fetchData()} disabled={isLoading}>
              <MdiIcon path="refresh" />
              {t('judo.pages.refresh', { defaultValue: 'Refresh' })}
            </Button>
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
              <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewSecurityLabelWrapper">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                        <MdiIcon path="security" />
                        <Typography
                          id="LabeledemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewSecurityLabelWrapperSecurityLabel"
                          variant="h6"
                          component="h1"
                        >
                          {t('edemokracia.admin.Pro.createdBy.User.View.Security.Security.Label', {
                            defaultValue: 'Security',
                          })}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewSecurityLabelWrapperSecurity"
                        container
                        direction="row"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12} md={4.0}>
                          <TextField
                            required
                            name="userName"
                            id="TextInputedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewSecurityLabelWrapperSecurityUserName"
                            label={
                              t('edemokracia.admin.Pro.createdBy.User.View.Security.Security.userName', {
                                defaultValue: 'Username',
                              }) as string
                            }
                            value={data.userName}
                            className={!editMode ? 'JUDO-viewMode' : undefined}
                            disabled={false}
                            error={!!validation.get('userName')}
                            helperText={validation.get('userName')}
                            onChange={(event) => {
                              setEditMode(true);
                              storeDiff('userName', event.target.value);
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
                          <FormGroup>
                            <FormControlLabel
                              sx={{ marginTop: '6px' }}
                              disabled={false}
                              control={
                                <Checkbox
                                  value={data.isAdmin}
                                  onChange={(event) => {
                                    setEditMode(true);
                                    storeDiff('isAdmin', event.target.value);
                                  }}
                                />
                              }
                              label={
                                t('edemokracia.admin.Pro.createdBy.User.View.Security.Security.isAdmin', {
                                  defaultValue: 'Has admin access',
                                }) as string
                              }
                            />
                          </FormGroup>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4.0}>
                          <DateTimePicker
                            ampm={false}
                            ampmInClock={false}
                            renderInput={(props: any) => (
                              <TextField
                                {...props}
                                id="DateTimeInputedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewSecurityLabelWrapperSecurityCreated"
                                className={!editMode ? 'JUDO-viewMode' : undefined}
                                error={!!validation.get('created')}
                                helperText={validation.get('created')}
                              />
                            )}
                            label={
                              t('edemokracia.admin.Pro.createdBy.User.View.Security.Security.created', {
                                defaultValue: 'Created',
                              }) as string
                            }
                            value={data.created ?? null}
                            disabled={false}
                            onChange={(newValue: any) => {
                              setEditMode(true);
                              storeDiff('created', newValue);
                            }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <MdiIcon path="schedule" />
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
              <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewPersonalLabelWrapper">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                        <MdiIcon path="card-account-details" />
                        <Typography
                          id="LabeledemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewPersonalLabelWrapperPersonalLabel"
                          variant="h6"
                          component="h1"
                        >
                          {t('edemokracia.admin.Pro.createdBy.User.View.personal.personal.Label', {
                            defaultValue: 'Personal',
                          })}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewPersonalLabelWrapperPersonal"
                        container
                        direction="row"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="FlexedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewPersonalLabelWrapperPersonalName"
                            container
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12} md={4.0}>
                              <TextField
                                required
                                name="firstName"
                                id="TextInputedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewPersonalLabelWrapperPersonalNameFirstName"
                                label={
                                  t('edemokracia.admin.Pro.createdBy.User.View.personal.personal.name.firstName', {
                                    defaultValue: 'First name',
                                  }) as string
                                }
                                value={data.firstName}
                                className={!editMode ? 'JUDO-viewMode' : undefined}
                                disabled={false}
                                error={!!validation.get('firstName')}
                                helperText={validation.get('firstName')}
                                onChange={(event) => {
                                  setEditMode(true);
                                  storeDiff('firstName', event.target.value);
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
                                name="lastName"
                                id="TextInputedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewPersonalLabelWrapperPersonalNameLastName"
                                label={
                                  t('edemokracia.admin.Pro.createdBy.User.View.personal.personal.name.lastName', {
                                    defaultValue: 'Last name',
                                  }) as string
                                }
                                value={data.lastName}
                                className={!editMode ? 'JUDO-viewMode' : undefined}
                                disabled={false}
                                error={!!validation.get('lastName')}
                                helperText={validation.get('lastName')}
                                onChange={(event) => {
                                  setEditMode(true);
                                  storeDiff('lastName', event.target.value);
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
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="FlexedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewPersonalLabelWrapperPersonalContact"
                            container
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12} md={4.0}>
                              <TextField
                                required
                                name="email"
                                id="TextInputedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewPersonalLabelWrapperPersonalContactEmail"
                                label={
                                  t('edemokracia.admin.Pro.createdBy.User.View.personal.personal.contact.email', {
                                    defaultValue: 'Email',
                                  }) as string
                                }
                                value={data.email}
                                className={!editMode ? 'JUDO-viewMode' : undefined}
                                disabled={false}
                                error={!!validation.get('email')}
                                helperText={validation.get('email')}
                                onChange={(event) => {
                                  setEditMode(true);
                                  storeDiff('email', event.target.value);
                                }}
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <MdiIcon path="email" />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>

                            <Grid item xs={12} sm={12} md={4.0}>
                              <TextField
                                name="phone"
                                id="TextInputedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewPersonalLabelWrapperPersonalContactPhone"
                                label={
                                  t('edemokracia.admin.Pro.createdBy.User.View.personal.personal.contact.phone', {
                                    defaultValue: 'Phone',
                                  }) as string
                                }
                                value={data.phone}
                                className={!editMode ? 'JUDO-viewMode' : undefined}
                                disabled={false}
                                error={!!validation.get('phone')}
                                helperText={validation.get('phone')}
                                onChange={(event) => {
                                  setEditMode(true);
                                  storeDiff('phone', event.target.value);
                                }}
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <MdiIcon path="phone" />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <CollectionAssociationButton
                            id="NavigationToPageActionedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewEdemokraciaAdminAdminEdemokraciaAdminUserVotesButtonNavigate"
                            editMode={editMode}
                            navigateAction={() => buttonNavigateVotesAction(data)}
                          >
                            {t('edemokracia.admin.Pro.createdBy.User.View.personal.personal.votes', {
                              defaultValue: 'Votes',
                            })}
                            <MdiIcon path="arrow-right" />
                          </CollectionAssociationButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapper">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                        <MdiIcon path="map" />
                        <Typography
                          id="LabeledemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasLabel"
                          variant="h6"
                          component="h1"
                        >
                          {t('edemokracia.admin.Pro.createdBy.User.View.Areas.Areas.Label', { defaultValue: 'Areas' })}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreas"
                        container
                        direction="row"
                        alignItems="stretch"
                        justifyContent="center"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="FlexedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasResidency"
                            container
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12} md={4.0}>
                              <AggregationInput
                                name="residentCounty"
                                id="LinkedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasResidencyResidentCounty"
                                label={
                                  t('edemokracia.admin.Pro.createdBy.User.View.Areas.Areas.Residency.residentCounty', {
                                    defaultValue: 'Resident county',
                                  }) as string
                                }
                                labelList={[data.residentCounty?.representation?.toString() ?? '']}
                                value={data.residentCounty}
                                error={!!validation.get('residentCounty')}
                                helperText={validation.get('residentCounty')}
                                icon={<MdiIcon path="map" />}
                                disabled={false}
                                editMode={editMode}
                                onView={async () => linkViewResidentCountyAction(data?.residentCounty!)}
                                onSet={async () => {
                                  const res = await openRangeDialog<AdminCountyStored, AdminCountyQueryCustomizer>({
                                    id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserResidentCounty',
                                    columns: residentCountyColumns,
                                    defaultSortField: ([{ field: 'representation', sort: 'asc' }] as GridSortItem[])[0],
                                    rangeCall: async (queryCustomizer) =>
                                      await adminUserServiceImpl.getRangeForResidentCounty(
                                        data,
                                        processQueryCustomizer(queryCustomizer),
                                      ),
                                    single: true,
                                    alreadySelectedItems: data.residentCounty?.__identifier as GridRowId,
                                    filterOptions: residentCountyRangeFilterOptions,
                                    initialQueryCustomizer: residentCountyInitialQueryCustomizer,
                                  });

                                  if (res === undefined) return;

                                  setEditMode(true);
                                  storeDiff('residentCounty', res as AdminCountyStored);
                                }}
                                onUnset={async () => {
                                  setEditMode(true);
                                  storeDiff('residentCounty', null);
                                }}
                              />
                            </Grid>

                            <Grid item xs={12} sm={12} md={4.0}>
                              <AggregationInput
                                name="residentCity"
                                id="LinkedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasResidencyResidentCity"
                                label={
                                  t('edemokracia.admin.Pro.createdBy.User.View.Areas.Areas.Residency.residentCity', {
                                    defaultValue: 'Resident city',
                                  }) as string
                                }
                                labelList={[data.residentCity?.representation?.toString() ?? '']}
                                value={data.residentCity}
                                error={!!validation.get('residentCity')}
                                helperText={validation.get('residentCity')}
                                icon={<MdiIcon path="city" />}
                                disabled={false}
                                editMode={editMode}
                                onView={async () => linkViewResidentCityAction(data?.residentCity!)}
                                onSet={async () => {
                                  const res = await openRangeDialog<AdminCityStored, AdminCityQueryCustomizer>({
                                    id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserResidentCity',
                                    columns: residentCityColumns,
                                    defaultSortField: ([{ field: 'representation', sort: 'asc' }] as GridSortItem[])[0],
                                    rangeCall: async (queryCustomizer) =>
                                      await adminUserServiceImpl.getRangeForResidentCity(
                                        data,
                                        processQueryCustomizer(queryCustomizer),
                                      ),
                                    single: true,
                                    alreadySelectedItems: data.residentCity?.__identifier as GridRowId,
                                    filterOptions: residentCityRangeFilterOptions,
                                    initialQueryCustomizer: residentCityInitialQueryCustomizer,
                                  });

                                  if (res === undefined) return;

                                  setEditMode(true);
                                  storeDiff('residentCity', res as AdminCityStored);
                                }}
                                onUnset={async () => {
                                  setEditMode(true);
                                  storeDiff('residentCity', null);
                                }}
                              />
                            </Grid>

                            <Grid item xs={12} sm={12} md={4.0}>
                              <AggregationInput
                                name="residentDistrict"
                                id="LinkedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasResidencyResidentDistrict"
                                label={
                                  t(
                                    'edemokracia.admin.Pro.createdBy.User.View.Areas.Areas.Residency.residentDistrict',
                                    { defaultValue: 'Resident district' },
                                  ) as string
                                }
                                labelList={[data.residentDistrict?.representation?.toString() ?? '']}
                                value={data.residentDistrict}
                                error={!!validation.get('residentDistrict')}
                                helperText={validation.get('residentDistrict')}
                                icon={<MdiIcon path="home-city" />}
                                disabled={false}
                                editMode={editMode}
                                onView={async () => linkViewResidentDistrictAction(data?.residentDistrict!)}
                                onSet={async () => {
                                  const res = await openRangeDialog<AdminDistrictStored, AdminDistrictQueryCustomizer>({
                                    id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserResidentDistrict',
                                    columns: residentDistrictColumns,
                                    defaultSortField: ([{ field: 'representation', sort: 'asc' }] as GridSortItem[])[0],
                                    rangeCall: async (queryCustomizer) =>
                                      await adminUserServiceImpl.getRangeForResidentDistrict(
                                        data,
                                        processQueryCustomizer(queryCustomizer),
                                      ),
                                    single: true,
                                    alreadySelectedItems: data.residentDistrict?.__identifier as GridRowId,
                                    filterOptions: residentDistrictRangeFilterOptions,
                                    initialQueryCustomizer: residentDistrictInitialQueryCustomizer,
                                  });

                                  if (res === undefined) return;

                                  setEditMode(true);
                                  storeDiff('residentDistrict', res as AdminDistrictStored);
                                }}
                                onUnset={async () => {
                                  setEditMode(true);
                                  storeDiff('residentDistrict', null);
                                }}
                              />
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid container item xs={12} sm={12}>
                          <ModeledTabs
                            id="TabControlleredemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivity"
                            activeIndex={0}
                            childTabs={[
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityTabActivityCounties',
                                name: 'tab_activity_counties',
                                label: 'Activity counties',
                              },
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCities',
                                name: 'activity_cities',
                                label: 'Activity cities',
                              },
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityDistricts',
                                name: 'activity_districts',
                                label: 'Activity districts',
                              },
                            ]}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityTabActivityCountiesTabActivityCounties"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityTabActivityCountiesTabActivityCountiesActivityCountiesLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityTabActivityCountiesTabActivityCountiesActivityCountiesLabelWrapperActivityCounties"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                      >
                                        <DataGrid
                                          {...baseTableConfig}
                                          getRowId={(row: { __identifier: string }) => row.__identifier}
                                          loading={isLoading}
                                          rows={data?.activityCounties ?? []}
                                          columns={[
                                            ...activityCountiesColumns,
                                            ...columnsActionCalculator(
                                              'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCounties',
                                              activityCountiesRowActions,
                                              { shownActions: 2 },
                                            ),
                                          ]}
                                          disableSelectionOnClick
                                          onRowClick={(params: GridRowParams<AdminCountyStored>) => {
                                            if (!editMode) {
                                              rowViewActivityCountiesAction(params.row);
                                            }
                                          }}
                                          sortModel={activityCountiesSortModel}
                                          onSortModelChange={(newModel: GridSortModel) => {
                                            setActivityCountiesSortModel(newModel);
                                          }}
                                          components={{
                                            Toolbar: () => (
                                              <GridToolbarContainer>
                                                <Button
                                                  id="RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCounties-add"
                                                  variant="text"
                                                  onClick={async () => {
                                                    const res = await activityCountiesRangeCall();

                                                    if (res) {
                                                      storeDiff('activityCounties', [
                                                        ...(data.activityCounties || []),
                                                        ...(res as AdminCountyStored[]),
                                                      ]);
                                                    }
                                                  }}
                                                  disabled={isLoading || !false}
                                                >
                                                  <MdiIcon path="attachment-plus" />
                                                  {t('judo.pages.table.add', { defaultValue: 'Add' })}
                                                </Button>
                                                <Button
                                                  id="RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCounties-clear"
                                                  variant="text"
                                                  onClick={async () => {
                                                    storeDiff('activityCounties', []);
                                                  }}
                                                  disabled={isLoading || !false}
                                                >
                                                  <MdiIcon path="link_off" />
                                                  {t('judo.pages.table.clear', { defaultValue: 'Clear' })}
                                                </Button>
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

                            <Grid item xs={12} sm={12} md={4.0}>
                              <Grid
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCitiesActivityCities"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapperActivityCities"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                      >
                                        <DataGrid
                                          {...baseTableConfig}
                                          getRowId={(row: { __identifier: string }) => row.__identifier}
                                          loading={isLoading}
                                          rows={data?.activityCities ?? []}
                                          columns={[
                                            ...activityCitiesColumns,
                                            ...columnsActionCalculator(
                                              'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCities',
                                              activityCitiesRowActions,
                                              { shownActions: 2 },
                                            ),
                                          ]}
                                          disableSelectionOnClick
                                          onRowClick={(params: GridRowParams<AdminCityStored>) => {
                                            if (!editMode) {
                                              rowViewActivityCitiesAction(params.row);
                                            }
                                          }}
                                          sortModel={activityCitiesSortModel}
                                          onSortModelChange={(newModel: GridSortModel) => {
                                            setActivityCitiesSortModel(newModel);
                                          }}
                                          components={{
                                            Toolbar: () => (
                                              <GridToolbarContainer>
                                                <Button
                                                  id="RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCities-add"
                                                  variant="text"
                                                  onClick={async () => {
                                                    const res = await activityCitiesRangeCall();

                                                    if (res) {
                                                      storeDiff('activityCities', [
                                                        ...(data.activityCities || []),
                                                        ...(res as AdminCityStored[]),
                                                      ]);
                                                    }
                                                  }}
                                                  disabled={isLoading || !false}
                                                >
                                                  <MdiIcon path="attachment-plus" />
                                                  {t('judo.pages.table.add', { defaultValue: 'Add' })}
                                                </Button>
                                                <Button
                                                  id="RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityCities-clear"
                                                  variant="text"
                                                  onClick={async () => {
                                                    storeDiff('activityCities', []);
                                                  }}
                                                  disabled={isLoading || !false}
                                                >
                                                  <MdiIcon path="link_off" />
                                                  {t('judo.pages.table.clear', { defaultValue: 'Clear' })}
                                                </Button>
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
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityDistrictsActivityDistricts"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityDistrictsActivityDistrictsActivityDistrictsLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityDistrictsActivityDistrictsActivityDistrictsLabelWrapperActivityDistricts"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                      >
                                        <DataGrid
                                          {...baseTableConfig}
                                          getRowId={(row: { __identifier: string }) => row.__identifier}
                                          loading={isLoading}
                                          rows={data?.activityDistricts ?? []}
                                          columns={[
                                            ...activityDistrictsColumns,
                                            ...columnsActionCalculator(
                                              'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityDistricts',
                                              activityDistrictsRowActions,
                                              { shownActions: 2 },
                                            ),
                                          ]}
                                          disableSelectionOnClick
                                          onRowClick={(params: GridRowParams<AdminDistrictStored>) => {
                                            if (!editMode) {
                                              rowViewActivityDistrictsAction(params.row);
                                            }
                                          }}
                                          sortModel={activityDistrictsSortModel}
                                          onSortModelChange={(newModel: GridSortModel) => {
                                            setActivityDistrictsSortModel(newModel);
                                          }}
                                          components={{
                                            Toolbar: () => (
                                              <GridToolbarContainer>
                                                <Button
                                                  id="RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityDistricts-add"
                                                  variant="text"
                                                  onClick={async () => {
                                                    const res = await activityDistrictsRangeCall();

                                                    if (res) {
                                                      storeDiff('activityDistricts', [
                                                        ...(data.activityDistricts || []),
                                                        ...(res as AdminDistrictStored[]),
                                                      ]);
                                                    }
                                                  }}
                                                  disabled={isLoading || !false}
                                                >
                                                  <MdiIcon path="attachment-plus" />
                                                  {t('judo.pages.table.add', { defaultValue: 'Add' })}
                                                </Button>
                                                <Button
                                                  id="RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserActivityDistricts-clear"
                                                  variant="text"
                                                  onClick={async () => {
                                                    storeDiff('activityDistricts', []);
                                                  }}
                                                  disabled={isLoading || !false}
                                                >
                                                  <MdiIcon path="link_off" />
                                                  {t('judo.pages.table.clear', { defaultValue: 'Clear' })}
                                                </Button>
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
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
