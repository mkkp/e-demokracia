//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Admin.userVoteDefinitions#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: userVoteDefinitions
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
  AdminUserVoteDefinition,
  AdminUserVoteDefinitionQueryCustomizer,
  AdminUserVoteDefinitionStored,
  AdminVoteDefinition,
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
} from '~/generated/data-api';
import {
  adminAdminServiceForUserVoteDefinitionsImpl,
  adminUserVoteDefinitionServiceForClassImpl,
} from '~/generated/data-axios';
import {} from './actions';

import { PageActions } from './components/PageActions';
import { ActiveVoteDefinitionsGlobalTable } from './components/ActiveVoteDefinitionsGlobalTable';
import { ActiveVoteDefinitionsInActivityCitiesTable } from './components/ActiveVoteDefinitionsInActivityCitiesTable';
import { ActiveVoteDefinitionsInActivityCountiesTable } from './components/ActiveVoteDefinitionsInActivityCountiesTable';
import { ActiveVoteDefinitionsInActivityDistrictsTable } from './components/ActiveVoteDefinitionsInActivityDistrictsTable';
import { ActiveVoteDefinitionsInResidentCityTable } from './components/ActiveVoteDefinitionsInResidentCityTable';
import { ActiveVoteDefinitionsInResidentCountyTable } from './components/ActiveVoteDefinitionsInResidentCountyTable';
import { ActiveVoteDefinitionsInResidentDistrictTable } from './components/ActiveVoteDefinitionsInResidentDistrictTable';
import { OwnedVoteDefinitionsTable } from './components/OwnedVoteDefinitionsTable';

