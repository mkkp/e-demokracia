//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::service::User.userIssues#View
// Page owner name: edemokracia::service::User
// Page DataElement name: userIssues
// Page DataElement owner name: edemokracia::service::User

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
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceUserIssuesQueryCustomizer,
  ServiceUserIssuesStored,
} from '~/generated/data-api';
import { serviceUserServiceForUserIssuesImpl, serviceUserIssuesServiceForClassImpl } from '~/generated/data-axios';
import { useServiceUserIssuesCreateIssueAction } from './actions';

import { PageActions } from './components/PageActions';
import { ActiveIssuesGlobalTable } from './components/ActiveIssuesGlobalTable';
import { ActiveIssuesInActivityCitiesTable } from './components/ActiveIssuesInActivityCitiesTable';
import { ActiveIssuesInActivityCountiesTable } from './components/ActiveIssuesInActivityCountiesTable';
import { ActiveIssuesInActivityDistrictsTable } from './components/ActiveIssuesInActivityDistrictsTable';
import { ActiveIssuesInResidentCityTable } from './components/ActiveIssuesInResidentCityTable';
import { ActiveIssuesInResidentCountyTable } from './components/ActiveIssuesInResidentCountyTable';
import { ActiveIssuesInResidentDistrictTable } from './components/ActiveIssuesInResidentDistrictTable';
import { OwnedIssuesTable } from './components/OwnedIssuesTable';

