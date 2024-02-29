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
import type { ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorOwnedVoteDefinitionsAddSelectorComponentActionDefinitions } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorOwnedVoteDefinitionsAddSelectorComponent';
import { ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorOwnedVoteDefinitionsAddSelectorComponent } from './components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorOwnedVoteDefinitionsAddSelectorComponent';

export const SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_ROOT_TAB_BAR_OWNED_VOTE_DEFINITIONS_GROUP_OWNED_VOTE_DEFINITIONS_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_ROOT_TAB_BAR_OWNED_VOTE_DEFINITIONS_GROUP_OWNED_VOTE_DEFINITIONS_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorContainerHook =
  () => ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorActionDefinitions;

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorActionDefinitions
  extends ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorOwnedVoteDefinitionsAddSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorActionDefinitions;
  selectionDiff: ServiceVoteDefinitionStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceVoteDefinitionStored[]>>;
  alreadySelected: ServiceVoteDefinitionStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceFieldTableAddSelectorPageContainer
// Name: service::UserVoteDefinition::UserVoteDefinition_View_Edit::root::tabBar::OwnedVoteDefinitionsGroup::ownedVoteDefinitions::AddSelector
export default function ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelector(
  props: ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorProps,
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
    useTrackService<ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_ROOT_TAB_BAR_OWNED_VOTE_DEFINITIONS_GROUP_OWNED_VOTE_DEFINITIONS_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="ownedVoteDefinitions" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceFieldTableAddSelectorVisualElement"
          data-name="ownedVoteDefinitions"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceFieldTableAddSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorOwnedVoteDefinitionsAddSelectorComponent
                    uniqueId={'User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceFieldTableAddSelectorTable'}
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
