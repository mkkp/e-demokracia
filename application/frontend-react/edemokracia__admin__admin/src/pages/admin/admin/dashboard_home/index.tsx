//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Admin.dashboardHome#Dashboard
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: dashboardHome
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
  AdminDashboard,
  AdminDashboardQueryCustomizer,
  AdminDashboardStored,
  AdminDebate,
  AdminDebateQueryCustomizer,
  AdminDebateStored,
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminVoteDefinition,
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminVoteEntry,
  AdminVoteEntryQueryCustomizer,
  AdminVoteEntryStored,
} from '~/generated/data-api';
import { adminAdminServiceForDashboardHomeImpl, adminDashboardServiceForClassImpl } from '~/generated/data-axios';
import {} from './actions';

import { PageActions } from './components/PageActions';
import { FavoriteDebatesTable } from './components/FavoriteDebatesTable';
import { OwnedDebatesTable } from './components/OwnedDebatesTable';
import { FavoriteIssuesTable } from './components/FavoriteIssuesTable';
import { OwnedIssuesTable } from './components/OwnedIssuesTable';
import { FavoriteVoteDefinitionsTable } from './components/FavoriteVoteDefinitionsTable';
import { OwnedVoteDefinitionsTable } from './components/OwnedVoteDefinitionsTable';
import { VoteEntriesTable } from './components/VoteEntriesTable';

