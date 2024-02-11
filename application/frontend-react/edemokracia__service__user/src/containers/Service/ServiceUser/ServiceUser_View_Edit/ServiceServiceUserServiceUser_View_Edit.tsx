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
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
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
import { isErrorOperationFault, serviceDateToUiDate, uiDateToServiceDate, useErrorHandler } from '~/utilities';

import { DateTimePicker } from '@mui/x-date-pickers';
import type { DateTimeValidationError } from '@mui/x-date-pickers';
import { AssociationButton } from '~/components/widgets';
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
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteStored,
} from '~/services/data-api';
import type { ServiceServiceUserServiceUser_View_EditActivityCitiesComponentActionDefinitions } from './components/ServiceServiceUserServiceUser_View_EditActivityCitiesComponent';
import { ServiceServiceUserServiceUser_View_EditActivityCitiesComponent } from './components/ServiceServiceUserServiceUser_View_EditActivityCitiesComponent';
import type { ServiceServiceUserServiceUser_View_EditActivityCountiesComponentActionDefinitions } from './components/ServiceServiceUserServiceUser_View_EditActivityCountiesComponent';
import { ServiceServiceUserServiceUser_View_EditActivityCountiesComponent } from './components/ServiceServiceUserServiceUser_View_EditActivityCountiesComponent';
import type { ServiceServiceUserServiceUser_View_EditActivityDistrictsComponentActionDefinitions } from './components/ServiceServiceUserServiceUser_View_EditActivityDistrictsComponent';
import { ServiceServiceUserServiceUser_View_EditActivityDistrictsComponent } from './components/ServiceServiceUserServiceUser_View_EditActivityDistrictsComponent';
import type { ServiceServiceUserServiceUser_View_EditResidentCityComponentActionDefinitions } from './components/ServiceServiceUserServiceUser_View_EditResidentCityComponent';
import { ServiceServiceUserServiceUser_View_EditResidentCityComponent } from './components/ServiceServiceUserServiceUser_View_EditResidentCityComponent';
import type { ServiceServiceUserServiceUser_View_EditResidentCountyComponentActionDefinitions } from './components/ServiceServiceUserServiceUser_View_EditResidentCountyComponent';
import { ServiceServiceUserServiceUser_View_EditResidentCountyComponent } from './components/ServiceServiceUserServiceUser_View_EditResidentCountyComponent';
import type { ServiceServiceUserServiceUser_View_EditResidentDistrictComponentActionDefinitions } from './components/ServiceServiceUserServiceUser_View_EditResidentDistrictComponent';
import { ServiceServiceUserServiceUser_View_EditResidentDistrictComponent } from './components/ServiceServiceUserServiceUser_View_EditResidentDistrictComponent';

export const SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type ServiceServiceUserServiceUser_View_EditContainerHook = (
  data: ServiceServiceUserStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceServiceUser, value: any) => void,
) => ServiceServiceUserServiceUser_View_EditActionDefinitions;

