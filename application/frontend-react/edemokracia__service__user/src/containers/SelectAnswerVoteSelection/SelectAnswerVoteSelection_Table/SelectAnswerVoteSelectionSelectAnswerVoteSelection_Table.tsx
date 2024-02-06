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
import {
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableSelectAnswerVoteSelection_TableComponentActionDefinitions } from './components/SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableSelectAnswerVoteSelection_TableComponent';
import { SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableSelectAnswerVoteSelection_TableComponent } from './components/SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableSelectAnswerVoteSelection_TableComponent';

export const SELECT_ANSWER_VOTE_SELECTION_SELECT_ANSWER_VOTE_SELECTION_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SELECT_ANSWER_VOTE_SELECTION_SELECT_ANSWER_VOTE_SELECTION_TABLE_CONTAINER_ACTIONS_HOOK';
export type SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableContainerHook =
  () => SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableActionDefinitions;

export interface SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableActionDefinitions
  extends SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableSelectAnswerVoteSelection_TableComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableActionDefinitions;

  isDraft?: boolean;
}

// XMIID: User/(esm/_Xwy9EG6bEe2wNaja8kBvcQ)/TransferObjectTablePageContainer
// Name: SelectAnswerVoteSelection::SelectAnswerVoteSelection_Table
export default function SelectAnswerVoteSelectionSelectAnswerVoteSelection_Table(
  props: SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableProps,
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
    useTrackService<SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableContainerHook>(
      `(${OBJECTCLASS}=${SELECT_ANSWER_VOTE_SELECTION_SELECT_ANSWER_VOTE_SELECTION_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="SelectAnswerVoteSelection_Table" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_Xwy9EG6bEe2wNaja8kBvcQ)/TransferObjectTableVisualElement"
          data-name="SelectAnswerVoteSelection_Table"
        >
          <CardContent>
            <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_Xwy9EG6bEe2wNaja8kBvcQ)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <SelectAnswerVoteSelectionSelectAnswerVoteSelection_TableSelectAnswerVoteSelection_TableComponent
                    uniqueId={'User/(esm/_Xwy9EG6bEe2wNaja8kBvcQ)/TransferObjectTableTable'}
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
