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
import { ServiceIssueType, ServiceIssueTypeQueryCustomizer, ServiceIssueTypeStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorIssueTypeSetSelectorComponentActionDefinitions } from './components/ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorIssueTypeSetSelectorComponent';
import { ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorIssueTypeSetSelectorComponent } from './components/ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorIssueTypeSetSelectorComponent';

export const SERVICE_ISSUE_ISSUE_VIEW_EDIT_ISSUE_ISSUE_TYPE_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_ISSUE_VIEW_EDIT_ISSUE_ISSUE_TYPE_SET_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorContainerHook =
  () => ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorActionDefinitions;

export interface ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorActionDefinitions
  extends ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorIssueTypeSetSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorActionDefinitions;
  selectionDiff: ServiceIssueTypeStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceIssueTypeStored[]>>;
  alreadySelected: ServiceIssueTypeStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_FHpVENvSEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageContainer
// Name: service::Issue::Issue_View_Edit::issue::issueType::SetSelector
export default function ServiceIssueIssue_View_EditIssueIssueTypeSetSelector(
  props: ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorProps,
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
    useTrackService<ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_VIEW_EDIT_ISSUE_ISSUE_TYPE_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="issueType" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_FHpVENvSEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorVisualElement"
          data-name="issueType"
        >
          <CardContent>
            <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_FHpVENvSEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorIssueTypeSetSelectorComponent
                    uniqueId={'User/(esm/_FHpVENvSEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorTable'}
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