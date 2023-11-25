//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'.tsx'
// Template name: actor/src/containers/container.tsx
// Template file: actor/src/containers/container.tsx.hbs

import type { Dispatch, SetStateAction, FC } from 'react';
import { forwardRef, useEffect, useState, useCallback, useImperativeHandle } from 'react';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { clsx } from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useL10N } from '~/l10n/l10n-context';
import { MdiIcon, ModeledTabs, DropdownButton, useJudoNavigation } from '~/components';
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
import type { ServiceUserProfileUserProfile_View_EditActivityDistrictsComponentActionDefinitions } from './components/ServiceUserProfileUserProfile_View_EditActivityDistrictsComponent';
import { ServiceUserProfileUserProfile_View_EditActivityDistrictsComponent } from './components/ServiceUserProfileUserProfile_View_EditActivityDistrictsComponent';
import type { ServiceUserProfileUserProfile_View_EditActivityCountiesComponentActionDefinitions } from './components/ServiceUserProfileUserProfile_View_EditActivityCountiesComponent';
import { ServiceUserProfileUserProfile_View_EditActivityCountiesComponent } from './components/ServiceUserProfileUserProfile_View_EditActivityCountiesComponent';
import type { ServiceUserProfileUserProfile_View_EditResidentCityComponentActionDefinitions } from './components/ServiceUserProfileUserProfile_View_EditResidentCityComponent';
import { ServiceUserProfileUserProfile_View_EditResidentCityComponent } from './components/ServiceUserProfileUserProfile_View_EditResidentCityComponent';
import type { ServiceUserProfileUserProfile_View_EditResidentCountyComponentActionDefinitions } from './components/ServiceUserProfileUserProfile_View_EditResidentCountyComponent';
import { ServiceUserProfileUserProfile_View_EditResidentCountyComponent } from './components/ServiceUserProfileUserProfile_View_EditResidentCountyComponent';
import type { ServiceUserProfileUserProfile_View_EditResidentDistrictComponentActionDefinitions } from './components/ServiceUserProfileUserProfile_View_EditResidentDistrictComponent';
import { ServiceUserProfileUserProfile_View_EditResidentDistrictComponent } from './components/ServiceUserProfileUserProfile_View_EditResidentDistrictComponent';

export interface ServiceUserProfileUserProfile_View_EditActionDefinitions
  extends ServiceUserProfileUserProfile_View_EditActivityCitiesComponentActionDefinitions,
    ServiceUserProfileUserProfile_View_EditActivityCountiesComponentActionDefinitions,
    ServiceUserProfileUserProfile_View_EditActivityDistrictsComponentActionDefinitions,
    ServiceUserProfileUserProfile_View_EditResidentCityComponentActionDefinitions,
    ServiceUserProfileUserProfile_View_EditResidentCountyComponentActionDefinitions,
    ServiceUserProfileUserProfile_View_EditResidentDistrictComponentActionDefinitions {}

export interface ServiceUserProfileUserProfile_View_EditProps {
  refreshCounter: number;
  actions: ServiceUserProfileUserProfile_View_EditActionDefinitions;

  data: ServiceUserProfileStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceUserProfile, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceUserProfile, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceUserProfile, string>>>;
}

// XMIID: User/(esm/_1QevwFvQEe6jm_SkPSYEYw)/TransferObjectViewPageContainer
// Name: service::UserProfile::UserProfile_View_Edit
export default function ServiceUserProfileUserProfile_View_Edit(props: ServiceUserProfileUserProfile_View_EditProps) {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    refreshCounter,
    actions,
    data,
    isLoading,
    isFormUpdateable,
    isFormDeleteable,
    storeDiff,
    editMode,
    validation,
    setValidation,
  } = props;
  const { locale: l10nLocale } = useL10N();

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );

  return (
    <Grid container spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
      <Grid item xs={12} sm={12}>
        <Card id="_Gvl0MIujEe6laYH8Xw7WEw)/LabelWrapper">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <MdiIcon path="Personal::Icon" sx={{ marginRight: 1 }} />
                  <Typography id="_Gvl0MIujEe6laYH8Xw7WEw)/Label" variant="h5" component="h1">
                    {t('service.UserProfile.UserProfile_View_Edit.Personal.Icon', { defaultValue: 'Personal' })}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Card id="User/(esm/_WRx7kFvTEe6jm_SkPSYEYw)/GroupVisualElement">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          required={false}
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
                          id="User/(esm/_AEEGwlvUEe6jm_SkPSYEYw)/GroupVisualElement"
                          container
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <TextField
                              required={true}
                              name="firstName"
                              id="User/(esm/_AEEGw1vUEe6jm_SkPSYEYw)/StringTypeTextInput"
                              autoFocus
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

                          <Grid item xs={12} sm={12}>
                            <TextField
                              required={true}
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
                          id="User/(esm/_AEDfsFvUEe6jm_SkPSYEYw)/GroupVisualElement"
                          container
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <TextField
                              required={true}
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

                          <Grid item xs={12} sm={12}>
                            <TextField
                              required={false}
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
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Card id="_Guox8IujEe6laYH8Xw7WEw)/LabelWrapper">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <MdiIcon path="Areas::Icon" sx={{ marginRight: 1 }} />
                  <Typography id="_Guox8IujEe6laYH8Xw7WEw)/Label" variant="h5" component="h1">
                    {t('service.UserProfile.UserProfile_View_Edit.Areas.Icon', { defaultValue: 'Areas' })}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Card id="User/(esm/_fsW_oFvTEe6jm_SkPSYEYw)/GroupVisualElement">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_fsW_oVvTEe6jm_SkPSYEYw)/GroupVisualElement"
                          container
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <ServiceUserProfileUserProfile_View_EditResidentCountyComponent
                              disabled={false || !isFormUpdateable()}
                              ownerData={data}
                              editMode={editMode}
                              storeDiff={storeDiff}
                              validationError={validation.get('residentCounty')}
                              actions={actions}
                            />
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <ServiceUserProfileUserProfile_View_EditResidentCityComponent
                              disabled={false || !isFormUpdateable()}
                              ownerData={data}
                              editMode={editMode}
                              storeDiff={storeDiff}
                              validationError={validation.get('residentCity')}
                              actions={actions}
                            />
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <ServiceUserProfileUserProfile_View_EditResidentDistrictComponent
                              disabled={false || !isFormUpdateable()}
                              ownerData={data}
                              editMode={editMode}
                              storeDiff={storeDiff}
                              validationError={validation.get('residentDistrict')}
                              actions={actions}
                            />
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid container item xs={12} sm={12}>
                        <ModeledTabs
                          id="User/(esm/_fsW_qFvTEe6jm_SkPSYEYw)/TabBarVisualElement"
                          ownerData={data}
                          validation={validation}
                          orientation='horizontal'
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
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_fsW_qVvTEe6jm_SkPSYEYw)/GroupVisualElement"
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
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12} md={4.0}>
                            <Grid
                              id="User/(esm/_fsW_rFvTEe6jm_SkPSYEYw)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
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
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_fsW_r1vTEe6jm_SkPSYEYw)/GroupVisualElement"
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
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </ModeledTabs>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
