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
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/services/data-api';
import type { ServiceVoteDefinitionVoteDefinition_TableVoteDefinition_TableComponentActionDefinitions } from './components/ServiceVoteDefinitionVoteDefinition_TableVoteDefinition_TableComponent';
import { ServiceVoteDefinitionVoteDefinition_TableVoteDefinition_TableComponent } from './components/ServiceVoteDefinitionVoteDefinition_TableVoteDefinition_TableComponent';

export interface ServiceVoteDefinitionVoteDefinition_TableActionDefinitions
  extends ServiceVoteDefinitionVoteDefinition_TableVoteDefinition_TableComponentActionDefinitions {}

export interface ServiceVoteDefinitionVoteDefinition_TableProps {
  refreshCounter: number;
  actions: ServiceVoteDefinitionVoteDefinition_TableActionDefinitions;
}

// XMIID: User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTablePageContainer
// Name: service::VoteDefinition::VoteDefinition_Table
export default function ServiceVoteDefinitionVoteDefinition_Table(
  props: ServiceVoteDefinitionVoteDefinition_TableProps,
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
                id="User/(esm/_-gSncH4XEe2cB7_PsKXsHQ)/TransferObjectTableTable"
                container
                direction="column"
                alignItems="stretch"
                justifyContent="flex-start"
              >
                <ServiceVoteDefinitionVoteDefinition_TableVoteDefinition_TableComponent
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
