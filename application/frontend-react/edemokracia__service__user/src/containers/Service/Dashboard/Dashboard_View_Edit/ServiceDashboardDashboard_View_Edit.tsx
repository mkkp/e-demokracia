//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'.tsx'
// Template name: actor/src/containers/container.tsx
// Template file: actor/src/containers/container.tsx.hbs

import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, ModeledTabs, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

import {} from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers';
import {} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
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
} from '~/services/data-api';
import type { ServiceDashboardDashboard_View_EditFavoriteIssuesComponentActionDefinitions } from './components/ServiceDashboardDashboard_View_EditFavoriteIssuesComponent';
import { ServiceDashboardDashboard_View_EditFavoriteIssuesComponent } from './components/ServiceDashboardDashboard_View_EditFavoriteIssuesComponent';
import type { ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentActionDefinitions } from './components/ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponent';
import { ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponent } from './components/ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponent';
import type { ServiceDashboardDashboard_View_EditOwnedIssuesComponentActionDefinitions } from './components/ServiceDashboardDashboard_View_EditOwnedIssuesComponent';
import { ServiceDashboardDashboard_View_EditOwnedIssuesComponent } from './components/ServiceDashboardDashboard_View_EditOwnedIssuesComponent';
import type { ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentActionDefinitions } from './components/ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponent';
import { ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponent } from './components/ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponent';
import type { ServiceDashboardDashboard_View_EditVoteEntriesComponentActionDefinitions } from './components/ServiceDashboardDashboard_View_EditVoteEntriesComponent';
import { ServiceDashboardDashboard_View_EditVoteEntriesComponent } from './components/ServiceDashboardDashboard_View_EditVoteEntriesComponent';

export const SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceDashboardDashboard_View_EditContainerHook';
export type ServiceDashboardDashboard_View_EditContainerHook = (
  data: ServiceDashboardStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceDashboard, value: any) => void,
) => ServiceDashboardDashboard_View_EditActionDefinitions;

export interface ServiceDashboardDashboard_View_EditActionDefinitions
  extends ServiceDashboardDashboard_View_EditFavoriteIssuesComponentActionDefinitions,
    ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentActionDefinitions,
    ServiceDashboardDashboard_View_EditOwnedIssuesComponentActionDefinitions,
    ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentActionDefinitions,
    ServiceDashboardDashboard_View_EditVoteEntriesComponentActionDefinitions {}

export interface ServiceDashboardDashboard_View_EditProps {
  refreshCounter: number;
  actions: ServiceDashboardDashboard_View_EditActionDefinitions;

