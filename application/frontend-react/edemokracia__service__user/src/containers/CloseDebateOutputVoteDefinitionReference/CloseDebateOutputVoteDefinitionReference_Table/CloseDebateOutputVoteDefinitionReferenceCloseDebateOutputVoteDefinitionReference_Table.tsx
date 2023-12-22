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
import {
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
  CloseDebateOutputVoteDefinitionReferenceStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableCloseDebateOutputVoteDefinitionReference_TableComponentActionDefinitions } from './components/CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableCloseDebateOutputVoteDefinitionReference_TableComponent';
import { CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableCloseDebateOutputVoteDefinitionReference_TableComponent } from './components/CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableCloseDebateOutputVoteDefinitionReference_TableComponent';

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableActionDefinitions
  extends CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableCloseDebateOutputVoteDefinitionReference_TableComponentActionDefinitions {}

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableProps {
  refreshCounter: number;
  actions: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableActionDefinitions;
}

// XMIID: User/(esm/_YoAHv1u1Ee6Lb6PYNSnQSA)/TransferObjectTablePageContainer
// Name: CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_Table
export default function CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Table(
  props: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableProps,
) {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { refreshCounter, actions } = props;
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card id="User/(esm/_YoAHv1u1Ee6Lb6PYNSnQSA)/TransferObjectTableVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_YoAHv1u1Ee6Lb6PYNSnQSA)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_TableCloseDebateOutputVoteDefinitionReference_TableComponent
                    uniqueId={'User/(esm/_YoAHv1u1Ee6Lb6PYNSnQSA)/TransferObjectTableTable'}
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
