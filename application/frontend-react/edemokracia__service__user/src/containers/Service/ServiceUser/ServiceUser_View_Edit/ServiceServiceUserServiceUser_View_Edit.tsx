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
import { NumericFormat } from 'react-number-format';
import { LoadingButton } from '@mui/lab';
import { OBJECTCLASS } from '@pandino/pandino-api';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { ComponentProxy } from '@pandino/react-hooks';
import { clsx } from 'clsx';
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
import type { GridFilterModel } from '@mui/x-data-grid';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { mainContainerPadding } from '~/theme';
import { DIVIDER_HEIGHT } from '~/config';
import type { Filter } from '~/components-api';
import { MdiIcon, ModeledTabs, DropdownButton, useJudoNavigation } from '~/components';
import {
  isErrorOperationFault,
  useErrorHandler,
  fileHandling,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '~/utilities';

import { DatePicker, DateTimePicker, TimePicker } from '@mui/x-date-pickers';
import type { DateValidationError, DateTimeValidationError, TimeValidationError } from '@mui/x-date-pickers';
import { AssociationButton, BinaryInput, CollectionAssociationButton, NumericInput } from '~/components/widgets';
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
import type { ServiceServiceUserServiceUser_View_EditActivityDistrictsComponentActionDefinitions } from './components/ServiceServiceUserServiceUser_View_EditActivityDistrictsComponent';
import { ServiceServiceUserServiceUser_View_EditActivityDistrictsComponent } from './components/ServiceServiceUserServiceUser_View_EditActivityDistrictsComponent';
import type { ServiceServiceUserServiceUser_View_EditActivityCountiesComponentActionDefinitions } from './components/ServiceServiceUserServiceUser_View_EditActivityCountiesComponent';
import { ServiceServiceUserServiceUser_View_EditActivityCountiesComponent } from './components/ServiceServiceUserServiceUser_View_EditActivityCountiesComponent';
import type { ServiceServiceUserServiceUser_View_EditResidentCityComponentActionDefinitions } from './components/ServiceServiceUserServiceUser_View_EditResidentCityComponent';
import { ServiceServiceUserServiceUser_View_EditResidentCityComponent } from './components/ServiceServiceUserServiceUser_View_EditResidentCityComponent';
import type { ServiceServiceUserServiceUser_View_EditResidentCountyComponentActionDefinitions } from './components/ServiceServiceUserServiceUser_View_EditResidentCountyComponent';
import { ServiceServiceUserServiceUser_View_EditResidentCountyComponent } from './components/ServiceServiceUserServiceUser_View_EditResidentCountyComponent';
import type { ServiceServiceUserServiceUser_View_EditResidentDistrictComponentActionDefinitions } from './components/ServiceServiceUserServiceUser_View_EditResidentDistrictComponent';
import { ServiceServiceUserServiceUser_View_EditResidentDistrictComponent } from './components/ServiceServiceUserServiceUser_View_EditResidentDistrictComponent';

export interface ServiceServiceUserServiceUser_View_EditActionDefinitions
  extends ServiceServiceUserServiceUser_View_EditActivityCitiesComponentActionDefinitions,
    ServiceServiceUserServiceUser_View_EditActivityCountiesComponentActionDefinitions,
    ServiceServiceUserServiceUser_View_EditActivityDistrictsComponentActionDefinitions,
    ServiceServiceUserServiceUser_View_EditResidentCityComponentActionDefinitions,
    ServiceServiceUserServiceUser_View_EditResidentCountyComponentActionDefinitions,
    ServiceServiceUserServiceUser_View_EditResidentDistrictComponentActionDefinitions {
  serviceServiceUserServiceUser_View_EditPersonalVotesOpenPage?: (target?: ServiceSimpleVoteStored) => Promise<void>;
}

export interface ServiceServiceUserServiceUser_View_EditProps {
  refreshCounter: number;
  actions: ServiceServiceUserServiceUser_View_EditActionDefinitions;

  data: ServiceServiceUser;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceServiceUser, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceServiceUser, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceServiceUser, string>>>;
}

// XMIID: User/(esm/_p1nIcGksEe25ONJ3V89cVA)/TransferObjectViewPageContainer
// Name: service::ServiceUser::ServiceUser_View_Edit
export default function ServiceServiceUserServiceUser_View_Edit(props: ServiceServiceUserServiceUser_View_EditProps) {
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
        <Card id="_fnrJ0H2GEe6V8KKnnZfChA)/LabelWrapper">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <MdiIcon path="security" sx={{ marginRight: 1 }} />
                  <Typography id="_fnrJ0H2GEe6V8KKnnZfChA)/Label" variant="h5" component="h1">
                    {t(
                      'service.ServiceUser.ServiceUser.View.Edit.Security::Label.Security::LabelWrapper.ServiceUser_View_Edit.service::ServiceUser::ServiceUser_View_Edit',
                      { defaultValue: 'Security' },
                    )}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_oUYE0IXsEe2kLcMqsIbMgQ)/GroupVisualElement"
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
                      id="User/(esm/_erlrQH4NEe2cB7_PsKXsHQ)/StringTypeTextInput"
                      autoFocus
                      label={
                        t(
                          'service.ServiceUser.ServiceUser.View.Edit.userName.Security.Security::LabelWrapper.ServiceUser_View_Edit.service::ServiceUser::ServiceUser_View_Edit',
                          { defaultValue: 'Username' },
                        ) as string
                      }
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
                        label={
                          t(
                            'service.ServiceUser.ServiceUser.View.Edit.isAdmin.Security.Security::LabelWrapper.ServiceUser_View_Edit.service::ServiceUser::ServiceUser_View_Edit',
                            { defaultValue: 'Has admin access' },
                          ) as string
                        }
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
                          id: 'User/(esm/_B9HMkGkwEe25ONJ3V89cVA)/TimestampTypeDateTimeInput',
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
                        t(
                          'service.ServiceUser.ServiceUser.View.Edit.created.Security.Security::LabelWrapper.ServiceUser_View_Edit.service::ServiceUser::ServiceUser_View_Edit',
                          { defaultValue: 'Created' },
                        ) as string
                      }
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
        <Card id="_fnrw5H2GEe6V8KKnnZfChA)/LabelWrapper">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <MdiIcon path="card-account-details" sx={{ marginRight: 1 }} />
                  <Typography id="_fnrw5H2GEe6V8KKnnZfChA)/Label" variant="h5" component="h1">
                    {t(
                      'service.ServiceUser.ServiceUser.View.Edit.personal::Label.personal::LabelWrapper.ServiceUser_View_Edit.service::ServiceUser::ServiceUser_View_Edit',
                      { defaultValue: 'Personal' },
                    )}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_M0pnwGk5Ee25ONJ3V89cVA)/GroupVisualElement"
                  container
                  direction="row"
                  alignItems="stretch"
                  justifyContent="flex-start"
                  spacing={2}
                >
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_-zSJUGk5Ee25ONJ3V89cVA)/GroupVisualElement"
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
                          id="User/(esm/_B545cGkwEe25ONJ3V89cVA)/StringTypeTextInput"
                          label={
                            t(
                              'service.ServiceUser.ServiceUser.View.Edit.firstName.name.personal.personal::LabelWrapper.ServiceUser_View_Edit.service::ServiceUser::ServiceUser_View_Edit',
                              { defaultValue: 'First name' },
                            ) as string
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

                      <Grid item xs={12} sm={12} md={4.0}>
                        <TextField
                          required={true}
                          name="lastName"
                          id="User/(esm/_B6eIQGkwEe25ONJ3V89cVA)/StringTypeTextInput"
                          label={
                            t(
                              'service.ServiceUser.ServiceUser.View.Edit.lastName.name.personal.personal::LabelWrapper.ServiceUser_View_Edit.service::ServiceUser::ServiceUser_View_Edit',
                              { defaultValue: 'Last name' },
                            ) as string
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
                      id="User/(esm/_R-hPIGk6Ee25ONJ3V89cVA)/GroupVisualElement"
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
                          id="User/(esm/_B7xv0GkwEe25ONJ3V89cVA)/StringTypeTextInput"
                          label={
                            t(
                              'service.ServiceUser.ServiceUser.View.Edit.email.contact.personal.personal::LabelWrapper.ServiceUser_View_Edit.service::ServiceUser::ServiceUser_View_Edit',
                              { defaultValue: 'Email' },
                            ) as string
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

                      <Grid item xs={12} sm={12} md={4.0}>
                        <TextField
                          required={false}
                          name="phone"
                          id="User/(esm/_B7FMQGkwEe25ONJ3V89cVA)/StringTypeTextInput"
                          label={
                            t(
                              'service.ServiceUser.ServiceUser.View.Edit.phone.contact.personal.personal::LabelWrapper.ServiceUser_View_Edit.service::ServiceUser::ServiceUser_View_Edit',
                              { defaultValue: 'Phone' },
                            ) as string
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

                  <Grid item xs={12} sm={12}>
                    <AssociationButton
                      id="User/(esm/_I-ob4IXqEe2kLcMqsIbMgQ)/TabularReferenceFieldButton"
                      variant={undefined}
                      editMode={editMode}
                      navigateAction={actions.serviceServiceUserServiceUser_View_EditPersonalVotesOpenPage}
                      refreshCounter={refreshCounter}
                    >
                      {t(
                        'service.ServiceUser.ServiceUser.View.Edit.votes.personal.personal::LabelWrapper.ServiceUser_View_Edit.service::ServiceUser::ServiceUser_View_Edit',
                        { defaultValue: 'Votes' },
                      )}
                      <MdiIcon path="arrow-right" />
                    </AssociationButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Card id="_fmpPEX2GEe6V8KKnnZfChA)/LabelWrapper">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <MdiIcon path="map" sx={{ marginRight: 1 }} />
                  <Typography id="_fmpPEX2GEe6V8KKnnZfChA)/Label" variant="h5" component="h1">
                    {t(
                      'service.ServiceUser.ServiceUser.View.Edit.Areas::Label.Areas::LabelWrapper.ServiceUser_View_Edit.service::ServiceUser::ServiceUser_View_Edit',
                      { defaultValue: 'Areas' },
                    )}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_vzaQsGk5Ee25ONJ3V89cVA)/GroupVisualElement"
                  container
                  direction="row"
                  alignItems="stretch"
                  justifyContent="center"
                  spacing={2}
                >
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_C6EUkIXuEe2kLcMqsIbMgQ)/GroupVisualElement"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12} md={4.0}>
                        <ServiceServiceUserServiceUser_View_EditResidentCountyComponent
                          disabled={false || !isFormUpdateable()}
                          ownerData={data}
                          editMode={editMode}
                          storeDiff={storeDiff}
                          validationError={validation.get('residentCounty')}
                          actions={actions}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={4.0}>
                        <ServiceServiceUserServiceUser_View_EditResidentCityComponent
                          disabled={false || !isFormUpdateable()}
                          ownerData={data}
                          editMode={editMode}
                          storeDiff={storeDiff}
                          validationError={validation.get('residentCity')}
                          actions={actions}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={4.0}>
                        <ServiceServiceUserServiceUser_View_EditResidentDistrictComponent
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
                      id="User/(esm/_grVfcIdjEe2kLcMqsIbMgQ)/TabBarVisualElement"
                      ownerData={data}
                      validation={validation}
                      orientation='horizontal'
                      childTabs={[
                        {
                          id: 'User/(esm/_mk-zYIdjEe2kLcMqsIbMgQ)/GroupTab',
                          name: 'service.ServiceUser.ServiceUser.View.Edit.tab_activity_counties',
                          label: t('service.ServiceUser.ServiceUser.View.Edit.tab_activity_counties', {
                            defaultValue: 'Activity counties',
                          }) as string,
                          disabled: isLoading,
                          hidden: false,
                          icon: 'castle',
                          nestedDataKeys: ['activityCounties'],
                        },
                        {
                          id: 'User/(esm/_yYmycIdjEe2kLcMqsIbMgQ)/GroupTab',
                          name: 'service.ServiceUser.ServiceUser.View.Edit.activity_cities',
                          label: t('service.ServiceUser.ServiceUser.View.Edit.activity_cities', {
                            defaultValue: 'Activity cities',
                          }) as string,
                          disabled: isLoading,
                          hidden: false,
                          icon: 'city',
                          nestedDataKeys: ['activityCities'],
                        },
                        {
                          id: 'User/(esm/_4jHz8IdjEe2kLcMqsIbMgQ)/GroupTab',
                          name: 'service.ServiceUser.ServiceUser.View.Edit.activity_districts',
                          label: t('service.ServiceUser.ServiceUser.View.Edit.activity_districts', {
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
                          id="User/(esm/_mk-zYIdjEe2kLcMqsIbMgQ)/GroupVisualElement"
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
                                uniqueId={'TMP'}
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
                          id="User/(esm/_yYmycIdjEe2kLcMqsIbMgQ)/GroupVisualElement"
                          container
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_I-1QMIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable"
                              container
                              direction="column"
                              alignItems="stretch"
                              justifyContent="flex-start"
                            >
                              <ServiceServiceUserServiceUser_View_EditActivityCitiesComponent
                                uniqueId={'TMP'}
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
                          id="User/(esm/_4jHz8IdjEe2kLcMqsIbMgQ)/GroupVisualElement"
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
                                uniqueId={'TMP'}
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
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
