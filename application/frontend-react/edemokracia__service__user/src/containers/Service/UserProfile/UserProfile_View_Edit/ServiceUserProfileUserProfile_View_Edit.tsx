//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'.tsx'
// Template name: actor/src/containers/container.tsx
// Template file: actor/src/containers/container.tsx.hbs

import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, ModeledTabs, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

import {} from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers';
import {} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceUserProfile,
  ServiceUserProfileQueryCustomizer,
  ServiceUserProfileStored,
} from '~/services/data-api';
import type { ServiceUserProfileUserProfile_View_EditActivityCitiesComponentActionDefinitions } from './components/ServiceUserProfileUserProfile_View_EditActivityCitiesComponent';
import { ServiceUserProfileUserProfile_View_EditActivityCitiesComponent } from './components/ServiceUserProfileUserProfile_View_EditActivityCitiesComponent';
import type { ServiceUserProfileUserProfile_View_EditActivityCountiesComponentActionDefinitions } from './components/ServiceUserProfileUserProfile_View_EditActivityCountiesComponent';
import { ServiceUserProfileUserProfile_View_EditActivityCountiesComponent } from './components/ServiceUserProfileUserProfile_View_EditActivityCountiesComponent';
import type { ServiceUserProfileUserProfile_View_EditActivityDistrictsComponentActionDefinitions } from './components/ServiceUserProfileUserProfile_View_EditActivityDistrictsComponent';
import { ServiceUserProfileUserProfile_View_EditActivityDistrictsComponent } from './components/ServiceUserProfileUserProfile_View_EditActivityDistrictsComponent';
import type { ServiceUserProfileUserProfile_View_EditResidentCityComponentActionDefinitions } from './components/ServiceUserProfileUserProfile_View_EditResidentCityComponent';
import { ServiceUserProfileUserProfile_View_EditResidentCityComponent } from './components/ServiceUserProfileUserProfile_View_EditResidentCityComponent';
import type { ServiceUserProfileUserProfile_View_EditResidentCountyComponentActionDefinitions } from './components/ServiceUserProfileUserProfile_View_EditResidentCountyComponent';
import { ServiceUserProfileUserProfile_View_EditResidentCountyComponent } from './components/ServiceUserProfileUserProfile_View_EditResidentCountyComponent';
import type { ServiceUserProfileUserProfile_View_EditResidentDistrictComponentActionDefinitions } from './components/ServiceUserProfileUserProfile_View_EditResidentDistrictComponent';
import { ServiceUserProfileUserProfile_View_EditResidentDistrictComponent } from './components/ServiceUserProfileUserProfile_View_EditResidentDistrictComponent';

export const SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type ServiceUserProfileUserProfile_View_EditContainerHook = (
  data: ServiceUserProfileStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceUserProfile, value: any) => void,
) => ServiceUserProfileUserProfile_View_EditActionDefinitions;

