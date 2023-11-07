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
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
} from '~/services/data-api';
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

  return (
    <Grid container spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
      <Grid item xs={12} sm={12}>
        <Card>
          <CardContent>
            <Grid item xs={12} sm={12}>
              <Grid
                id="User/(esm/_pSMpMFtqEe6Mx9dH3yj5gQ)/TransferObjectTableTable"
                container
                direction="column"
                alignItems="stretch"
                justifyContent="flex-start"
              >
                <ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_TableSelectAnswerVoteSelection_TableComponent
                  uniqueId={'TMP'}
                  actions={actions}
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
