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
import type { ServiceIssueTypeIssueType_TableIssueType_TableComponentActionDefinitions } from './components/ServiceIssueTypeIssueType_TableIssueType_TableComponent';
import { ServiceIssueTypeIssueType_TableIssueType_TableComponent } from './components/ServiceIssueTypeIssueType_TableIssueType_TableComponent';

export interface ServiceIssueTypeIssueType_TableActionDefinitions
  extends ServiceIssueTypeIssueType_TableIssueType_TableComponentActionDefinitions {}

export interface ServiceIssueTypeIssueType_TableProps {
  refreshCounter: number;
  actions: ServiceIssueTypeIssueType_TableActionDefinitions;
}

// XMIID: User/(esm/_J4eloNu4Ee2Bgcx6em3jZg)/TransferObjectTablePageContainer
// Name: service::IssueType::IssueType_Table
export default function ServiceIssueTypeIssueType_Table(props: ServiceIssueTypeIssueType_TableProps) {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { refreshCounter, actions } = props;
  const { locale: l10nLocale } = useL10N();

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card id="User/(esm/_J4eloNu4Ee2Bgcx6em3jZg)/TransferObjectTableVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_J4eloNu4Ee2Bgcx6em3jZg)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceIssueTypeIssueType_TableIssueType_TableComponent
                    uniqueId={'User/(esm/_J4eloNu4Ee2Bgcx6em3jZg)/TransferObjectTableTable'}
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
