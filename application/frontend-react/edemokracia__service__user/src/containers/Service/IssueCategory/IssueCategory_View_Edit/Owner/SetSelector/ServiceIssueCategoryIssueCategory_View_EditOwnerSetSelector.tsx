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
import { ServiceServiceUser, ServiceServiceUserQueryCustomizer, ServiceServiceUserStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceIssueCategoryIssueCategory_View_EditOwnerSetSelectorOwnerSetSelectorComponentActionDefinitions } from './components/ServiceIssueCategoryIssueCategory_View_EditOwnerSetSelectorOwnerSetSelectorComponent';
import { ServiceIssueCategoryIssueCategory_View_EditOwnerSetSelectorOwnerSetSelectorComponent } from './components/ServiceIssueCategoryIssueCategory_View_EditOwnerSetSelectorOwnerSetSelectorComponent';

export const SERVICE_ISSUE_CATEGORY_ISSUE_CATEGORY_VIEW_EDIT_OWNER_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_CATEGORY_ISSUE_CATEGORY_VIEW_EDIT_OWNER_SET_SELECTOR_CONTAINER_ACTIONS_HOOK';
export type ServiceIssueCategoryIssueCategory_View_EditOwnerSetSelectorContainerHook =
  () => ServiceIssueCategoryIssueCategory_View_EditOwnerSetSelectorActionDefinitions;

export interface ServiceIssueCategoryIssueCategory_View_EditOwnerSetSelectorActionDefinitions
  extends ServiceIssueCategoryIssueCategory_View_EditOwnerSetSelectorOwnerSetSelectorComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceIssueCategoryIssueCategory_View_EditOwnerSetSelectorProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceIssueCategoryIssueCategory_View_EditOwnerSetSelectorActionDefinitions;
  selectionDiff: ServiceServiceUserStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceServiceUserStored[]>>;
  alreadySelected: ServiceServiceUserStored[];
  isDraft?: boolean;
}

// XMIID: User/(esm/_8sinwIdgEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorPageContainer
// Name: service::IssueCategory::IssueCategory_View_Edit::owner::SetSelector
export default function ServiceIssueCategoryIssueCategory_View_EditOwnerSetSelector(
  props: ServiceIssueCategoryIssueCategory_View_EditOwnerSetSelectorProps,
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
    useTrackService<ServiceIssueCategoryIssueCategory_View_EditOwnerSetSelectorContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_ISSUE_CATEGORY_ISSUE_CATEGORY_VIEW_EDIT_OWNER_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceIssueCategoryIssueCategory_View_EditOwnerSetSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="owner" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_8sinwIdgEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorVisualElement"
          data-name="owner"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_8sinwIdgEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceIssueCategoryIssueCategory_View_EditOwnerSetSelectorOwnerSetSelectorComponent
                    uniqueId={'User/(esm/_8sinwIdgEe2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorTable'}
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
