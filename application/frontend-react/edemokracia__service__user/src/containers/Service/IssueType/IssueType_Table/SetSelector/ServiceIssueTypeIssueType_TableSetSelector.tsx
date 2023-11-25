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
import { ServiceIssueType, ServiceIssueTypeQueryCustomizer, ServiceIssueTypeStored } from '~/services/data-api';
import type { ServiceIssueTypeIssueType_TableSetSelectorIssueType_TableSetSelectorComponentActionDefinitions } from './components/ServiceIssueTypeIssueType_TableSetSelectorIssueType_TableSetSelectorComponent';
import { ServiceIssueTypeIssueType_TableSetSelectorIssueType_TableSetSelectorComponent } from './components/ServiceIssueTypeIssueType_TableSetSelectorIssueType_TableSetSelectorComponent';

export interface ServiceIssueTypeIssueType_TableSetSelectorActionDefinitions
  extends ServiceIssueTypeIssueType_TableSetSelectorIssueType_TableSetSelectorComponentActionDefinitions {}

export interface ServiceIssueTypeIssueType_TableSetSelectorProps {
  refreshCounter: number;
  actions: ServiceIssueTypeIssueType_TableSetSelectorActionDefinitions;
  selectionDiff: ServiceIssueTypeStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceIssueTypeStored[]>>;
  alreadySelected: ServiceIssueTypeStored[];
}

// XMIID: User/(esm/_J4eloNu4Ee2Bgcx6em3jZg)/TransferObjectTableSetSelectorPageContainer
// Name: service::IssueType::IssueType_Table::SetSelector
export default function ServiceIssueTypeIssueType_TableSetSelector(
  props: ServiceIssueTypeIssueType_TableSetSelectorProps,
) {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { refreshCounter, actions, selectionDiff, setSelectionDiff, alreadySelected } = props;
  const { locale: l10nLocale } = useL10N();

  return (
    <Grid container spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
      <Grid item xs={12} sm={12}>
        <Card>
          <CardContent>
            <Grid item xs={12} sm={12}>
              <Grid
                id="User/(esm/_J4eloNu4Ee2Bgcx6em3jZg)/TransferObjectTableSetSelectorTable"
                container
                direction="column"
                alignItems="stretch"
                justifyContent="flex-start"
              >
                <ServiceIssueTypeIssueType_TableSetSelectorIssueType_TableSetSelectorComponent
                  uniqueId={'User/(esm/_J4eloNu4Ee2Bgcx6em3jZg)/TransferObjectTableSetSelectorTable'}
                  actions={actions}
                  selectionDiff={selectionDiff}
                  setSelectionDiff={setSelectionDiff}
                  alreadySelected={alreadySelected}
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
