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
import { ServiceDashboard, ServiceDashboardQueryCustomizer, ServiceDashboardStored } from '~/services/data-api';
import type { ServiceDashboardDashboard_TableDashboard_TableComponentActionDefinitions } from './components/ServiceDashboardDashboard_TableDashboard_TableComponent';
import { ServiceDashboardDashboard_TableDashboard_TableComponent } from './components/ServiceDashboardDashboard_TableDashboard_TableComponent';

export interface ServiceDashboardDashboard_TableActionDefinitions
  extends ServiceDashboardDashboard_TableDashboard_TableComponentActionDefinitions {}

export interface ServiceDashboardDashboard_TableProps {
  refreshCounter: number;
  actions: ServiceDashboardDashboard_TableActionDefinitions;
}

// XMIID: User/(esm/_3NM1IIyNEe2VSOmaAz6G9Q)/TransferObjectTablePageContainer
// Name: service::Dashboard::Dashboard_Table
export default function ServiceDashboardDashboard_Table(props: ServiceDashboardDashboard_TableProps) {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { refreshCounter, actions } = props;
  const { locale: l10nLocale } = useL10N();

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card id="User/(esm/_3NM1IIyNEe2VSOmaAz6G9Q)/TransferObjectTableVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_3NM1IIyNEe2VSOmaAz6G9Q)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceDashboardDashboard_TableDashboard_TableComponent
                    uniqueId={'User/(esm/_3NM1IIyNEe2VSOmaAz6G9Q)/TransferObjectTableTable'}
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
