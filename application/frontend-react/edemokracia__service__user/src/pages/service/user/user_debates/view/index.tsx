//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::service::User.userDebates#View
// Page owner name: edemokracia::service::User
// Page DataElement name: userDebates
// Page DataElement owner name: edemokracia::service::User

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
  ServiceDebate,
  ServiceDebateQueryCustomizer,
  ServiceDebateStored,
  ServiceUserDebates,
  ServiceUserDebatesQueryCustomizer,
  ServiceUserDebatesStored,
} from '~/generated/data-api';
import { serviceUserServiceForUserDebatesImpl, serviceUserDebatesServiceForClassImpl } from '~/generated/data-axios';
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

export type ServiceUserUserDebatesViewPostRefreshAction = (
  data: ServiceUserDebatesStored,
  storeDiff: (attributeName: keyof ServiceUserDebatesStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceUserDebates, string>>>,
) => Promise<void>;

export const SERVICE_USER_USER_DEBATES_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY =
  'ServiceUserUserDebatesViewPostRefreshHook';
export type ServiceUserUserDebatesViewPostRefreshHook = () => ServiceUserUserDebatesViewPostRefreshAction;

/**
 * Name: edemokracia::service::User.userDebates#View
 * Is Access: true
 * Is Dashboard: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function ServiceUserUserDebatesView() {
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
  const [data, setData] = useState<ServiceUserDebatesStored>({} as unknown as ServiceUserDebatesStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof ServiceUserDebatesStored, any>>(
    {} as unknown as Record<keyof ServiceUserDebatesStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof ServiceUserDebatesStored, value: any) => void = useCallback(
    (attributeName: keyof ServiceUserDebatesStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof ServiceUserDebates, string>>(
    new Map<keyof ServiceUserDebates, string>(),
  );

  const queryCustomizer: ServiceUserDebatesQueryCustomizer = {
    _mask:
      '{ownedDebates{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite},activeDebatesGlobal{title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite},activeDebatesInActivityCounties{countyRepresentation,title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite},activeDebatesInActivityCities{countyRepresentation,cityRepresentation,title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite},activeDebatesInActivityDistricts{countyRepresentation,cityRepresentation,districtRepresentation,title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite},activeDebatesInResidentCounty{countyRepresentation,title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite},activeDebatesInResidentCity{countyRepresentation,cityRepresentation,title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite},activeDebatesInResidentDistrict{countyRepresentation,cityRepresentation,districtRepresentation,title,issueTitle,closeAt,status,isNotClosed,isFavorite,isNotFavorite}}',
  };

  const { service: postRefreshHook } = useTrackService<ServiceUserUserDebatesViewPostRefreshHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_USER_DEBATES_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: ServiceUserUserDebatesViewPostRefreshAction | undefined =
    postRefreshHook && postRefreshHook();

  const title: string = t('service.UserDebatesView', { defaultValue: 'UserDebates View / Edit' });

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
      const res = await serviceUserServiceForUserDebatesImpl.getUserDebates('{}');

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
      const res = await serviceUserDebatesServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as ServiceUserDebatesStored,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof ServiceUserDebatesStored, any>);
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
                id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRoot"
                container
                direction="row"
                alignItems="flex-start"
                justifyContent="flex-start"
                spacing={2}
              >
                <Grid container item xs={12} sm={12}>
                  <ModeledTabs
                    id="TabControlleredemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBar"
                    ownerData={data}
                    validation={validation}
                    orientation='horizontal'
                    childTabs={[
                      {
                        id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarOwnedDebatesGroup',
                        name: 'service.UserDebatesView.OwnedDebatesGroup',
                        label: t('service.UserDebatesView.OwnedDebatesGroup', {
                          defaultValue: 'Owned  Debates',
                        }) as string,
                        disabled: isLoading,
                        hidden: false,
                        icon: 'account-box',
                        nestedDataKeys: ['ownedDebates'],
                      },
                      {
                        id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveGlobalDebatesGroup',
                        name: 'service.UserDebatesView.ActiveGlobalDebatesGroup',
                        label: t('service.UserDebatesView.ActiveGlobalDebatesGroup', {
                          defaultValue: 'Active Global Debates',
                        }) as string,
                        disabled: isLoading,
                        hidden: false,
                        icon: 'earth',
                        nestedDataKeys: ['activeDebatesGlobal'],
                      },
                      {
                        id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityArea',
                        name: 'service.UserDebatesView.ActiveDebatesByOwnerActivityArea',
                        label: t('service.UserDebatesView.ActiveDebatesByOwnerActivityArea', {
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
                        id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroup',
                        name: 'service.UserDebatesView.ActiveDebatesByOwnerResidentAreaGroup',
                        label: t('service.UserDebatesView.ActiveDebatesByOwnerResidentAreaGroup', {
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
                      <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarOwnedDebatesGroupOwnedDebatesGroup">
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
                                id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarOwnedDebatesGroupOwnedDebatesGroupOwnedDebatesLabelWrapper"
                                container
                                direction="column"
                                alignItems="stretch"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="TableedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarOwnedDebatesGroupOwnedDebatesGroupOwnedDebatesLabelWrapperOwnedDebates"
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
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveGlobalDebatesGroupActiveGlobalDebatesGroup">
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
                                id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveGlobalDebatesGroupActiveGlobalDebatesGroupActiveDebatesGlobalLabelWrapper"
                                container
                                direction="column"
                                alignItems="stretch"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="TableedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveGlobalDebatesGroupActiveGlobalDebatesGroupActiveDebatesGlobalLabelWrapperActiveDebatesGlobal"
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
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityArea">
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
                                id="TabControlleredemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBar"
                                ownerData={data}
                                validation={validation}
                                orientation='vertical'
                                childTabs={[
                                  {
                                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaCountyGroup',
                                    name: 'service.UserDebatesView.ActiveDebatesByOwnerActivityAreaCountyGroup',
                                    label: t('service.UserDebatesView.ActiveDebatesByOwnerActivityAreaCountyGroup', {
                                      defaultValue: 'County',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'castle',
                                    nestedDataKeys: ['activeDebatesInActivityCounties'],
                                  },
                                  {
                                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaCityGroup',
                                    name: 'service.UserDebatesView.ActiveDebatesByOwnerActivityAreaCityGroup',
                                    label: t('service.UserDebatesView.ActiveDebatesByOwnerActivityAreaCityGroup', {
                                      defaultValue: 'City',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'city',
                                    nestedDataKeys: ['activeDebatesInActivityCities'],
                                  },
                                  {
                                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaDistrictGroup',
                                    name: 'service.UserDebatesView.ActiveDebatesByOwnerActivityAreaDistrictGroup',
                                    label: t('service.UserDebatesView.ActiveDebatesByOwnerActivityAreaDistrictGroup', {
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
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaCountyGroupActiveDebatesByOwnerActivityAreaCountyGroup"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaCountyGroupActiveDebatesByOwnerActivityAreaCountyGroupActiveDebatesInActivityCountiesLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaCountyGroupActiveDebatesByOwnerActivityAreaCountyGroupActiveDebatesInActivityCountiesLabelWrapperActiveDebatesInActivityCounties"
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
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaCityGroupActiveDebatesByOwnerActivityAreaCityGroup"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaCityGroupActiveDebatesByOwnerActivityAreaCityGroupActiveDebatesInActivityCitiesLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaCityGroupActiveDebatesByOwnerActivityAreaCityGroupActiveDebatesInActivityCitiesLabelWrapperActiveDebatesInActivityCities"
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
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaDistrictGroupActiveDebatesByOwnerActivityAreaDistrictGroup"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaDistrictGroupActiveDebatesByOwnerActivityAreaDistrictGroupActiveDebatesInActivityDistrictsLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerActivityAreaActiveDebatesByOwnerActivityAreaTabBarActiveDebatesByOwnerActivityAreaDistrictGroupActiveDebatesByOwnerActivityAreaDistrictGroupActiveDebatesInActivityDistrictsLabelWrapperActiveDebatesInActivityDistricts"
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
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroup">
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
                                id="TabControlleredemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBar"
                                ownerData={data}
                                validation={validation}
                                orientation='vertical'
                                childTabs={[
                                  {
                                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroup',
                                    name: 'service.UserDebatesView.ActiveDebatesByOwnerResidentAreaCountyGroup',
                                    label: t('service.UserDebatesView.ActiveDebatesByOwnerResidentAreaCountyGroup', {
                                      defaultValue: 'County',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'castle',
                                    nestedDataKeys: ['activeDebatesInResidentCounty'],
                                  },
                                  {
                                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCityGroup',
                                    name: 'service.UserDebatesView.ActiveDebatesByOwnerResidentAreaCityGroup',
                                    label: t('service.UserDebatesView.ActiveDebatesByOwnerResidentAreaCityGroup', {
                                      defaultValue: 'City',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'city',
                                    nestedDataKeys: ['activeDebatesInResidentCity'],
                                  },
                                  {
                                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaDistrictGroup',
                                    name: 'service.UserDebatesView.ActiveDebatesByOwnerResidentAreaDistrictGroup',
                                    label: t('service.UserDebatesView.ActiveDebatesByOwnerResidentAreaDistrictGroup', {
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
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroup"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesInResidentCountyLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesByOwnerResidentAreaCountyGroupActiveDebatesInResidentCountyLabelWrapperActiveDebatesInResidentCounty"
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
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCityGroupActiveDebatesByOwnerResidentAreaCityGroup"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCityGroupActiveDebatesByOwnerResidentAreaCityGroupActiveDebatesInResidentCityLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaCityGroupActiveDebatesByOwnerResidentAreaCityGroupActiveDebatesInResidentCityLabelWrapperActiveDebatesInResidentCity"
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
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaDistrictGroupActiveDebatesByOwnerResidentAreaDistrictGroup"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaDistrictGroupActiveDebatesByOwnerResidentAreaDistrictGroupActiveDebatesInResidentDistrictLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaServiceUserEdemokraciaServiceUserUserDebatesViewDefaultUserDebatesViewEditRootTabBarActiveDebatesByOwnerResidentAreaGroupActiveDebatesByOwnerResidentAreaGroupTabBarActiveDebatesByOwnerResidentAreaDistrictGroupActiveDebatesByOwnerResidentAreaDistrictGroupActiveDebatesInResidentDistrictLabelWrapperActiveDebatesInResidentDistrict"
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
