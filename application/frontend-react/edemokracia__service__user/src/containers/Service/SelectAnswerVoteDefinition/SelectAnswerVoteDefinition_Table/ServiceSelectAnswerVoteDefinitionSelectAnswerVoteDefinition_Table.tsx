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
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableSelectAnswerVoteDefinition_TableComponentActionDefinitions } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableSelectAnswerVoteDefinition_TableComponent';
import { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableSelectAnswerVoteDefinition_TableComponent } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableSelectAnswerVoteDefinition_TableComponent';

export const SERVICE_SELECT_ANSWER_VOTE_DEFINITION_SELECT_ANSWER_VOTE_DEFINITION_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_SELECT_ANSWER_VOTE_DEFINITION_SELECT_ANSWER_VOTE_DEFINITION_TABLE_CONTAINER_ACTIONS_HOOK';
export type ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableContainerHook =
  () => ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableActionDefinitions;

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableActionDefinitions
  extends ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableSelectAnswerVoteDefinition_TableComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableActionDefinitions;

  isDraft?: boolean;
}

// XMIID: User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTablePageContainer
// Name: service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_Table
export default function ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_Table(
  props: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableProps,
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
    useTrackService<ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_SELECT_ANSWER_VOTE_DEFINITION_SELECT_ANSWER_VOTE_DEFINITION_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="SelectAnswerVoteDefinition_Table" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableVisualElement"
          data-name="SelectAnswerVoteDefinition_Table"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableSelectAnswerVoteDefinition_TableComponent
                    uniqueId={'User/(esm/_-cUGYH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable'}
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
