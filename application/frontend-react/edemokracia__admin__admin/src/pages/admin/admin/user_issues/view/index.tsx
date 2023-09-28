//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Admin.userIssues#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: userIssues
// Page DataElement owner name: edemokracia::admin::Admin

import type { FC, Dispatch, SetStateAction } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent, Typography } from '@mui/material';
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

import {
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminUserIssues,
  AdminUserIssuesQueryCustomizer,
  AdminUserIssuesStored,
} from '~/generated/data-api';
import { adminAdminServiceForUserIssuesImpl, adminUserIssuesServiceForClassImpl } from '~/generated/data-axios';
import { useAdminUserIssuesCreateIssueAction } from './actions';

import { PageActions } from './components/PageActions';
import { ActiveIssuesGlobalTable } from './components/ActiveIssuesGlobalTable';
import { ActiveIssuesInActivityCitiesTable } from './components/ActiveIssuesInActivityCitiesTable';
import { ActiveIssuesInActivityCountiesTable } from './components/ActiveIssuesInActivityCountiesTable';
import { ActiveIssuesInActivityDistrictsTable } from './components/ActiveIssuesInActivityDistrictsTable';
import { ActiveIssuesInResidentCityTable } from './components/ActiveIssuesInResidentCityTable';
import { ActiveIssuesInResidentCountyTable } from './components/ActiveIssuesInResidentCountyTable';
import { ActiveIssuesInResidentDistrictTable } from './components/ActiveIssuesInResidentDistrictTable';
import { OwnedIssuesTable } from './components/OwnedIssuesTable';

