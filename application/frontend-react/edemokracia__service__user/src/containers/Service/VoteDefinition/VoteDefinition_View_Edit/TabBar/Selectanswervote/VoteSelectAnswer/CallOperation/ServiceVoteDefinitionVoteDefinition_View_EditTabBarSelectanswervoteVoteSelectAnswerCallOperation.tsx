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
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationVoteSelectAnswerCallOperationSelectorComponentActionDefinitions } from './components/ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationVoteSelectAnswerCallOperationSelectorComponent';
import { ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationVoteSelectAnswerCallOperationSelectorComponent } from './components/ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationVoteSelectAnswerCallOperationSelectorComponent';

export const SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_TAB_BAR_SELECTANSWERVOTE_VOTE_SELECT_ANSWER_CALL_OPERATION_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_TAB_BAR_SELECTANSWERVOTE_VOTE_SELECT_ANSWER_CALL_OPERATION_CONTAINER_ACTIONS_HOOK';
export type ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationContainerHook =
  () => ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationActionDefinitions;

export interface ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationActionDefinitions
  extends ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationVoteSelectAnswerCallOperationSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
  voteSelectAnswerForVoteDefinitionAction?: () => Promise<void>;
}

export interface ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationActionDefinitions;
  selectionDiff: SelectAnswerVoteSelectionStored[];
  setSelectionDiff: Dispatch<SetStateAction<SelectAnswerVoteSelectionStored[]>>;

  isDraft?: boolean;
}

// XMIID: User/(esm/_T6Ar0I4jEe29qs15q2b6yw)/OperationFormMappedInputCallOperationSelectorPageContainer
// Name: service::VoteDefinition::VoteDefinition_View_Edit::tabBar::selectanswervote::voteSelectAnswer::CallOperation
export default function ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperation(
  props: ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationProps,
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
    useTrackService<ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_TAB_BAR_SELECTANSWERVOTE_VOTE_SELECT_ANSWER_CALL_OPERATION_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="voteSelectAnswer" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_T6Ar0I4jEe29qs15q2b6yw)/OperationFormMappedInputCallOperationSelectorVisualElement"
          data-name="voteSelectAnswer"
        >
          <CardContent>
            <Grid container direction="column" alignItems="flex-start" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_T6Ar0I4jEe29qs15q2b6yw)/OperationFormMappedInputCallOperationSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationVoteSelectAnswerCallOperationSelectorComponent
                    uniqueId={'User/(esm/_T6Ar0I4jEe29qs15q2b6yw)/OperationFormMappedInputCallOperationSelectorTable'}
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
