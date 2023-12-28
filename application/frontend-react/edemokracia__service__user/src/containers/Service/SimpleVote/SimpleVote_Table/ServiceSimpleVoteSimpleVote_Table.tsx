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
import { ServiceSimpleVote, ServiceSimpleVoteQueryCustomizer, ServiceSimpleVoteStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceSimpleVoteSimpleVote_TableSimpleVote_TableComponentActionDefinitions } from './components/ServiceSimpleVoteSimpleVote_TableSimpleVote_TableComponent';
import { ServiceSimpleVoteSimpleVote_TableSimpleVote_TableComponent } from './components/ServiceSimpleVoteSimpleVote_TableSimpleVote_TableComponent';

export const SERVICE_SIMPLE_VOTE_SIMPLE_VOTE_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceSimpleVoteSimpleVote_TableContainerHook';
export type ServiceSimpleVoteSimpleVote_TableContainerHook = () => ServiceSimpleVoteSimpleVote_TableActionDefinitions;

export interface ServiceSimpleVoteSimpleVote_TableActionDefinitions
  extends ServiceSimpleVoteSimpleVote_TableSimpleVote_TableComponentActionDefinitions {}

export interface ServiceSimpleVoteSimpleVote_TableProps {
  refreshCounter: number;
  actions: ServiceSimpleVoteSimpleVote_TableActionDefinitions;
}

// XMIID: User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTablePageContainer
// Name: service::SimpleVote::SimpleVote_Table
export default function ServiceSimpleVoteSimpleVote_Table(props: ServiceSimpleVoteSimpleVote_TableProps) {
  // Container props
  const { refreshCounter, actions: pageActions } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceSimpleVoteSimpleVote_TableContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_SIMPLE_VOTE_SIMPLE_VOTE_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceSimpleVoteSimpleVote_TableActionDefinitions = customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card id="User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTableVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceSimpleVoteSimpleVote_TableSimpleVote_TableComponent
                    uniqueId={'User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTableTable'}
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
