//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'.tsx'
// Template name: actor/src/containers/container.tsx
// Template file: actor/src/containers/container.tsx.hbs

import type { Dispatch, SetStateAction, FC } from 'react';
import { forwardRef, useEffect, useState, useCallback, useImperativeHandle } from 'react';
import { useTranslation } from 'react-i18next';
import { NumericFormat } from 'react-number-format';
import { LoadingButton } from '@mui/lab';
import { OBJECTCLASS } from '@pandino/pandino-api';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { ComponentProxy } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import { Box, Container, Grid, Button, Card, CardContent } from '@mui/material';
import type { GridFilterModel } from '@mui/x-data-grid';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { mainContainerPadding } from '~/theme';
import { DIVIDER_HEIGHT } from '~/config';
import type { Filter } from '~/components-api';
import { MdiIcon, ModeledTabs, DropdownButton, useJudoNavigation } from '~/components';
import {
  isErrorOperationFault,
  useErrorHandler,
  fileHandling,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '~/utilities';
import {
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
} from '~/services/data-api';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationVoteCallOperationSelectorComponentActionDefinitions } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationVoteCallOperationSelectorComponent';
import { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationVoteCallOperationSelectorComponent } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationVoteCallOperationSelectorComponent';

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationActionDefinitions
  extends ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationVoteCallOperationSelectorComponentActionDefinitions {}

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationProps {
  refreshCounter: number;
  actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationActionDefinitions;
  selectionDiff: SelectAnswerVoteSelectionStored[];
  setSelectionDiff: Dispatch<SetStateAction<SelectAnswerVoteSelectionStored[]>>;
}

// XMIID: User/(esm/_0SJy11tuEe6Mx9dH3yj5gQ)/OperationFormMappedInputCallOperationSelectorPageContainer
// Name: service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::userVoteEntryGroup::TakeVote::vote::CallOperation
export default function ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperation(
  props: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationProps,
) {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { refreshCounter, actions, selectionDiff, setSelectionDiff } = props;
  const { locale: l10nLocale } = useL10N();

  return (
    <Grid container spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
      <Grid item xs={12} sm={12}>
        <Card>
          <CardContent>
            <Grid item xs={12} sm={12}>
              <Grid
                id="User/(esm/_0SJy11tuEe6Mx9dH3yj5gQ)/OperationFormMappedInputCallOperationSelectorTable"
                container
                direction="column"
                alignItems="stretch"
                justifyContent="flex-start"
              >
                <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationVoteCallOperationSelectorComponent
                  uniqueId={'TMP'}
                  actions={actions}
                  selectionDiff={selectionDiff}
                  setSelectionDiff={setSelectionDiff}
                  refreshCounter={refreshCounter}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
