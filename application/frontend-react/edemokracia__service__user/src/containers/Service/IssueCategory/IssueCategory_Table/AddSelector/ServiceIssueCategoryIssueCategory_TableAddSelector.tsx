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
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceIssueCategoryIssueCategory_TableAddSelectorIssueCategory_TableAddSelectorComponentActionDefinitions } from './components/ServiceIssueCategoryIssueCategory_TableAddSelectorIssueCategory_TableAddSelectorComponent';
import { ServiceIssueCategoryIssueCategory_TableAddSelectorIssueCategory_TableAddSelectorComponent } from './components/ServiceIssueCategoryIssueCategory_TableAddSelectorIssueCategory_TableAddSelectorComponent';

export const SERVICE_ISSUE_CATEGORY_ISSUE_CATEGORY_TABLE_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_CATEGORY_ISSUE_CATEGORY_TABLE_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceIssueCategoryIssueCategory_TableAddSelectorContainerHook =
  () => ServiceIssueCategoryIssueCategory_TableAddSelectorActionDefinitions;

export interface ServiceIssueCategoryIssueCategory_TableAddSelectorActionDefinitions
  extends ServiceIssueCategoryIssueCategory_TableAddSelectorIssueCategory_TableAddSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceIssueCategoryIssueCategory_TableAddSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceIssueCategoryIssueCategory_TableAddSelectorActionDefinitions;
  selectionDiff: ServiceIssueCategoryStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceIssueCategoryStored[]>>;
  alreadySelected: ServiceIssueCategoryStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorPageContainer
// Name: service::IssueCategory::IssueCategory_Table::AddSelector
export default function ServiceIssueCategoryIssueCategory_TableAddSelector(
  props: ServiceIssueCategoryIssueCategory_TableAddSelectorProps,
) {
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
  const { service: customContainerHook } =
    useTrackService<ServiceIssueCategoryIssueCategory_TableAddSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_ISSUE_CATEGORY_ISSUE_CATEGORY_TABLE_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceIssueCategoryIssueCategory_TableAddSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="IssueCategory_Table" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorVisualElement"
          data-name="IssueCategory_Table"
        >
          <CardContent>
            <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceIssueCategoryIssueCategory_TableAddSelectorIssueCategory_TableAddSelectorComponent
                    uniqueId={'User/(esm/_qJVVsGksEe25ONJ3V89cVA)/TransferObjectTableAddSelectorTable'}
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
