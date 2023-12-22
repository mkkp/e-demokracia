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
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TableSelectAnswerVoteSelection_TableComponentActionDefinitions } from './components/ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TableSelectAnswerVoteSelection_TableComponent';
import { ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TableSelectAnswerVoteSelection_TableComponent } from './components/ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TableSelectAnswerVoteSelection_TableComponent';

export interface ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TableActionDefinitions
  extends ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TableSelectAnswerVoteSelection_TableComponentActionDefinitions {}

export interface ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TableProps {
  refreshCounter: number;
  actions: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TableActionDefinitions;
}

// XMIID: User/(esm/_pSMpMFtqEe6Mx9dH3yj5gQ)/TransferObjectTablePageContainer
// Name: service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_Table
export default function ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_Table(
  props: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TableProps,
) {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { refreshCounter, actions } = props;
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card id="User/(esm/_pSMpMFtqEe6Mx9dH3yj5gQ)/TransferObjectTableVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_pSMpMFtqEe6Mx9dH3yj5gQ)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TableSelectAnswerVoteSelection_TableComponent
                    uniqueId={'User/(esm/_pSMpMFtqEe6Mx9dH3yj5gQ)/TransferObjectTableTable'}
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
