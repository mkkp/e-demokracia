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
import { ServiceSimpleVote, ServiceSimpleVoteQueryCustomizer, ServiceSimpleVoteStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceSimpleVoteSimpleVote_TableAddSelectorSimpleVote_TableAddSelectorComponentActionDefinitions } from './components/ServiceSimpleVoteSimpleVote_TableAddSelectorSimpleVote_TableAddSelectorComponent';
import { ServiceSimpleVoteSimpleVote_TableAddSelectorSimpleVote_TableAddSelectorComponent } from './components/ServiceSimpleVoteSimpleVote_TableAddSelectorSimpleVote_TableAddSelectorComponent';

export const SERVICE_SIMPLE_VOTE_SIMPLE_VOTE_TABLE_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_SIMPLE_VOTE_SIMPLE_VOTE_TABLE_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceSimpleVoteSimpleVote_TableAddSelectorContainerHook =
  () => ServiceSimpleVoteSimpleVote_TableAddSelectorActionDefinitions;

export interface ServiceSimpleVoteSimpleVote_TableAddSelectorActionDefinitions
  extends ServiceSimpleVoteSimpleVote_TableAddSelectorSimpleVote_TableAddSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceSimpleVoteSimpleVote_TableAddSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceSimpleVoteSimpleVote_TableAddSelectorActionDefinitions;
  selectionDiff: ServiceSimpleVoteStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceSimpleVoteStored[]>>;
  alreadySelected: ServiceSimpleVoteStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorPageContainer
// Name: service::SimpleVote::SimpleVote_Table::AddSelector
export default function ServiceSimpleVoteSimpleVote_TableAddSelector(
  props: ServiceSimpleVoteSimpleVote_TableAddSelectorProps,
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
  const { service: customContainerHook } = useTrackService<ServiceSimpleVoteSimpleVote_TableAddSelectorContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_SIMPLE_VOTE_SIMPLE_VOTE_TABLE_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceSimpleVoteSimpleVote_TableAddSelectorActionDefinitions = customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="SimpleVote_Table" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorVisualElement"
          data-name="SimpleVote_Table"
        >
          <CardContent>
            <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceSimpleVoteSimpleVote_TableAddSelectorSimpleVote_TableAddSelectorComponent
                    uniqueId={'User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorTable'}
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
