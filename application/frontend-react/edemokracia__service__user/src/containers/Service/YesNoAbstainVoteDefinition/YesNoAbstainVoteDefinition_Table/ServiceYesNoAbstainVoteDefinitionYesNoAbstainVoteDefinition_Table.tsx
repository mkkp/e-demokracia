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
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableYesNoAbstainVoteDefinition_TableComponentActionDefinitions } from './components/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableYesNoAbstainVoteDefinition_TableComponent';
import { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableYesNoAbstainVoteDefinition_TableComponent } from './components/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableYesNoAbstainVoteDefinition_TableComponent';

export const SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_YES_NO_ABSTAIN_VOTE_DEFINITION_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_YES_NO_ABSTAIN_VOTE_DEFINITION_TABLE_CONTAINER_ACTIONS_HOOK';
export type ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableContainerHook =
  () => ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableActionDefinitions;

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableActionDefinitions
  extends ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableYesNoAbstainVoteDefinition_TableComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableActionDefinitions;

  isDraft?: boolean;
}

// XMIID: User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTablePageContainer
// Name: service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_Table
export default function ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_Table(
  props: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableProps,
) {
  // Container props
  const { refreshCounter, isLoading, isDraft, actions: pageActions } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } =
    useTrackService<ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_YES_NO_ABSTAIN_VOTE_DEFINITION_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="YesNoAbstainVoteDefinition_Table" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableVisualElement"
          data-name="YesNoAbstainVoteDefinition_Table"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableYesNoAbstainVoteDefinition_TableComponent
                    uniqueId={'User/(esm/_-a9bgH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable'}
                    actions={actions}
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