export interface ServiceServiceUserServiceUser_View_EditActionDefinitions
  extends ServiceServiceUserServiceUser_View_EditActivityCitiesComponentActionDefinitions,
    ServiceServiceUserServiceUser_View_EditActivityCountiesComponentActionDefinitions,
    ServiceServiceUserServiceUser_View_EditActivityDistrictsComponentActionDefinitions,
    ServiceServiceUserServiceUser_View_EditResidentCityComponentActionDefinitions,
    ServiceServiceUserServiceUser_View_EditResidentCountyComponentActionDefinitions,
    ServiceServiceUserServiceUser_View_EditResidentDistrictComponentActionDefinitions {
  getPageTitle?: (data: ServiceServiceUser) => string;
  votesOpenPageAction?: (target: ServiceSimpleVoteStored, isDraft?: boolean) => Promise<void>;
  isCreatedRequired?: (data: ServiceServiceUser | ServiceServiceUserStored, editMode?: boolean) => boolean;
  isCreatedDisabled?: (
    data: ServiceServiceUser | ServiceServiceUserStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isIsAdminRequired?: (data: ServiceServiceUser | ServiceServiceUserStored, editMode?: boolean) => boolean;
  isIsAdminDisabled?: (
    data: ServiceServiceUser | ServiceServiceUserStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isUserNameRequired?: (data: ServiceServiceUser | ServiceServiceUserStored, editMode?: boolean) => boolean;
  isUserNameDisabled?: (
    data: ServiceServiceUser | ServiceServiceUserStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isEmailRequired?: (data: ServiceServiceUser | ServiceServiceUserStored, editMode?: boolean) => boolean;
  isEmailDisabled?: (
    data: ServiceServiceUser | ServiceServiceUserStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isPhoneRequired?: (data: ServiceServiceUser | ServiceServiceUserStored, editMode?: boolean) => boolean;
  isPhoneDisabled?: (
    data: ServiceServiceUser | ServiceServiceUserStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isFirstNameRequired?: (data: ServiceServiceUser | ServiceServiceUserStored, editMode?: boolean) => boolean;
  isFirstNameDisabled?: (
    data: ServiceServiceUser | ServiceServiceUserStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isLastNameRequired?: (data: ServiceServiceUser | ServiceServiceUserStored, editMode?: boolean) => boolean;
  isLastNameDisabled?: (
    data: ServiceServiceUser | ServiceServiceUserStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  getMask?: () => string;
}

export interface ServiceServiceUserServiceUser_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceServiceUserServiceUser_View_EditActionDefinitions;

  data: ServiceServiceUserStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceServiceUser, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceServiceUser, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceServiceUser, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_p1nIcGksEe25ONJ3V89cVA)/TransferObjectViewPageContainer
// Name: service::ServiceUser::ServiceUser_View_Edit
export default function ServiceServiceUserServiceUser_View_Edit(props: ServiceServiceUserServiceUser_View_EditProps) {
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
  const { service: customContainerHook } = useTrackService<ServiceServiceUserServiceUser_View_EditContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_SERVICE_USER_SERVICE_USER_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceServiceUserServiceUser_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="ServiceUser_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_p1nIcGksEe25ONJ3V89cVA)/TransferObjectViewVisualElement"
          data-name="ServiceUser_View_Edit"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item data-name="Security::LabelWrapper" xs={12} sm={12}>
            <Card
              id="(User/(esm/_oUYE0IXsEe2kLcMqsIbMgQ)/WrapAndLabelVisualElement)/LabelWrapper"
              data-name="Security::LabelWrapper"
            >
              <CardContent>
                <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="security" sx={{ marginRight: 1 }} />
                      <Typography
                        id="User/(esm/_oUYE0IXsEe2kLcMqsIbMgQ)/WrapAndLabelVisualElement)/Label"
                        variant="h5"
                        component="h1"
                      >
                        {t('service.ServiceUser.ServiceUser_View_Edit.Security.Label', { defaultValue: 'Security' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item data-name="Security" xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_oUYE0IXsEe2kLcMqsIbMgQ)/GroupVisualElement"
                      data-name="Security"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12} md={4.0}>
                        <TextField
                          required={actions?.isUserNameRequired ? actions.isUserNameRequired(data, editMode) : true}
                          name="userName"
                          id="User/(esm/_erlrQH4NEe2cB7_PsKXsHQ)/StringTypeTextInput"
                          label={
                            t('service.ServiceUser.ServiceUser_View_Edit.userName', {
                              defaultValue: 'Username',
                            }) as string
                          }
                          value={data.userName ?? ''}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': true,
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
                        <FormControl error={!!validation.get('isAdmin')}>
                          <FormGroup>
                            <FormControlLabel
                              className="checkbox"
                              sx={{
                                marginTop: '6px',
                                color: (theme) => (validation.has('isAdmin') ? theme.palette.error.main : 'primary'),
                              }}
                              disabled={
                                actions?.isIsAdminDisabled
                                  ? actions.isIsAdminDisabled(data, editMode, isLoading)
                                  : false || !isFormUpdateable() || isLoading
                              }
                              control={
                                <Checkbox
                                  checked={data.isAdmin || false}
                                  sx={{
                                    color: (theme) =>
                                      validation.has('isAdmin') ? theme.palette.error.main : 'primary',
                                  }}
                                  onChange={(event) => {
                                    storeDiff('isAdmin', event.target.checked);
                                  }}
                                />
                              }
                              label={
                                t('service.ServiceUser.ServiceUser_View_Edit.isAdmin', {
                                  defaultValue: 'Has admin access',
                                }) as string
                              }
                            />
                          </FormGroup>
                          {validation.has('isAdmin') && <FormHelperText>{validation.get('isAdmin')}</FormHelperText>}
                        </FormControl>
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
                              id: 'User/(esm/_B9HMkGkwEe25ONJ3V89cVA)/TimestampTypeDateTimeInput',
                              required: actions?.isCreatedRequired ? actions.isCreatedRequired(data, editMode) : false,
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
                              const copy = new Map<keyof ServiceServiceUser, string>(prevValidation);
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
                            t('service.ServiceUser.ServiceUser_View_Edit.created', {
                              defaultValue: 'Created',
                            }) as string
                          }
                          value={serviceDateToUiDate(data.created ?? null)}
                          readOnly={false || !isFormUpdateable()}
                          disabled={
                            actions?.isCreatedDisabled
                              ? actions.isCreatedDisabled(data, editMode, isLoading)
                              : isLoading
                          }
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

          <Grid item data-name="personal::LabelWrapper" xs={12} sm={12}>
            <Card
              id="(User/(esm/_M0pnwGk5Ee25ONJ3V89cVA)/WrapAndLabelVisualElement)/LabelWrapper"
              data-name="personal::LabelWrapper"
            >
              <CardContent>
                <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="card-account-details" sx={{ marginRight: 1 }} />
                      <Typography
                        id="User/(esm/_M0pnwGk5Ee25ONJ3V89cVA)/WrapAndLabelVisualElement)/Label"
                        variant="h5"
                        component="h1"
                      >
                        {t('service.ServiceUser.ServiceUser_View_Edit.personal.Label', { defaultValue: 'Personal' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item data-name="personal" xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_M0pnwGk5Ee25ONJ3V89cVA)/GroupVisualElement"
                      data-name="personal"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item data-name="name" xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_-zSJUGk5Ee25ONJ3V89cVA)/GroupVisualElement"
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
                              id="User/(esm/_B545cGkwEe25ONJ3V89cVA)/StringTypeTextInput"
                              label={
                                t('service.ServiceUser.ServiceUser_View_Edit.firstName', {
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
                              id="User/(esm/_B6eIQGkwEe25ONJ3V89cVA)/StringTypeTextInput"
                              label={
                                t('service.ServiceUser.ServiceUser_View_Edit.lastName', {
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
                          id="User/(esm/_R-hPIGk6Ee25ONJ3V89cVA)/GroupVisualElement"
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
                              id="User/(esm/_B7xv0GkwEe25ONJ3V89cVA)/StringTypeTextInput"
                              label={
                                t('service.ServiceUser.ServiceUser_View_Edit.email', {
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
                              id="User/(esm/_B7FMQGkwEe25ONJ3V89cVA)/StringTypeTextInput"
                              label={
                                t('service.ServiceUser.ServiceUser_View_Edit.phone', {
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

                      <Grid item xs={12} sm={12}>
                        <AssociationButton
                          id="User/(esm/_I-ob4IXqEe2kLcMqsIbMgQ)/TabularReferenceFieldButton"
                          variant={undefined}
                          editMode={editMode}
                          navigateAction={actions.votesOpenPageAction}
                          refreshCounter={refreshCounter}
                        >
                          {t('service.ServiceUser.ServiceUser_View_Edit.votes', { defaultValue: 'Votes' })}
                          <MdiIcon path="arrow-right" />
                        </AssociationButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item data-name="Areas::LabelWrapper" xs={12} sm={12}>
            <Card
              id="(User/(esm/_vzaQsGk5Ee25ONJ3V89cVA)/WrapAndLabelVisualElement)/LabelWrapper"
              data-name="Areas::LabelWrapper"
            >
              <CardContent>
                <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="map" sx={{ marginRight: 1 }} />
                      <Typography
                        id="User/(esm/_vzaQsGk5Ee25ONJ3V89cVA)/WrapAndLabelVisualElement)/Label"
                        variant="h5"
                        component="h1"
                      >
                        {t('service.ServiceUser.ServiceUser_View_Edit.Areas.Label', { defaultValue: 'Areas' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item data-name="Areas" xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_vzaQsGk5Ee25ONJ3V89cVA)/GroupVisualElement"
                      data-name="Areas"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="center"
                      spacing={2}
                    >
                      <Grid item data-name="Residency" xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_C6EUkIXuEe2kLcMqsIbMgQ)/GroupVisualElement"
                          data-name="Residency"
                          container
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12} md={4.0}>
                            <ServiceServiceUserServiceUser_View_EditResidentCountyComponent
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
                            <ServiceServiceUserServiceUser_View_EditResidentCityComponent
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
                            <ServiceServiceUserServiceUser_View_EditResidentDistrictComponent
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
                          id="User/(esm/_grVfcIdjEe2kLcMqsIbMgQ)/TabBarVisualElement"
                          ownerData={data}
                          validation={validation}
                          orientation="horizontal"
                          childTabs={[
                            {
                              id: 'User/(esm/_mk-zYIdjEe2kLcMqsIbMgQ)/GroupTab',
                              name: 'service.ServiceUser.ServiceUser_View_Edit.tab_activity_counties',
                              label: t('service.ServiceUser.ServiceUser_View_Edit.tab_activity_counties', {
                                defaultValue: 'Activity counties',
                              }) as string,
                              disabled: isLoading,
                              hidden: false,
                              icon: 'castle',
                              nestedDataKeys: ['activityCounties'],
                            },
                            {
                              id: 'User/(esm/_yYmycIdjEe2kLcMqsIbMgQ)/GroupTab',
                              name: 'service.ServiceUser.ServiceUser_View_Edit.activity_cities',
                              label: t('service.ServiceUser.ServiceUser_View_Edit.activity_cities', {
                                defaultValue: 'Activity cities',
                              }) as string,
                              disabled: isLoading,
                              hidden: false,
                              icon: 'city',
                              nestedDataKeys: ['activityCities'],
                            },
                            {
                              id: 'User/(esm/_4jHz8IdjEe2kLcMqsIbMgQ)/GroupTab',
                              name: 'service.ServiceUser.ServiceUser_View_Edit.activity_districts',
                              label: t('service.ServiceUser.ServiceUser_View_Edit.activity_districts', {
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
                              id="User/(esm/_mk-zYIdjEe2kLcMqsIbMgQ)/GroupVisualElement"
                              data-name="tab_activity_counties"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceServiceUserServiceUser_View_EditActivityCountiesComponent
                                    uniqueId={
                                      'User/(esm/_I-t7cIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable'
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
                              id="User/(esm/_yYmycIdjEe2kLcMqsIbMgQ)/GroupVisualElement"
                              data-name="activity_cities"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12} md={36.0}>
                                <Grid
                                  id="User/(esm/_I-1QMIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceServiceUserServiceUser_View_EditActivityCitiesComponent
                                    uniqueId={
                                      'User/(esm/_I-1QMIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable'
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
                              id="User/(esm/_4jHz8IdjEe2kLcMqsIbMgQ)/GroupVisualElement"
                              data-name="activity_districts"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceServiceUserServiceUser_View_EditActivityDistrictsComponent
                                    uniqueId={
                                      'User/(esm/_I-9zEIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable'
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
