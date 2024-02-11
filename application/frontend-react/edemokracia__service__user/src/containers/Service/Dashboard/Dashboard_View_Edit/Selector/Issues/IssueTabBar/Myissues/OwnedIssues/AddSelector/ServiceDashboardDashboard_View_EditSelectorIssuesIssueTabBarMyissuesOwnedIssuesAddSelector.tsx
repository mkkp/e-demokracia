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
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import { ServiceIssue, ServiceIssueQueryCustomizer, ServiceIssueStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorOwnedIssuesAddSelectorComponentActionDefinitions } from './components/ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorOwnedIssuesAddSelectorComponent';
import { ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorOwnedIssuesAddSelectorComponent } from './components/ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorOwnedIssuesAddSelectorComponent';

export const SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_SELECTOR_ISSUES_ISSUE_TAB_BAR_MYISSUES_OWNED_ISSUES_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_SELECTOR_ISSUES_ISSUE_TAB_BAR_MYISSUES_OWNED_ISSUES_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorContainerHook =
  () => ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorActionDefinitions;

export interface ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorActionDefinitions
  extends ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorOwnedIssuesAddSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorActionDefinitions;
  selectionDiff: ServiceIssueStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceIssueStored[]>>;
  alreadySelected: ServiceIssueStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldTableAddSelectorPageContainer
// Name: service::Dashboard::Dashboard_View_Edit::Selector::issues::IssueTabBar::myissues::ownedIssues::AddSelector
export default function ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelector(
  props: ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorProps,
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
    useTrackService<ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_SELECTOR_ISSUES_ISSUE_TAB_BAR_MYISSUES_OWNED_ISSUES_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="ownedIssues" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldTableAddSelectorVisualElement"
          data-name="ownedIssues"
        >
          <CardContent>
            <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldTableAddSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorOwnedIssuesAddSelectorComponent
                    uniqueId={'User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldTableAddSelectorTable'}
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