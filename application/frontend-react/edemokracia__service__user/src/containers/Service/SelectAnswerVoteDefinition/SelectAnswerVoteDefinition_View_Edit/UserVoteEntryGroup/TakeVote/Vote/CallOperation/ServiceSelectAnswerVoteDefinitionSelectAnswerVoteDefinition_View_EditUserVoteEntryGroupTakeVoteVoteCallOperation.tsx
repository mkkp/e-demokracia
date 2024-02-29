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
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationVoteCallOperationSelectorComponentActionDefinitions } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationVoteCallOperationSelectorComponent';
import { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationVoteCallOperationSelectorComponent } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationVoteCallOperationSelectorComponent';

export const SERVICE_SELECT_ANSWER_VOTE_DEFINITION_SELECT_ANSWER_VOTE_DEFINITION_VIEW_EDIT_USER_VOTE_ENTRY_GROUP_TAKE_VOTE_VOTE_CALL_OPERATION_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_SELECT_ANSWER_VOTE_DEFINITION_SELECT_ANSWER_VOTE_DEFINITION_VIEW_EDIT_USER_VOTE_ENTRY_GROUP_TAKE_VOTE_VOTE_CALL_OPERATION_CONTAINER_ACTIONS_HOOK';
export type ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationContainerHook =
  () => ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationActionDefinitions;

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationActionDefinitions
  extends ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationVoteCallOperationSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
  voteForSelectAnswerVoteDefinitionAction?: () => Promise<void>;
}

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationActionDefinitions;
  selectionDiff: SelectAnswerVoteSelectionStored[];
  setSelectionDiff: Dispatch<SetStateAction<SelectAnswerVoteSelectionStored[]>>;

  isDraft?: boolean;
}

// XMIID: User/(esm/_0SJy11tuEe6Mx9dH3yj5gQ)/OperationFormMappedInputCallOperationSelectorPageContainer
// Name: service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::userVoteEntryGroup::TakeVote::vote::CallOperation
export default function ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperation(
  props: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationProps,
) {
  // Container props
  const { refreshCounter, isLoading, isDraft, actions: pageActions, selectionDiff, setSelectionDiff } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } =
    useTrackService<ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_SELECT_ANSWER_VOTE_DEFINITION_SELECT_ANSWER_VOTE_DEFINITION_VIEW_EDIT_USER_VOTE_ENTRY_GROUP_TAKE_VOTE_VOTE_CALL_OPERATION_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="vote" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_0SJy11tuEe6Mx9dH3yj5gQ)/OperationFormMappedInputCallOperationSelectorVisualElement"
          data-name="vote"
        >
          <CardContent>
            <Grid container direction="column" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_0SJy11tuEe6Mx9dH3yj5gQ)/OperationFormMappedInputCallOperationSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationVoteCallOperationSelectorComponent
                    uniqueId={'User/(esm/_0SJy11tuEe6Mx9dH3yj5gQ)/OperationFormMappedInputCallOperationSelectorTable'}
                    actions={actions}
                    selectionDiff={selectionDiff}
                    setSelectionDiff={setSelectionDiff}
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
