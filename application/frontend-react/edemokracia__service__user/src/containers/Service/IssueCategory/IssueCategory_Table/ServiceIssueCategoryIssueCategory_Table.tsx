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
import {
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceIssueCategoryIssueCategory_TableIssueCategory_TableComponentActionDefinitions } from './components/ServiceIssueCategoryIssueCategory_TableIssueCategory_TableComponent';
import { ServiceIssueCategoryIssueCategory_TableIssueCategory_TableComponent } from './components/ServiceIssueCategoryIssueCategory_TableIssueCategory_TableComponent';

export const SERVICE_ISSUE_CATEGORY_ISSUE_CATEGORY_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_CATEGORY_ISSUE_CATEGORY_TABLE_CONTAINER_ACTIONS_HOOK';
export type ServiceIssueCategoryIssueCategory_TableContainerHook =
  () => ServiceIssueCategoryIssueCategory_TableActionDefinitions;

export interface ServiceIssueCategoryIssueCategory_TableActionDefinitions
  extends ServiceIssueCategoryIssueCategory_TableIssueCategory_TableComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceIssueCategoryIssueCategory_TableProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceIssueCategoryIssueCategory_TableActionDefinitions;

  isDraft?: boolean;
}

// XMIID: User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTablePageContainer
// Name: service::IssueCategory::IssueCategory_Table
export default function ServiceIssueCategoryIssueCategory_Table(props: ServiceIssueCategoryIssueCategory_TableProps) {
  // Container props
  const { refreshCounter, isLoading, isDraft, actions: pageActions } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceIssueCategoryIssueCategory_TableContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_CATEGORY_ISSUE_CATEGORY_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceIssueCategoryIssueCategory_TableActionDefinitions = customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="IssueCategory_Table" xs={12} sm={12} md={36.0}>
        <Card id="User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableVisualElement" data-name="IssueCategory_Table">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceIssueCategoryIssueCategory_TableIssueCategory_TableComponent
                    uniqueId={'User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableTable'}
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
