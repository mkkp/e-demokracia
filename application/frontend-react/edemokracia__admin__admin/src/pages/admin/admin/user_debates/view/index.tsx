//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Admin.userDebates#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: userDebates
// Page DataElement owner name: edemokracia::admin::Admin

import type { FC, Dispatch, SetStateAction } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent } from '@mui/material';
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
  AdminDebate,
  AdminDebateQueryCustomizer,
  AdminDebateStored,
  AdminUserDebates,
  AdminUserDebatesQueryCustomizer,
  AdminUserDebatesStored,
} from '~/generated/data-api';
import { adminAdminServiceForUserDebatesImpl, adminUserDebatesServiceForClassImpl } from '~/generated/data-axios';
import {} from './actions';

import { PageActions } from './components/PageActions';
import { ActiveDebatesInActivityCitiesTable } from './components/ActiveDebatesInActivityCitiesTable';
import { ActiveDebatesInActivityCountiesTable } from './components/ActiveDebatesInActivityCountiesTable';
import { ActiveDebatesInActivityDistrictsTable } from './components/ActiveDebatesInActivityDistrictsTable';
import { ActiveDebatesInResidentCityTable } from './components/ActiveDebatesInResidentCityTable';
import { ActiveDebatesInResidentCountyTable } from './components/ActiveDebatesInResidentCountyTable';
import { ActiveDebatesInResidentDistrictTable } from './components/ActiveDebatesInResidentDistrictTable';
import { ActiveDebatesGlobalTable } from './components/ActiveDebatesGlobalTable';
import { OwnedDebatesTable } from './components/OwnedDebatesTable';

