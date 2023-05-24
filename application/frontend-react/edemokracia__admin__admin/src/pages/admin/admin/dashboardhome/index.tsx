//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Admin.dashboardhome#Dashboard
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: dashboardhome
// Page DataElement owner name: edemokracia::admin::Admin

import { useEffect, useState, useCallback, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { ComponentProxy } from '@pandino/react-hooks';
import { useParams } from 'react-router-dom';
import { MdiIcon, ModeledTabs, PageHeader, DropdownButton, CustomBreadcrumb, useJudoNavigation } from '~/components';
import { useRangeDialog } from '~/components/dialog';
import { AssociationButton, BinaryInput, CollectionAssociationButton } from '~/components/widgets';
import {
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  fileHandling,
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
import { JudoIdentifiable } from '@judo/data-api-common';
import { mainContainerPadding } from '~/theme';

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
import { adminAdminServiceForDashboardhomeImpl, adminDashboardServiceImpl } from '~/generated/data-axios';

import { useAdminDashboardCreateIssueAction, useAdminDashboardCreateUserAction } from './actions';

import { PageActions } from './components/PageActions';
import { DebatesTable } from './components/DebatesTable';
import { IssuesTable } from './components/IssuesTable';
import { VoteEntriesTable } from './components/VoteEntriesTable';

/**
 * Name: edemokracia::admin::Admin.dashboardhome#Dashboard
 * Is Access: true
 * Is Dashboard: true
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminAdminDashboardhomeDashboard() {
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
      setData({ ...data, [attributeName]: value });
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

  const adminDashboardCreateIssueAction = useAdminDashboardCreateIssueAction();
  const adminDashboardCreateUserAction = useAdminDashboardCreateUserAction();

  const title: string = t('edemokracia.admin.Admin.dashboardhome.Dashboard', { defaultValue: 'Dashboard' });

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
      const res = await adminDashboardServiceImpl.refresh(
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
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (signedIdentifier) {
      fetchData();
    }
  }, [signedIdentifier]);

  useEffect(() => {
    setValidation(new Map<keyof AdminDashboard, string>());
  }, [editMode]);

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
        <Box sx={mainContainerPadding}>
          <Grid
            className="access-page-data"
            container
            xs={12}
            sm={12}
            spacing={2}
            direction="column"
            alignItems="stretch"
            justifyContent="flex-start"
          >
            <Grid item xs={12} sm={12}>
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <Typography id="FormattededemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewWelcome">
                    {data.welcome}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container xs={12} spacing={2}>
                <Grid item>
                  <LoadingButton
                    id="ButtonedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewActionGroupCreateIssue"
                    loading={isLoading}
                    startIcon={<MdiIcon path="ticket-confirmation" />}
                    loadingPosition="start"
                    onClick={() => adminDashboardCreateIssueAction(() => fetchData())}
                    disabled={editMode}
                  >
                    <span>
                      {t('edemokracia.admin.Admin.dashboardhome.Dashboard.actionGroup.createIssue', {
                        defaultValue: 'Create issue',
                      })}
                    </span>
                  </LoadingButton>
                </Grid>

                <Grid item>
                  <LoadingButton
                    id="ButtonedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewActionGroupCreateUser"
                    loading={isLoading}
                    startIcon={<MdiIcon path="account" />}
                    loadingPosition="start"
                    onClick={() => adminDashboardCreateUserAction(() => fetchData())}
                    disabled={editMode}
                  >
                    <span>
                      {t('edemokracia.admin.Admin.dashboardhome.Dashboard.actionGroup.createUser', {
                        defaultValue: 'Create user',
                      })}
                    </span>
                  </LoadingButton>
                </Grid>
              </Grid>
            </Grid>

            <Grid container item xs={12} sm={12}>
              <ModeledTabs
                id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBar"
                activeIndex={0}
                childTabs={[
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMyissues',
                    name: 'edemokracia.admin.Admin.dashboardhome.Dashboard.myissues',
                    label: 'My issues',
                    icon: 'ticket-account',
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMydebates',
                    name: 'edemokracia.admin.Admin.dashboardhome.Dashboard.mydebates',
                    label: 'My debates',
                    icon: 'wechat',
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMyvotes',
                    name: 'edemokracia.admin.Admin.dashboardhome.Dashboard.myvotes',
                    label: 'My votes',
                    icon: 'vote-outline',
                  },
                ]}
              >
                <Grid item xs={12} sm={12}>
                  <Grid
                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMyissuesMyissues"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMyissuesMyissuesIssuesLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMyissuesMyissuesIssuesLabelWrapperIssues"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                          >
                            <IssuesTable
                              isOwnerLoading={isLoading}
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
                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMydebatesMydebates"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMydebatesMydebatesDebatesLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMydebatesMydebatesDebatesLabelWrapperDebates"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                          >
                            <DebatesTable
                              isOwnerLoading={isLoading}
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
                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMyvotesMyvotes"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMyvotesMyvotesVoteEntriesLabelWrapper"
                        container
                        direction="column"
                        alignItems="stretch"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardhomeDashboardDefaultDashboardViewTabBarMyvotesMyvotesVoteEntriesLabelWrapperVoteEntries"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                          >
                            <VoteEntriesTable
                              isOwnerLoading={isLoading}
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
      </Container>
    </>
  );
}
