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
import { CloseDebateInput, CloseDebateInputQueryCustomizer, CloseDebateInputStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { CloseDebateInputCloseDebateInput_TableCloseDebateInput_TableComponentActionDefinitions } from './components/CloseDebateInputCloseDebateInput_TableCloseDebateInput_TableComponent';
import { CloseDebateInputCloseDebateInput_TableCloseDebateInput_TableComponent } from './components/CloseDebateInputCloseDebateInput_TableCloseDebateInput_TableComponent';

export const CLOSE_DEBATE_INPUT_CLOSE_DEBATE_INPUT_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'CLOSE_DEBATE_INPUT_CLOSE_DEBATE_INPUT_TABLE_CONTAINER_ACTIONS_HOOK';
export type CloseDebateInputCloseDebateInput_TableContainerHook =
  () => CloseDebateInputCloseDebateInput_TableActionDefinitions;

export interface CloseDebateInputCloseDebateInput_TableActionDefinitions
  extends CloseDebateInputCloseDebateInput_TableCloseDebateInput_TableComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface CloseDebateInputCloseDebateInput_TableProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: CloseDebateInputCloseDebateInput_TableActionDefinitions;

  isDraft?: boolean;
}

// XMIID: User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTablePageContainer
// Name: CloseDebateInput::CloseDebateInput_Table
export default function CloseDebateInputCloseDebateInput_Table(props: CloseDebateInputCloseDebateInput_TableProps) {
  // Container props
  const { refreshCounter, isLoading, isDraft, actions: pageActions } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<CloseDebateInputCloseDebateInput_TableContainerHook>(
    `(${OBJECTCLASS}=${CLOSE_DEBATE_INPUT_CLOSE_DEBATE_INPUT_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: CloseDebateInputCloseDebateInput_TableActionDefinitions = customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="CloseDebateInput_Table" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableVisualElement"
          data-name="CloseDebateInput_Table"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <CloseDebateInputCloseDebateInput_TableCloseDebateInput_TableComponent
                    uniqueId={'User/(esm/_NHAZEG6JEe2wNaja8kBvcQ)/TransferObjectTableTable'}
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