export type AdminAdminDashboardHomeDashboardPostRefreshAction = (
  data: AdminDashboardStored,
  storeDiff: (attributeName: keyof AdminDashboardStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof AdminDashboard, string>>>,
) => Promise<void>;

export const ADMIN_ADMIN_DASHBOARD_HOME_DASHBOARD_POST_REFRESH_HOOK_INTERFACE_KEY =
  'AdminAdminDashboardHomeDashboardPostRefreshHook';
export type AdminAdminDashboardHomeDashboardPostRefreshHook = () => AdminAdminDashboardHomeDashboardPostRefreshAction;

/**
 * Name: edemokracia::admin::Admin.dashboardHome#Dashboard
 * Is Access: true
 * Is Dashboard: true
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminAdminDashboardHomeDashboard() {
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
      '{welcome,issuesOwned{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,created,numberOfDebates,status,isFavorite,isNotFavorite},favoriteIssues{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,created,numberOfDebates,status,isFavorite,isNotFavorite},ownedDebates{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,closeAt,status,issueTitle,isNotClosed,isFavorite,isNotFavorite},favoriteDebates{title,closeAt,status,issueTitle,isNotClosed,isFavorite,isNotFavorite},ownedVoteDefinitions{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,voteType,created,closeAt,numberOfVotes,status,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType},favoriteVoteDefinitions{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,voteType,created,closeAt,numberOfVotes,status,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType},userVoteEntries{created,issueTitle,debateTitle,voteTitle,voteStatus}}',
  };

  const { service: postRefreshHook } = useTrackService<AdminAdminDashboardHomeDashboardPostRefreshHook>(
    `(${OBJECTCLASS}=${ADMIN_ADMIN_DASHBOARD_HOME_DASHBOARD_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: AdminAdminDashboardHomeDashboardPostRefreshAction | undefined =
    postRefreshHook && postRefreshHook();

  const title: string = t('edemokracia.admin.Admin.dashboardHome.Dashboard', { defaultValue: 'Dashboard View / Edit' });

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
      const res = await adminAdminServiceForDashboardHomeImpl.getDashboardHome('{}');

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
                  <Typography id="FormattededemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditWelcome">
                    {data.welcome}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid container item xs={12} sm={12}>
              <ModeledTabs
                id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelector"
                ownerData={data}
                validation={validation}
                orientation='horizontal'
                childTabs={[
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorIssues',
                    name: 'edemokracia.admin.Admin.dashboardHome.Dashboard.issues',
                    label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.issues', {
                      defaultValue: 'Issues',
                    }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'ticket-confirmation',
                    nestedDataKeys: ['favoriteIssues', 'issuesOwned'],
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebates',
                    name: 'edemokracia.admin.Admin.dashboardHome.Dashboard.debates',
                    label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.debates', {
                      defaultValue: 'Debates',
                    }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'wechat',
                    nestedDataKeys: ['favoriteDebates', 'ownedDebates'],
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorVotes',
                    name: 'edemokracia.admin.Admin.dashboardHome.Dashboard.votes',
                    label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.votes', {
                      defaultValue: 'Votes',
                    }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'vote',
                    nestedDataKeys: ['favoriteVoteDefinitions', 'ownedVoteDefinitions'],
                  },
                  {
                    id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesCast',
                    name: 'edemokracia.admin.Admin.dashboardHome.Dashboard.votesCast',
                    label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.votesCast', {
                      defaultValue: 'Votes Cast',
                    }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'vote-outline',
                    nestedDataKeys: ['userVoteEntries'],
                  },
                ]}
              >
                <Grid item xs={12} sm={12}>
                  <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorIssuesIssues">
                    <CardContent>
                      <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                        <Grid container item xs={12} sm={12}>
                          <ModeledTabs
                            id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBar"
                            ownerData={data}
                            validation={validation}
                            orientation='vertical'
                            childTabs={[
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissues',
                                name: 'edemokracia.admin.Admin.dashboardHome.Dashboard.myissues',
                                label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.myissues', {
                                  defaultValue: 'My issues',
                                }) as string,
                                disabled: isLoading,
                                hidden: false,
                                icon: 'account-circle',
                                nestedDataKeys: ['issuesOwned'],
                              },
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarFavoriteIssues',
                                name: 'edemokracia.admin.Admin.dashboardHome.Dashboard.favoriteIssues',
                                label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.favoriteIssues', {
                                  defaultValue: 'Favorite Issues',
                                }) as string,
                                disabled: isLoading,
                                hidden: false,
                                icon: 'star',
                                nestedDataKeys: ['favoriteIssues'],
                              },
                            ]}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissues"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssues"
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
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarFavoriteIssuesFavoriteIssues"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarFavoriteIssuesFavoriteIssuesFavoriteIssuesLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarFavoriteIssuesFavoriteIssuesFavoriteIssuesLabelWrapperFavoriteIssues"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                      >
                                        <FavoriteIssuesTable
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
                  <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebates">
                    <CardContent>
                      <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                        <Grid container item xs={12} sm={12}>
                          <ModeledTabs
                            id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBar"
                            ownerData={data}
                            validation={validation}
                            orientation='vertical'
                            childTabs={[
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebates',
                                name: 'edemokracia.admin.Admin.dashboardHome.Dashboard.mydebates',
                                label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.mydebates', {
                                  defaultValue: 'My debates',
                                }) as string,
                                disabled: isLoading,
                                hidden: false,
                                icon: 'account-circle',
                                nestedDataKeys: ['ownedDebates'],
                              },
                              {
                                id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarFavoriteDebates',
                                name: 'edemokracia.admin.Admin.dashboardHome.Dashboard.favoriteDebates',
                                label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.favoriteDebates', {
                                  defaultValue: 'Favorite Debates',
                                }) as string,
                                disabled: isLoading,
                                hidden: false,
                                icon: 'star',
                                nestedDataKeys: ['favoriteDebates'],
                              },
                            ]}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebates"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebatesOwnedDebatesLabelWrapperOwnedDebates"
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
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarFavoriteDebatesFavoriteDebates"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarFavoriteDebatesFavoriteDebatesFavoriteDebatesLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarFavoriteDebatesFavoriteDebatesFavoriteDebatesLabelWrapperFavoriteDebates"
                                        container
                                        direction="column"
                                        alignItems="stretch"
                                        justifyContent="flex-start"
                                      >
                                        <FavoriteDebatesTable
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
                  <Grid
                    id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotes"
                    container
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    <Grid container item xs={12} sm={12}>
                      <ModeledTabs
                        id="TabControlleredemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBar"
                        ownerData={data}
                        validation={validation}
                        orientation='horizontal'
                        childTabs={[
                          {
                            id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarMyVotesGroup',
                            name: 'edemokracia.admin.Admin.dashboardHome.Dashboard.myVotesGroup',
                            label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.myVotesGroup', {
                              defaultValue: 'My votes',
                            }) as string,
                            disabled: isLoading,
                            hidden: false,
                            icon: 'account-circle',
                            nestedDataKeys: ['ownedVoteDefinitions'],
                          },
                          {
                            id: 'TabedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroup',
                            name: 'edemokracia.admin.Admin.dashboardHome.Dashboard.favoriteVotesGroup',
                            label: t('edemokracia.admin.Admin.dashboardHome.Dashboard.favoriteVotesGroup', {
                              defaultValue: 'Favorite votes',
                            }) as string,
                            disabled: isLoading,
                            hidden: false,
                            icon: 'star',
                            nestedDataKeys: ['favoriteVoteDefinitions'],
                          },
                        ]}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarMyVotesGroupMyVotesGroup"
                            container
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarMyVotesGroupMyVotesGroupOwnedVoteDefinitionsLabelWrapper"
                                container
                                direction="column"
                                alignItems="stretch"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarMyVotesGroupMyVotesGroupOwnedVoteDefinitionsLabelWrapperOwnedVoteDefinitions"
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
                        </Grid>

                        <Grid item xs={12} sm={12} md={4.0}>
                          <Grid
                            id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroup"
                            container
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapper"
                                container
                                direction="column"
                                alignItems="stretch"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitions"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                  >
                                    <FavoriteVoteDefinitionsTable
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
                  <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesCastVotesCast">
                    <CardContent>
                      <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesCastVotesCastVoteEntriesLabelWrapper"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="TableedemokraciaAdminAdminEdemokraciaAdminAdminDashboardHomeDashboardDefaultDashboardViewEditSelectorVotesCastVotesCastVoteEntriesLabelWrapperVoteEntries"
                                container
                                direction="column"
                                alignItems="stretch"
                                justifyContent="flex-start"
                              >
                                <VoteEntriesTable
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
              </ModeledTabs>
            </Grid>
          </Grid>
        </Box>
      </PageContainerTransition>
    </>
  );
}