export interface ServiceUserProfileUserProfile_View_EditActionDefinitions
  extends ServiceUserProfileUserProfile_View_EditActivityCitiesComponentActionDefinitions,
    ServiceUserProfileUserProfile_View_EditActivityCountiesComponentActionDefinitions,
    ServiceUserProfileUserProfile_View_EditActivityDistrictsComponentActionDefinitions,
    ServiceUserProfileUserProfile_View_EditResidentCityComponentActionDefinitions,
    ServiceUserProfileUserProfile_View_EditResidentCountyComponentActionDefinitions,
    ServiceUserProfileUserProfile_View_EditResidentDistrictComponentActionDefinitions {
  getPageTitle?: (data: ServiceUserProfile) => string;
  isEmailRequired?: (data: ServiceUserProfile | ServiceUserProfileStored, editMode?: boolean) => boolean;
  isEmailDisabled?: (
    data: ServiceUserProfile | ServiceUserProfileStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isPhoneRequired?: (data: ServiceUserProfile | ServiceUserProfileStored, editMode?: boolean) => boolean;
  isPhoneDisabled?: (
    data: ServiceUserProfile | ServiceUserProfileStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isFirstNameRequired?: (data: ServiceUserProfile | ServiceUserProfileStored, editMode?: boolean) => boolean;
  isFirstNameDisabled?: (
    data: ServiceUserProfile | ServiceUserProfileStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isLastNameRequired?: (data: ServiceUserProfile | ServiceUserProfileStored, editMode?: boolean) => boolean;
  isLastNameDisabled?: (
    data: ServiceUserProfile | ServiceUserProfileStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isUserNameRequired?: (data: ServiceUserProfile | ServiceUserProfileStored, editMode?: boolean) => boolean;
  isUserNameDisabled?: (
    data: ServiceUserProfile | ServiceUserProfileStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  getMask?: () => string;
}

export interface ServiceUserProfileUserProfile_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceUserProfileUserProfile_View_EditActionDefinitions;

  data: ServiceUserProfileStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceUserProfile, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceUserProfile, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceUserProfile, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_1QevwFvQEe6jm_SkPSYEYw)/TransferObjectViewPageContainer
// Name: service::UserProfile::UserProfile_View_Edit
export default function ServiceUserProfileUserProfile_View_Edit(props: ServiceUserProfileUserProfile_View_EditProps) {
  // Container props
  const {
    refreshCounter,
    isLoading,
    isDraft,
    actions: pageActions,
    data,
    isFormUpdateable,
    isFormDeleteable,
    storeDiff,
    editMode,
    validation,
    setValidation,
    submit,
  } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );
  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceUserProfileUserProfile_View_EditContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_PROFILE_USER_PROFILE_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceUserProfileUserProfile_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="UserProfile_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_1QevwFvQEe6jm_SkPSYEYw)/TransferObjectViewVisualElement"
          data-name="UserProfile_View_Edit"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item data-name="Personal::LabelWrapper" xs={12} sm={12}>
            <Card
              id="(User/(esm/_WRx7kFvTEe6jm_SkPSYEYw)/WrapAndLabelVisualElement)/LabelWrapper"
              data-name="Personal::LabelWrapper"
            >
              <CardContent>
                <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="card-account-details" sx={{ marginRight: 1 }} />
                      <Typography
                        id="User/(esm/_WRx7kFvTEe6jm_SkPSYEYw)/WrapAndLabelVisualElement)/Label"
                        variant="h5"
                        component="h1"
                      >
                        {t('service.UserProfile.UserProfile_View_Edit.Personal.Label', { defaultValue: 'Personal' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item data-name="Personal" xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_WRx7kFvTEe6jm_SkPSYEYw)/GroupVisualElement"
                      data-name="Personal"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12} md={4.0}>
                        <TextField
                          required={actions?.isUserNameRequired ? actions.isUserNameRequired(data, editMode) : false}
                          name="userName"
                          id="User/(esm/_WRx7kVvTEe6jm_SkPSYEYw)/StringTypeTextInput"
                          label={
                            t('service.UserProfile.UserProfile_View_Edit.userName', {
                              defaultValue: 'Username',
                            }) as string
                          }
                          value={data.userName ?? ''}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': false,
                          })}
                          disabled={
                            actions?.isUserNameDisabled
                              ? actions.isUserNameDisabled(data, editMode, isLoading)
                              : isLoading
                          }
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
                          inputProps={{
                            maxLength: 255,
                          }}
                        />
                      </Grid>

                      <Grid item data-name="name" xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_AEEGwlvUEe6jm_SkPSYEYw)/GroupVisualElement"
                          data-name="name"
                          container
                          direction="row"
                          alignItems="stretch"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12} md={4.0}>
                            <TextField
                              required={
                                actions?.isFirstNameRequired ? actions.isFirstNameRequired(data, editMode) : true
                              }
                              name="firstName"
                              id="User/(esm/_AEEGw1vUEe6jm_SkPSYEYw)/StringTypeTextInput"
                              label={
                                t('service.UserProfile.UserProfile_View_Edit.firstName', {
                                  defaultValue: 'First name',
                                }) as string
                              }
                              value={data.firstName ?? ''}
                              className={clsx({
                                'JUDO-viewMode': !editMode,
                                'JUDO-required': true,
                              })}
                              disabled={
                                actions?.isFirstNameDisabled
                                  ? actions.isFirstNameDisabled(data, editMode, isLoading)
                                  : isLoading
                              }
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
                              inputProps={{
                                maxLength: 255,
                              }}
                            />
                          </Grid>

                          <Grid item xs={12} sm={12} md={4.0}>
                            <TextField
                              required={actions?.isLastNameRequired ? actions.isLastNameRequired(data, editMode) : true}
                              name="lastName"
                              id="User/(esm/_AEEGxFvUEe6jm_SkPSYEYw)/StringTypeTextInput"
                              label={
                                t('service.UserProfile.UserProfile_View_Edit.lastName', {
                                  defaultValue: 'Last name',
                                }) as string
                              }
                              value={data.lastName ?? ''}
                              className={clsx({
                                'JUDO-viewMode': !editMode,
                                'JUDO-required': true,
                              })}
                              disabled={
                                actions?.isLastNameDisabled
                                  ? actions.isLastNameDisabled(data, editMode, isLoading)
                                  : isLoading
                              }
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
                              inputProps={{
                                maxLength: 255,
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item data-name="contact" xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_AEDfsFvUEe6jm_SkPSYEYw)/GroupVisualElement"
                          data-name="contact"
                          container
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12} md={4.0}>
                            <TextField
                              required={actions?.isEmailRequired ? actions.isEmailRequired(data, editMode) : true}
                              name="email"
                              id="User/(esm/_AEEGwFvUEe6jm_SkPSYEYw)/StringTypeTextInput"
                              label={
                                t('service.UserProfile.UserProfile_View_Edit.email', {
                                  defaultValue: 'Email',
                                }) as string
                              }
                              value={data.email ?? ''}
                              className={clsx({
                                'JUDO-viewMode': !editMode,
                                'JUDO-required': true,
                              })}
                              disabled={
                                actions?.isEmailDisabled
                                  ? actions.isEmailDisabled(data, editMode, isLoading)
                                  : isLoading
                              }
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
                              inputProps={{
                                maxLength: 255,
                              }}
                            />
                          </Grid>

                          <Grid item xs={12} sm={12} md={4.0}>
                            <TextField
                              required={actions?.isPhoneRequired ? actions.isPhoneRequired(data, editMode) : false}
                              name="phone"
                              id="User/(esm/_AEEGwVvUEe6jm_SkPSYEYw)/StringTypeTextInput"
                              label={
                                t('service.UserProfile.UserProfile_View_Edit.phone', {
                                  defaultValue: 'Phone',
                                }) as string
                              }
                              value={data.phone ?? ''}
                              className={clsx({
                                'JUDO-viewMode': !editMode,
                                'JUDO-required': false,
                              })}
                              disabled={
                                actions?.isPhoneDisabled
                                  ? actions.isPhoneDisabled(data, editMode, isLoading)
                                  : isLoading
                              }
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
                              inputProps={{
                                maxLength: 20,
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

          <Grid item data-name="Areas::LabelWrapper" xs={12} sm={12}>
            <Card
              id="(User/(esm/_fsW_oFvTEe6jm_SkPSYEYw)/WrapAndLabelVisualElement)/LabelWrapper"
              data-name="Areas::LabelWrapper"
            >
              <CardContent>
                <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="map" sx={{ marginRight: 1 }} />
                      <Typography
                        id="User/(esm/_fsW_oFvTEe6jm_SkPSYEYw)/WrapAndLabelVisualElement)/Label"
                        variant="h5"
                        component="h1"
                      >
                        {t('service.UserProfile.UserProfile_View_Edit.Areas.Label', { defaultValue: 'Areas' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item data-name="Areas" xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_fsW_oFvTEe6jm_SkPSYEYw)/GroupVisualElement"
                      data-name="Areas"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="center"
                      spacing={2}
                    >
                      <Grid item data-name="Residency" xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_fsW_oVvTEe6jm_SkPSYEYw)/GroupVisualElement"
                          data-name="Residency"
                          container
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12} md={4.0}>
                            <ServiceUserProfileUserProfile_View_EditResidentCountyComponent
                              disabled={false}
                              readOnly={false || !isFormUpdateable()}
                              ownerData={data}
                              editMode={editMode}
                              isLoading={isLoading}
                              isDraft={isDraft}
                              storeDiff={storeDiff}
                              validationError={validation.get('residentCounty')}
                              actions={actions}
                              submit={submit}
                            />
                          </Grid>

                          <Grid item xs={12} sm={12} md={4.0}>
                            <ServiceUserProfileUserProfile_View_EditResidentCityComponent
                              disabled={false}
                              readOnly={false || !isFormUpdateable()}
                              ownerData={data}
                              editMode={editMode}
                              isLoading={isLoading}
                              isDraft={isDraft}
                              storeDiff={storeDiff}
                              validationError={validation.get('residentCity')}
                              actions={actions}
                              submit={submit}
                            />
                          </Grid>

                          <Grid item xs={12} sm={12} md={4.0}>
                            <ServiceUserProfileUserProfile_View_EditResidentDistrictComponent
                              disabled={false}
                              readOnly={false || !isFormUpdateable()}
                              ownerData={data}
                              editMode={editMode}
                              isLoading={isLoading}
                              isDraft={isDraft}
                              storeDiff={storeDiff}
                              validationError={validation.get('residentDistrict')}
                              actions={actions}
                              submit={submit}
                            />
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid container item xs={12} sm={12}>
                        <ModeledTabs
                          id="User/(esm/_fsW_qFvTEe6jm_SkPSYEYw)/TabBarVisualElement"
                          ownerData={data}
                          validation={validation}
                          orientation="horizontal"
                          childTabs={[
                            {
                              id: 'User/(esm/_fsW_qVvTEe6jm_SkPSYEYw)/GroupTab',
                              name: 'service.UserProfile.UserProfile_View_Edit.tab_activity_counties',
                              label: t('service.UserProfile.UserProfile_View_Edit.tab_activity_counties', {
                                defaultValue: 'Activity counties',
                              }) as string,
                              disabled: isLoading,
                              hidden: false,
                              icon: 'castle',
                              nestedDataKeys: ['activityCounties'],
                            },
                            {
                              id: 'User/(esm/_fsW_rFvTEe6jm_SkPSYEYw)/GroupTab',
                              name: 'service.UserProfile.UserProfile_View_Edit.activity_cities',
                              label: t('service.UserProfile.UserProfile_View_Edit.activity_cities', {
                                defaultValue: 'Activity cities',
                              }) as string,
                              disabled: isLoading,
                              hidden: false,
                              icon: 'city',
                              nestedDataKeys: ['activityCities'],
                            },
                            {
                              id: 'User/(esm/_fsW_r1vTEe6jm_SkPSYEYw)/GroupTab',
                              name: 'service.UserProfile.UserProfile_View_Edit.activity_districts',
                              label: t('service.UserProfile.UserProfile_View_Edit.activity_districts', {
                                defaultValue: 'Activity districts',
                              }) as string,
                              disabled: isLoading,
                              hidden: false,
                              icon: 'home-city',
                              nestedDataKeys: ['activityDistricts'],
                            },
                          ]}
                        >
                          <Grid item data-name="tab_activity_counties" xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_fsW_qVvTEe6jm_SkPSYEYw)/GroupVisualElement"
                              data-name="tab_activity_counties"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_fsW_qlvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceUserProfileUserProfile_View_EditActivityCountiesComponent
                                    uniqueId={
                                      'User/(esm/_fsW_qlvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable'
                                    }
                                    actions={actions}
                                    ownerData={data}
                                    editMode={editMode}
                                    isFormUpdateable={isFormUpdateable}
                                    validationError={validation.get('activityCounties')}
                                    refreshCounter={refreshCounter}
                                    isOwnerLoading={isLoading}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item data-name="activity_cities" xs={12} sm={12} md={4.0}>
                            <Grid
                              id="User/(esm/_fsW_rFvTEe6jm_SkPSYEYw)/GroupVisualElement"
                              data-name="activity_cities"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12} md={36.0}>
                                <Grid
                                  id="User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceUserProfileUserProfile_View_EditActivityCitiesComponent
                                    uniqueId={
                                      'User/(esm/_fsW_rVvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable'
                                    }
                                    actions={actions}
                                    ownerData={data}
                                    editMode={editMode}
                                    isFormUpdateable={isFormUpdateable}
                                    validationError={validation.get('activityCities')}
                                    refreshCounter={refreshCounter}
                                    isOwnerLoading={isLoading}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item data-name="activity_districts" xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_fsW_r1vTEe6jm_SkPSYEYw)/GroupVisualElement"
                              data-name="activity_districts"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceUserProfileUserProfile_View_EditActivityDistrictsComponent
                                    uniqueId={
                                      'User/(esm/_fsW_sFvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedTable'
                                    }
                                    actions={actions}
                                    ownerData={data}
                                    editMode={editMode}
                                    isFormUpdateable={isFormUpdateable}
                                    validationError={validation.get('activityDistricts')}
                                    refreshCounter={refreshCounter}
                                    isOwnerLoading={isLoading}
                                  />
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
      </Grid>
    </Grid>
  );
}
