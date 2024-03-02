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
import { ServiceIssue, ServiceIssueQueryCustomizer, ServiceIssueStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceIssueIssue_TableAddSelectorIssue_TableAddSelectorComponentActionDefinitions } from './components/ServiceIssueIssue_TableAddSelectorIssue_TableAddSelectorComponent';
import { ServiceIssueIssue_TableAddSelectorIssue_TableAddSelectorComponent } from './components/ServiceIssueIssue_TableAddSelectorIssue_TableAddSelectorComponent';

export const SERVICE_ISSUE_ISSUE_TABLE_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_ISSUE_TABLE_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceIssueIssue_TableAddSelectorContainerHook = () => ServiceIssueIssue_TableAddSelectorActionDefinitions;

export interface ServiceIssueIssue_TableAddSelectorActionDefinitions
  extends ServiceIssueIssue_TableAddSelectorIssue_TableAddSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceIssueIssue_TableAddSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceIssueIssue_TableAddSelectorActionDefinitions;
  selectionDiff: ServiceIssueStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceIssueStored[]>>;
  alreadySelected: ServiceIssueStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_qCtwUGksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorPageContainer
// Name: service::Issue::Issue_Table::AddSelector
export default function ServiceIssueIssue_TableAddSelector(props: ServiceIssueIssue_TableAddSelectorProps) {
  // Container props
  const {
    refreshCounter,
    isLoading,
    isDraft,
    actions: pageActions,
    selectionDiff,
    setSelectionDiff,
    alreadySelected,
  } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceIssueIssue_TableAddSelectorContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_TABLE_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceIssueIssue_TableAddSelectorActionDefinitions = customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="Issue_Table" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_qCtwUGksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorVisualElement"
          data-name="Issue_Table"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_qCtwUGksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceIssueIssue_TableAddSelectorIssue_TableAddSelectorComponent
                    uniqueId={'User/(esm/_qCtwUGksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorTable'}
                    actions={actions}
                    selectionDiff={selectionDiff}
                    setSelectionDiff={setSelectionDiff}
                    alreadySelected={alreadySelected}
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