export type AdminAdminUserIssuesViewPostRefreshAction = (
  data: AdminUserIssuesStored,
  storeDiff: (attributeName: keyof AdminUserIssuesStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof AdminUserIssues, string>>>,
) => Promise<void>;

export const ADMIN_ADMIN_USER_ISSUES_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY = 'AdminAdminUserIssuesViewPostRefreshHook';
export type AdminAdminUserIssuesViewPostRefreshHook = () => AdminAdminUserIssuesViewPostRefreshAction;

/**
 * Name: edemokracia::admin::Admin.userIssues#View
 * Is Access: true
 * Is Dashboard: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminAdminUserIssuesView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const [signedIdentifier, setSignedIdentifier] = useState<string>();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<AdminUserIssuesStored>({} as unknown as AdminUserIssuesStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminUserIssuesStored, any>>(
    {} as unknown as Record<keyof AdminUserIssuesStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminUserIssuesStored, value: any) => void = useCallback(
    (attributeName: keyof AdminUserIssuesStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof AdminUserIssues, string>>(
    new Map<keyof AdminUserIssues, string>(),
  );

  const queryCustomizer: AdminUserIssuesQueryCustomizer = {
    _mask:
      '{userName,ownedIssues{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,created,numberOfDebates,status,isFavorite,isNotFavorite},activeIssuesGlobal{title,created,numberOfDebates,status,isFavorite,isNotFavorite},activeIssuesInActivityCounties{countyRepresentation,title,created,numberOfDebates,status,isFavorite,isNotFavorite},activeIssuesInActivityCities{countyRepresentation,cityRepresentation,title,created,numberOfDebates,status,isFavorite,isNotFavorite},activeIssuesInActivityDistricts{countyRepresentation,cityRepresentation,districtRepresentation,title,created,numberOfDebates,status,isFavorite,isNotFavorite},activeIssuesInResidentCounty{title,created,numberOfDebates,status,isFavorite,isNotFavorite},activeIssuesInResidentCity{countyRepresentation,cityRepresentation,title,created,numberOfDebates,status,isFavorite,isNotFavorite},activeIssuesInResidentDistrict{countyRepresentation,cityRepresentation,districtRepresentation,title,created,numberOfDebates,status,isFavorite,isNotFavorite}}',
  };

  const { service: postRefreshHook } = useTrackService<AdminAdminUserIssuesViewPostRefreshHook>(
    `(${OBJECTCLASS}=${ADMIN_ADMIN_USER_ISSUES_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: AdminAdminUserIssuesViewPostRefreshAction | undefined = postRefreshHook && postRefreshHook();

  const adminUserIssuesCreateIssueAction = useAdminUserIssuesCreateIssueAction();

  const title: string = t('admin.UserIssuesView', { defaultValue: 'UserIssues View / Edit' });

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

  async function init() {
    setIsLoading(true);

    try {
      const res = await adminAdminServiceForUserIssuesImpl.getUserIssues('{}');

      setIsLoading(false);

      if (res?.__signedIdentifier) {
        setData(res);
        setSignedIdentifier(res.__signedIdentifier);
      } else {
        navigate('*');
      }
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    init();
  }, []);

  async function fetchData() {
    setIsLoading(true);

    try {
      const res = await adminUserIssuesServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as AdminUserIssuesStored,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminUserIssuesStored, any>);
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
    if (signedIdentifier) {
      fetchData();
    }
  }, [signedIdentifier]);

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
      <PageContainerTransition>
        <Box sx={mainContainerPadding}>
          <Grid
            className="access-page-data"
            container
            spacing={2}
            direction="column"
            alignItems="stretch"
            justifyContent="flex-start"
          >
            <Grid item xs={12} sm={12}>
              <Grid
                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRoot"
                container
                direction="row"
                alignItems="flex-start"
                justifyContent="flex-start"
                spacing={2}
              >
                <Grid item xs={12} sm={4.0}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <LoadingButton
                        id="ButtonedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootActionGroupCreateIssue"
                        loading={isLoading}
                        startIcon={<MdiIcon path="ticket-confirmation" />}
                        loadingPosition="start"
                        onClick={async () => {
                          try {
                            setIsLoading(true);
                            await adminUserIssuesCreateIssueAction(() => fetchData());
                          } finally {
                            setIsLoading(false);
                          }
                        }}
                        disabled={editMode}
                      >
                        <span>
                          {t('admin.UserIssuesView.actionGroup.createIssue', { defaultValue: 'Create issue' })}
                        </span>
                      </LoadingButton>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container item xs={12} sm={12}>
                  <ModeledTabs
                    id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBar"
                    ownerData={data}
                    validation={validation}
                    orientation='horizontal'
                    childTabs={[
                      {
                        id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarOwnedIssuesGroup',
                        name: 'admin.UserIssuesView.ownedIssuesGroup',
                        label: t('admin.UserIssuesView.ownedIssuesGroup', { defaultValue: 'Owned issues' }) as string,
                        disabled: isLoading,
                        hidden: false,
                        icon: 'account-box',
                        nestedDataKeys: ['ownedIssues'],
                      },
                      {
                        id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssues',
                        name: 'admin.UserIssuesView.activeGlobalIssues',
                        label: t('admin.UserIssuesView.activeGlobalIssues', {
                          defaultValue: 'Active global issues',
                        }) as string,
                        disabled: isLoading,
                        hidden: false,
                        icon: 'earth',
                        nestedDataKeys: ['activeIssuesGlobal'],
                      },
                      {
                        id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityArea',
                        name: 'admin.UserIssuesView.activeIssuesByActivityArea',
                        label: t('admin.UserIssuesView.activeIssuesByActivityArea', {
                          defaultValue: 'Active issues by my activity areas',
                        }) as string,
                        disabled: isLoading,
                        hidden: false,
                        icon: 'map-search',
                        nestedDataKeys: [
                          'activeIssuesInActivityCities',
                          'activeIssuesInActivityCounties',
                          'activeIssuesInActivityDistricts',
                        ],
                      },
                      {
                        id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentArea',
                        name: 'admin.UserIssuesView.activeIssuesByResidentArea',
                        label: t('admin.UserIssuesView.activeIssuesByResidentArea', {
                          defaultValue: 'Active issues by my resident area',
                        }) as string,
                        disabled: isLoading,
                        hidden: false,
                        icon: 'home-circle',
                        nestedDataKeys: [
                          'activeIssuesInResidentCity',
                          'activeIssuesInResidentCounty',
                          'activeIssuesInResidentDistrict',
                        ],
                      },
                    ]}
                  >
                    <Grid item xs={12} sm={12}>
                      <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarOwnedIssuesGroupOwnedIssuesGroup">
                        <CardContent>
                          <Grid
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarOwnedIssuesGroupOwnedIssuesGroupOwnedIssuesLabelWrapper"
                                container
                                direction="column"
                                alignItems="stretch"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarOwnedIssuesGroupOwnedIssuesGroupOwnedIssuesLabelWrapperOwnedIssues"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                  >
                                    <OwnedIssuesTable
                                      isOwnerLoading={isLoading}
                                      validation={validation}
                                      fetchOwnerData={fetchData}
                                      refreshCounter={refreshCounter}
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
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssues">
                        <CardContent>
                          <Grid
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapper"
                                container
                                direction="column"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                                    <Typography
                                      id="LabeledemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobalLabel"
                                      variant="h5"
                                      component="h1"
                                    >
                                      {t('admin.UserIssuesView.activeGlobal.Label', { defaultValue: 'Global' })}
                                    </Typography>
                                  </Grid>
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobal"
                                    container
                                    direction="row"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobalActiveIssuesGlobalLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobalActiveIssuesGlobalLabelWrapperActiveIssuesGlobal"
                                            container
                                            direction="column"
                                            alignItems="stretch"
                                            justifyContent="flex-start"
                                          >
                                            <ActiveIssuesGlobalTable
                                              isOwnerLoading={isLoading}
                                              validation={validation}
                                              fetchOwnerData={fetchData}
                                              refreshCounter={refreshCounter}
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
                              </Grid>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityArea">
                        <CardContent>
                          <Grid
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid container item xs={12} sm={12}>
                              <ModeledTabs
                                id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBar"
                                ownerData={data}
                                validation={validation}
                                orientation='vertical'
                                childTabs={[
                                  {
                                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCounty',
                                    name: 'admin.UserIssuesView.activeByActivityInCounty',
                                    label: t('admin.UserIssuesView.activeByActivityInCounty', {
                                      defaultValue: 'County',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'castle',
                                    nestedDataKeys: ['activeIssuesInActivityCounties'],
                                  },
                                  {
                                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCity',
                                    name: 'admin.UserIssuesView.activeByActivityInCity',
                                    label: t('admin.UserIssuesView.activeByActivityInCity', {
                                      defaultValue: 'City',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'city',
                                    nestedDataKeys: ['activeIssuesInActivityCities'],
                                  },
                                  {
                                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInDistrict',
                                    name: 'admin.UserIssuesView.activeByActivityInDistrict',
                                    label: t('admin.UserIssuesView.activeByActivityInDistrict', {
                                      defaultValue: 'District',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'home-city',
                                    nestedDataKeys: ['activeIssuesInActivityDistricts'],
                                  },
                                ]}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCounty"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapperActiveIssuesInActivityCounties"
                                            container
                                            direction="column"
                                            alignItems="stretch"
                                            justifyContent="flex-start"
                                          >
                                            <ActiveIssuesInActivityCountiesTable
                                              isOwnerLoading={isLoading}
                                              validation={validation}
                                              fetchOwnerData={fetchData}
                                              refreshCounter={refreshCounter}
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
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCityActiveByActivityInCity"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCityActiveByActivityInCityActiveIssuesInActivityCitiesLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCityActiveByActivityInCityActiveIssuesInActivityCitiesLabelWrapperActiveIssuesInActivityCities"
                                            container
                                            direction="column"
                                            alignItems="stretch"
                                            justifyContent="flex-start"
                                          >
                                            <ActiveIssuesInActivityCitiesTable
                                              isOwnerLoading={isLoading}
                                              validation={validation}
                                              fetchOwnerData={fetchData}
                                              refreshCounter={refreshCounter}
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
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInDistrictActiveByActivityInDistrict"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInDistrictActiveByActivityInDistrictActiveIssuesInActivityDistrictsLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInDistrictActiveByActivityInDistrictActiveIssuesInActivityDistrictsLabelWrapperActiveIssuesInActivityDistricts"
                                            container
                                            direction="column"
                                            alignItems="stretch"
                                            justifyContent="flex-start"
                                          >
                                            <ActiveIssuesInActivityDistrictsTable
                                              isOwnerLoading={isLoading}
                                              validation={validation}
                                              fetchOwnerData={fetchData}
                                              refreshCounter={refreshCounter}
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
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentArea">
                        <CardContent>
                          <Grid
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid container item xs={12} sm={12}>
                              <ModeledTabs
                                id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBar"
                                ownerData={data}
                                validation={validation}
                                orientation='vertical'
                                childTabs={[
                                  {
                                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCounty',
                                    name: 'admin.UserIssuesView.activeByResidentInCounty',
                                    label: t('admin.UserIssuesView.activeByResidentInCounty', {
                                      defaultValue: 'County',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'castle',
                                    nestedDataKeys: ['activeIssuesInResidentCounty'],
                                  },
                                  {
                                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCity',
                                    name: 'admin.UserIssuesView.activeByResidentInCity',
                                    label: t('admin.UserIssuesView.activeByResidentInCity', {
                                      defaultValue: 'City',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'city',
                                    nestedDataKeys: ['activeIssuesInResidentCity'],
                                  },
                                  {
                                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInDistrict',
                                    name: 'admin.UserIssuesView.activeByResidentInDistrict',
                                    label: t('admin.UserIssuesView.activeByResidentInDistrict', {
                                      defaultValue: 'District',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'home-city',
                                    nestedDataKeys: ['activeIssuesInResidentDistrict'],
                                  },
                                ]}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCounty"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapperActiveIssuesInResidentCounty"
                                            container
                                            direction="column"
                                            alignItems="stretch"
                                            justifyContent="flex-start"
                                          >
                                            <ActiveIssuesInResidentCountyTable
                                              isOwnerLoading={isLoading}
                                              validation={validation}
                                              fetchOwnerData={fetchData}
                                              refreshCounter={refreshCounter}
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
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCityActiveByResidentInCity"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCityActiveByResidentInCityActiveIssuesInResidentCityLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCityActiveByResidentInCityActiveIssuesInResidentCityLabelWrapperActiveIssuesInResidentCity"
                                            container
                                            direction="column"
                                            alignItems="stretch"
                                            justifyContent="flex-start"
                                          >
                                            <ActiveIssuesInResidentCityTable
                                              isOwnerLoading={isLoading}
                                              validation={validation}
                                              fetchOwnerData={fetchData}
                                              refreshCounter={refreshCounter}
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
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInDistrictActiveByResidentInDistrict"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInDistrictActiveByResidentInDistrictActiveIssuesInResidentDistrictLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInDistrictActiveByResidentInDistrictActiveIssuesInResidentDistrictLabelWrapperActiveIssuesInResidentDistrict"
                                            container
                                            direction="column"
                                            alignItems="stretch"
                                            justifyContent="flex-start"
                                          >
                                            <ActiveIssuesInResidentDistrictTable
                                              isOwnerLoading={isLoading}
                                              validation={validation}
                                              fetchOwnerData={fetchData}
                                              refreshCounter={refreshCounter}
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
                        </CardContent>
                      </Card>
                    </Grid>
                  </ModeledTabs>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </PageContainerTransition>
    </>
  );
}
