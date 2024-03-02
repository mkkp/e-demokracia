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
import { ServiceCounty, ServiceCountyQueryCustomizer, ServiceCountyStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceIssueIssue_View_EditOtherAreaCountySetSelectorCountySetSelectorComponentActionDefinitions } from './components/ServiceIssueIssue_View_EditOtherAreaCountySetSelectorCountySetSelectorComponent';
import { ServiceIssueIssue_View_EditOtherAreaCountySetSelectorCountySetSelectorComponent } from './components/ServiceIssueIssue_View_EditOtherAreaCountySetSelectorCountySetSelectorComponent';

export const SERVICE_ISSUE_ISSUE_VIEW_EDIT_OTHER_AREA_COUNTY_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_ISSUE_VIEW_EDIT_OTHER_AREA_COUNTY_SET_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceIssueIssue_View_EditOtherAreaCountySetSelectorContainerHook =
  () => ServiceIssueIssue_View_EditOtherAreaCountySetSelectorActionDefinitions;

export interface ServiceIssueIssue_View_EditOtherAreaCountySetSelectorActionDefinitions
  extends ServiceIssueIssue_View_EditOtherAreaCountySetSelectorCountySetSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceIssueIssue_View_EditOtherAreaCountySetSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceIssueIssue_View_EditOtherAreaCountySetSelectorActionDefinitions;
  selectionDiff: ServiceCountyStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceCountyStored[]>>;
  alreadySelected: ServiceCountyStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_pPQxkdvUEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageContainer
// Name: service::Issue::Issue_View_Edit::other::area::county::SetSelector
export default function ServiceIssueIssue_View_EditOtherAreaCountySetSelector(
  props: ServiceIssueIssue_View_EditOtherAreaCountySetSelectorProps,
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
    useTrackService<ServiceIssueIssue_View_EditOtherAreaCountySetSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_VIEW_EDIT_OTHER_AREA_COUNTY_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceIssueIssue_View_EditOtherAreaCountySetSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="county" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_pPQxkdvUEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorVisualElement"
          data-name="county"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_pPQxkdvUEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceIssueIssue_View_EditOtherAreaCountySetSelectorCountySetSelectorComponent
                    uniqueId={'User/(esm/_pPQxkdvUEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorTable'}
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
