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
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import { ServiceSimpleVote, ServiceSimpleVoteQueryCustomizer, ServiceSimpleVoteStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceSimpleVoteSimpleVote_TableAddSelectorSimpleVote_TableAddSelectorComponentActionDefinitions } from './components/ServiceSimpleVoteSimpleVote_TableAddSelectorSimpleVote_TableAddSelectorComponent';
import { ServiceSimpleVoteSimpleVote_TableAddSelectorSimpleVote_TableAddSelectorComponent } from './components/ServiceSimpleVoteSimpleVote_TableAddSelectorSimpleVote_TableAddSelectorComponent';

export interface ServiceSimpleVoteSimpleVote_TableAddSelectorActionDefinitions
  extends ServiceSimpleVoteSimpleVote_TableAddSelectorSimpleVote_TableAddSelectorComponentActionDefinitions {}

export interface ServiceSimpleVoteSimpleVote_TableAddSelectorProps {
  refreshCounter: number;
  actions: ServiceSimpleVoteSimpleVote_TableAddSelectorActionDefinitions;
  selectionDiff: ServiceSimpleVoteStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceSimpleVoteStored[]>>;
  alreadySelected: ServiceSimpleVoteStored[];
}

// XMIID: User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorPageContainer
// Name: service::SimpleVote::SimpleVote_Table::AddSelector
export default function ServiceSimpleVoteSimpleVote_TableAddSelector(
  props: ServiceSimpleVoteSimpleVote_TableAddSelectorProps,
) {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { refreshCounter, actions, selectionDiff, setSelectionDiff, alreadySelected } = props;
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card id="User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
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
