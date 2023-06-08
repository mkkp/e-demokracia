//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::IssueCategory.owner#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: owner
// Page DataElement owner name: edemokracia::admin::IssueCategory

import { useEffect, useState, useCallback, FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
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
  AdminCounty,
  AdminCountyQueryCustomizer,
  AdminCountyStored,
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminIssueCategory,
  AdminIssueCategoryStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminIssueCategoryServiceImpl, adminUserServiceImpl } from '~/generated/data-axios';

import { useButtonNavigateVotesAction } from './actions';

import { PageActions } from './components/PageActions';
import { ResidentCityLink } from './components/ResidentCityLink';
import { ResidentCountyLink } from './components/ResidentCountyLink';
import { ResidentDistrictLink } from './components/ResidentDistrictLink';
import { ActivityCitiesTable } from './components/ActivityCitiesTable';
import { ActivityDistrictsTable } from './components/ActivityDistrictsTable';
import { ActivityCountiesTable } from './components/ActivityCountiesTable';

/**
 * Name: edemokracia::admin::IssueCategory.owner#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminIssueCategoryOwnerView() {
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
  const [data, setData] = useState<AdminUserStored>({} as unknown as AdminUserStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminUserStored, any>>(
    {} as unknown as Record<keyof AdminUserStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminUserStored, value: any) => void = useCallback(
    (attributeName: keyof AdminUserStored, value: any) => {
      const dateTypes: string[] = [];
      const dateTimeTypes: string[] = ['created'];
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
  const [validation, setValidation] = useState<Map<keyof AdminUser, string>>(new Map<keyof AdminUser, string>());

  const queryCustomizer: AdminUserQueryCustomizer = {
    _mask:
      '{userName,isAdmin,created,firstName,lastName,email,phone,residentCounty{representation},residentCity{representation},residentDistrict{representation},activityCounties{representation},activityCities{representation},activityDistricts{representation}}',
  };

  const buttonNavigateVotesAction = useButtonNavigateVotesAction();

  const title: string = t('admin.UserView', { defaultValue: 'View / Edit User' });

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
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setValidation(new Map<keyof AdminUser, string>());
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
        />
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
              <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewSecurityLabelWrapper">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                        <MdiIcon path="security" sx={{ marginRight: 1 }} />
                        <Typography
                          id="LabeledemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewSecurityLabelWrapperSecurityLabel"
                          variant="h6"
                          component="h1"
                        >
                          {t('admin.UserView.Security.Label', { defaultValue: 'Security' })}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewSecurityLabelWrapperSecurity"
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
                            id="TextInputedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewSecurityLabelWrapperSecurityUserName"
                            label={t('admin.UserView.userName', { defaultValue: 'Username' }) as string}
                            value={data.userName}
                            className={!editMode ? 'JUDO-viewMode' : undefined}
                            disabled={false || !isFormUpdateable()}
                            error={!!validation.get('userName')}
                            helperText={validation.get('userName')}
                            onChange={(event) => {
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
                              disabled={false || !isFormUpdateable()}
                              control={
                                <Checkbox
                                  checked={data.isAdmin || false}
                                  onChange={(event) => {
                                    storeDiff('isAdmin', event.target.checked);
                                  }}
                                />
                              }
                              label={t('admin.UserView.isAdmin', { defaultValue: 'Has admin access' }) as string}
                            />
                          </FormGroup>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4.0}>
                          <DateTimePicker
                            ampm={false}
                            ampmInClock={false}
                            className={!editMode ? 'JUDO-viewMode' : undefined}
                            slotProps={{
                              textField: {
                                id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewSecurityLabelWrapperSecurityCreated',
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
                                const copy = new Map<keyof AdminUser, string>(prevValidation);
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
                            label={t('admin.UserView.created', { defaultValue: 'Created' }) as string}
                            value={serviceDateToUiDate(data.created ?? null)}
                            disabled={false || !isFormUpdateable()}
                            onChange={(newValue: Date) => {
                              storeDiff('created', newValue);
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
              <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewPersonalLabelWrapper">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                        <MdiIcon path="card-account-details" sx={{ marginRight: 1 }} />
                        <Typography
                          id="LabeledemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewPersonalLabelWrapperPersonalLabel"
                          variant="h6"
                          component="h1"
                        >
                          {t('admin.UserView.personal.Label', { defaultValue: 'Personal' })}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewPersonalLabelWrapperPersonal"
                        container
                        direction="row"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewPersonalLabelWrapperPersonalName"
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
                                id="TextInputedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewPersonalLabelWrapperPersonalNameFirstName"
                                label={t('admin.UserView.firstName', { defaultValue: 'First name' }) as string}
                                value={data.firstName}
                                className={!editMode ? 'JUDO-viewMode' : undefined}
                                disabled={false || !isFormUpdateable()}
                                error={!!validation.get('firstName')}
                                helperText={validation.get('firstName')}
                                onChange={(event) => {
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
                                id="TextInputedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewPersonalLabelWrapperPersonalNameLastName"
                                label={t('admin.UserView.lastName', { defaultValue: 'Last name' }) as string}
                                value={data.lastName}
                                className={!editMode ? 'JUDO-viewMode' : undefined}
                                disabled={false || !isFormUpdateable()}
                                error={!!validation.get('lastName')}
                                helperText={validation.get('lastName')}
                                onChange={(event) => {
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
                            id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewPersonalLabelWrapperPersonalContact"
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
                                id="TextInputedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewPersonalLabelWrapperPersonalContactEmail"
                                label={t('admin.UserView.email', { defaultValue: 'Email' }) as string}
                                value={data.email}
                                className={!editMode ? 'JUDO-viewMode' : undefined}
                                disabled={false || !isFormUpdateable()}
                                error={!!validation.get('email')}
                                helperText={validation.get('email')}
                                onChange={(event) => {
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
                                id="TextInputedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewPersonalLabelWrapperPersonalContactPhone"
                                label={t('admin.UserView.phone', { defaultValue: 'Phone' }) as string}
                                value={data.phone}
                                className={!editMode ? 'JUDO-viewMode' : undefined}
                                disabled={false || !isFormUpdateable()}
                                error={!!validation.get('phone')}
                                helperText={validation.get('phone')}
                                onChange={(event) => {
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
                            id="NavigationToPageActionedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewEdemokraciaAdminAdminEdemokraciaAdminUserVotesButtonNavigate"
                            variant={undefined}
                            editMode={editMode}
                            navigateAction={() => buttonNavigateVotesAction(data)}
                          >
                            {t('admin.UserView.votes.ButtonNavigate', { defaultValue: 'Votes' })}
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
              <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewAreasLabelWrapper">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                        <MdiIcon path="map" sx={{ marginRight: 1 }} />
                        <Typography
                          id="LabeledemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewAreasLabelWrapperAreasLabel"
                          variant="h6"
                          component="h1"
                        >
                          {t('admin.UserView.Areas.Label', { defaultValue: 'Areas' })}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewAreasLabelWrapperAreas"
                        container
                        direction="row"
                        alignItems="stretch"
                        justifyContent="center"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewAreasLabelWrapperAreasResidency"
                            container
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12} md={4.0}>
                              <ResidentCountyLink
                                ownerData={data}
                                disabled={false || !isFormUpdateable()}
                                editMode={editMode}
                                fetchOwnerData={fetchData}
                                storeDiff={storeDiff}
                                validation={validation}
                              />
                            </Grid>

                            <Grid item xs={12} sm={12} md={4.0}>
                              <ResidentCityLink
                                ownerData={data}
                                disabled={false || !isFormUpdateable()}
                                editMode={editMode}
                                fetchOwnerData={fetchData}
                                storeDiff={storeDiff}
                                validation={validation}
                              />
                            </Grid>

                            <Grid item xs={12} sm={12} md={4.0}>
                              <ResidentDistrictLink
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

                        <Grid container item xs={12} sm={12}>
                          <ModeledTabs
                            id="TabControlleredemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewAreasLabelWrapperAreasActivity"
                            activeIndex={0}
                            childTabs={[
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewAreasLabelWrapperAreasActivityTabActivityCounties',
                                name: 'admin.UserView.tab.activity.counties',
                                label: 'Activity counties',
                                icon: 'map',
                              },
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCities',
                                name: 'admin.UserView.activity.cities',
                                label: 'Activity cities',
                                icon: 'city',
                              },
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewAreasLabelWrapperAreasActivityActivityDistricts',
                                name: 'admin.UserView.activity.districts',
                                label: 'Activity districts',
                                icon: 'home-city',
                              },
                            ]}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewAreasLabelWrapperAreasActivityTabActivityCountiesTabActivityCounties"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewAreasLabelWrapperAreasActivityTabActivityCountiesTabActivityCountiesActivityCountiesLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewAreasLabelWrapperAreasActivityTabActivityCountiesTabActivityCountiesActivityCountiesLabelWrapperActivityCounties"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                      >
                                        <ActivityCountiesTable
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

                            <Grid item xs={12} sm={12} md={4.0}>
                              <Grid
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCitiesActivityCities"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapperActivityCities"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                      >
                                        <ActivityCitiesTable
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
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewAreasLabelWrapperAreasActivityActivityDistrictsActivityDistricts"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewAreasLabelWrapperAreasActivityActivityDistrictsActivityDistrictsActivityDistrictsLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwnerViewDefaultUserViewAreasLabelWrapperAreasActivityActivityDistrictsActivityDistrictsActivityDistrictsLabelWrapperActivityDistricts"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                      >
                                        <ActivityDistrictsTable
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