export type AdminAdminUserDebatesViewPostRefreshAction = (
  data: AdminUserDebatesStored,
  storeDiff: (attributeName: keyof AdminUserDebatesStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof AdminUserDebates, string>>>,
) => Promise<void>;

export const ADMIN_ADMIN_USER_DEBATES_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY = 'AdminAdminUserDebatesViewPostRefreshHook';
export type AdminAdminUserDebatesViewPostRefreshHook = () => AdminAdminUserDebatesViewPostRefreshAction;

/**
 * Name: edemokracia::admin::Admin.userDebates#View
 * Is Access: true
 * Is Dashboard: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminAdminUserDebatesView() {
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
  const [data, setData] = useState<AdminUserDebatesStored>({} as unknown as AdminUserDebatesStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminUserDebatesStored, any>>(
    {} as unknown as Record<keyof AdminUserDebatesStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminUserDebatesStored, value: any) => void = useCallback(
    (attributeName: keyof AdminUserDebatesStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof AdminUserDebates, string>>(
    new Map<keyof AdminUserDebates, string>(),
  );

  const queryCustomizer: AdminUserDebatesQueryCustomizer = {
    _mask:
      '{ownedDebates{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite},activeDebatesGlobal{title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite},activeDebatesInActivityCounties{countyRepresentation,title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite},activeDebatesInActivityCities{countyRepresentation,cityRepresentation,title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite},activeDebatesInActivityDistricts{countyRepresentation,cityRepresentation,districtRepresentation,title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite},activeDebatesInResidentCounty{countyRepresentation,title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite},activeDebatesInResidentCity{countyRepresentation,cityRepresentation,title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite},activeDebatesInResidentDistrict{countyRepresentation,cityRepresentation,districtRepresentation,title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite}}',
  };

  const { service: postRefreshHook } = useTrackService<AdminAdminUserDebatesViewPostRefreshHook>(
    `(${OBJECTCLASS}=${ADMIN_ADMIN_USER_DEBATES_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: AdminAdminUserDebatesViewPostRefreshAction | undefined =
    postRefreshHook && postRefreshHook();

  const title: string = t('admin.UserDebatesView', { defaultValue: 'UserDebates View / Edit' });

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
      const res = await adminAdminServiceForUserDebatesImpl.getUserDebates('{}');

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
      const res = await adminUserDebatesServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as AdminUserDebatesStored,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminUserDebatesStored, any>);
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
                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRoot"
                container
                direction="row"
                alignItems="flex-start"
                justifyContent="flex-start"
                spacing={2}
              >
                <Grid container item xs={12} sm={12}>
                  <ModeledTabs
                    id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBar"
                    ownerData={data}
                    validation={validation}
                    orientation='horizontal'
                    childTabs={[
                      {
                        id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarOwnedDebatesGroup',
                        name: 'admin.UserDebatesView.OwnedDebatesGroup',
                        label: t('admin.UserDebatesView.OwnedDebatesGroup', {
                          defaultValue: 'Owned  Debates',
                        }) as string,
                        disabled: isLoading,
                        hidden: false,
                        icon: 'account-box',
                        nestedDataKeys: ['ownedDebates'],
                      },
                      {
                        id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveGlobalDebatesGroup',
                        name: 'admin.UserDebatesView.ActiveGlobalDebatesGroup',
                        label: t('admin.UserDebatesView.ActiveGlobalDebatesGroup', {
                          defaultValue: 'Active Global Debates',
                        }) as string,
                        disabled: isLoading,
                        hidden: false,
                        icon: 'earth',
                        nestedDataKeys: ['activeDebatesGlobal'],
                      },
                      {
                        id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityArea',
                        name: 'admin.UserDebatesView.ActiveDebatesByOwnerActivityArea',
                        label: t('admin.UserDebatesView.ActiveDebatesByOwnerActivityArea', {
                          defaultValue: 'Active debates bv my activity areas',
                        }) as string,
                        disabled: isLoading,
                        hidden: false,
                        icon: 'map-search',
                        nestedDataKeys: [
                          'activeDebatesInActivityCities',
                          'activeDebatesInActivityCounties',
                          'activeDebatesInActivityDistricts',
                        ],
                      },
                      {
                        id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroup',
                        name: 'admin.UserDebatesView.ActiveDebatesByOwnerResidentAreaGroup',
                        label: t('admin.UserDebatesView.ActiveDebatesByOwnerResidentAreaGroup', {
                          defaultValue: 'Active debates by my resident area',
                        }) as string,
                        disabled: isLoading,
                        hidden: false,
                        icon: 'home-circle',
                        nestedDataKeys: [
                          'activeDebatesInResidentCity',
                          'activeDebatesInResidentCounty',
                          'activeDebatesInResidentDistrict',
                        ],
                      },
                    ]}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarOwnedDebatesGroupOwnedDebatesGroup"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarOwnedDebatesGroupOwnedDebatesGroupOwnedDebatesLabelWrapper"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarOwnedDebatesGroupOwnedDebatesGroupOwnedDebatesLabelWrapperOwnedDebates"
                                container
                                direction="column"
                                alignItems="stretch"
                                justifyContent="flex-start"
                              >
                                <OwnedDebatesTable
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
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveGlobalDebatesGroupActiveGlobalDebatesGroup"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveGlobalDebatesGroupActiveGlobalDebatesGroupActiveDebatesGlobalLabelWrapper"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveGlobalDebatesGroupActiveGlobalDebatesGroupActiveDebatesGlobalLabelWrapperActiveDebatesGlobal"
                                container
                                direction="column"
                                alignItems="stretch"
                                justifyContent="flex-start"
                              >
                                <ActiveDebatesGlobalTable
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
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityArea"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid container item xs={12} sm={12}>
                          <ModeledTabs
                            id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBar"
                            ownerData={data}
                            validation={validation}
                            orientation='vertical'
                            childTabs={[
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaCountyGroup',
                                name: 'admin.UserDebatesView.ActiveDebatesByOwnerActivityAreaCountyGroup',
                                label: t('admin.UserDebatesView.ActiveDebatesByOwnerActivityAreaCountyGroup', {
                                  defaultValue: 'County',
                                }) as string,
                                disabled: isLoading,
                                hidden: false,
                                icon: 'map',
                                nestedDataKeys: ['activeDebatesInActivityCounties'],
                              },
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaCityGroup',
                                name: 'admin.UserDebatesView.ActiveDebatesByOwnerActivityAreaCityGroup',
                                label: t('admin.UserDebatesView.ActiveDebatesByOwnerActivityAreaCityGroup', {
                                  defaultValue: 'City',
                                }) as string,
                                disabled: isLoading,
                                hidden: false,
                                icon: 'city',
                                nestedDataKeys: ['activeDebatesInActivityCities'],
                              },
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaDistrictGroup',
                                name: 'admin.UserDebatesView.ActiveDebatesByOwnerActivityAreaDistrictGroup',
                                label: t('admin.UserDebatesView.ActiveDebatesByOwnerActivityAreaDistrictGroup', {
                                  defaultValue: 'District',
                                }) as string,
                                disabled: isLoading,
                                hidden: false,
                                icon: 'home-city',
                                nestedDataKeys: ['activeDebatesInActivityDistricts'],
                              },
                            ]}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaCountyGroupActiveDebatesByOwnerActivityAreaCountyGroup"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaCountyGroupActiveDebatesByOwnerActivityAreaCountyGroupActiveDebatesInActivityCountiesLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaCountyGroupActiveDebatesByOwnerActivityAreaCountyGroupActiveDebatesInActivityCountiesLabelWrapperActiveDebatesInActivityCounties"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                      >
                                        <ActiveDebatesInActivityCountiesTable
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
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaCityGroupActiveDebatesByOwnerActivityAreaCityGroup"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaCityGroupActiveDebatesByOwnerActivityAreaCityGroupActiveDebatesInActivityCitiesLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaCityGroupActiveDebatesByOwnerActivityAreaCityGroupActiveDebatesInActivityCitiesLabelWrapperActiveDebatesInActivityCities"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                      >
                                        <ActiveDebatesInActivityCitiesTable
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
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaDistrictGroupActiveDebatesByOwnerActivityAreaDistrictGroup"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaDistrictGroupActiveDebatesByOwnerActivityAreaDistrictGroupActiveDebatesInActivityDistrictsLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaDistrictGroupActiveDebatesByOwnerActivityAreaDistrictGroupActiveDebatesInActivityDistrictsLabelWrapperActiveDebatesInActivityDistricts"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                      >
                                        <ActiveDebatesInActivityDistrictsTable
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
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroup"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid container item xs={12} sm={12}>
                          <ModeledTabs
                            id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBar"
                            ownerData={data}
                            validation={validation}
                            orientation='vertical'
                            childTabs={[
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroup',
                                name: 'admin.UserDebatesView.ActiveDebatesByOwnerResidentAreaCountyGroup',
                                label: t('admin.UserDebatesView.ActiveDebatesByOwnerResidentAreaCountyGroup', {
                                  defaultValue: 'County',
                                }) as string,
                                disabled: isLoading,
                                hidden: false,
                                icon: 'map',
                                nestedDataKeys: ['activeDebatesInResidentCounty'],
                              },
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCityGroup',
                                name: 'admin.UserDebatesView.ActiveDebatesByOwnerResidentAreaCityGroup',
                                label: t('admin.UserDebatesView.ActiveDebatesByOwnerResidentAreaCityGroup', {
                                  defaultValue: 'City',
                                }) as string,
                                disabled: isLoading,
                                hidden: false,
                                icon: 'city',
                                nestedDataKeys: ['activeDebatesInResidentCity'],
                              },
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaDistrictGroup',
                                name: 'admin.UserDebatesView.ActiveDebatesByOwnerResidentAreaDistrictGroup',
                                label: t('admin.UserDebatesView.ActiveDebatesByOwnerResidentAreaDistrictGroup', {
                                  defaultValue: 'District',
                                }) as string,
                                disabled: isLoading,
                                hidden: false,
                                icon: 'home-city',
                                nestedDataKeys: ['activeDebatesInResidentDistrict'],
                              },
                            ]}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroup"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesInResidentCountyLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesInResidentCountyLabelWrapperActiveDebatesInResidentCounty"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                      >
                                        <ActiveDebatesInResidentCountyTable
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
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCityGroupActiveDebatesByOwnerResidentAreaCityGroup"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCityGroupActiveDebatesByOwnerResidentAreaCityGroupActiveDebatesInResidentCityLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCityGroupActiveDebatesByOwnerResidentAreaCityGroupActiveDebatesInResidentCityLabelWrapperActiveDebatesInResidentCity"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                      >
                                        <ActiveDebatesInResidentCityTable
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
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaDistrictGroupActiveDebatesByOwnerResidentAreaDistrictGroup"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaDistrictGroupActiveDebatesByOwnerResidentAreaDistrictGroupActiveDebatesInResidentDistrictLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaDistrictGroupActiveDebatesByOwnerResidentAreaDistrictGroupActiveDebatesInResidentDistrictLabelWrapperActiveDebatesInResidentDistrict"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                      >
                                        <ActiveDebatesInResidentDistrictTable
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
