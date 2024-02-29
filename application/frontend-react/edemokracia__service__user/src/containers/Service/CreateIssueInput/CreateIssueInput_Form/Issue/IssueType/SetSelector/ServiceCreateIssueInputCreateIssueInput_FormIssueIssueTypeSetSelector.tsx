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
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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
import { ServiceIssueType, ServiceIssueTypeQueryCustomizer, ServiceIssueTypeStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorIssueTypeSetSelectorComponentActionDefinitions } from './components/ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorIssueTypeSetSelectorComponent';
import { ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorIssueTypeSetSelectorComponent } from './components/ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorIssueTypeSetSelectorComponent';

export const SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_ISSUE_ISSUE_TYPE_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_ISSUE_ISSUE_TYPE_SET_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorContainerHook =
  () => ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorActionDefinitions;

export interface ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorActionDefinitions
  extends ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorIssueTypeSetSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorActionDefinitions;
  selectionDiff: ServiceIssueTypeStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceIssueTypeStored[]>>;
  alreadySelected: ServiceIssueTypeStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_WNovANu5Ee2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageContainer
// Name: service::CreateIssueInput::CreateIssueInput_Form::issue::issueType::SetSelector
export default function ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelector(
  props: ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorProps,
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
    useTrackService<ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_ISSUE_ISSUE_TYPE_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="issueType" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_WNovANu5Ee2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorVisualElement"
          data-name="issueType"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_WNovANu5Ee2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetSelectorIssueTypeSetSelectorComponent
                    uniqueId={'User/(esm/_WNovANu5Ee2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorTable'}
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