export type ServiceUserUserIssuesViewPostRefreshAction = (
  data: ServiceUserIssuesStored,
  storeDiff: (attributeName: keyof ServiceUserIssuesStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceUserIssues, string>>>,
) => Promise<void>;

export const SERVICE_USER_USER_ISSUES_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY = 'ServiceUserUserIssuesViewPostRefreshHook';
export type ServiceUserUserIssuesViewPostRefreshHook = () => ServiceUserUserIssuesViewPostRefreshAction;

/**
 * Name: edemokracia::service::User.userIssues#View
 * Is Access: true
 * Is Dashboard: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function ServiceUserUserIssuesView() {
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
  const [data, setData] = useState<ServiceUserIssuesStored>({} as unknown as ServiceUserIssuesStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof ServiceUserIssuesStored, any>>(
    {} as unknown as Record<keyof ServiceUserIssuesStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof ServiceUserIssuesStored, value: any) => void = useCallback(
    (attributeName: keyof ServiceUserIssuesStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof ServiceUserIssues, string>>(
    new Map<keyof ServiceUserIssues, string>(),
  );

  const queryCustomizer: ServiceUserIssuesQueryCustomizer = {
    _mask:
      '{userName,ownedIssues{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,created,status,isFavorite,isNotFavorite,isIssueActive,isIssueNotActive,isVoteClosable,isVoteNotClosable,isIssueDraft,isIssueNotDraft,isIssueDeletable,isIssueNotDeletable},activeIssuesGlobal{title,created,status,isFavorite,isNotFavorite,isIssueActive,isIssueNotActive,isVoteClosable,isVoteNotClosable,isIssueDraft,isIssueNotDraft,isIssueDeletable,isIssueNotDeletable},activeIssuesInActivityCounties{countyRepresentation,title,created,status,isFavorite,isNotFavorite,isIssueActive,isIssueNotActive,isVoteClosable,isVoteNotClosable,isIssueDraft,isIssueNotDraft,isIssueDeletable,isIssueNotDeletable},activeIssuesInActivityCities{countyRepresentation,cityRepresentation,title,created,status,isFavorite,isNotFavorite,isIssueActive,isIssueNotActive,isVoteClosable,isVoteNotClosable,isIssueDraft,isIssueNotDraft,isIssueDeletable,isIssueNotDeletable},activeIssuesInActivityDistricts{countyRepresentation,cityRepresentation,districtRepresentation,title,created,status,isFavorite,isNotFavorite,isIssueActive,isIssueNotActive,isVoteClosable,isVoteNotClosable,isIssueDraft,isIssueNotDraft,isIssueDeletable,isIssueNotDeletable},activeIssuesInResidentCounty{title,created,status,isFavorite,isNotFavorite,isIssueActive,isIssueNotActive,isVoteClosable,isVoteNotClosable,isIssueDraft,isIssueNotDraft,isIssueDeletable,isIssueNotDeletable},activeIssuesInResidentCity{countyRepresentation,cityRepresentation,title,created,status,isFavorite,isNotFavorite,isIssueActive,isIssueNotActive,isVoteClosable,isVoteNotClosable,isIssueDraft,isIssueNotDraft,isIssueDeletable,isIssueNotDeletable},activeIssuesInResidentDistrict{countyRepresentation,cityRepresentation,districtRepresentation,title,created,status,isFavorite,isNotFavorite,isIssueActive,isIssueNotActive,isVoteClosable,isVoteNotClosable,isIssueDraft,isIssueNotDraft,isIssueDeletable,isIssueNotDeletable}}',
  };

  const { service: postRefreshHook } = useTrackService<ServiceUserUserIssuesViewPostRefreshHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_USER_ISSUES_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: ServiceUserUserIssuesViewPostRefreshAction | undefined =
    postRefreshHook && postRefreshHook();

  const serviceUserIssuesCreateIssueAction = useServiceUserIssuesCreateIssueAction();

  const title: string = t('service.UserIssuesView', { defaultValue: 'UserIssues View / Edit' });

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
      const res = await serviceUserServiceForUserIssuesImpl.getUserIssues('{}');

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
      const res = await serviceUserIssuesServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as ServiceUserIssuesStored,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof ServiceUserIssuesStored, any>);
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
                id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRoot"
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
                        id="ButtonedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootActionGroupCreateIssue"
                        loading={isLoading}
                        startIcon={<MdiIcon path="wechat" />}
                        loadingPosition="start"
                        onClick={async () => {
                          try {
                            setIsLoading(true);
                            await serviceUserIssuesCreateIssueAction(() => fetchData());
                          } finally {
                            setIsLoading(false);
                          }
                        }}
                        disabled={editMode}
                      >
                        <span>
                          {t('service.UserIssuesView.actionGroup.createIssue', { defaultValue: 'Create issue' })}
                        </span>
                      </LoadingButton>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container item xs={12} sm={12}>
                  <ModeledTabs
                    id="TabControlleredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBar"
                    ownerData={data}
                    validation={validation}
                    orientation='horizontal'
                    childTabs={[
                      {
                        id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarOwnedIssuesGroup',
                        name: 'service.UserIssuesView.ownedIssuesGroup',
                        label: t('service.UserIssuesView.ownedIssuesGroup', { defaultValue: 'Owned issues' }) as string,
                        disabled: isLoading,
                        hidden: false,
                        icon: 'account-box',
                        nestedDataKeys: ['ownedIssues'],
                      },
                      {
                        id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssues',
                        name: 'service.UserIssuesView.activeGlobalIssues',
                        label: t('service.UserIssuesView.activeGlobalIssues', {
                          defaultValue: 'Active global issues',
                        }) as string,
                        disabled: isLoading,
                        hidden: false,
                        icon: 'earth',
                        nestedDataKeys: ['activeIssuesGlobal'],
                      },
                      {
                        id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityArea',
                        name: 'service.UserIssuesView.activeIssuesByActivityArea',
                        label: t('service.UserIssuesView.activeIssuesByActivityArea', {
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
                        id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentArea',
                        name: 'service.UserIssuesView.activeIssuesByResidentArea',
                        label: t('service.UserIssuesView.activeIssuesByResidentArea', {
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
                      <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarOwnedIssuesGroupOwnedIssuesGroup">
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
                                id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarOwnedIssuesGroupOwnedIssuesGroupOwnedIssuesLabelWrapper"
                                container
                                direction="column"
                                alignItems="stretch"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="TableedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarOwnedIssuesGroupOwnedIssuesGroupOwnedIssuesLabelWrapperOwnedIssues"
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
                      <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssues">
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
                                id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapper"
                                container
                                direction="column"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                                    <Typography
                                      id="LabeledemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobalLabel"
                                      variant="h5"
                                      component="h1"
                                    >
                                      {t('service.UserIssuesView.activeGlobal.Label', { defaultValue: 'Global' })}
                                    </Typography>
                                  </Grid>
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobal"
                                    container
                                    direction="row"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobalActiveIssuesGlobalLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobalActiveIssuesGlobalLabelWrapperActiveIssuesGlobal"
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
                      <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityArea">
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
                                id="TabControlleredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBar"
                                ownerData={data}
                                validation={validation}
                                orientation='vertical'
                                childTabs={[
                                  {
                                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCounty',
                                    name: 'service.UserIssuesView.activeByActivityInCounty',
                                    label: t('service.UserIssuesView.activeByActivityInCounty', {
                                      defaultValue: 'County',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'castle',
                                    nestedDataKeys: ['activeIssuesInActivityCounties'],
                                  },
                                  {
                                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCity',
                                    name: 'service.UserIssuesView.activeByActivityInCity',
                                    label: t('service.UserIssuesView.activeByActivityInCity', {
                                      defaultValue: 'City',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'city',
                                    nestedDataKeys: ['activeIssuesInActivityCities'],
                                  },
                                  {
                                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInDistrict',
                                    name: 'service.UserIssuesView.activeByActivityInDistrict',
                                    label: t('service.UserIssuesView.activeByActivityInDistrict', {
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
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCounty"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapperActiveIssuesInActivityCounties"
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
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCityActiveByActivityInCity"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCityActiveByActivityInCityActiveIssuesInActivityCitiesLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCityActiveByActivityInCityActiveIssuesInActivityCitiesLabelWrapperActiveIssuesInActivityCities"
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
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInDistrictActiveByActivityInDistrict"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInDistrictActiveByActivityInDistrictActiveIssuesInActivityDistrictsLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInDistrictActiveByActivityInDistrictActiveIssuesInActivityDistrictsLabelWrapperActiveIssuesInActivityDistricts"
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
                      <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentArea">
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
                                id="TabControlleredemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBar"
                                ownerData={data}
                                validation={validation}
                                orientation='vertical'
                                childTabs={[
                                  {
                                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCounty',
                                    name: 'service.UserIssuesView.activeByResidentInCounty',
                                    label: t('service.UserIssuesView.activeByResidentInCounty', {
                                      defaultValue: 'County',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'castle',
                                    nestedDataKeys: ['activeIssuesInResidentCounty'],
                                  },
                                  {
                                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCity',
                                    name: 'service.UserIssuesView.activeByResidentInCity',
                                    label: t('service.UserIssuesView.activeByResidentInCity', {
                                      defaultValue: 'City',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'city',
                                    nestedDataKeys: ['activeIssuesInResidentCity'],
                                  },
                                  {
                                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInDistrict',
                                    name: 'service.UserIssuesView.activeByResidentInDistrict',
                                    label: t('service.UserIssuesView.activeByResidentInDistrict', {
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
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCounty"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapperActiveIssuesInResidentCounty"
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
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCityActiveByResidentInCity"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCityActiveByResidentInCityActiveIssuesInResidentCityLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCityActiveByResidentInCityActiveIssuesInResidentCityLabelWrapperActiveIssuesInResidentCity"
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
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInDistrictActiveByResidentInDistrict"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInDistrictActiveByResidentInDistrictActiveIssuesInResidentDistrictLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaServiceUserEdemokraciaServiceUserUserIssuesViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInDistrictActiveByResidentInDistrictActiveIssuesInResidentDistrictLabelWrapperActiveIssuesInResidentDistrict"
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
