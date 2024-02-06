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
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import {
  ServiceCreateIssueInput,
  ServiceCreateIssueInputQueryCustomizer,
  ServiceCreateIssueInputStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceCreateIssueInputCreateIssueInput_TableCreateIssueInput_TableComponentActionDefinitions } from './components/ServiceCreateIssueInputCreateIssueInput_TableCreateIssueInput_TableComponent';
import { ServiceCreateIssueInputCreateIssueInput_TableCreateIssueInput_TableComponent } from './components/ServiceCreateIssueInputCreateIssueInput_TableCreateIssueInput_TableComponent';

export const SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_TABLE_CONTAINER_ACTIONS_HOOK';
export type ServiceCreateIssueInputCreateIssueInput_TableContainerHook =
  () => ServiceCreateIssueInputCreateIssueInput_TableActionDefinitions;

export interface ServiceCreateIssueInputCreateIssueInput_TableActionDefinitions
  extends ServiceCreateIssueInputCreateIssueInput_TableCreateIssueInput_TableComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceCreateIssueInputCreateIssueInput_TableProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceCreateIssueInputCreateIssueInput_TableActionDefinitions;

  isDraft?: boolean;
}

// XMIID: User/(esm/_oCuj8IeIEe2kLcMqsIbMgQ)/TransferObjectTablePageContainer
// Name: service::CreateIssueInput::CreateIssueInput_Table
export default function ServiceCreateIssueInputCreateIssueInput_Table(
  props: ServiceCreateIssueInputCreateIssueInput_TableProps,
) {
  // Container props
  const { refreshCounter, isLoading, isDraft, actions: pageActions } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceCreateIssueInputCreateIssueInput_TableContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceCreateIssueInputCreateIssueInput_TableActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="CreateIssueInput_Table" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_oCuj8IeIEe2kLcMqsIbMgQ)/TransferObjectTableVisualElement"
          data-name="CreateIssueInput_Table"
        >
          <CardContent>
            <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_oCuj8IeIEe2kLcMqsIbMgQ)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceCreateIssueInputCreateIssueInput_TableCreateIssueInput_TableComponent
                    uniqueId={'User/(esm/_oCuj8IeIEe2kLcMqsIbMgQ)/TransferObjectTableTable'}
                    actions={actions}
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