export type AdminAdminUserVoteDefinitionsViewPostRefreshAction = (
  data: AdminUserVoteDefinitionStored,
  storeDiff: (attributeName: keyof AdminUserVoteDefinitionStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof AdminUserVoteDefinition, string>>>,
) => Promise<void>;

export const ADMIN_ADMIN_USER_VOTE_DEFINITIONS_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY =
  'AdminAdminUserVoteDefinitionsViewPostRefreshHook';
export type AdminAdminUserVoteDefinitionsViewPostRefreshHook = () => AdminAdminUserVoteDefinitionsViewPostRefreshAction;

/**
 * Name: edemokracia::admin::Admin.userVoteDefinitions#View
 * Is Access: true
 * Is Dashboard: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminAdminUserVoteDefinitionsView() {
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
  const [data, setData] = useState<AdminUserVoteDefinitionStored>({} as unknown as AdminUserVoteDefinitionStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminUserVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof AdminUserVoteDefinitionStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminUserVoteDefinitionStored, value: any) => void = useCallback(
    (attributeName: keyof AdminUserVoteDefinitionStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof AdminUserVoteDefinition, string>>(
    new Map<keyof AdminUserVoteDefinition, string>(),
  );

  const queryCustomizer: AdminUserVoteDefinitionQueryCustomizer = {
    _mask:
      '{ownedVoteDefinitions{scope,title,voteType,countyRepresentation,cityRepresentation,districtRepresentation,numberOfVotes,created,closeAt,status,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType},activeVoteDefinitionsGlobal{scope,title,voteType,numberOfVotes,created,closeAt,status,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType},activeVoteDefinitionsInActivityCounties{countyRepresentation,title,voteType,numberOfVotes,created,closeAt,status,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType},activeVoteDefinitionsInActivityCities{countyRepresentation,cityRepresentation,title,voteType,numberOfVotes,created,closeAt,scope,status,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType},activeVoteDefinitionsInActivityDistricts{countyRepresentation,cityRepresentation,districtRepresentation,title,voteType,numberOfVotes,created,closeAt,status,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType},activeVoteDefinitionsInResidentCounty{countyRepresentation,title,voteType,numberOfVotes,created,closeAt,status,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType},activeVoteDefinitionsInResidentCity{countyRepresentation,cityRepresentation,title,voteType,numberOfVotes,created,closeAt,status,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType},activeVoteDefinitionsInResidentDistrict{countyRepresentation,cityRepresentation,districtRepresentation,title,voteType,numberOfVotes,created,closeAt,status,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType}}',
  };

  const { service: postRefreshHook } = useTrackService<AdminAdminUserVoteDefinitionsViewPostRefreshHook>(
    `(${OBJECTCLASS}=${ADMIN_ADMIN_USER_VOTE_DEFINITIONS_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: AdminAdminUserVoteDefinitionsViewPostRefreshAction | undefined =
    postRefreshHook && postRefreshHook();

  const title: string = t('admin.UserVoteDefinitionView', { defaultValue: 'UserVoteDefinition View / Edit' });

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
      const res = await adminAdminServiceForUserVoteDefinitionsImpl.getUserVoteDefinitions('{}');

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
      const res = await adminUserVoteDefinitionServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as AdminUserVoteDefinitionStored,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminUserVoteDefinitionStored, any>);
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
                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRoot"
                container
                direction="row"
                alignItems="flex-start"
                justifyContent="flex-start"
                spacing={2}
              >
                <Grid container item xs={12} sm={12}>
                  <ModeledTabs
                    id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBar"
                    ownerData={data}
                    validation={validation}
                    orientation='horizontal'
                    childTabs={[
                      {
                        id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarOwnedVoteDefinitionsGroup',
                        name: 'admin.UserVoteDefinitionView.OwnedVoteDefinitionsGroup',
                        label: t('admin.UserVoteDefinitionView.OwnedVoteDefinitionsGroup', {
                          defaultValue: 'Owned Votes',
                        }) as string,
                        disabled: isLoading,
                        hidden: false,
                        icon: 'account-box',
                        nestedDataKeys: ['ownedVoteDefinitions'],
                      },
                      {
                        id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveGlobalVoteDefinitionsGroup',
                        name: 'admin.UserVoteDefinitionView.ActiveGlobalVoteDefinitionsGroup',
                        label: t('admin.UserVoteDefinitionView.ActiveGlobalVoteDefinitionsGroup', {
                          defaultValue: 'Active Global Votes',
                        }) as string,
                        disabled: isLoading,
                        hidden: false,
                        icon: 'earth',
                        nestedDataKeys: ['activeVoteDefinitionsGlobal'],
                      },
                      {
                        id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityArea',
                        name: 'admin.UserVoteDefinitionView.ActiveVoteDefinitionsByOwnerActivityArea',
                        label: t('admin.UserVoteDefinitionView.ActiveVoteDefinitionsByOwnerActivityArea', {
                          defaultValue: 'Active votes bv my activity areas',
                        }) as string,
                        disabled: isLoading,
                        hidden: false,
                        icon: 'map-search',
                        nestedDataKeys: [
                          'activeVoteDefinitionsInActivityCities',
                          'activeVoteDefinitionsInActivityCounties',
                          'activeVoteDefinitionsInActivityDistricts',
                        ],
                      },
                      {
                        id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroup',
                        name: 'admin.UserVoteDefinitionView.ActiveVoteDefinitionsByOwnerResidentAreaGroup',
                        label: t('admin.UserVoteDefinitionView.ActiveVoteDefinitionsByOwnerResidentAreaGroup', {
                          defaultValue: 'Active votes by my resident area',
                        }) as string,
                        disabled: isLoading,
                        hidden: false,
                        icon: 'castle',
                        nestedDataKeys: [
                          'activeVoteDefinitionsInResidentCity',
                          'activeVoteDefinitionsInResidentCounty',
                          'activeVoteDefinitionsInResidentDistrict',
                        ],
                      },
                    ]}
                  >
                    <Grid item xs={12} sm={12}>
                      <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsGroup">
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
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsGroupOwnedVoteDefinitionsLabelWrapper"
                                container
                                direction="column"
                                alignItems="stretch"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsGroupOwnedVoteDefinitionsLabelWrapperOwnedVoteDefinitions"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                  >
                                    <OwnedVoteDefinitionsTable
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
                      <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveGlobalVoteDefinitionsGroupActiveGlobalVoteDefinitionsGroup">
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
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveGlobalVoteDefinitionsGroupActiveGlobalVoteDefinitionsGroupActiveVoteDefinitionsGlobalLabelWrapper"
                                container
                                direction="column"
                                alignItems="stretch"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveGlobalVoteDefinitionsGroupActiveGlobalVoteDefinitionsGroupActiveVoteDefinitionsGlobalLabelWrapperActiveVoteDefinitionsGlobal"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                  >
                                    <ActiveVoteDefinitionsGlobalTable
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
                      <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityArea">
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
                                id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBar"
                                ownerData={data}
                                validation={validation}
                                orientation='vertical'
                                childTabs={[
                                  {
                                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroup',
                                    name: 'admin.UserVoteDefinitionView.ActiveVoteDefinitionsInActivityCountiesGroup',
                                    label: t(
                                      'admin.UserVoteDefinitionView.ActiveVoteDefinitionsInActivityCountiesGroup',
                                      { defaultValue: 'County' },
                                    ) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'castle',
                                    nestedDataKeys: ['activeVoteDefinitionsInActivityCounties'],
                                  },
                                  {
                                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroup',
                                    name: 'admin.UserVoteDefinitionView.ActiveVoteDefinitionsInActivityCityGroup',
                                    label: t('admin.UserVoteDefinitionView.ActiveVoteDefinitionsInActivityCityGroup', {
                                      defaultValue: 'City',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'city',
                                    nestedDataKeys: ['activeVoteDefinitionsInActivityCities'],
                                  },
                                  {
                                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityDistrictGroup',
                                    name: 'admin.UserVoteDefinitionView.ActiveVoteDefinitionsInActivityDistrictGroup',
                                    label: t(
                                      'admin.UserVoteDefinitionView.ActiveVoteDefinitionsInActivityDistrictGroup',
                                      { defaultValue: 'District' },
                                    ) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'home-city',
                                    nestedDataKeys: ['activeVoteDefinitionsInActivityDistricts'],
                                  },
                                ]}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesGroup"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesGroupActiveVoteDefinitionsInActivityCountiesLabelWrapperActiveVoteDefinitionsInActivityCounties"
                                            container
                                            direction="column"
                                            alignItems="stretch"
                                            justifyContent="flex-start"
                                          >
                                            <ActiveVoteDefinitionsInActivityCountiesTable
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
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroup"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCityGroupActiveVoteDefinitionsInActivityCitiesLabelWrapperActiveVoteDefinitionsInActivityCities"
                                            container
                                            direction="column"
                                            alignItems="stretch"
                                            justifyContent="flex-start"
                                          >
                                            <ActiveVoteDefinitionsInActivityCitiesTable
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
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityDistrictGroupActiveVoteDefinitionsInActivityDistrictGroup"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityDistrictGroupActiveVoteDefinitionsInActivityDistrictGroupActiveVoteDefinitionsInActivityDistrictsLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerActivityAreaActiveVoteDefinitionsByOwnerActivityAreaTabBarActiveVoteDefinitionsInActivityDistrictGroupActiveVoteDefinitionsInActivityDistrictGroupActiveVoteDefinitionsInActivityDistrictsLabelWrapperActiveVoteDefinitionsInActivityDistricts"
                                            container
                                            direction="column"
                                            alignItems="stretch"
                                            justifyContent="flex-start"
                                          >
                                            <ActiveVoteDefinitionsInActivityDistrictsTable
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
                      <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupActiveVoteDefinitionsByOwnerResidentAreaGroup">
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
                                id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupActiveVoteDefinitionsByOwnerResidentAreaGroupTabBar"
                                ownerData={data}
                                validation={validation}
                                orientation='vertical'
                                childTabs={[
                                  {
                                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentCountyGroup',
                                    name: 'admin.UserVoteDefinitionView.ActiveDebatesInResidentCountyGroup',
                                    label: t('admin.UserVoteDefinitionView.ActiveDebatesInResidentCountyGroup', {
                                      defaultValue: 'County',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'castle',
                                    nestedDataKeys: ['activeVoteDefinitionsInResidentCounty'],
                                  },
                                  {
                                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentCityGroup',
                                    name: 'admin.UserVoteDefinitionView.ActiveDebatesInResidentCityGroup',
                                    label: t('admin.UserVoteDefinitionView.ActiveDebatesInResidentCityGroup', {
                                      defaultValue: 'City',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'city',
                                    nestedDataKeys: ['activeVoteDefinitionsInResidentCity'],
                                  },
                                  {
                                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentDistrictGroup',
                                    name: 'admin.UserVoteDefinitionView.ActiveDebatesInResidentDistrictGroup',
                                    label: t('admin.UserVoteDefinitionView.ActiveDebatesInResidentDistrictGroup', {
                                      defaultValue: 'District',
                                    }) as string,
                                    disabled: isLoading,
                                    hidden: false,
                                    icon: 'home-city',
                                    nestedDataKeys: ['activeVoteDefinitionsInResidentDistrict'],
                                  },
                                ]}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentCountyGroupActiveDebatesInResidentCountyGroup"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentCountyGroupActiveDebatesInResidentCountyGroupActiveVoteDefinitionsInResidentCountyLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentCountyGroupActiveDebatesInResidentCountyGroupActiveVoteDefinitionsInResidentCountyLabelWrapperActiveVoteDefinitionsInResidentCounty"
                                            container
                                            direction="column"
                                            alignItems="stretch"
                                            justifyContent="flex-start"
                                          >
                                            <ActiveVoteDefinitionsInResidentCountyTable
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
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentCityGroupActiveDebatesInResidentCityGroup"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentCityGroupActiveDebatesInResidentCityGroupActiveVoteDefinitionsInResidentCityLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentCityGroupActiveDebatesInResidentCityGroupActiveVoteDefinitionsInResidentCityLabelWrapperActiveVoteDefinitionsInResidentCity"
                                            container
                                            direction="column"
                                            alignItems="stretch"
                                            justifyContent="flex-start"
                                          >
                                            <ActiveVoteDefinitionsInResidentCityTable
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
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentDistrictGroupActiveDebatesInResidentDistrictGroup"
                                    container
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentDistrictGroupActiveDebatesInResidentDistrictGroupActiveVoteDefinitionsInResidentDistrictLabelWrapper"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                        spacing={2}
                                      >
                                        <Grid item xs={12} sm={12}>
                                          <Grid
                                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserVoteDefinitionsViewDefaultUserVoteDefinitionViewEditRootTabBarActiveVoteDefinitionsByOwnerResidentAreaGroupActiveVoteDefinitionsByOwnerResidentAreaGroupTabBarActiveDebatesInResidentDistrictGroupActiveDebatesInResidentDistrictGroupActiveVoteDefinitionsInResidentDistrictLabelWrapperActiveVoteDefinitionsInResidentDistrict"
                                            container
                                            direction="column"
                                            alignItems="stretch"
                                            justifyContent="flex-start"
                                          >
                                            <ActiveVoteDefinitionsInResidentDistrictTable
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
