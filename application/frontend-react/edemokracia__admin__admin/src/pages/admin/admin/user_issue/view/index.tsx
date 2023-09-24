//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Admin.userIssue#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: userIssue
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
import { adminAdminServiceForUserIssueImpl, adminUserIssuesServiceForClassImpl } from '~/generated/data-axios';
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

export type AdminAdminUserIssueViewPostRefreshAction = (
  data: AdminUserIssuesStored,
  storeDiff: (attributeName: keyof AdminUserIssuesStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof AdminUserIssues, string>>>,
) => Promise<void>;

export const ADMIN_ADMIN_USER_ISSUE_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY = 'AdminAdminUserIssueViewPostRefreshHook';
export type AdminAdminUserIssueViewPostRefreshHook = () => AdminAdminUserIssueViewPostRefreshAction;

/**
 * Name: edemokracia::admin::Admin.userIssue#View
 * Is Access: true
 * Is Dashboard: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminAdminUserIssueView() {
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
      '{userName,ownedIssues{scope,title,created,numberOfDebates,status},activeIssuesGlobal{scope,title,created,numberOfDebates,status},activeIssuesInActivityCounties{scope,title,created,numberOfDebates,status},activeIssuesInActivityCities{scope,title,created,numberOfDebates,status},activeIssuesInActivityDistricts{scope,title,created,numberOfDebates,status},activeIssuesInResidentCounty{scope,title,created,numberOfDebates,status},activeIssuesInResidentCity{scope,title,created,numberOfDebates,status},activeIssuesInResidentDistrict{scope,title,created,numberOfDebates,status}}',
  };

  const { service: postRefreshHook } = useTrackService<AdminAdminUserIssueViewPostRefreshHook>(
    `(${OBJECTCLASS}=${ADMIN_ADMIN_USER_ISSUE_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: AdminAdminUserIssueViewPostRefreshAction | undefined = postRefreshHook && postRefreshHook();

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
      const res = await adminAdminServiceForUserIssueImpl.getUserIssue('{}');

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
                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRoot"
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
                        id="ButtonedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootActionGroupCreateIssue"
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
                    id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBar"
                    ownerData={data}
                    validation={validation}
                    orientation='horizontal'
                    childTabs={[
                      {
                        id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarOwnedIssuesGroup',
                        name: 'admin.UserIssuesView.ownedIssuesGroup',
                        label: t('admin.UserIssuesView.ownedIssuesGroup', { defaultValue: 'Owned issues' }) as string,
                        disabled: isLoading,
                        hidden: false,
                        nestedDataKeys: ['ownedIssues'],
                      },
                      {
                        id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssues',
                        name: 'admin.UserIssuesView.activeGlobalIssues',
                        label: t('admin.UserIssuesView.activeGlobalIssues', {
                          defaultValue: 'Active global issues',
                        }) as string,
                        disabled: isLoading,
                        hidden: false,
                        nestedDataKeys: ['activeIssuesGlobal'],
                      },
                      {
                        id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityArea',
                        name: 'admin.UserIssuesView.activeIssuesByActivityArea',
                        label: t('admin.UserIssuesView.activeIssuesByActivityArea', {
                          defaultValue: 'Active issues by my activity areas',
                        }) as string,
                        disabled: isLoading,
                        hidden: false,
                        nestedDataKeys: [
                          'activeIssuesInActivityCities',
                          'activeIssuesInActivityCounties',
                          'activeIssuesInActivityDistricts',
                        ],
                      },
                      {
                        id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentArea',
                        name: 'admin.UserIssuesView.activeIssuesByResidentArea',
                        label: t('admin.UserIssuesView.activeIssuesByResidentArea', {
                          defaultValue: 'Active issues by my resident area',
                        }) as string,
                        disabled: isLoading,
                        hidden: false,
                        nestedDataKeys: [
                          'activeIssuesInResidentCity',
                          'activeIssuesInResidentCounty',
                          'activeIssuesInResidentDistrict',
                        ],
                      },
                    ]}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarOwnedIssuesGroupOwnedIssuesGroup"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarOwnedIssuesGroupOwnedIssuesGroupOwnedIssuesLabelWrapper"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarOwnedIssuesGroupOwnedIssuesGroupOwnedIssuesLabelWrapperOwnedIssues"
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
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssues"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapper"
                            container
                            direction="column"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                                <Typography
                                  id="LabeledemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobalLabel"
                                  variant="h5"
                                  component="h1"
                                >
                                  {t('admin.UserIssuesView.activeGlobal.Label', { defaultValue: 'Global' })}
                                </Typography>
                              </Grid>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobal"
                                container
                                direction="row"
                                alignItems="stretch"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobalActiveIssuesGlobalLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveGlobalIssuesActiveGlobalIssuesActiveGlobalLabelWrapperActiveGlobalActiveIssuesGlobalLabelWrapperActiveIssuesGlobal"
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
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityArea"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid container item xs={12} sm={12}>
                          <ModeledTabs
                            id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBar"
                            ownerData={data}
                            validation={validation}
                            orientation='vertical'
                            childTabs={[
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCounty',
                                name: 'admin.UserIssuesView.activeByActivityInCounty',
                                label: t('admin.UserIssuesView.activeByActivityInCounty', {
                                  defaultValue: 'County',
                                }) as string,
                                disabled: isLoading,
                                hidden: false,
                                nestedDataKeys: ['activeIssuesInActivityCounties'],
                              },
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCity',
                                name: 'admin.UserIssuesView.activeByActivityInCity',
                                label: t('admin.UserIssuesView.activeByActivityInCity', {
                                  defaultValue: 'City',
                                }) as string,
                                disabled: isLoading,
                                hidden: false,
                                nestedDataKeys: ['activeIssuesInActivityCities'],
                              },
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInDistrict',
                                name: 'admin.UserIssuesView.activeByActivityInDistrict',
                                label: t('admin.UserIssuesView.activeByActivityInDistrict', {
                                  defaultValue: 'District',
                                }) as string,
                                disabled: isLoading,
                                hidden: false,
                                nestedDataKeys: ['activeIssuesInActivityDistricts'],
                              },
                            ]}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCounty"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCountyActiveByActivityInCountyActiveIssuesInActivityCountiesLabelWrapperActiveIssuesInActivityCounties"
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
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCityActiveByActivityInCity"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCityActiveByActivityInCityActiveIssuesInActivityCitiesLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInCityActiveByActivityInCityActiveIssuesInActivityCitiesLabelWrapperActiveIssuesInActivityCities"
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
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInDistrictActiveByActivityInDistrict"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInDistrictActiveByActivityInDistrictActiveIssuesInActivityDistrictsLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByActivityAreaActiveIssuesByActivityAreaTabBarActiveByActivityInDistrictActiveByActivityInDistrictActiveIssuesInActivityDistrictsLabelWrapperActiveIssuesInActivityDistricts"
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
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentArea"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid container item xs={12} sm={12}>
                          <ModeledTabs
                            id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBar"
                            ownerData={data}
                            validation={validation}
                            orientation='vertical'
                            childTabs={[
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCounty',
                                name: 'admin.UserIssuesView.activeByResidentInCounty',
                                label: t('admin.UserIssuesView.activeByResidentInCounty', {
                                  defaultValue: 'County',
                                }) as string,
                                disabled: isLoading,
                                hidden: false,
                                nestedDataKeys: ['activeIssuesInResidentCounty'],
                              },
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCity',
                                name: 'admin.UserIssuesView.activeByResidentInCity',
                                label: t('admin.UserIssuesView.activeByResidentInCity', {
                                  defaultValue: 'City',
                                }) as string,
                                disabled: isLoading,
                                hidden: false,
                                nestedDataKeys: ['activeIssuesInResidentCity'],
                              },
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInDistrict',
                                name: 'admin.UserIssuesView.activeByResidentInDistrict',
                                label: t('admin.UserIssuesView.activeByResidentInDistrict', {
                                  defaultValue: 'District',
                                }) as string,
                                disabled: isLoading,
                                hidden: false,
                                nestedDataKeys: ['activeIssuesInResidentDistrict'],
                              },
                            ]}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCounty"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCountyActiveByResidentInCountyActiveIssuesInResidentCountyLabelWrapperActiveIssuesInResidentCounty"
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
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCityActiveByResidentInCity"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCityActiveByResidentInCityActiveIssuesInResidentCityLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInCityActiveByResidentInCityActiveIssuesInResidentCityLabelWrapperActiveIssuesInResidentCity"
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
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInDistrictActiveByResidentInDistrict"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInDistrictActiveByResidentInDistrictActiveIssuesInResidentDistrictLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminAdminUserIssueViewDefaultUserIssuesViewEditRootTabBarActiveIssuesByResidentAreaActiveIssuesByResidentAreaTabBarActiveByResidentInDistrictActiveByResidentInDistrictActiveIssuesInResidentDistrictLabelWrapperActiveIssuesInResidentDistrict"
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
