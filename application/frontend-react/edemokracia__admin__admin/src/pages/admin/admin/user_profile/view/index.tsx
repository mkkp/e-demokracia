//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getViewDialogs(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/dialogs/index.tsx
// Template file: actor/src/pages/dialogs/index.tsx.hbs
// Page name: edemokracia::admin::Admin.userProfile#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: userProfile
// Page DataElement owner name: edemokracia::admin::Admin

import type { FC, Dispatch, SetStateAction } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent, InputAdornment, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import type { DateValidationError, DateTimeValidationError, TimeValidationError } from '@mui/x-date-pickers';
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

import { IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useConfirmDialog } from '~/components/dialog';
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
  AdminUserProfile,
  AdminUserProfileQueryCustomizer,
  AdminUserProfileStored,
} from '~/generated/data-api';
import { adminUserProfileServiceForClassImpl } from '~/generated/data-axios';
import {} from './actions';

import { ResidentCityLink } from './components/ResidentCityLink';
import { ResidentCountyLink } from './components/ResidentCountyLink';
import { ResidentDistrictLink } from './components/ResidentDistrictLink';
import { ActivityCitiesTable } from './components/ActivityCitiesTable';
import { ActivityDistrictsTable } from './components/ActivityDistrictsTable';
import { ActivityCountiesTable } from './components/ActivityCountiesTable';

export interface AdminAdminViewProps {
  entry: AdminUserProfileStored;
  successCallback: () => void;
  cancel: () => void;
}

