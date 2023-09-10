//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Admin.dashboardhome#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: dashboardhome
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
import { toastConfig, dividerHeight } from '~/config';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, CustomFormVisualElementProps } from '~/custom';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { mainContainerPadding } from '~/theme';
import { PageContainerTransition } from '~/theme/animations';
import { clsx } from 'clsx';

import {
  AdminDashboard,
  AdminDashboardQueryCustomizer,
  AdminDashboardStored,
  AdminDebate,
  AdminDebateQueryCustomizer,
  AdminDebateStored,
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminVoteEntry,
  AdminVoteEntryQueryCustomizer,
  AdminVoteEntryStored,
} from '~/generated/data-api';
import { adminAdminServiceForDashboardhomeImpl, adminDashboardServiceForClassImpl } from '~/generated/data-axios';
import { useAdminDashboardCreateIssueAction, useAdminDashboardCreateUserAction } from './actions';

import { PageActions } from './components/PageActions';
import { DebatesTable } from './components/DebatesTable';
import { IssuesTable } from './components/IssuesTable';
import { VoteEntriesTable } from './components/VoteEntriesTable';

export type AdminAdminDashboardhomeViewPostRefreshAction = (
  data: AdminDashboardStored,
  storeDiff: (attributeName: keyof AdminDashboardStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof AdminDashboard, string>>>,
) => Promise<void>;

export const ADMIN_ADMIN_DASHBOARDHOME_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY =
  'AdminAdminDashboardhomeViewPostRefreshHook';
export type AdminAdminDashboardhomeViewPostRefreshHook = () => AdminAdminDashboardhomeViewPostRefreshAction;

/**
 * Name: edemokracia::admin::Admin.dashboardhome#View
 * Is Access: true
 * Is Dashboard: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminAdminDashboardhomeView() {
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
  const [data, setData] = useState<AdminDashboardStored>({} as unknown as AdminDashboardStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminDashboardStored, any>>(
    {} as unknown as Record<keyof AdminDashboardStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminDashboardStored, value: any) => void = useCallback(
    (attributeName: keyof AdminDashboardStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof AdminDashboard, string>>(
    new Map<keyof AdminDashboard, string>(),
  );

  const queryCustomizer: AdminDashboardQueryCustomizer = {
    _mask:
      '{welcome,issues{title,created,status,numberOfDebates},debates{title,issueTitle,closeAt,status},voteEntries{created,issueTitle,debateTitle,voteTitle,voteStatus}}',
  };

  const { service: postRefreshHook } = useTrackService<AdminAdminDashboardhomeViewPostRefreshHook>(
    `(${OBJECTCLASS}=${ADMIN_ADMIN_DASHBOARDHOME_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: AdminAdminDashboardhomeViewPostRefreshAction | undefined =
    postRefreshHook && postRefreshHook();

  const adminDashboardCreateIssueAction = useAdminDashboardCreateIssueAction();
  const adminDashboardCreateUserAction = useAdminDashboardCreateUserAction();

  const title: string = t('admin.DashboardView', { defaultValue: 'Dashboard View / Edit' });

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
      const res = await adminAdminServiceForDashboardhomeImpl.getDashboardhome('{}');

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
      const res = await adminDashboardServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as AdminDashboardStored,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminDashboardStored, any>);
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
      <Container component="main" maxWidth="xl">
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
                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <Typography id="FormattededemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewDefaultDashboardViewEditWelcome">
                      {data.welcome}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item>
                    <LoadingButton
                      id="ButtonedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewDefaultDashboardViewEditActionGroupCreateIssue"
                      loading={isLoading}
                      startIcon={<MdiIcon path="ticket-confirmation" />}
                      loadingPosition="start"
                      onClick={async () => {
                        try {
                          setIsLoading(true);
                          await adminDashboardCreateIssueAction(() => fetchData());
                        } finally {
                          setIsLoading(false);
                        }
                      }}
                      disabled={editMode}
                    >
                      <span>{t('admin.DashboardView.actionGroup.createIssue', { defaultValue: 'Create issue' })}</span>
                    </LoadingButton>
                  </Grid>

                  <Grid item>
                    <LoadingButton
                      id="ButtonedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewDefaultDashboardViewEditActionGroupCreateUser"
                      loading={isLoading}
                      startIcon={<MdiIcon path="account" />}
                      loadingPosition="start"
                      onClick={async () => {
                        try {
                          setIsLoading(true);
                          await adminDashboardCreateUserAction(() => fetchData());
                        } finally {
                          setIsLoading(false);
                        }
                      }}
                      disabled={editMode}
                    >
                      <span>{t('admin.DashboardView.actionGroup.createUser', { defaultValue: 'Create user' })}</span>
                    </LoadingButton>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container item xs={12} sm={12}>
                <ModeledTabs
                  id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewDefaultDashboardViewEditTabBar"
                  ownerData={data}
                  validation={validation}
                  orientation='horizontal'
                  childTabs={[
                    {
                      id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewDefaultDashboardViewEditTabBarMyissues',
                      name: 'admin.DashboardView.myissues',
                      label: t('admin.DashboardView.myissues', { defaultValue: 'My issues' }) as string,
                      disabled: isLoading,
                      hidden: false,
                      icon: 'ticket-account',
                      nestedDataKeys: ['issues'],
                    },
                    {
                      id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewDefaultDashboardViewEditTabBarMydebates',
                      name: 'admin.DashboardView.mydebates',
                      label: t('admin.DashboardView.mydebates', { defaultValue: 'My debates' }) as string,
                      disabled: isLoading,
                      hidden: false,
                      icon: 'wechat',
                      nestedDataKeys: ['debates'],
                    },
                    {
                      id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewDefaultDashboardViewEditTabBarMyvotes',
                      name: 'admin.DashboardView.myvotes',
                      label: t('admin.DashboardView.myvotes', { defaultValue: 'My votes' }) as string,
                      disabled: isLoading,
                      hidden: false,
                      icon: 'vote-outline',
                      nestedDataKeys: ['voteEntries'],
                    },
                  ]}
                >
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewDefaultDashboardViewEditTabBarMyissuesMyissues"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewDefaultDashboardViewEditTabBarMyissuesMyissuesIssuesLabelWrapper"
                          container
                          direction="column"
                          alignItems="stretch"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewDefaultDashboardViewEditTabBarMyissuesMyissuesIssuesLabelWrapperIssues"
                              container
                              direction="column"
                              alignItems="stretch"
                              justifyContent="flex-start"
                            >
                              <IssuesTable
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
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewDefaultDashboardViewEditTabBarMydebatesMydebates"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewDefaultDashboardViewEditTabBarMydebatesMydebatesDebatesLabelWrapper"
                          container
                          direction="column"
                          alignItems="stretch"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewDefaultDashboardViewEditTabBarMydebatesMydebatesDebatesLabelWrapperDebates"
                              container
                              direction="column"
                              alignItems="stretch"
                              justifyContent="flex-start"
                            >
                              <DebatesTable
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
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewDefaultDashboardViewEditTabBarMyvotesMyvotes"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewDefaultDashboardViewEditTabBarMyvotesMyvotesVoteEntriesLabelWrapper"
                          container
                          direction="column"
                          alignItems="stretch"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeViewDefaultDashboardViewEditTabBarMyvotesMyvotesVoteEntriesLabelWrapperVoteEntries"
                              container
                              direction="column"
                              alignItems="stretch"
                              justifyContent="flex-start"
                            >
                              <VoteEntriesTable
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
          </Box>
        </PageContainerTransition>
      </Container>
    </>
  );
}
