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
import { ServiceIssueType, ServiceIssueTypeQueryCustomizer, ServiceIssueTypeStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceIssueTypeIssueType_TableSetSelectorIssueType_TableSetSelectorComponentActionDefinitions } from './components/ServiceIssueTypeIssueType_TableSetSelectorIssueType_TableSetSelectorComponent';
import { ServiceIssueTypeIssueType_TableSetSelectorIssueType_TableSetSelectorComponent } from './components/ServiceIssueTypeIssueType_TableSetSelectorIssueType_TableSetSelectorComponent';

export const SERVICE_ISSUE_TYPE_ISSUE_TYPE_TABLE_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueTypeIssueType_TableSetSelectorContainerHook';
export type ServiceIssueTypeIssueType_TableSetSelectorContainerHook =
  () => ServiceIssueTypeIssueType_TableSetSelectorActionDefinitions;

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
  // Container props
  const { refreshCounter, actions: pageActions, selectionDiff, setSelectionDiff, alreadySelected } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceIssueTypeIssueType_TableSetSelectorContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_TYPE_ISSUE_TYPE_TABLE_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceIssueTypeIssueType_TableSetSelectorActionDefinitions = customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card id="User/(esm/_J4eloNu4Ee2Bgcx6em3jZg)/TransferObjectTableSetSelectorVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
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
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