export type AdminAdminViewPostRefreshAction = (
  data: AdminUserProfileStored,
  storeDiff: (attributeName: keyof AdminUserProfileStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof AdminUserProfile, string>>>,
) => Promise<void>;

export const ADMIN_ADMIN_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY = 'AdminAdminViewPostRefreshHook';
export type AdminAdminViewPostRefreshHook = () => AdminAdminViewPostRefreshAction;

/**
 * Name: edemokracia::admin::Admin.userProfile#View
 * Is Access: true
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminAdminView(props: AdminAdminViewProps) {
  const { entry, successCallback, cancel } = props;

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const { enqueueSnackbar } = useSnackbar();
  const { openConfirmDialog } = useConfirmDialog();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<AdminUserProfileStored>(
    entry ? { ...entry } : ({} as unknown as AdminUserProfileStored),
  );
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminUserProfileStored, any>>(
    {} as unknown as Record<keyof AdminUserProfileStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminUserProfileStored, value: any) => void = useCallback(
    (attributeName: keyof AdminUserProfileStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof AdminUserProfile, string>>(
    new Map<keyof AdminUserProfile, string>(),
  );

  const queryCustomizer: AdminUserProfileQueryCustomizer = {
    _mask:
      '{userName,firstName,lastName,email,phone,residentCounty{representation},residentCity{representation},residentDistrict{representation},activityCounties{representation},activityCities{representation},activityDistricts{representation}}',
  };

  const { service: postRefreshHook } = useTrackService<AdminAdminViewPostRefreshHook>(
    `(${OBJECTCLASS}=${ADMIN_ADMIN_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: AdminAdminViewPostRefreshAction | undefined = postRefreshHook && postRefreshHook();

  const title: string = t('admin.UserProfileView', { defaultValue: 'My profile' });

  const isFormUpdateable = useCallback(() => {
    return false;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return false;
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
      const res = await adminUserProfileServiceForClassImpl.refresh(
        { __signedIdentifier: entry.__signedIdentifier } as JudoIdentifiable<AdminUserProfile>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminUserProfileStored, any>);
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
      <DialogTitle>
        {title}
        <IconButton
          id="AdminAdminView-dialog-close"
          aria-label="close"
          onClick={() => {
            cancel();
            if (!editMode) {
              successCallback();
            }
          }}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <MdiIcon path="close" />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
          <Grid item xs={12} sm={12}>
            <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditPersonalLabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="card-account-details" sx={{ marginRight: 1 }} />
                      <Typography
                        id="LabeledemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditPersonalLabelWrapperPersonalLabel"
                        variant="h5"
                        component="h1"
                      >
                        {t('admin.UserProfileView.Personal.Label', { defaultValue: 'Personal' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditPersonalLabelWrapperPersonal"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12} md={4.0}>
                        <TextField
                          required={false}
                          name="userName"
                          id="TextInputedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditPersonalLabelWrapperPersonalUserName"
                          label={t('admin.UserProfileView.userName', { defaultValue: 'Username' }) as string}
                          value={data.userName ?? ''}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': false,
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
                            readOnly: true || !isFormUpdateable(),
                            startAdornment: (
                              <InputAdornment position="start">
                                <MdiIcon path="text_fields" />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditPersonalLabelWrapperPersonalName"
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
                              id="TextInputedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditPersonalLabelWrapperPersonalNameFirstName"
                              label={t('admin.UserProfileView.firstName', { defaultValue: 'First name' }) as string}
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
                              id="TextInputedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditPersonalLabelWrapperPersonalNameLastName"
                              label={t('admin.UserProfileView.lastName', { defaultValue: 'Last name' }) as string}
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
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditPersonalLabelWrapperPersonalContact"
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
                              id="TextInputedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditPersonalLabelWrapperPersonalContactEmail"
                              label={t('admin.UserProfileView.email', { defaultValue: 'Email' }) as string}
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
                              id="TextInputedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditPersonalLabelWrapperPersonalContactPhone"
                              label={t('admin.UserProfileView.phone', { defaultValue: 'Phone' }) as string}
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
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditAreasLabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="map" sx={{ marginRight: 1 }} />
                      <Typography
                        id="LabeledemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasLabel"
                        variant="h5"
                        component="h1"
                      >
                        {t('admin.UserProfileView.Areas.Label', { defaultValue: 'Areas' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreas"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="center"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasResidency"
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
                              onChange={(value: AdminCounty | AdminCountyStored | null) => {
                                storeDiff('residentCounty', value);
                              }}
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
                              onChange={(value: AdminCity | AdminCityStored | null) => {
                                storeDiff('residentCity', value);
                              }}
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
                              onChange={(value: AdminDistrict | AdminDistrictStored | null) => {
                                storeDiff('residentDistrict', value);
                              }}
                              validation={validation}
                            />
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid container item xs={12} sm={12}>
                        <ModeledTabs
                          id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasActivity"
                          ownerData={data}
                          validation={validation}
                          orientation='horizontal'
                          childTabs={[
                            {
                              id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasActivityTabActivityCounties',
                              name: 'admin.UserProfileView.tab.activity.counties',
                              label: t('admin.UserProfileView.tab.activity.counties', {
                                defaultValue: 'Activity counties',
                              }) as string,
                              disabled: isLoading,
                              hidden: false,
                              icon: 'map',
                              nestedDataKeys: ['activityCounties'],
                            },
                            {
                              id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasActivityActivityCities',
                              name: 'admin.UserProfileView.activity.cities',
                              label: t('admin.UserProfileView.activity.cities', {
                                defaultValue: 'Activity cities',
                              }) as string,
                              disabled: isLoading,
                              hidden: false,
                              icon: 'city',
                              nestedDataKeys: ['activityCities'],
                            },
                            {
                              id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasActivityActivityDistricts',
                              name: 'admin.UserProfileView.activity.districts',
                              label: t('admin.UserProfileView.activity.districts', {
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
                              id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasActivityTabActivityCountiesTabActivityCounties"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasActivityTabActivityCountiesTabActivityCountiesActivityCountiesLabelWrapper"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasActivityTabActivityCountiesTabActivityCountiesActivityCountiesLabelWrapperActivityCounties"
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
                              id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasActivityActivityCitiesActivityCities"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapper"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapperActivityCities"
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
                              id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasActivityActivityDistrictsActivityDistricts"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasActivityActivityDistrictsActivityDistrictsActivityDistrictsLabelWrapper"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserProfileViewDefaultUserProfileViewEditAreasLabelWrapperAreasActivityActivityDistrictsActivityDistrictsActivityDistrictsLabelWrapperActivityDistricts"
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
      </DialogContent>
      <DialogActions>
        <Grid className="page-action" item>
          <Button
            id="AdminAdminView-dialog-close"
            variant="text"
            onClick={() => {
              cancel();
              if (!editMode) {
                successCallback();
              }
            }}
            disabled={isLoading}
          >
            {t('judo.pages.close', { defaultValue: 'Close' })}
          </Button>
        </Grid>

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
      </DialogActions>
    </>
  );
}
