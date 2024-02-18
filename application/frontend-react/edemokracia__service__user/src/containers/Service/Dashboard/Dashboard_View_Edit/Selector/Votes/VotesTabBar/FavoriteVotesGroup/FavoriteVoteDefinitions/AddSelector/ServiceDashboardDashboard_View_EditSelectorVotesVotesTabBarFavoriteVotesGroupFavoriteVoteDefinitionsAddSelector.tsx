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
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import {
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorFavoriteVoteDefinitionsAddSelectorComponentActionDefinitions } from './components/ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorFavoriteVoteDefinitionsAddSelectorComponent';
import { ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorFavoriteVoteDefinitionsAddSelectorComponent } from './components/ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorFavoriteVoteDefinitionsAddSelectorComponent';

export const SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_SELECTOR_VOTES_VOTES_TAB_BAR_FAVORITE_VOTES_GROUP_FAVORITE_VOTE_DEFINITIONS_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_SELECTOR_VOTES_VOTES_TAB_BAR_FAVORITE_VOTES_GROUP_FAVORITE_VOTE_DEFINITIONS_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorContainerHook =
  () => ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorActionDefinitions;

export interface ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorActionDefinitions
  extends ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorFavoriteVoteDefinitionsAddSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorActionDefinitions;
  selectionDiff: ServiceVoteDefinitionStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceVoteDefinitionStored[]>>;
  alreadySelected: ServiceVoteDefinitionStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_vp60sGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorPageContainer
// Name: service::Dashboard::Dashboard_View_Edit::Selector::votes::votesTabBar::favoriteVotesGroup::favoriteVoteDefinitions::AddSelector
export default function ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelector(
  props: ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorProps,
) {
  // Container props
  const {
    refreshCounter,
    isLoading,
    isDraft,
    actions: pageActions,
    selectionDiff,
    setSelectionDiff,
    alreadySelected,
  } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } =
    useTrackService<ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_SELECTOR_VOTES_VOTES_TAB_BAR_FAVORITE_VOTES_GROUP_FAVORITE_VOTE_DEFINITIONS_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="favoriteVoteDefinitions" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_vp60sGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorVisualElement"
          data-name="favoriteVoteDefinitions"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_vp60sGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsAddSelectorFavoriteVoteDefinitionsAddSelectorComponent
                    uniqueId={'User/(esm/_vp60sGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorTable'}
                    actions={actions}
                    selectionDiff={selectionDiff}
                    setSelectionDiff={setSelectionDiff}
                    alreadySelected={alreadySelected}
                    refreshCounter={refreshCounter}
                    isOwnerLoading={isLoading}
                  />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
