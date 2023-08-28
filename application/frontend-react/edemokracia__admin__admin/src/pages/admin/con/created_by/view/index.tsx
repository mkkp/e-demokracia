//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Con.createdBy#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: createdBy
// Page DataElement owner name: edemokracia::admin::Con

import type { FC } from 'react';
import { useEffect, useState, useCallback } from 'react';
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
import type { DateValidationError, DateTimeValidationError, TimeValidationError } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { ComponentProxy } from '@pandino/react-hooks';
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
import { toastConfig, dividerHeight } from '~/config';
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
  AdminCon,
  AdminConStored,
  AdminCounty,
  AdminCountyQueryCustomizer,
  AdminCountyStored,
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminConServiceForClassImpl, adminUserServiceForClassImpl } from '~/generated/data-axios';

import { useButtonNavigateVotesAction } from './actions';

import { PageActions } from './components/PageActions';
import { ResidentCityLink } from './components/ResidentCityLink';
import { ResidentCountyLink } from './components/ResidentCountyLink';
import { ResidentDistrictLink } from './components/ResidentDistrictLink';
import { ActivityCitiesTable } from './components/ActivityCitiesTable';
import { ActivityDistrictsTable } from './components/ActivityDistrictsTable';
import { ActivityCountiesTable } from './components/ActivityCountiesTable';

