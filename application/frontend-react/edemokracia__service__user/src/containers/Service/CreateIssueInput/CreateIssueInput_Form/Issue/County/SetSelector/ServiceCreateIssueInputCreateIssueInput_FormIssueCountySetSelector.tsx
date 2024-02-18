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
import { ServiceCounty, ServiceCountyQueryCustomizer, ServiceCountyStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceCreateIssueInputCreateIssueInput_FormIssueCountySetSelectorCountySetSelectorComponentActionDefinitions } from './components/ServiceCreateIssueInputCreateIssueInput_FormIssueCountySetSelectorCountySetSelectorComponent';
import { ServiceCreateIssueInputCreateIssueInput_FormIssueCountySetSelectorCountySetSelectorComponent } from './components/ServiceCreateIssueInputCreateIssueInput_FormIssueCountySetSelectorCountySetSelectorComponent';

export const SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_ISSUE_COUNTY_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_ISSUE_COUNTY_SET_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceCreateIssueInputCreateIssueInput_FormIssueCountySetSelectorContainerHook =
  () => ServiceCreateIssueInputCreateIssueInput_FormIssueCountySetSelectorActionDefinitions;

export interface ServiceCreateIssueInputCreateIssueInput_FormIssueCountySetSelectorActionDefinitions
  extends ServiceCreateIssueInputCreateIssueInput_FormIssueCountySetSelectorCountySetSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceCreateIssueInputCreateIssueInput_FormIssueCountySetSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceCreateIssueInputCreateIssueInput_FormIssueCountySetSelectorActionDefinitions;
  selectionDiff: ServiceCountyStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceCountyStored[]>>;
  alreadySelected: ServiceCountyStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_TXj-IdvXEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageContainer
// Name: service::CreateIssueInput::CreateIssueInput_Form::issue::county::SetSelector
export default function ServiceCreateIssueInputCreateIssueInput_FormIssueCountySetSelector(
  props: ServiceCreateIssueInputCreateIssueInput_FormIssueCountySetSelectorProps,
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
    useTrackService<ServiceCreateIssueInputCreateIssueInput_FormIssueCountySetSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_ISSUE_COUNTY_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceCreateIssueInputCreateIssueInput_FormIssueCountySetSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="county" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_TXj-IdvXEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorVisualElement"
          data-name="county"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_TXj-IdvXEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceCreateIssueInputCreateIssueInput_FormIssueCountySetSelectorCountySetSelectorComponent
                    uniqueId={'User/(esm/_TXj-IdvXEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorTable'}
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
