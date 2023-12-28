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
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import {
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceYesNoVoteDefinitionStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableYesNoVoteDefinition_TableComponentActionDefinitions } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableYesNoVoteDefinition_TableComponent';
import { ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableYesNoVoteDefinition_TableComponent } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableYesNoVoteDefinition_TableComponent';

export const SERVICE_YES_NO_VOTE_DEFINITION_YES_NO_VOTE_DEFINITION_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableContainerHook';
export type ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableContainerHook =
  () => ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableActionDefinitions;

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableActionDefinitions
  extends ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableYesNoVoteDefinition_TableComponentActionDefinitions {}

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableProps {
  refreshCounter: number;
  actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableActionDefinitions;
}

// XMIID: User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTablePageContainer
// Name: service::YesNoVoteDefinition::YesNoVoteDefinition_Table
export default function ServiceYesNoVoteDefinitionYesNoVoteDefinition_Table(
  props: ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableProps,
) {
  // Container props
  const { refreshCounter, actions: pageActions } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } =
    useTrackService<ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_YES_NO_VOTE_DEFINITION_YES_NO_VOTE_DEFINITION_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card id="User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableYesNoVoteDefinition_TableComponent
                    uniqueId={'User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableTable'}
                    actions={actions}
                    refreshCounter={refreshCounter}
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