/**
 * Name: edemokracia::admin::Con.createdBy#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminConCreatedByView() {
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
      const res = await adminUserServiceForClassImpl.refresh(
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
      setRefreshCounter((prevCounter) => prevCounter + 1);
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
                <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewSecurityLabelWrapper">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                          <MdiIcon path="security" sx={{ marginRight: 1 }} />
                          <Typography
                            id="LabeledemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewSecurityLabelWrapperSecurityLabel"
                            variant="h6"
                            component="h1"
                          >
                            {t('admin.UserView.Security.Label', { defaultValue: 'Security' })}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewSecurityLabelWrapperSecurity"
                          container
                          direction="row"
                          alignItems="stretch"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12} md={4.0}>
                            <TextField
                              required={true}
                              name="userName"
                              id="TextInputedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewSecurityLabelWrapperSecurityUserName"
                              label={t('admin.UserView.userName', { defaultValue: 'Username' }) as string}
                              value={data.userName ?? ''}
                              className={clsx({
                                'JUDO-viewMode': !editMode,
                                'JUDO-required': true,
                              })}
                              disabled={isLoading}
                              error={!!validation.get('userName')}
                              helperText={validation.get('userName')}
                              onChange={(event) => {
                                const realValue = event.target.value?.length === 0 ? null : event.target.value;
                                storeDiff('userName', realValue);
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
                            <FormGroup>
                              <FormControlLabel
                                className="switch"
                                sx={{ marginTop: '6px' }}
                                disabled={false || !isFormUpdateable() || isLoading}
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
                              className={clsx({
                                'JUDO-viewMode': !editMode,
                                'JUDO-required': false,
                              })}
                              slotProps={{
                                textField: {
                                  id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewSecurityLabelWrapperSecurityCreated',
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
                              readOnly={false || !isFormUpdateable()}
                              disabled={isLoading}
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
                <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewPersonalLabelWrapper">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                          <MdiIcon path="card-account-details" sx={{ marginRight: 1 }} />
                          <Typography
                            id="LabeledemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewPersonalLabelWrapperPersonalLabel"
                            variant="h6"
                            component="h1"
                          >
                            {t('admin.UserView.personal.Label', { defaultValue: 'Personal' })}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewPersonalLabelWrapperPersonal"
                          container
                          direction="row"
                          alignItems="stretch"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="FlexedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewPersonalLabelWrapperPersonalName"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12} md={4.0}>
                                <TextField
                                  required={true}
                                  name="firstName"
                                  id="TextInputedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewPersonalLabelWrapperPersonalNameFirstName"
                                  label={t('admin.UserView.firstName', { defaultValue: 'First name' }) as string}
                                  value={data.firstName ?? ''}
                                  className={clsx({
                                    'JUDO-viewMode': !editMode,
                                    'JUDO-required': true,
                                  })}
                                  disabled={isLoading}
                                  error={!!validation.get('firstName')}
                                  helperText={validation.get('firstName')}
                                  onChange={(event) => {
                                    const realValue = event.target.value?.length === 0 ? null : event.target.value;
                                    storeDiff('firstName', realValue);
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
                                  name="lastName"
                                  id="TextInputedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewPersonalLabelWrapperPersonalNameLastName"
                                  label={t('admin.UserView.lastName', { defaultValue: 'Last name' }) as string}
                                  value={data.lastName ?? ''}
                                  className={clsx({
                                    'JUDO-viewMode': !editMode,
                                    'JUDO-required': true,
                                  })}
                                  disabled={isLoading}
                                  error={!!validation.get('lastName')}
                                  helperText={validation.get('lastName')}
                                  onChange={(event) => {
                                    const realValue = event.target.value?.length === 0 ? null : event.target.value;
                                    storeDiff('lastName', realValue);
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

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="FlexedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewPersonalLabelWrapperPersonalContact"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12} md={4.0}>
                                <TextField
                                  required={true}
                                  name="email"
                                  id="TextInputedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewPersonalLabelWrapperPersonalContactEmail"
                                  label={t('admin.UserView.email', { defaultValue: 'Email' }) as string}
                                  value={data.email ?? ''}
                                  className={clsx({
                                    'JUDO-viewMode': !editMode,
                                    'JUDO-required': true,
                                  })}
                                  disabled={isLoading}
                                  error={!!validation.get('email')}
                                  helperText={validation.get('email')}
                                  onChange={(event) => {
                                    const realValue = event.target.value?.length === 0 ? null : event.target.value;
                                    storeDiff('email', realValue);
                                  }}
                                  InputLabelProps={{ shrink: true }}
                                  InputProps={{
                                    readOnly: false || !isFormUpdateable(),
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
                                  required={false}
                                  name="phone"
                                  id="TextInputedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewPersonalLabelWrapperPersonalContactPhone"
                                  label={t('admin.UserView.phone', { defaultValue: 'Phone' }) as string}
                                  value={data.phone ?? ''}
                                  className={clsx({
                                    'JUDO-viewMode': !editMode,
                                    'JUDO-required': false,
                                  })}
                                  disabled={isLoading}
                                  error={!!validation.get('phone')}
                                  helperText={validation.get('phone')}
                                  onChange={(event) => {
                                    const realValue = event.target.value?.length === 0 ? null : event.target.value;
                                    storeDiff('phone', realValue);
                                  }}
                                  InputLabelProps={{ shrink: true }}
                                  InputProps={{
                                    readOnly: false || !isFormUpdateable(),
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
                              id="NavigationToPageActionedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewEdemokraciaAdminAdminEdemokraciaAdminUserVotesButtonNavigate"
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
                <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapper">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                          <MdiIcon path="map" sx={{ marginRight: 1 }} />
                          <Typography
                            id="LabeledemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasLabel"
                            variant="h6"
                            component="h1"
                          >
                            {t('admin.UserView.Areas.Label', { defaultValue: 'Areas' })}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreas"
                          container
                          direction="row"
                          alignItems="stretch"
                          justifyContent="center"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="FlexedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasResidency"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12} md={4.0}>
                                <ResidentCountyLink
                                  ownerData={data}
                                  readOnly={false || !isFormUpdateable()}
                                  disabled={isLoading}
                                  editMode={editMode}
                                  fetchOwnerData={fetchData}
                                  storeDiff={storeDiff}
                                  validation={validation}
                                />
                              </Grid>

                              <Grid item xs={12} sm={12} md={4.0}>
                                <ResidentCityLink
                                  ownerData={data}
                                  readOnly={false || !isFormUpdateable()}
                                  disabled={isLoading}
                                  editMode={editMode}
                                  fetchOwnerData={fetchData}
                                  storeDiff={storeDiff}
                                  validation={validation}
                                />
                              </Grid>

                              <Grid item xs={12} sm={12} md={4.0}>
                                <ResidentDistrictLink
                                  ownerData={data}
                                  readOnly={false || !isFormUpdateable()}
                                  disabled={isLoading}
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
                              id="TabControlleredemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivity"
                              ownerData={data}
                              validation={validation}
                              orientation='horizontal'
                              childTabs={[
                                {
                                  id: 'TabedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityTabActivityCounties',
                                  name: 'admin.UserView.tab.activity.counties',
                                  label: t('admin.UserView.tab.activity.counties', {
                                    defaultValue: 'Activity counties',
                                  }) as string,
                                  disabled: isLoading,
                                  hidden: false,
                                  icon: 'map',
                                  nestedDataKeys: ['activityCounties'],
                                },
                                {
                                  id: 'TabedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCities',
                                  name: 'admin.UserView.activity.cities',
                                  label: t('admin.UserView.activity.cities', {
                                    defaultValue: 'Activity cities',
                                  }) as string,
                                  disabled: isLoading,
                                  hidden: false,
                                  icon: 'city',
                                  nestedDataKeys: ['activityCities'],
                                },
                                {
                                  id: 'TabedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityDistricts',
                                  name: 'admin.UserView.activity.districts',
                                  label: t('admin.UserView.activity.districts', {
                                    defaultValue: 'Activity districts',
                                  }) as string,
                                  disabled: isLoading,
                                  hidden: false,
                                  icon: 'home-city',
                                  nestedDataKeys: ['activityDistricts'],
                                },
                              ]}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="FlexedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityTabActivityCountiesTabActivityCounties"
                                  container
                                  direction="row"
                                  alignItems="flex-start"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="FlexedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityTabActivityCountiesTabActivityCountiesActivityCountiesLabelWrapper"
                                      container
                                      direction="column"
                                      alignItems="stretch"
                                      justifyContent="flex-start"
                                      spacing={2}
                                    >
                                      <Grid item xs={12} sm={12}>
                                        <Grid
                                          id="TableedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityTabActivityCountiesTabActivityCountiesActivityCountiesLabelWrapperActivityCounties"
                                          container
                                          direction="column"
                                          alignItems="stretch"
                                          justifyContent="flex-start"
                                        >
                                          <ActivityCountiesTable
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

                              <Grid item xs={12} sm={12} md={4.0}>
                                <Grid
                                  id="FlexedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCitiesActivityCities"
                                  container
                                  direction="row"
                                  alignItems="flex-start"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="FlexedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapper"
                                      container
                                      direction="column"
                                      alignItems="stretch"
                                      justifyContent="flex-start"
                                      spacing={2}
                                    >
                                      <Grid item xs={12} sm={12}>
                                        <Grid
                                          id="TableedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapperActivityCities"
                                          container
                                          direction="column"
                                          alignItems="stretch"
                                          justifyContent="flex-start"
                                        >
                                          <ActivityCitiesTable
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
                                  id="FlexedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityDistrictsActivityDistricts"
                                  container
                                  direction="row"
                                  alignItems="flex-start"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="FlexedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityDistrictsActivityDistrictsActivityDistrictsLabelWrapper"
                                      container
                                      direction="column"
                                      alignItems="stretch"
                                      justifyContent="flex-start"
                                      spacing={2}
                                    >
                                      <Grid item xs={12} sm={12}>
                                        <Grid
                                          id="TableedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasActivityActivityDistrictsActivityDistrictsActivityDistrictsLabelWrapperActivityDistricts"
                                          container
                                          direction="column"
                                          alignItems="stretch"
                                          justifyContent="flex-start"
                                        >
                                          <ActivityDistrictsTable
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
        </PageContainerTransition>
      </Container>
    </>
  );
}
