//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::service::User.dashboardHome#View
// Page owner name: edemokracia::service::User
// Page DataElement name: dashboardHome
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
  ServiceDashboard,
  ServiceDashboardQueryCustomizer,
  ServiceDashboardStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
  ServiceVoteEntry,
  ServiceVoteEntryQueryCustomizer,
  ServiceVoteEntryStored,
} from '~/generated/data-api';
import { serviceUserServiceForDashboardHomeImpl, serviceDashboardServiceForClassImpl } from '~/generated/data-axios';
import {} from './actions';

import { PageActions } from './components/PageActions';
import { FavoriteIssuesTable } from './components/FavoriteIssuesTable';
import { OwnedIssuesTable } from './components/OwnedIssuesTable';
import { FavoriteVoteDefinitionsTable } from './components/FavoriteVoteDefinitionsTable';
import { OwnedVoteDefinitionsTable } from './components/OwnedVoteDefinitionsTable';
import { VoteEntriesTable } from './components/VoteEntriesTable';

export type ServiceUserDashboardHomeViewPostRefreshAction = (
  data: ServiceDashboardStored,
  storeDiff: (attributeName: keyof ServiceDashboardStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceDashboard, string>>>,
) => Promise<void>;

export const SERVICE_USER_DASHBOARD_HOME_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY =
  'ServiceUserDashboardHomeViewPostRefreshHook';
export type ServiceUserDashboardHomeViewPostRefreshHook = () => ServiceUserDashboardHomeViewPostRefreshAction;

/**
 * Name: edemokracia::service::User.dashboardHome#View
 * Is Access: true
 * Is Dashboard: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function ServiceUserDashboardHomeView() {
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
  const [data, setData] = useState<ServiceDashboardStored>({} as unknown as ServiceDashboardStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof ServiceDashboardStored, any>>(
    {} as unknown as Record<keyof ServiceDashboardStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof ServiceDashboardStored, value: any) => void = useCallback(
    (attributeName: keyof ServiceDashboardStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof ServiceDashboard, string>>(
    new Map<keyof ServiceDashboard, string>(),
  );

  const queryCustomizer: ServiceDashboardQueryCustomizer = {
    _mask:
      '{welcome,issuesOwned{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,created,status,isFavorite,isNotFavorite,isVoteClosable,isIssueDraft,isIssueDeletable},favoriteIssues{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,created,status,isFavorite,isNotFavorite,isVoteClosable,isIssueDraft,isIssueDeletable},ownedVoteDefinitions{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,voteType,created,closeAt,numberOfVotes,status,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType},favoriteVoteDefinitions{scope,countyRepresentation,cityRepresentation,districtRepresentation,title,voteType,created,closeAt,numberOfVotes,status,isYesNoType,isNotYesNoType,isYesNoAbstainType,isNotYesNoAbstainType,isSelectAnswerType,isNotSelectAnswerType,isRatingType,isNotRatingType},userVoteEntries{created,issueTitle,voteTitle,voteStatus}}',
  };

  const { service: postRefreshHook } = useTrackService<ServiceUserDashboardHomeViewPostRefreshHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_DASHBOARD_HOME_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: ServiceUserDashboardHomeViewPostRefreshAction | undefined =
    postRefreshHook && postRefreshHook();

  const title: string = t('service.DashboardView', { defaultValue: 'Dashboard View / Edit' });

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
      const res = await serviceUserServiceForDashboardHomeImpl.getDashboardHome('{}');

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
      const res = await serviceDashboardServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as ServiceDashboardStored,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof ServiceDashboardStored, any>);
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
                  <Typography id="FormattededemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditWelcome">
                    {data.welcome}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid container item xs={12} sm={12}>
              <ModeledTabs
                id="TabControlleredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelector"
                ownerData={data}
                validation={validation}
                orientation='horizontal'
                childTabs={[
                  {
                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssues',
                    name: 'service.DashboardView.issues',
                    label: t('service.DashboardView.issues', { defaultValue: 'Issues' }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'ticket-confirmation',
                    nestedDataKeys: ['favoriteIssues', 'issuesOwned'],
                  },
                  {
                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorDebates',
                    name: 'service.DashboardView.debates',
                    label: t('service.DashboardView.debates', { defaultValue: 'Debates' }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'wechat',
                    nestedDataKeys: [],
                  },
                  {
                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorVotes',
                    name: 'service.DashboardView.votes',
                    label: t('service.DashboardView.votes', { defaultValue: 'Votes' }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'vote',
                    nestedDataKeys: ['favoriteVoteDefinitions', 'ownedVoteDefinitions'],
                  },
                  {
                    id: 'TabedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorVotesCast',
                    name: 'service.DashboardView.votesCast',
                    label: t('service.DashboardView.votesCast', { defaultValue: 'Votes Cast' }) as string,
                    disabled: isLoading,
                    hidden: false,
                    icon: 'vote-outline',
                    nestedDataKeys: ['userVoteEntries'],
                  },
                ]}
              >
                <Grid item xs={12} sm={12}>
                  <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssues">
                    <CardContent>
                      <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                        <Grid container item xs={12} sm={12}>
                          <ModeledTabs
                            id="TabControlleredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBar"
                            ownerData={data}
                            validation={validation}
                            orientation='vertical'
                            childTabs={[
                              {
                                id: 'TabedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissues',
                                name: 'service.DashboardView.myissues',
                                label: t('service.DashboardView.myissues', { defaultValue: 'My issues' }) as string,
                                disabled: isLoading,
                                hidden: false,
                                icon: 'account-circle',
                                nestedDataKeys: ['issuesOwned'],
                              },
                              {
                                id: 'TabedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarFavoriteIssues',
                                name: 'service.DashboardView.favoriteIssues',
                                label: t('service.DashboardView.favoriteIssues', {
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
                                id="FlexedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissues"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarMyissuesMyissuesOwnedIssuesLabelWrapperOwnedIssues"
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
                                id="FlexedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarFavoriteIssuesFavoriteIssues"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarFavoriteIssuesFavoriteIssuesFavoriteIssuesLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorIssuesIssuesIssueTabBarFavoriteIssuesFavoriteIssuesFavoriteIssuesLabelWrapperFavoriteIssues"
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
                  <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorDebatesDebates">
                    <CardContent>
                      <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                        <Grid container item xs={12} sm={12}>
                          <ModeledTabs
                            id="TabControlleredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBar"
                            ownerData={data}
                            validation={validation}
                            orientation='vertical'
                            childTabs={[
                              {
                                id: 'TabedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebates',
                                name: 'service.DashboardView.mydebates',
                                label: t('service.DashboardView.mydebates', { defaultValue: 'My debates' }) as string,
                                disabled: isLoading,
                                hidden: false,
                                icon: 'account-circle',
                                nestedDataKeys: [],
                              },
                              {
                                id: 'TabedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarFavoriteDebates',
                                name: 'service.DashboardView.favoriteDebates',
                                label: t('service.DashboardView.favoriteDebates', {
                                  defaultValue: 'Favorite Debates',
                                }) as string,
                                disabled: isLoading,
                                hidden: false,
                                icon: 'star',
                                nestedDataKeys: [],
                              },
                            ]}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="FlexedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarMydebatesMydebates"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              ></Grid>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="FlexedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorDebatesDebatesDebateTabBarFavoriteDebatesFavoriteDebates"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              ></Grid>
                            </Grid>
                          </ModeledTabs>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorVotesVotes">
                    <CardContent>
                      <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                        <Grid container item xs={12} sm={12}>
                          <ModeledTabs
                            id="TabControlleredemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorVotesVotesVotesTabBar"
                            ownerData={data}
                            validation={validation}
                            orientation='vertical'
                            childTabs={[
                              {
                                id: 'TabedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorVotesVotesVotesTabBarMyVotesGroup',
                                name: 'service.DashboardView.myVotesGroup',
                                label: t('service.DashboardView.myVotesGroup', { defaultValue: 'My votes' }) as string,
                                disabled: isLoading,
                                hidden: false,
                                icon: 'account-circle',
                                nestedDataKeys: ['ownedVoteDefinitions'],
                              },
                              {
                                id: 'TabedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroup',
                                name: 'service.DashboardView.favoriteVotesGroup',
                                label: t('service.DashboardView.favoriteVotesGroup', {
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
                                id="FlexedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorVotesVotesVotesTabBarMyVotesGroupMyVotesGroup"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorVotesVotesVotesTabBarMyVotesGroupMyVotesGroupOwnedVoteDefinitionsLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorVotesVotesVotesTabBarMyVotesGroupMyVotesGroupOwnedVoteDefinitionsLabelWrapperOwnedVoteDefinitions"
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
                                id="FlexedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroup"
                                container
                                direction="row"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                                spacing={2}
                              >
                                <Grid item xs={12} sm={12}>
                                  <Grid
                                    id="FlexedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapper"
                                    container
                                    direction="column"
                                    alignItems="stretch"
                                    justifyContent="flex-start"
                                    spacing={2}
                                  >
                                    <Grid item xs={12} sm={12}>
                                      <Grid
                                        id="TableedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorVotesVotesVotesTabBarFavoriteVotesGroupFavoriteVotesGroupFavoriteVoteDefinitionsLabelWrapperFavoriteVoteDefinitions"
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
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorVotesCastVotesCast">
                    <CardContent>
                      <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="FlexedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorVotesCastVotesCastVoteEntriesLabelWrapper"
                            container
                            direction="column"
                            alignItems="stretch"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12}>
                              <Grid
                                id="TableedemokraciaServiceUserEdemokraciaServiceUserDashboardHomeViewDefaultDashboardViewEditSelectorVotesCastVotesCastVoteEntriesLabelWrapperVoteEntries"
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
