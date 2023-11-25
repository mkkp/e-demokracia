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
import { LoadingButton } from '@mui/lab';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { clsx } from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useL10N } from '~/l10n/l10n-context';
import { MdiIcon, DropdownButton, useJudoNavigation } from '~/components';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import {
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceYesNoVoteDefinitionStored,
} from '~/services/data-api';
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableYesNoVoteDefinition_TableComponentActionDefinitions } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableYesNoVoteDefinition_TableComponent';
import { ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableYesNoVoteDefinition_TableComponent } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableYesNoVoteDefinition_TableComponent';

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableActionDefinitions
  extends ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableYesNoVoteDefinition_TableComponentActionDefinitions {}

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableProps {
  refreshCounter: number;
  actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableActionDefinitions;
}

// XMIID: User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTablePageContainer
// Name: service::YesNoVoteDefinition::YesNoVoteDefinition_Table
export default function ServiceYesNoVoteDefinitionYesNoVoteDefinition_Table(
  props: ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableProps,
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
                id="User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableTable"
                container
                direction="column"
                alignItems="stretch"
                justifyContent="flex-start"
              >
                <ServiceYesNoVoteDefinitionYesNoVoteDefinition_TableYesNoVoteDefinition_TableComponent
                  uniqueId={'User/(esm/_-Zy94H4XEe2cB7_PsKXsHQ)/TransferObjectTableTable'}
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
