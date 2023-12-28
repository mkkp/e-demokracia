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
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import { ServiceIssue, ServiceIssueQueryCustomizer, ServiceIssueStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceIssueIssue_TableIssue_TableComponentActionDefinitions } from './components/ServiceIssueIssue_TableIssue_TableComponent';
import { ServiceIssueIssue_TableIssue_TableComponent } from './components/ServiceIssueIssue_TableIssue_TableComponent';

export const SERVICE_ISSUE_ISSUE_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY = 'ServiceIssueIssue_TableContainerHook';
export type ServiceIssueIssue_TableContainerHook = () => ServiceIssueIssue_TableActionDefinitions;

export interface ServiceIssueIssue_TableActionDefinitions
  extends ServiceIssueIssue_TableIssue_TableComponentActionDefinitions {}

export interface ServiceIssueIssue_TableProps {
  refreshCounter: number;
  actions: ServiceIssueIssue_TableActionDefinitions;
}

// XMIID: User/(esm/_qCtwUGksEe25ONJ3V89cVA)/TransferObjectTablePageContainer
// Name: service::Issue::Issue_Table
export default function ServiceIssueIssue_Table(props: ServiceIssueIssue_TableProps) {
  // Container props
  const { refreshCounter, actions: pageActions } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceIssueIssue_TableContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceIssueIssue_TableActionDefinitions = customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card id="User/(esm/_qCtwUGksEe25ONJ3V89cVA)/TransferObjectTableVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_qCtwUGksEe25ONJ3V89cVA)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceIssueIssue_TableIssue_TableComponent
                    uniqueId={'User/(esm/_qCtwUGksEe25ONJ3V89cVA)/TransferObjectTableTable'}
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
