//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getViewDialogs(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/dialogs/index.tsx
// Template file: actor/src/pages/dialogs/index.tsx.hbs
// Page name: edemokracia::admin::Issue.owner#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: owner
// Page DataElement owner name: edemokracia::admin::Issue

import type { FC, Dispatch, SetStateAction } from 'react';
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
  AdminIssue,
  AdminIssueStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminUserServiceForClassImpl } from '~/generated/data-axios';
import { useButtonNavigateVotesAction } from './actions';

import { ResidentCityLink } from './components/ResidentCityLink';
import { ResidentCountyLink } from './components/ResidentCountyLink';
import { ResidentDistrictLink } from './components/ResidentDistrictLink';
import { ActivityCitiesTable } from './components/ActivityCitiesTable';
import { ActivityDistrictsTable } from './components/ActivityDistrictsTable';
import { ActivityCountiesTable } from './components/ActivityCountiesTable';

export interface AdminAdminViewProps {
  entry: AdminUserStored;
  successCallback: () => void;
  cancel: () => void;
}

export type AdminAdminViewPostRefreshAction = (
  data: AdminUserStored,
  storeDiff: (attributeName: keyof AdminUserStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof AdminUser, string>>>,
) => Promise<void>;

export const ADMIN_ADMIN_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY = 'AdminAdminViewPostRefreshHook';
export type AdminAdminViewPostRefreshHook = () => AdminAdminViewPostRefreshAction;

/**
 * Name: edemokracia::admin::Issue.owner#View
 * Is Access: false
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
  const [data, setData] = useState<AdminUserStored>(entry ? { ...entry } : ({} as unknown as AdminUserStored));
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
  const [validation, setValidation] = useState<Map<keyof AdminUser, string>>(new Map<keyof AdminUser, string>());

  const queryCustomizer: AdminUserQueryCustomizer = {
    _mask:
      '{userName,isAdmin,created,firstName,lastName,email,phone,residentCounty{representation},residentCity{representation},residentDistrict{representation},activityCounties{representation},activityCities{representation},activityDistricts{representation}}',
  };

  const { service: postRefreshHook } = useTrackService<AdminAdminViewPostRefreshHook>(
    `(${OBJECTCLASS}=${ADMIN_ADMIN_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: AdminAdminViewPostRefreshAction | undefined = postRefreshHook && postRefreshHook();

  const buttonNavigateVotesAction = useButtonNavigateVotesAction();

  const title: string = t('admin.UserView', { defaultValue: 'User View / Edit' });

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
      const res = await adminUserServiceForClassImpl.refresh(
        { __signedIdentifier: entry.__signedIdentifier } as JudoIdentifiable<AdminUser>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminUserStored, any>);
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
            <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditSecurityLabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="security" sx={{ marginRight: 1 }} />
                      <Typography
                        id="LabeledemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditSecurityLabelWrapperSecurityLabel"
                        variant="h5"
                        component="h1"
                      >
                        {t('admin.UserView.Security.Label', { defaultValue: 'Security' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditSecurityLabelWrapperSecurity"
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
                          id="TextInputedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditSecurityLabelWrapperSecurityUserName"
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
                              id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditSecurityLabelWrapperSecurityCreated',
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
            <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditPersonalLabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="card-account-details" sx={{ marginRight: 1 }} />
                      <Typography
                        id="LabeledemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditPersonalLabelWrapperPersonalLabel"
                        variant="h5"
                        component="h1"
                      >
                        {t('admin.UserView.personal.Label', { defaultValue: 'Personal' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditPersonalLabelWrapperPersonal"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditPersonalLabelWrapperPersonalName"
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
                              id="TextInputedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditPersonalLabelWrapperPersonalNameFirstName"
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
                              id="TextInputedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditPersonalLabelWrapperPersonalNameLastName"
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
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditPersonalLabelWrapperPersonalContact"
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
                              id="TextInputedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditPersonalLabelWrapperPersonalContactEmail"
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
                              id="TextInputedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditPersonalLabelWrapperPersonalContactPhone"
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
                          id="NavigationToPageActionedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewEdemokraciaAdminAdminEdemokraciaAdminUserVotesButtonNavigate"
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
            <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditAreasLabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="map" sx={{ marginRight: 1 }} />
                      <Typography
                        id="LabeledemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditAreasLabelWrapperAreasLabel"
                        variant="h5"
                        component="h1"
                      >
                        {t('admin.UserView.Areas.Label', { defaultValue: 'Areas' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditAreasLabelWrapperAreas"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="center"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditAreasLabelWrapperAreasResidency"
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
                          id="TabControlleredemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditAreasLabelWrapperAreasActivity"
                          ownerData={data}
                          validation={validation}
                          orientation='horizontal'
                          childTabs={[
                            {
                              id: 'TabedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditAreasLabelWrapperAreasActivityTabActivityCounties',
                              name: 'admin.UserView.tab.activity.counties',
                              label: t('admin.UserView.tab.activity.counties', {
                                defaultValue: 'Activity counties',
                              }) as string,
                              disabled: isLoading,
                              hidden: false,
                              icon: 'castle',
                              nestedDataKeys: ['activityCounties'],
                            },
                            {
                              id: 'TabedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditAreasLabelWrapperAreasActivityActivityCities',
                              name: 'admin.UserView.activity.cities',
                              label: t('admin.UserView.activity.cities', { defaultValue: 'Activity cities' }) as string,
                              disabled: isLoading,
                              hidden: false,
                              icon: 'city',
                              nestedDataKeys: ['activityCities'],
                            },
                            {
                              id: 'TabedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditAreasLabelWrapperAreasActivityActivityDistricts',
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
                              id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditAreasLabelWrapperAreasActivityTabActivityCountiesTabActivityCounties"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditAreasLabelWrapperAreasActivityTabActivityCountiesTabActivityCountiesActivityCountiesLabelWrapper"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="TableedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditAreasLabelWrapperAreasActivityTabActivityCountiesTabActivityCountiesActivityCountiesLabelWrapperActivityCounties"
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
                              id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditAreasLabelWrapperAreasActivityActivityCitiesActivityCities"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapper"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="TableedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditAreasLabelWrapperAreasActivityActivityCitiesActivityCitiesActivityCitiesLabelWrapperActivityCities"
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
                              id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditAreasLabelWrapperAreasActivityActivityDistrictsActivityDistricts"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditAreasLabelWrapperAreasActivityActivityDistrictsActivityDistrictsActivityDistrictsLabelWrapper"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="TableedemokraciaAdminAdminEdemokraciaAdminIssueOwnerViewDefaultUserViewEditAreasLabelWrapperAreasActivityActivityDistrictsActivityDistrictsActivityDistrictsLabelWrapperActivityDistricts"
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