  data: ServiceDashboardStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceDashboard, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceDashboard, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceDashboard, string>>>;
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_3M7vYIyNEe2VSOmaAz6G9Q)/TransferObjectViewPageContainer
// Name: service::Dashboard::Dashboard_View_Edit
export default function ServiceDashboardDashboard_View_Edit(props: ServiceDashboardDashboard_View_EditProps) {
  // Container props
  const {
    refreshCounter,
    actions: pageActions,
    data,
    isLoading,
    isFormUpdateable,
    isFormDeleteable,
    storeDiff,
    editMode,
    validation,
    setValidation,
    submit,
  } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );
  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceDashboardDashboard_View_EditContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceDashboardDashboard_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_3M7vYIyNEe2VSOmaAz6G9Q)/TransferObjectViewVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <Typography id="User/(esm/_Z44lgIyYEe2VSOmaAz6G9Q)/StringTypeFormatted">{data.welcome}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item xs={12} sm={12}>
            <ModeledTabs
              id="User/(esm/_ekzRUFw5Ee6gN-oVBDDIOQ)/TabBarVisualElement"
              ownerData={data}
              validation={validation}
              orientation="horizontal"
              childTabs={[
                {
                  id: 'User/(esm/_P5VicFw5Ee6gN-oVBDDIOQ)/GroupTab',
                  name: 'service.Dashboard.Dashboard_View_Edit.issues',
                  label: t('service.Dashboard.Dashboard_View_Edit.issues', { defaultValue: 'Issues' }) as string,
                  disabled: isLoading,
                  hidden: false,
                  icon: 'wechat',
                  nestedDataKeys: ['favoriteIssues', 'ownedIssues'],
                },
                {
                  id: 'User/(esm/_bFZdMGBVEe6M1JBD8stPIg)/GroupTab',
                  name: 'service.Dashboard.Dashboard_View_Edit.votes',
                  label: t('service.Dashboard.Dashboard_View_Edit.votes', { defaultValue: 'Votes' }) as string,
                  disabled: isLoading,
                  hidden: false,
                  icon: 'vote',
                  nestedDataKeys: ['favoriteVoteDefinitions', 'ownedVoteDefinitions'],
                },
                {
                  id: 'User/(esm/_YSQVMFw5Ee6gN-oVBDDIOQ)/GroupTab',
                  name: 'service.Dashboard.Dashboard_View_Edit.votesCast',
                  label: t('service.Dashboard.Dashboard_View_Edit.votesCast', { defaultValue: 'Votes Cast' }) as string,
                  disabled: isLoading,
                  hidden: false,
                  icon: 'vote-outline',
                  nestedDataKeys: ['userVoteEntries'],
                },
              ]}
            >
              <Grid item xs={12} sm={12}>
                <Card id="User/(esm/_P5VicFw5Ee6gN-oVBDDIOQ)/GroupVisualElement">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid container item xs={12} sm={12}>
                        <ModeledTabs
                          id="User/(esm/_CR_JgIyUEe2VSOmaAz6G9Q)/TabBarVisualElement"
                          ownerData={data}
                          validation={validation}
                          orientation="vertical"
                          childTabs={[
                            {
                              id: 'User/(esm/_E0b4IIyUEe2VSOmaAz6G9Q)/GroupTab',
                              name: 'service.Dashboard.Dashboard_View_Edit.myissues',
                              label: t('service.Dashboard.Dashboard_View_Edit.myissues', {
                                defaultValue: 'My issues',
                              }) as string,
                              disabled: isLoading,
                              hidden: false,
                              icon: 'account-circle',
                              nestedDataKeys: ['ownedIssues'],
                            },
                            {
                              id: 'User/(esm/_wto7cFw4Ee6gN-oVBDDIOQ)/GroupTab',
                              name: 'service.Dashboard.Dashboard_View_Edit.favoriteIssues',
                              label: t('service.Dashboard.Dashboard_View_Edit.favoriteIssues', {
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
                              id="User/(esm/_E0b4IIyUEe2VSOmaAz6G9Q)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceDashboardDashboard_View_EditOwnedIssuesComponent
                                    uniqueId={
                                      'User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable'
                                    }
                                    actions={actions}
                                    ownerData={data}
                                    editMode={editMode}
                                    isFormUpdateable={isFormUpdateable}
                                    validationError={validation.get('ownedIssues')}
                                    refreshCounter={refreshCounter}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_wto7cFw4Ee6gN-oVBDDIOQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_7sPXAFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceDashboardDashboard_View_EditFavoriteIssuesComponent
                                    uniqueId={
                                      'User/(esm/_7sPXAFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable'
                                    }
                                    actions={actions}
                                    ownerData={data}
                                    editMode={editMode}
                                    isFormUpdateable={isFormUpdateable}
                                    validationError={validation.get('favoriteIssues')}
                                    refreshCounter={refreshCounter}
                                  />
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
                <Card id="User/(esm/_bFZdMGBVEe6M1JBD8stPIg)/GroupVisualElement">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid container item xs={12} sm={12}>
                        <ModeledTabs
                          id="User/(esm/_ju2mUGBVEe6M1JBD8stPIg)/TabBarVisualElement"
                          ownerData={data}
                          validation={validation}
                          orientation="vertical"
                          childTabs={[
                            {
                              id: 'User/(esm/_rK5hIGBVEe6M1JBD8stPIg)/GroupTab',
                              name: 'service.Dashboard.Dashboard_View_Edit.myVotesGroup',
                              label: t('service.Dashboard.Dashboard_View_Edit.myVotesGroup', {
                                defaultValue: 'My votes',
                              }) as string,
                              disabled: isLoading,
                              hidden: false,
                              icon: 'account-circle',
                              nestedDataKeys: ['ownedVoteDefinitions'],
                            },
                            {
                              id: 'User/(esm/_wvlRsGBVEe6M1JBD8stPIg)/GroupTab',
                              name: 'service.Dashboard.Dashboard_View_Edit.favoriteVotesGroup',
                              label: t('service.Dashboard.Dashboard_View_Edit.favoriteVotesGroup', {
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
                              id="User/(esm/_rK5hIGBVEe6M1JBD8stPIg)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponent
                                    uniqueId={
                                      'User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldRelationDefinedTable'
                                    }
                                    actions={actions}
                                    ownerData={data}
                                    editMode={editMode}
                                    isFormUpdateable={isFormUpdateable}
                                    validationError={validation.get('ownedVoteDefinitions')}
                                    refreshCounter={refreshCounter}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12} md={4.0}>
                            <Grid
                              id="User/(esm/_wvlRsGBVEe6M1JBD8stPIg)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_vp60sGBWEe6M1JBD8stPIg)/TabularReferenceFieldRelationDefinedTable"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                >
                                  <ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponent
                                    uniqueId={
                                      'User/(esm/_vp60sGBWEe6M1JBD8stPIg)/TabularReferenceFieldRelationDefinedTable'
                                    }
                                    actions={actions}
                                    ownerData={data}
                                    editMode={editMode}
                                    isFormUpdateable={isFormUpdateable}
                                    validationError={validation.get('favoriteVoteDefinitions')}
                                    refreshCounter={refreshCounter}
                                  />
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
                <Card id="User/(esm/_YSQVMFw5Ee6gN-oVBDDIOQ)/GroupVisualElement">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_YR3LQFxHEe6ma86ynyYZNw)/TabularReferenceFieldRelationDefinedTable"
                          container
                          direction="column"
                          alignItems="stretch"
                          justifyContent="flex-start"
                        >
                          <ServiceDashboardDashboard_View_EditVoteEntriesComponent
                            uniqueId={'User/(esm/_YR3LQFxHEe6ma86ynyYZNw)/TabularReferenceFieldRelationDefinedTable'}
                            actions={actions}
                            ownerData={data}
                            editMode={editMode}
                            isFormUpdateable={isFormUpdateable}
                            validationError={validation.get('userVoteEntries')}
                            refreshCounter={refreshCounter}
                          />
                        </Grid>
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
  );
}
