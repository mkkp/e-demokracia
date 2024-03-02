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
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
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
import { ServiceIssue, ServiceIssueQueryCustomizer, ServiceIssueStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorOwnedIssuesAddSelectorComponentActionDefinitions } from './components/ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorOwnedIssuesAddSelectorComponent';
import { ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorOwnedIssuesAddSelectorComponent } from './components/ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorOwnedIssuesAddSelectorComponent';

export const SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_ROOT_TAB_BAR_OWNED_ISSUES_GROUP_OWNED_ISSUES_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_ROOT_TAB_BAR_OWNED_ISSUES_GROUP_OWNED_ISSUES_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorContainerHook =
  () => ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorActionDefinitions;

export interface ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorActionDefinitions
  extends ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorOwnedIssuesAddSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorActionDefinitions;
  selectionDiff: ServiceIssueStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceIssueStored[]>>;
  alreadySelected: ServiceIssueStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorPageContainer
// Name: service::UserIssues::UserIssues_View_Edit::root::tabBar::ownedIssuesGroup::ownedIssues::AddSelector
export default function ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelector(
  props: ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorProps,
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
    useTrackService<ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_ROOT_TAB_BAR_OWNED_ISSUES_GROUP_OWNED_ISSUES_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="ownedIssues" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorVisualElement"
          data-name="ownedIssues"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorOwnedIssuesAddSelectorComponent
                    uniqueId={'User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorTable'}
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
