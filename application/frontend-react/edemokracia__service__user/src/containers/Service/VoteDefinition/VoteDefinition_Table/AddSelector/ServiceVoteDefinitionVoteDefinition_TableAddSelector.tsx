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
import type { ServiceVoteDefinitionVoteDefinition_TableAddSelectorVoteDefinition_TableAddSelectorComponentActionDefinitions } from './components/ServiceVoteDefinitionVoteDefinition_TableAddSelectorVoteDefinition_TableAddSelectorComponent';
import { ServiceVoteDefinitionVoteDefinition_TableAddSelectorVoteDefinition_TableAddSelectorComponent } from './components/ServiceVoteDefinitionVoteDefinition_TableAddSelectorVoteDefinition_TableAddSelectorComponent';

export const SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_TABLE_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_TABLE_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceVoteDefinitionVoteDefinition_TableAddSelectorContainerHook =
  () => ServiceVoteDefinitionVoteDefinition_TableAddSelectorActionDefinitions;

export interface ServiceVoteDefinitionVoteDefinition_TableAddSelectorActionDefinitions
  extends ServiceVoteDefinitionVoteDefinition_TableAddSelectorVoteDefinition_TableAddSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceVoteDefinitionVoteDefinition_TableAddSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceVoteDefinitionVoteDefinition_TableAddSelectorActionDefinitions;
  selectionDiff: ServiceVoteDefinitionStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceVoteDefinitionStored[]>>;
  alreadySelected: ServiceVoteDefinitionStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorPageContainer
// Name: service::VoteDefinition::VoteDefinition_Table::AddSelector
export default function ServiceVoteDefinitionVoteDefinition_TableAddSelector(
  props: ServiceVoteDefinitionVoteDefinition_TableAddSelectorProps,
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
    useTrackService<ServiceVoteDefinitionVoteDefinition_TableAddSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_TABLE_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceVoteDefinitionVoteDefinition_TableAddSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="VoteDefinition_Table" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorVisualElement"
          data-name="VoteDefinition_Table"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceVoteDefinitionVoteDefinition_TableAddSelectorVoteDefinition_TableAddSelectorComponent
                    uniqueId={'User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableAddSelectorTable'}
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
