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
import {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceRatingVoteDefinitionStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceRatingVoteDefinitionRatingVoteDefinition_TableRatingVoteDefinition_TableComponentActionDefinitions } from './components/ServiceRatingVoteDefinitionRatingVoteDefinition_TableRatingVoteDefinition_TableComponent';
import { ServiceRatingVoteDefinitionRatingVoteDefinition_TableRatingVoteDefinition_TableComponent } from './components/ServiceRatingVoteDefinitionRatingVoteDefinition_TableRatingVoteDefinition_TableComponent';

export const SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_TABLE_CONTAINER_ACTIONS_HOOK';
export type ServiceRatingVoteDefinitionRatingVoteDefinition_TableContainerHook =
  () => ServiceRatingVoteDefinitionRatingVoteDefinition_TableActionDefinitions;

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_TableActionDefinitions
  extends ServiceRatingVoteDefinitionRatingVoteDefinition_TableRatingVoteDefinition_TableComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_TableProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceRatingVoteDefinitionRatingVoteDefinition_TableActionDefinitions;

  isDraft?: boolean;
}

// XMIID: User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTablePageContainer
// Name: service::RatingVoteDefinition::RatingVoteDefinition_Table
export default function ServiceRatingVoteDefinitionRatingVoteDefinition_Table(
  props: ServiceRatingVoteDefinitionRatingVoteDefinition_TableProps,
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
    useTrackService<ServiceRatingVoteDefinitionRatingVoteDefinition_TableContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceRatingVoteDefinitionRatingVoteDefinition_TableActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="RatingVoteDefinition_Table" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTableVisualElement"
          data-name="RatingVoteDefinition_Table"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceRatingVoteDefinitionRatingVoteDefinition_TableRatingVoteDefinition_TableComponent
                    uniqueId={'User/(esm/_-dsmcH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable'}
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
